var firebaseConfig = {
    apiKey: "AIzaSyBlqW3XmihF9lJRlD3qOfKrQiR5HncqBCY",
    authDomain: "ifhe-6c2a0.firebaseapp.com",
    projectId: "ifhe-6c2a0",
    storageBucket: "ifhe-6c2a0.appspot.com",
    messagingSenderId: "732146996429",
    appId: "1:732146996429:web:4270fade7e28c13b24c584",
    measurementId: "G-T42HGSVN4F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function Signup(){
    var username = document.getElementById("reg_username").value;
    var email = document.getElementById("reg_email").value;
    var password = document.getElementById("reg_password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.warn(user);
    window.alert("Berhasul daftar")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });

}



function Login(){
    
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // location.replace("main.html");
    console.log(user.uid);
    window.location.href = "main.html";
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });

  // window.alert(email + " " + password);
}


  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     // User is signed in
  //       // document.location.href("main.html");
  //       // console.warn(user.email);
  //       var uid = user.uid;
  //       // alert(user.email)
  //     // ...
  //   } else {
  //     // User is signed out
  //     alert("Tidak ada user")
  //   }
  // });