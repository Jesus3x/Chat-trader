// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAYD7DhRovj0PYHUSpOq5YE1rQXIiOPkc",
  authDomain: "chat-trader.firebaseapp.com",
  projectId: "chat-trader",
  storageBucket: "chat-trader.firebasestorage.app",
  messagingSenderId: "722204996123",
  appId: "1:722204996123:web:3b0cf65b13969d01e0bebe",
  measurementId: "G-1PD8VJJH3E"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
