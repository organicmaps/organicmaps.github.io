---
title: "Organic Maps: бесплатные офлайн карты и навигация"
description: Бесплатные офлайн карты для путешественников, туристов, велосипедистов и водителей на основе данных OpenStreetMap от создателей приложения MapsWithMe, позже переименованного в Maps.me
page_template: index.html
sort_by: weight
extra:
  menu_title: Главная
---

**Organic Maps** — это бесплатное Android и iOS приложение с офлайн картами и навигацией для путешественников, туристов, велосипедистов и водителей на основе данных **[OpenStreetMap](https://www.openstreetmap.org)** (**OSM**),
с открытым исходным кодом, с фокусом на приватность и безопасность пользователей, от создателей приложения **MapsWithMe**, позже переименованного в **Maps.me**.

<p id='install'>

{{ badge(url='https://apps.apple.com/app/organic-maps/id1567437057', img='apple-appstore.svg', title='Установить из AppStore') }}

{{ badge(url='https://play.google.com/store/apps/details?id=app.organicmaps', img='googleplay.svg', title='Установить из Google Play') }}

{{ badge(url='https://f-droid.org/en/packages/app.organicmaps/', img='f-droid.svg', title='Установить F-Droid') }}

{{ badge(url='https://appgallery.huawei.com/#/app/C104325611', img='huawei-appgallery.png', title='Установить из Huawei AppGallery') }}

{{ screenshot(src='/images/screenshots/hiking.jpg', alt='Пеший поход') }}
{{ screenshot(src='/images/screenshots/prague.jpg', alt='Прага') }}
{{ screenshot(src='/images/screenshots/search.jpg', alt='Офлайн поиск') }}
{{ screenshot(src='/images/screenshots/dark.jpg', alt='Навигация в ночном режиме') }}

## Возможности

- Детальные карты всего мира с местами, которых нет в других картах
- Велосипедные маршруты, пешеходные тропы и пешеходные дорожки
- Авто, вело и пеший навигатор с голосовыми подсказками
- Быстрый поиск интересных мест на карте без подключения к Интернету
- Экспорт и импорт закладок в форматах KML/KMZ (GPX [планируется](https://github.com/organicmaps/organicmaps/issues/624))

## Почему Organic?

Organic Maps - это офлайн-карты здорового человека, сделанные с любовью и уважением к своим пользователям:

- Работают без Интернета;
- Карты занимают мало места;
- Не жрут батарейку;
- Не тормозят;
- [Не шпионят за пользователями](https://reports.exodus-privacy.eu.org/en/reports/app.organicmaps/latest/);
- Не содержат рекламы;
- Без регистрации и SMS;
- С открытым исходным кодом.

## Помощь проекту

Organic Maps развивается сообществом энтузиастов благодаря вашей поддержке.

{{ donate_buttons() }}

Помогите проекту финансово чтобы приложение могло жить и развиваться.

## Сообщество

- Присоединяйтесь к [русскоязычной группе в Telegram](https://t.me/OrganicMapsRu) для обратной связи и помощи;
- Подключайтесь к программе тестирования бета-версий:
  * [iOS Beta (TestFlight)](https://testflight.apple.com/join/lrKCl08I)
  * [Android Beta (Firebase)](https://appdistribution.firebase.dev/i/9ec3bca5e2b47373)
  * [Linux Desktop Beta (Flatpak)](https://flathub.org/apps/details/app.organicmaps.desktop)
  * [Linux Desktop Beta (packages)](https://repology.org/project/organicmaps/versions)
- Сообщайте о проблемах и предлагайте новые идеи [на GitHub](https://github.com/organicmaps/organicmaps/issues) или [по почте](mailto:hello@organicmaps.app);
- Нарисуйте свой дом и район вокруг в [OpenStreetMap](https://openstreetmap.org);
- Помогите с [переводом](https://github.com/organicmaps/organicmaps/blob/master/docs/TRANSLATIONS.md) приложения и веб-сайта на другие языки.
- Поучаствуйте в [разработке](https://github.com/organicmaps/organicmaps/blob/master/docs/CONTRIBUTING.md) приложения под Android и iOS;
- Подпишитесь на нас в [Facebook](https://facebook.com/OrganicMaps), [Twitter](https://twitter.com/OrganicMapsApp) и [Instagram](https://instagram.com/organicmaps.app/).
- Расскажите своим друзьям и знакомым.

<button id='add' class='installButton'>
  Установить из Google Play
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
