

const request = require('request');
const fs = require('fs');

const url = 'https://texttospeech.googleapis.com/v1/text:synthesize?key=<your-api-key>';

const headers = {
    'Content-Type': 'application/json; charset=utf-8',
};


const requestBody = {
    input: {
      text: 'In the name of God, the Most Gracious, the Most Merciful' // Replace with the desired text
    },
    voice: {
      languageCode: 'en-US',
      ssmlGender: 'MALE',
      // name: 'en-US-Wavenet-A'
    },
    audioConfig: {
      audioEncoding: 'MP3'
    }
  };
  
  const requestOptions = {
    url: url,
    method: 'POST',
    headers: headers,
    json: requestBody, // Automatically converts to JSON
  };
  

request(requestOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log('Response:', body);
      const audioContent = body.audioContent;
  
      // Save the audio content to an MP3 file
      fs.writeFileSync('output.mp3', audioContent, 'base64');
      
      console.log('Audio content saved to output.mp3');
    } else {
      console.error('Error:', error);
    }
  });
