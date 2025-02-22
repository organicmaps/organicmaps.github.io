---
title: Додаток не може визначити моє місцезнаходження на карті
description: Troubleshooting guide for solving problems with location determination for iOS and Android devices
updated: 2024-06-12
taxonomies:
  faq:
    - Мапа
extra:
  order: 10
---

Будь ласка, переконайтеся, що на вашому пристрої ввімкнено GPS та активовані налаштування місцезнаходження.

**Android**

On your device open Settings → Location. It is better to switch on High accuracy mode, as it enables precise GPS location.

Якщо у вас виникають труднощі з визначенням вашого місцезнаходження за допомогою GPS, увімкніть (вимкніть, якщо увімкнено) "Сервіси Google Play" в налаштуваннях програми.

Note: you can see it only if you have Google Play services installed (enabled) on your Android device. Google play services are used to determine location more precisely, if you experience issues with location accuracy after you disabled the option, turn it on.

**iOS**

If you are an iPhone or iPad user, please check iOS settings → Privacy → Location services. Geolocation data sharing should be enabled for Organic Maps.

**Примітки:**

- To avoid unwanted data while roaming, you can turn off all mobile data, activate a flight mode or disable mobile data for Organic Maps in your device settings. Android and iOS devices can use GPS in the flight mode.

- Some mobile devices do not have built-in GPS receivers, such as the iPod Touch, WiFi-only iPad, Amazon Kindle Fire/Kindle Fire HD 7, and some Android tablets. On these devices, all apps will show your approximate location detected using a Wi-Fi network, as long as you are connected to the internet.

- Location detection with GPS satellites (when WiFi and Mobile Networks are disabled) may take some time. The longer the GPS has not been used, the more time it takes. The speed of location detection depends on the device, not the app. The GPS operation is influenced by the weather as well – it works best outdoors when the sky is clear. Problems may arise when trying to locate yourself indoors, on a narrow street, or when driving a car, with a lot of metal around or with a metal/magnet on the device's case.
