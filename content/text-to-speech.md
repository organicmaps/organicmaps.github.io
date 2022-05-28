---
title: "Text-to-speech output on Android"
description: "No tracking, no ads, no data collection, no spyware"
page_template: index.html
weight: 900
---
Organic Maps uses the system text-to-speech(TTS) engine for voice instructions. The default engines vary by device. The choices can include Google Text-to Speech, device manufacturer's engine or a third-party one. 

You can use a third-party Text-to-speech engine which can be downloaded from Google Play or F-Droid. 

[RHVoice](https://rhvoice.org/) is a free and open source speech engine which can be downloaded from [Google Play](https://play.google.com/store/apps/details?id=com.github.olga_yakovleva.rhvoice.android) and [F-Droid](https://f-droid.org/en/packages/com.github.olga_yakovleva.rhvoice.android/).

## Instructions

1. Open the Settings app on your Android device.
2. Select Additional Settings and then select Accessibility.
3. Choose your preferred engine, speech rate and pitch.

If you cannot find the setting, open the settings app and search for Text-to-speech.

The option may not appear if you don't have a TTS installed on your device. Please install Google Speech Services from the [Play Store](https://play.google.com/store/apps/details?id=com.google.android.tts), which is used by many devices or you can install a third party one such as [RHVoice](https://play.google.com/store/apps/details?id=com.github.olga_yakovleva.rhvoice.android)

## Screenshots

{{ screenshot(src='images/screenshots/setting1.jpg') }}
{{ screenshot(src='images/screenshots/setting2.jpg') }}
{{ screenshot(src='images/screenshots/setting3.jpg') }}

## Workaround to make RHVoice TTS engine work on Lineageos (degoogled custom rom)

Often RHVoice doesn't get initialized properly and app itself might be crashing. Mostly in cases where you haven't used any TTS engine on your phone yet (new installations etc)

If you use custom rom like Lineageos without Google Play services & Speech Services by Google and want to use RHVoice as your preferred TTS engine, please follow workaround instructions below:

1) Install [eSpeak TTS engine](https://f-droid.org/en/packages/com.reecedunn.espeak) available on F-Droid

2) Set it as the preferred engine

      a) Go to Lineage os main **Settings**.
      
      b) Scroll down to **Accessibility**.
      
      c) Select **text-to-speech output** (below SCREEN READERS) and **Preferred engine** (left side) and make sure **eSpeak** is selected.

3) Go back and press **play** to see if it's working
4) Install [RHVoice](https://f-droid.org/en/packages/com.github.olga_yakovleva.rhvoice.android/) available on F-droid.
a) Open it, select the language you want to use, tap on the cloud icon (far left) to download voices.
b) Press play button to verify if it's working
5) Set **RHVoice** as preferred engine (see step 2)
6) Now, you should be able to use RHVoice without any problems

*In order to hear voice instructions you have to actually move around to receive any voice output, OrganicMaps will not give you any voice institutions while you're still.*
