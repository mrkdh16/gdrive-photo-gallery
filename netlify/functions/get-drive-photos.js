// File: netlify/functions/get-drive-photos.js

const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  // Get the API Key from Netlify's secure environment variables
  const apiKey = process.env.GOOGLE_API_KEY; 

  // Get the folder ID passed from the frontend
  const folderId = event.queryStringParameters.folderId;

  if (!folderId) {
    return { statusCode: 400, body: 'Error: Missing folderId parameter' };
  }

    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image'&fields=files(id,name,size,imageMediaMetadata)&key=${apiKey}`;  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};