const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
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
