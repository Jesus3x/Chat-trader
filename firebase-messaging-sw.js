// Importa os scripts do Firebase necessários para o service worker
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

// Configuração do Firebase (mesma do seu projeto)
firebase.initializeApp({
  apiKey: "AIzaSyDAYD7DhRovj0PYHUSpOq5YE1rQXIiOPkc",
  authDomain: "chat-trader.firebaseapp.com",
  projectId: "chat-trader",
  storageBucket: "chat-trader.firebasestorage.app",
  messagingSenderId: "722204996123",
  appId: "1:722204996123:web:6ab7fd6a6b5646c3e0bebe",
  measurementId: "G-N36TE38K29"
});

// Obtem o Firebase Messaging para o service worker
const messaging = firebase.messaging();

// Listener para receber mensagens em segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em background ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon-192x192.png' // Coloque aqui seu ícone padrão
  };

  // Mostra a notificação
  self.registration.showNotification(notificationTitle, notificationOptions);
});
