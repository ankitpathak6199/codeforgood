'use strict'
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
} = process.env;

assert(PORT, "port is required");
assert(HOST, "host is required");

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseconfig: {
        apiKey: API_KEY,                             // Auth / General Use
        appId: AUTH_DOMAIN,              // General Use
        projectId: DATABASE_URL,               // General Use
        authDomain: PROJECT_ID,         // Auth with popup/redirect
        databaseURL: STORAGE_BUCKET, // Realtime Database
        storageBucket: MESSAGING_SENDER_ID,          // Storage
        messagingSenderId: APP_ID,                 // Cloud Messaging
        measurementId: MEASUREMENT_ID,                        // Analytics
        // apikey: API_KEY,
        // authdomain: AUTH_DOMAIN,
        // databaseurl: DATABASE_URL,
        // projectid: PROJECT_ID,
        // storagebucket: STORAGE_BUCKET,
        // messagingsenderid: MESSAGING_SENDER_ID,
        // appid: APP_ID
    }
}