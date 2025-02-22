---
title: Приложение не может определить мое местоположение
description: Troubleshooting guide for solving problems with location determination for iOS and Android devices
updated: 2024-06-12
taxonomies:
  faq:
    - Карта
extra:
  order: 10
---

Пожалуйста, убедитесь, что ваше устройство поддерживает GPS и в настройках устройства включено определение местоположения.

**Android**

Откройте настройки устройства → Местоположение/Геоданные → Вкл. Рекомендуется выбрать режим “По всем источникам/Высокая точность”.

Если настройки геолокации в порядке, убедитесь, что службы Google Play не заблокированы другими приложениями или антивирусами. Попробуйте поставить (или убрать, если стоит) галочку “Google Play Services”\* в настройках приложения.

Примечание: опция отображается только если на устройстве установлены сервисы Google Play. Google play services are used to determine location more precisely, if you experience issues with location accuracy after you disabled the option, turn it on.

**iOS**

Если вы пользуетесь iPhone или iPad, проверьте, пожалуйста, настройки iOS → Конфиденциальность → Службы геолокации. Необходимо разрешить определение местоположения для Organic Maps.

**Примечания:**

- To avoid unwanted data while roaming, you can turn off all mobile data, activate a flight mode or disable mobile data for Organic Maps in your device settings. Android and iOS devices can use GPS in the flight mode.

- GPS точно отсутствует в iPod Touch, iPad (модели только с Wi-Fi), Amazon Kindle Fire/Kindle Fire HD 7” и в некоторых Android-планшетах. Но даже в этом случае при наличии подключения к интернету вы увидите ваше положение на карте.

- Определение местоположения по GPS (с выключенным Wi-FI и передачей мобильных данных) может занять продолжительное время (чем дольше не используется GPS, тем больше времени уходит на определение позиции), скорость определения местоположения будет зависеть от устройства, а не от приложения. The longer the GPS has not been used, the more time it takes. The speed of location detection depends on the device, not the app. Кроме того, работа GPS зависит от погодных условий: лучше всего система работает на открытом воздухе при ясной погоде. Проблемы могут возникнуть при определении местоположения в закрытом помещении, на узких улицах или при движении в автомобиле.
