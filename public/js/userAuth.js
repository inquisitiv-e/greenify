const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPS');
const userName = document.getElementById("userName");
const btnLogin = document.getElementById("btnLogin");
const btnSignup = document.getElementById('btnSignup')
const btnLogout = document.getElementById("btnLogout");
emsg = document.getElementById("emsg");

function fbLogin() {
  //get email and ps
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  //check validation
  promise.catch(e => emsg.innerHTML = e.message);
  promise.then(e => emsg.innerHTML = "");
}

//Add log in event
btnLogin.addEventListener('click', e => {
  //get email and ps
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  //check validation
  promise.catch(e => emsg.innerHTML = e.message);
  promise.then(e => emsg.innerHTML = "");
});

//Add sign up event
btnSignup.addEventListener('click', e => {
  //get email and ps
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const uname = userName.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  //check validation
  promise.catch(e => emsg.innerHTML = e.message);
  promise.then(e => {
    emsg.innerHTML = "";
    var user = firebase.auth().currentUser;
    console.log(uname);
    user.updateProfile({
      name: uname,
    })
  });
});

//Add log out event
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);





  } else {
    console.log("not logged in");

  }
});


