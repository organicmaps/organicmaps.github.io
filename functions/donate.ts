// Redirects users from the default en donate page to the appropriate localized version.
interface Env {
	KV: KVNamespace;
}

// TODO: Detect if donation page already has translation in resources automatically,
// without hard-coded list
const localizedLanguages = ['ru', 'it', 'tr'];

// To parse accept-language like this:
// fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
// en-AU,en;q=0.8,be;q=0.6,ru;q=0.4,uk;q=0.2
const langCodeRegex = /[a-z]{2}/g;

// Returns user's preferred languages: ["en", "be", "ru"]
function extractLanguageList(acceptLanguage: string): string[] {
  const langs = acceptLanguage.match(langCodeRegex);
  return [...new Set(langs)];  // Filter duplicates.
}

// Should be invoked only for /donate or /donate/ routes
export const onRequest: PagesFunction<Env> = async (context) => {
  console.log('Donate handler hit url:' + context.request.url);

  const acceptLanguage = context.request.headers.get('accept-language');
  if (acceptLanguage) {
    // Is there a localized version?
    const languages = extractLanguageList(acceptLanguage);
    const filtered = localizedLanguages.filter(lang => languages.includes(lang));
    if (filtered.length) {
      const url = new URL(context.request.url);
      console.log('Old pathname: ' + url.pathname);
      url.pathname = '/' + filtered[0] + url.pathname;
      return context.env.ASSETS.fetch(url);
    }
  }
  // Return default en version.
  return context.env.ASSETS.fetch(context.request.url);
}
