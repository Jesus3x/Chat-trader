const firebaseConfig = {
  apiKey: "AIzaSyDAYD7DhRovj0PYHUSpOq5YE1rQXIiOPkc",
  authDomain: "chat-trader.firebaseapp.com",
  projectId: "chat-trader",
  storageBucket: "chat-trader.firebasestorage.app",
  messagingSenderId: "722204996123",
  appId: "1:722204996123:web:6ab7fd6a6b5646c3e0bebe",
  measurementId: "G-N36TE38K29"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const messaging = firebase.messaging();

document.getElementById('loginBtn').onclick = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await auth.signInWithPopup(provider);
  alert('Logado com sucesso!');
};

document.getElementById('notifyBtn').onclick = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const token = await messaging.getToken({ vapidKey: "SUA_PUBLIC_VAPID_KEY" });
    console.log("Token:", token);
    alert("Notificações ativadas!");
  } else {
    alert("Permissão negada.");
  }
};
