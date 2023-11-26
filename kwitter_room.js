const firebaseConfig = {
      apiKey: "AIzaSyBuZFEKjo55fzH8fXaYdsOhv8-kAzDQ6g8",
      authDomain: "kwitter-9e07e.firebaseapp.com",
      databaseURL: "https://kwitter-9e07e-default-rtdb.firebaseio.com",
      projectId: "kwitter-9e07e",
      storageBucket: "kwitter-9e07e.appspot.com",
      messagingSenderId: "364720862101",
      appId: "1:364720862101:web:00335f0d20e54551e27c9c",
      measurementId: "G-Q8BR4XZF8G"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome: "+user_name+"!";
function addRoom(){
      room_name = document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("kwitter_page.html");
}