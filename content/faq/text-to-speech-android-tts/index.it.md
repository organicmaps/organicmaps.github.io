---
title: Text-to-Speech su Android
description: Guida su come far funzionare il TTS su Android
slug: text-to-speech-su-android

taxonomies:
  faq: ["Voice Directions"]

extra:
  order: 10
---

## Sommario

Organic Maps utilizza il motore text-to-speech (TTS) del sistema per le istruzioni vocali. I motori predefiniti variano a seconda del dispositivo. La scelta può includere Google Text-to-Speech, il motore del produttore del dispositivo o un motore di terze parti.

La raccomandazione ufficiale di Organic Maps è [RHVoice](https://rhvoice.org/), un motore vocale gratuito ed open source che può essere scaricato da [Google Play Store](https://play.google.com/store/apps/details?id=com.github.olga_yakovleva.rhvoice.android) e [F-Droid](https://f-droid.org/en/packages/com.github.olga_yakovleva.rhvoice.android/).

## Istruzioni

- Aprire l'applicazione Impostazioni sul dispositivo Android.
- Selezionare Impostazioni aggiuntive, quindi selezionare Accessibilità.
- Scegliere il motore, la velocità ed il tono di voce preferiti.

Se non si riesce a trovare l'impostazione pertinente, aprire l'app Impostazioni e cercare Text-to-speech.

P.S.: Tenete presente che questi passaggi variano a seconda della marca del telefono che state utilizzando.

Le suddette opzioni potrebbero non essere presenti se sul dispositivo non è già installato un software TTS. Fare riferimento alla tabella seguente per installare uno dei TTS che supporta la propria lingua madre.

## Schermate

|             |             |             |
| ----------- | ----------- | ----------- |
![Impostazioni](tts_config_1.jpg "Impostazioni") | ![Impostazioni aggiuntive](tts_config_2.jpg "Impostazioni aggiuntive")| ![Accessibilità](tts_config_3.jpg "Accessibilità")

## Motori TTS {#engines}

Di seguito è riportato un elenco completo di diversi motori e delle lingue supportate (i link per il download si trovano dopo la tabella):

{{ tts_table() }}

## Risoluzione dei problemi

Se hai problemi ad inizializzare il motore TTS di RHVoice su LineageOS o altre ROM personalizzate, prova questa soluzione. RHVoice potrebbe non inizializzarsi correttamente e l'applicazione potrebbe bloccarsi, soprattutto se non è mai stato usato un motore TTS sul telefono (ad esempio, nuova installazione, reset di fabbrica, ecc.). Se si utilizza una ROM personalizzata come LineageOS <ins>senza i servizi Google Play e Speech Services by Google</ins>, e si desidera utilizzare RHVoice come motore TTS preferito, seguire le istruzioni riportate di seguito come soluzione alternativa:

1. Installare il motore [eSpeak TTS] (https://f-droid.org/en/packages/com.reecedunn.espeak) disponibile su F-Droid.
2. Impostarlo come motore TTS di sistema preferito
    - Aprire le **Impostazioni** principali di LineageOS.
    - Scorrere fino a **Accessibilità**.
    - Selezionare **text-to-speech output** e **Motore preferito** (lato sinistro) e assicurarsi che sia selezionato **eSpeak**.
3. Tornare indietro e premere **play** per vedere se funziona.
4. Installare [RHVoice](https://f-droid.org/en/packages/com.github.olga_yakovleva.rhvoice.android/) disponibile su F-droid.
    - Aprirlo, selezionare la lingua che si desidera utilizzare, toccare l'icona della nuvola (all'estrema sinistra) per scaricare le voci.
    - Premere il pulsante play per verificare se funziona
5. Impostare **RHVoice** come motore preferito (vedi punto 2).
6. A questo punto si dovrebbe essere in grado di utilizzare RHVoice senza problemi.

## Test

In order to test the voice instructions, you can tap on "Test Voice Directions (TTS, Text-To-Speech)" in OM "Settings → Voice Instructions" menu or you can actually start a navigation to receive any voice output. Organic Maps will not give you any voice instructions while you're standing still.

Per testare le istruzioni vocali, è possibile toccare in Organic Maps su "Prova indicazioni vocali (TTS, Text-To-Speech)" nel menu "Impostazioni → Istruzioni vocali" oppure semplicemente avviare una navigazione per ricevere le indicazioni vocali. Organic Maps non fornisce istruzioni vocali quando si è in sosta.

![TTS Test](tts_test.png "TTS Test")
