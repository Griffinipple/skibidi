// fireStore.js
function initializeFirestore() {
  const db = firebase.firestore();
  console.log("Firestore initialized");
}

function saveGameData(userId, data) {
  const db = firebase.firestore();
  db.collection("gameData").doc(userId).set(data)
    .then(() => {
      console.log("Game data saved successfully");
    })
    .catch((error) => {
      console.error("Error saving game data: ", error);
    });
}

function loadGameData(userId, callback) {
  const db = firebase.firestore();
  db.collection("gameData").doc(userId).get()
    .then((doc) => {
      if (doc.exists) {
        callback(doc.data());
      } else {
        console.log("No game data found");
      }
    })
    .catch((error) => {
      console.error("Error loading game data: ", error);
    });
}
