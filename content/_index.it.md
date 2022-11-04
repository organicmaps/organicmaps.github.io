---
title: "Organic Maps: Escursioni a piedi, in bicicletta, su sentieri e navigazione offline"
description: Mappe offline veloci e dettagliate per viaggiatori, turisti, escursionisti e ciclisti, basate su OpenStreetMap e curate con amore dai fondatori di MapsWithMe (Maps.Me).
page_template: index.html
sort_by: weight
extra:
  menu_title: Home
---

**Organic Maps** è un'applicazione gratuita di mappe offline per Android e iOS per viaggiatori, turisti, escursionisti e ciclisti, basata su dati crowd-sourced di **OpenStreetMap** e curata con amore dai fondatori di **MapsWithMe** (**Maps.Me**).

<p id='install'>

{{ badge(url='https://apps.apple.com/app/organic-maps/id1567437057', img='apple-appstore.svg', title="Installa Organic Maps dall'AppStore") }}

{{ badge(url='https://play.google.com/store/apps/details?id=app.organicmaps', img='googleplay.svg', title="Installa Organic Maps da Google Play") }}

{{ badge(url='https://f-droid.org/en/packages/app.organicmaps/', img='f-droid.svg', title="Installa Organic Maps da F-Droid") }}

{{ badge(url='https://appgallery.huawei.com/#/app/C104325611', img='huawei-appgallery.png', title="Installa Organic Maps da Huawei AppGallery") }}

{{ screenshot(src='/images/screenshots/hiking.jpg', alt='Hiking') }}
{{ screenshot(src='/images/screenshots/city.jpg', alt='City Map') }}
{{ screenshot(src='/images/screenshots/search.jpg', alt='Offline Search') }}
{{ screenshot(src='/images/screenshots/dark.jpg', alt='Navigation in dark mode') }}

## Funzionalità

Organic Maps è l'applicazione definitiva per viaggiatori, turisti, escursionisti e ciclisti:

- Mappe offline dettagliate con luoghi che non esistono su altre mappe, grazie a [OpenStreetMap](https://osm.org)
- Percorsi ciclabili, sentieri escursionistici e percorsi pedonali
- Curve di livello, profili altimetrici, picchi e pendenze
- Navigazione a piedi, in bicicletta e in auto con guida vocale, svolta per svolta
- Ricerca veloce offline sulla mappa
- Esportazione e importazione di punti di interesse nei formati KML/KMZ (GPX è [previsto](https://github.com/organicmaps/organicmaps/issues/624))
- Modalità scura per proteggere gli occhi
- I paesi e le regioni non occupano molto spazio
- Gratuito e open-source

## Perché Organic?

Organic Maps è pura e organica, fatta con amore:

- Rispetta la tua privacy
- Risparmia la batteria
- Nessun addebito imprevisto sui dati mobili

Organic Maps è priva di tracker e di altri elementi negativi:

- Nessuna pubblicità
- Nessun tracciamento
- Nessuna raccolta dati
- Nessuna chiamata a casa
- Nessuna registrazione fastidiosa
- Nessun tutorial obbligatorio
- Nessuno spam di e-mail fastidiose
- Nessuna notifica push
- Nessun crapware
- ~~Nessun pesticida~~ Puramente organico!

L'applicazione è verificata da <a href='https://reports.exodus-privacy.eu.org/en/reports/app.organicmaps/latest/'>Exodus Privacy Project</a>:
<br/>
<img src='/images/privacy/exodus.png' width='400'>

Organic Maps non richiede permessi eccessivi per spiare l'utente:

<img src='/images/privacy/om.jpg' width='400'>
<img src='/images/privacy/mm.jpg' width='400'>

Noi di Organic Maps crediamo che la privacy sia un diritto umano fondamentale:

- Organic Maps è un progetto open-source indipendente guidato dalla comunità.
- Proteggiamo la vostra privacy dagli occhi indiscreti dei Big Tech
- Resta al sicuro ovunque tu sia

Rifiuta la sorveglianza - difendi la tua libertà.


<a href="#install"><strong>Prova Organic Maps!</strong></a>

## Chi paga per l'app gratuita?

L'applicazione è gratuita per tutti. Per favore [donate](@/donate/index.md) per sostenerci!

{{ donate_buttons() }}

### I nostri sponsor

[Mythic Beasts](https://www.mythic-beasts.com/) ISP [ci offre](https://www.mythic-beasts.com/blog/2021/10/06/improving-the-world-bit-by-expensive-bit/) due server virtuali con 400 TB/mese di larghezza di banda gratuita per aiutare i nostri utenti a scaricare e aggiornare le mappe.

### Supportaci

Ci sono molti modi per sostenerci, elencati [qui](@/support-us/index.md).

## Beta

Partecipa al nostro programma beta, suggerisci funzionalità e segnala bug:

- [iOS Beta (TestFlight)](https://testflight.apple.com/join/lrKCl08I)
- [Android Beta (Firebase)](https://appdistribution.firebase.dev/i/9ec3bca5e2b47373)
- [Linux Desktop Beta (Flatpak)](https://flathub.org/apps/details/app.organicmaps.desktop)
- [Linux Desktop Beta (paketleri)](https://repology.org/project/organicmaps/versions)

## La comunità

Organic Maps è un [software open-source](https://github.com/organicmaps/organicmaps) con licenza Apache 2.0.

- Segnala bug o problemi tramite il [tracker dei problemi](https://github.com/organicmaps/organicmaps/issues) o [inviaci un email](mailto:hello@organicmaps.app).
- [Discuti](https://github.com/organicmaps/organicmaps/discussions/categories/ideas) idee o proponi richieste di funzionalità.
- Iscriviti al nostro [Canale Telegram](https://t.me/OrganicMapsApp) o allo spazio [[matrix]](https://matrix.to/#/#organicmaps:matrix.org) per ricevere aggiornamenti.
- Unisciti al nostro [Gruppo Telegram](https://t.me/OrganicMaps) per discutere con altri utenti.
- Присоединяйтесь к нашей [русскоязычной группе в Telegram](https://t.me/OrganicMapsRu) для обратной связи и помощи.
- Diğer kullanıcılarla tartışmak için [Telegram Grubumuza](https://t.me/OrganicMapsTR) katılın.
- Visita la nostra [pagina GitHub](https://github.com/organicmaps/organicmaps).
- Segui i nostri aggiornamenti su [Facebook](https://facebook.com/OrganicMaps), [Twitter](https://twitter.com/OrganicMapsApp), [Instagram](https://instagram.com/organicmaps.app/).

<button id='add' class='installButton'>
  Installa da Google Play
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
