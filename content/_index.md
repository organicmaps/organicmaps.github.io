---
title: "Organic Maps: Offline Hike, Bike, Trails and Navigation"
description: Fast detailed offline maps for travelers, tourists, hikers and cyclists, based on OpenStreetMap and curated with love by MapsWithMe (MapsMe) founders.

page_template: index.html
---

**Organic Maps** is an Android & iOS offline maps app
for travelers, tourists, hikers, and cyclists based on top of crowd-sourced
**OpenStreetMap** data and curated with love by **MapsWithMe** founders.

<p id='install'>

{{ badge(url='https://apps.apple.com/app/organic-maps/id1567437057', img='apple-appstore.svg', title='Install Organic Maps from the AppStore') }}

{{ badge(url='https://play.google.com/store/apps/details?id=app.organicmaps', img='googleplay.svg', title='Install Organic Maps from Google Play') }}

{{ badge(url='https://f-droid.org/en/packages/app.organicmaps/', img='f-droid.svg', title='Install Organic Maps from F-Droid') }}

{{ badge(url='https://appgallery.huawei.com/#/app/C104325611', img='huawei-appgallery.png', title='Install Organic Maps from Huawei AppGallery') }}

</p>

{{ screenshot(src='images/screenshots/hiking.jpg', alt='Hiking') }}
{{ screenshot(src='images/screenshots/prague.jpg', alt='Prague') }}
{{ screenshot(src='images/screenshots/search.jpg', alt='Offline Search') }}
{{ screenshot(src='images/screenshots/dark.jpg', alt='Navigation in dark mode') }}

## Features

Organic Maps is the ultimate companion app for travelers, tourists, hikers, and cyclists:

- Detailed offline maps with places that don't exist on other maps
- Cycling routes, hiking trails, and walking paths
- Contour lines, elevation profiles, peaks, and slopes
- Turn-by-turn walking, cycling, and car navigation with voice guidance
- Fast offline search on the map and bookmarks
- Dark Mode to protect your eyes

## Why Organic?

Organic Maps is pure and organic, made with love:

- Respects your privacy
- Saves your battery
- No unexpected mobile data charges

Organic Maps is free from trackers and other bad stuff:

- No ads
- No tracking
- No data collection
- No phoning home
- No annoying registration
- No mandatory tutorials
- No noisy email spam
- No push notifications
- No crapware
- ~~No pesticides~~

The application is verified by <a href='https://reports.exodus-privacy.eu.org/en/reports/app.organicmaps/latest/'>Exodus Privacy Project</a>:
<br/>
<img src='images/privacy/exodus.png' width='400'>

Organic Maps doesn't request excessive permissions to spy on you:

<img src='images/privacy/om.jpg' width='400'>
<img src='images/privacy/mm.jpg' width='400'>

At Organic Maps, we believe that privacy is a fundamental human right:

- Organic Maps is an indie community-driven open-source project
- We protect your privacy from Big Tech's prying eyes
- Stay safe no matter wherever you are

Reject surveillance - embrace your freedom.

[**Give Organic Maps a try!**](#install)

## Beta

Please join our beta program, suggest your features, and report bugs:

- [iOS Beta (TestFlight)](https://testflight.apple.com/join/lrKCl08I)
- [Android Beta (Firebase)](https://appdistribution.firebase.dev/i/9ec3bca5e2b47373)

## Community

Organic Maps is an [open-source software](https://github.com/organicmaps/organicmaps)
licensed under the Apache License 2.0.

- Report bugs or issues to [the issue tracker](https://github.com/organicmaps/organicmaps/issues)
- [Discuss](https://github.com/organicmaps/organicmaps/discussions/categories/ideas) ideas or propose feature requests
- Subscribe to our [Telegram Channel](https://t.me/OrganicMapsApp) for updates
- Join our [Telegram Group](https://t.me/OrganicMaps) to discuss with other users
- Присоединяйтесь к нашей [русскоязычной группе в Telegram](https://t.me/OrganicMapsRu) для обратной связи и помощи
- Visit our [GitHub page](https://github.com/organicmaps/organicmaps)
- Contact us by [email](mailto:hello@organicmaps.app)

<button id='add' class='installButton'>
  Install from Google Play
</button>

<script>
  // https://developers.google.com/web/fundamentals/app-install-banners/native
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    const add = document.getElementById('add');
    add.style.display = 'block';
    add.onclick = () => {
      e.prompt();
    }
  });
</script>
