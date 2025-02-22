---
title: 应用无法定位到我的位置
description: Troubleshooting guide for solving problems with location determination for iOS and Android devices
updated: 2024-06-12
taxonomies:
  faq:
    - 地图
extra:
  order: 10
---

请确保您的设备具有 GPS，并且位置设置已激活。

**安卓**

On your device open Settings → Location. It is better to switch on High accuracy mode, as it enables precise GPS location.

如果使用 GPS 难以确定您的位置，请在应用设置中启用（如果已启用，则禁用）“Google Play 服务”。

Note: you can see it only if you have Google Play services installed (enabled) on your Android device. 请注意：只有在您的安卓设备上安装了（启用了）Google Play 服务时，您才能看到它。
Google Play 服务用于更精确地确定位置，如果在禁用该选项后您遇到位置准确性问题，请将其打开。

**iOS**

If you are an iPhone or iPad user, please check iOS settings → Privacy → Location services. Geolocation data sharing should be enabled for Organic Maps.

**请注意：**

- 为了避免漫游时产生不必要的数据费用，您可以在设备设置中关闭所有移动数据，激活飞行模式或为 Organic Maps 禁用移动数据。 安卓和 iOS 设备可以在飞行模式下使用 GPS。 Android and iOS devices can use GPS in the flight mode.

- 一些移动设备没有内置的 GPS 接收器，例如 iPod Touch、仅 WiFi 的 iPad、Amazon Kindle Fire / Kindle Fire HD 7 和一些安卓平板电脑。 在这些设备上，只要您连接到互联网，我们的应用程序将显示您的大致位置。 On these devices, all apps will show your approximate location detected using a Wi-Fi network, as long as you are connected to the internet.

- Location detection with GPS satellites (when WiFi and Mobile Networks are disabled) may take some time. The longer the GPS has not been used, the more time it takes. The speed of location detection depends on the device, not the app. The GPS operation is influenced by the weather as well – it works best outdoors when the sky is clear. Problems may arise when trying to locate yourself indoors, on a narrow street, or when driving a car, with a lot of metal around or with a metal/magnet on the device's case.
