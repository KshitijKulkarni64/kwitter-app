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

    user_name= localStorage.getItem("user_name");
    
    room_name= localStorage.getItem("room_name");

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
message= document.getElementById("input_box").value;
firebase.database().ref("room_name").push({
      msg: message,
      name: user_name,
      likes:0
});

document.getElementById("input_box").value="";

}
      



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//Start code

//End code
      } });  }); }
getData();
