const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyCGYy2h24efFiAPFaIQ7KyRkMTv-M5qYjw",
  authDomain: "word-to-image-374ed.firebaseapp.com",
  databaseURL: "https://word-to-image-374ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "word-to-image-374ed",
  storageBucket: "word-to-image-374ed.appspot.com",
  messagingSenderId: "632409793648",
  appId: "1:632409793648:web:e073831d4c6bd0bdcec0b5",
  measurementId: "G-K0V1EVQWQ6"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

    // enable alert
  document.querySelector(".alert").style.display = "block";

    // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};