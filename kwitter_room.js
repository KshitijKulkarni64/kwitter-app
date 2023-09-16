var firebaseConfig = {
    apiKey: "AIzaSyDT1eGSQYsZbenCCxJvMG1n6WvUmCfrNTM",
    authDomain: "kwitter-project-5398a.firebaseapp.com",
    databaseURL: "https://kwitter-project-5398a-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5398a",
    storageBucket: "kwitter-project-5398a.appspot.com",
    messagingSenderId: "959797206545",
    appId: "1:959797206545:web:a8e05567ecc26650649bb0"
  };
  firebase.initializeApp(firebaseConfig);


var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerhtml="Welcome" + user_name + "!";

function addRoom(){

    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location= "kwitter_page.html";
      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
       
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
