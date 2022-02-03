// This script fetches Telegram channel preview and extracts content from it for our site.
'use strict';
const channelPreviewUrl = 'https://t.me/s/OrganicMapsApp';
const newsPath = `${__dirname}/content/news/`;

const https = require('https');
const parse = require('node-html-parser').parse;
const fs = require('fs');
const NodeHtmlMarkdown = require('node-html-markdown').NodeHtmlMarkdown;
const nhm = new NodeHtmlMarkdown();
const photoUrlRE = /url\(\'(.*?)\'/;

function downloadAsync(url, path) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, res => {
      if (res.statusCode != 200) return reject(new Error('statusCode=' + res.statusCode));
      const filePath = fs.createWriteStream(path);
      res.pipe(filePath);
      filePath.on('finish', _ => {
        filePath.close();
        console.log('Downloaded ' + path);
        resolve();
      });
    });
    request.on('error', err => reject(err));
    request.end();
  }).catch(err => console.error('Download failed: ' + err));
}

const emojiRE = /_\*\*(\u00a9|\u00ae|[\u2000-\u3300]\ufe0f?|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]\ufe0f?|\ud83e[\ud000-\udfff]|\uD83C[\uDDE6-\uDDFF]\uD83C[\uDDE6-\uDDFF])\*\*_/gi;

function toMarkdown(node, date) {
  let frontmatter = `---\ndate: "${date}"\n---\n\n`;
  // Photo-only posts do not have text, but should have an index.md file.
  if (node) {
    let content = nhm.translate(node.innerHTML);
    // We use other dots for lists.
    content = content.replaceAll('• ', '* ');
    // Telegram makes emoji bold italic.
    content = content.replaceAll(emojiRE, '$1');
    return frontmatter + content;
  }
  return frontmatter;
}

// Download Telegram channel preview html.
const request = https.get(channelPreviewUrl, response => {
  if (response.statusCode != 200) throw new Error('statusCode=' + response.statusCode);
  let chunks = [];
  response.on('data', fragments => chunks.push(fragments));
  response.on('end', _ => {
    const body = Buffer.concat(chunks);
    parseHtml(body.toString());
  });
  response.on('error', err => console.log(err));
});
request.on('error', err => console.log(err));
request.end();


function parseHtml(html) {
  const root = parse(html);

  // Skip service messages.
  const messages = root.querySelectorAll('.tgme_widget_message:not(.service_message)');
  console.log('Parsing ' + messages.length + ' Telegram posts.');
  const downloads = [];
  messages.forEach(m => {
    let photos = m.querySelectorAll('.tgme_widget_message_photo_wrap');
    let text = m.querySelector('.tgme_widget_message_text');
    let date = m.querySelector('time');
    date = date.getAttribute('datetime');

    const id = m.getAttribute('data-post').split('/').pop();
    const dir = newsPath + id;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Each message may have 0 or more photos.
    for (let i = 1; i <= photos.length; ++i) {
      let photo = photos[i - 1].getAttribute('style');
      photo = photo.match(photoUrlRE)[1];
      const ext = photo.split('.').pop();
      const fileName = `${i}.${ext}`;
      downloads.push(downloadAsync(photo, `${dir}/${fileName}`));
    }

    const markdown = toMarkdown(text, date);
    fs.writeFile(`${dir}/index.md`, markdown, err => {
      if (err) console.error(err);
    });
  });

  // Wait until all downloads are finished.
  Promise.allSettled(downloads).then(_ => {
    // Fix some old posts.
    if (fs.existsSync(newsPath + '15')) {
      fs.renameSync(newsPath + '15/1.jpg', newsPath + '14/1.jpg');
      fs.rmSync(newsPath + '15', { recursive: true, force: true });
    }
    if (fs.existsSync(newsPath + '39')) {
      fs.renameSync(newsPath + '39/1.jpg', newsPath + '38/1.jpg');
      fs.rmSync(newsPath + '39', { recursive: true, force: true });
    }
  });
}
