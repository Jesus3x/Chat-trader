importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDAYD7DhRovj0PYHUSpOq5YE1rQXIiOPkc".
  authDomain: "chat-trader.firebaseapp.com",
  projectId: "chat-trader",
  messagingSenderId: "722204996123",
  appId: "1:722204996123:web:6ab7fd6a6b5646c3e0bebe",
  measurementId: "G-N36TE38K29"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
