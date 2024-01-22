/* global firebase */
/**
   * Here is is the code snippet to initialize Firebase Messaging in the Service
   * Worker when your app is not hosted on Firebase Hosting.

  // Give the service worker access to Firebase Messaging.
  // Note that you can only use Firebase Messaging here. Other Firebase libraries
  // are not available in the service worker.

    **/
self.importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js",
);
self.importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyAc4XrxZs2G1EVp-NbpCh5rw9rVgnUG284",
  authDomain: "scbj-af2e3.firebaseapp.com",
  projectId: "scbj-af2e3",
  storageBucket: "scbj-af2e3.appspot.com",
  messagingSenderId: "177564796245",
  appId: "G-1YD7ZEM9HM",
  measurementId: "BNJnISNECPJrEzIQ8Mbjvw2bu3GQrwo52ChZT0E8BX243r9",
});

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();

self.addEventListener("install", function () {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function () {
  console.log("fcm sw activate..");
});

self.addEventListener("push", function (e) {
  console.log("push: ", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData,
  };
  console.log("push: ", { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(self.clients.openWindow(url));
});

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
