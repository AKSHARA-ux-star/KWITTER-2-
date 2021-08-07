var firebaseConfig = {
    apiKey: "AIzaSyDm9ihefefxVF_7XhFM6ycIk1d4DQ0wjUs",
    authDomain: "kwitter-project-e23cb.firebaseapp.com",
    projectId: "kwitter-project-e23cb",
    storageBucket: "kwitter-project-e23cb.appspot.com",
    messagingSenderId: "540460517133",
    appId: "1:540460517133:web:cae2b3ecc26cb93d409244",
    measurementId: "G-ZC1MY3FMWK"
  };

  function adduser()
  {
     username=document.getElementById("user_name").value;
     firebase.database().ref("/").child(username).update({
         purpose:"adding user name"
     });
  }