function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var message  = form["message"].value

    console.log(name)
    saveMessage(name, message)
    
    return false;
}

function saveMessage(name, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
	{
	    name: name,
	    message: message,
	}
    )
}

 var firebaseConfig = {
    apiKey: "AIzaSyBJuUVNQCGMdToNOKiLjS_PI_MQcQfsggg",
    authDomain: "c159653.firebaseapp.com",
    databaseURL: "https://c159653.firebaseio.com",
    projectId: "c159653",
    storageBucket: "c159653.appspot.com",
    messagingSenderId: "154772531625",
    appId: "1:154772531625:web:25d7482f36384231aabcb8",
    measurementId: "G-ZFR7RCN7KG"
  };

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var databaseReference = firebase.database().ref("C159653")

