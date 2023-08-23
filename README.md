#                                                                                             بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ                                                         
#  🚀 Fast Google Text-to-Speech API Script

This repository contains a Node.js script for quickly generating text-to-speech audio files using the Google Text-to-Speech API. This script provides a faster alternative to Google's official library.

## Prerequisites

Before using this script, make sure you have the following prerequisites:

1. Node.js installed on your machine.
2. A Google Cloud project with the Text-to-Speech API enabled.

## 🛠️ Getting Your API Key

To use this script, you'll need an API key from Google Cloud Console:

1. Go to the Google Cloud Console at [https://console.cloud.google.com](https://console.cloud.google.com).
2. Select your project (or create a new one).
3. Navigate to the API credentials page: **APIs & Services > Credentials**.
4. Click on the "Create credentials" dropdown and select "API Key."
5. Your API key will be generated. Click on the "Copy" button to copy it to your clipboard.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Yusuf-YENICERI/google-tts-fast.git
   cd google-tts-fast
   ```

2. Install the required Node.js packages:

   ```bash
   npm install request
   ```

3. Set your API key:
   - Open `index.js` in a code editor.
   - Replace `<your-api-key>` in the `url` variable with the API key you copied from Google Cloud Console.

## Usage

To generate a text-to-speech audio file, run the following command:

```bash
node index.js
```

By default, the script generates an MP3 file from the text provided in the `requestBody` object within `index.js`. You can customize the text and other parameters in the `requestBody` object as needed.

The generated audio file will be saved as `output.mp3` in the same directory.

## Example

To generate a text-to-speech audio file with different text, language, or voice, update the `requestBody` object in `index.js` with your desired parameters.

```javascript
const requestBody = {
    input: {
      text: 'Your desired text goes here'
    },
    voice: {
      languageCode: 'en-US',
      ssmlGender: 'MALE',
      // name: 'you can include name if you want'
    },
    audioConfig: {
      audioEncoding: 'MP3'
    }
  };
```

## Performance

This script is designed to be significantly faster (8-16 times) than Google's official library for text-to-speech. It utilizes direct API calls and allows you to customize requests according to your needs.
