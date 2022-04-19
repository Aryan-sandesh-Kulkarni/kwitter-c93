
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyARXSA75ORGwiTvzPEVCdUSpCWMeEtX-js",
    authDomain: "aryan12345-89f3e.firebaseapp.com",
    databaseURL: "https://aryan12345-89f3e-default-rtdb.firebaseio.com",
    projectId: "aryan12345-89f3e",
    storageBucket: "aryan12345-89f3e.appspot.com",
    messagingSenderId: "179091094723",
    appId: "1:179091094723:web:e96b5576ebf2ade1b3f676"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

  function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room_names-" + Room_names);
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect(thisid)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectRoom_names(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }