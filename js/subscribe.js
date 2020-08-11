/*var firebaseConfig = {
    apiKey: "AIzaSyB-XowF6ecqBLSIkIcuXEnY0fHdueSw-DM",
    authDomain: "email-a29a3.firebaseapp.com",
    databaseURL: "https://email-a29a3.firebaseio.com",
    projectId: "email-a29a3",
    storageBucket: "email-a29a3.appspot.com",
    messagingSenderId: "337058618883",
    appId: "1:337058618883:web:e207fa4119a663ea0b3836",
    measurementId: "G-JW3MHWQBTL"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  */
//var messagesref = firebase.database().ref('subscribe');


document.getElementById('contactForm').addEventListener('submit', submitform);


function submitform(e) {
    e.preventDefault();
    console.log(123);
}
    /*
    var subscribe = getValue('subscribe');
    
    savemessage(subscribe);

    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(function () {
        document.querySelector('.alert').style.display = "none";
    }, 3000);
    
    document.getElementById('subscribe').reset();
}

function getValue(id) {
    return document.getElementById(id).value;
}

function savemessage(subscribe) {
    var newmessageRef = messagesref.push();
    newmessageRef.set({
        subscribe: subscribe
        
    });
    
}*/