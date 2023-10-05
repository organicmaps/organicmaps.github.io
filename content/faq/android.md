---
title: "F.A.Q. - Android"
description: "Frequently asked questions for Organic Maps application"
weight: 1000
extra:
  menu_title: F.A.Q. - Android
---

### What Android version can run OrganicMaps

You need at leat Android 5 to run the app. If you want to use AndroidAuto then minimal version is Android 6+.

OrganicMaps can work on devices with Google Services and without Google support.

### What's the difference between F-Droid and Google Play versions of tha app?

F-Droid version comes without [Google Play Services](https://en.wikipedia.org/wiki/Google_Play_Services). Services could improve location accuracy using nearest cell towers and wifi hotspots if internet connection is available. F-Droid version uses only device GPS sensor.

Using OrganicMaps from Google Play you can disable Google Play Services for location search in app settings.

### Why OrganicMaps is slow on my device, UI is laggy, and it crashes randomly?

Most likely you configured to store maps data on SD card. Usually switchable SD cards in Android phones are slow and unreliable.

Change OrganicMaps config to store maps data in internal storage. Open Settings -> Save maps to -> Internal private storage.

Or you can replace SD card with faster one to improve map performance.

### How to enable logs?

If you want to report a bug then additional app logs could help locate a problem. To get useful logs go to Settings -> Enable logging. After that do action to reproduce the problem. Finally tap on icon with OrganicMaps icon on main screen and press "Report a bug" button. Don't forget to disable logging after reporting.

### What if app crashes on start?

You need to enable Android WebView component.

{{ references() }}

[github]: https://github.com/organicmaps/organicmaps
[license]: http://www.apache.org/licenses/LICENSE-2.0
[copyright]: https://github.com/organicmaps/organicmaps/blob/master/data/copyright.html
