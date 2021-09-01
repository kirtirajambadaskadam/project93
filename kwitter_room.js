
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDmZP_1EEFamnWlMG6P05JM2Z2C-iIlpRo",
      authDomain: "project93-eab0c.firebaseapp.com",
      databaseURL: "https://project93-eab0c-default-rtdb.firebaseio.com",
      projectId: "project93-eab0c",
      storageBucket: "project93-eab0c.appspot.com",
      messagingSenderId: "544182533390",
      appId: "1:544182533390:web:865eab8ff7d7bb3286ab5f",
      measurementId: "G-GCRJ65D2Z2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
