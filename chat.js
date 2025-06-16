firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if (!user) {
    alert("Faça login primeiro.");
    window.location.href = "index.html";
    return;
  }

  document.getElementById('sendBtn').onclick = async () => {
    const msg = document.getElementById('msgInput').value;
    if (msg.trim()) {
      await db.collection('chat').add({
        user: user.displayName,
        message: msg,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      document.getElementById('msgInput').value = '';
    }
  };

  db.collection('chat').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = '';
    snapshot.forEach(doc => {
      const data = doc.data();
      chatBox.innerHTML += `<p><strong>${data.user}:</strong> ${data.message}</p>`;
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});
