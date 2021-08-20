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


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
        document.getElementById("user_text").innerHTML = "Selamat Datang Kembali, apakabar " + email_id;
        console.log(email_id);
        }
        // document.location.href("main.html");
        console.warn(user.email);
        var uid = user.uid;
        // alert(user.email)
      // ...
    } 
    // else {
    //   // User is signed out
    //   alert("Tidak ada user")
    // }
  });