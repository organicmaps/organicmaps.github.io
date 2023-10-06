---
title: "F.A.Q. - How to use map"
description: "Frequently asked questions for Organic Maps application"
weight: 1000
extra:
  menu_title: F.A.Q. - How to use map
---

### How to use Long Tap?

You can do a lot of thing in the app using long tap:

- Add markers
- Copy place details such as name, address, links, coordinates, etc
- Add route points

Try long tap in OrganicMaps to discover hidden features.

### How to get map legend?

<img src="/images/faq/faq-map-legend.jpg" width="400px"/>

Use long tap on any object to get it's type and name.
You can find road type or forest kind in the bottom panel.
By the way you search objects by type also.

### How to maximize map?

Perform single tap on empty space to hide app interface and get fullscreen map.
Tap on the map again to get UI back.

### What gestures does OrganicMaps support?

(On iOS and iPadOS) Tap and hold on zoom buttons then drag up or down to zoom.

Use double tap to zoom in.

You can rotate, pan and zoom map with two fingers gestures.

### How to zoom in/zoom out with one hand?

<video width="300px" controls>
  <source src="/images/faq/faq-map-one-finger-zoom-Mauritius.mp4" type="video/mp4"/>
  (Your browser does not support the video tag.)
</video>

Tap twice on map and on the second tap just slide your finger up and down to zoom in and zoom out respectively.

This gesture works on Android and iOS and not only in OrganicMaps.

### How to get my coordinates, speed, and altitude?

<img src="/images/faq/faq-map-my-position.jpg" width="400px"/>

Tap on blue arrow indicating your position to see GPS coordinates, speed, and height above mean sea level.
Push share button to give you coordinates to friends.

### What does gray circle around my position mean?

<img src="/images/faq/faq-map-grey-circle.jpg" width="400px"/>

GPS sensors have accuracy rate. Gray circle indicates this accuracy. Your actual position is somewhere inside this circle.
Accuracy degrade inside buildings, near steal constructions or radiation sources.
To improve GPS precision go outside to be under clear sky.
Enabling [Google Location Accuracy](https://support.google.com/maps/answer/2839911?co=GENIE.Platform%3DAndroid) on Android improves precision significantly.

### What is the purpose of little blue arrow?

<img src="/images/faq/faq-map-blue-arrow.jpg" width="400px"/>

This arrow shows direction and distance from your location to selected POI. You should enable location to see it.
Pressing this button gets fullscreen indicator of orientation and distance.
You can use it for azimuth navigation if step-by-step routing is not possible for some reason.

### What does icon bellow zoom buttons mean?

| Icon | Meaning |
| ---- | ------- |
| <img src="/images/faq/faq-map-location-icon-1.png" width="75px"/> | Location search is not initiated |
| <img src="/images/faq/faq-map-location-icon-2.png" width="75px"/> | App is looking for location |
| <img src="/images/faq/faq-map-location-icon-3.png" width="75px"/> | Current position is found. Map is centered on current position and oriented to North. |
| <img src="/images/faq/faq-map-location-icon-4.png" width="75px"/> | Map is centered on current position and rotates according to device compas. |


### How to catch GPS signal from satelites? How to tell if device got precise or rough position?

???

### Why do I see blue circle instead of an arrow indicating my position?

Tablets don't have compass sensor that's why circle is drawn instead of directed arrow. You can find your model on [gsmarena.com](https://www.gsmarena.com) to see if compass is present.

### How to make sure I have latest application installed and up-to-date maps?

First make sure you installed updated app from [AppStore][appstore], [Google Play][googleplay], [FDroid][fdroid], or [Huawei AppGallery][appgallery]. If maps data is outdated you will see red dot. Please download latest maps from menu.

<img src="/images/faq/faq-map-data-updates.png" width="400px"/>

### How to deal with maps download errors?

???

### How to make changes to the map?

<img src="/images/faq/faq-map-edit-button.jpg" width="400px"/>

OrganicMaps works with map data from [OpenStreetMaps.org](https://osm.org) project. You can improve place details using "Edit Place" button. To make your changes publicly available you need an account on [OpenStreetMaps.org](https://osm.org). If you want to change POI position, or clarify footway, or add buildings and bridges, please use [OpenStreetMaps.org](https://osm.org) site with powerful editing tools.

### How edits are uploaded on OpenStreetMaps.org, how conflicts are resolved?

OrganicMaps application stores POI changes locally till internet connection is available. You can make changes while offline. Edits are uploaded to [OpenStreetMaps.org](https://osm.org) in background.

If there are edit conflicts ???

### Who moderates changes?

???

### Why "Edit place" button is disabled or hidden?

If your maps data is more than 2 month then edit button is unavailable. Please install latest app and download up-to-date maps to enable editting.

### How to use search?

You can search places, addresses, cities, sites and many other interrests. OrganicMaps looks not only by name but by type. You can find nearest drinking water, bycicle parking, bookstore or cave from search field.

### What are secret search queries?

`?vulkan`, `?gl` - ???

`?edits` - will show changes you made lately and its status. You can see if changes are already uploaded to [OpenStreetMaps.org](https://osm.org) or there were any problems?

See [documentation](https://github.com/organicmaps/organicmaps/blob/master/docs/DEBUG_COMMANDS.md) for the full list of commands.

{{ references() }}

[github]: https://github.com/organicmaps/organicmaps
[license]: http://www.apache.org/licenses/LICENSE-2.0
[copyright]: https://github.com/organicmaps/organicmaps/blob/master/data/copyright.html
