const auth = firebase.auth();

// signup user
const signUpButton =  document.querySelector('#signup-user');
const signupemail = document.querySelector('#signup-id');
const signuppassword = document.querySelector('#signup-password');
const signUpForm = document.querySelector('#signup-form');
const signInForm = document.querySelector('#login-form');


signUpButton.addEventListener('click', ()=>{    
    let email = signupemail.value;
    let password = signuppassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    signUpForm.reset();
});

// signin user
const signInButton =  document.querySelector('#signin-user');
const signinemail = document.querySelector('#signin-id');
const signinpassword = document.querySelector('#signin-password');

signInButton.addEventListener('click', ()=>{
    let email = signinemail.value;
    let password = signinpassword.value;
    
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    signInForm.reset();
});

// signout user
const logOutButton = document.querySelector('#logout-button');

logOutButton.addEventListener('click',()=>{
    auth.signOut();
})


// user state

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        console.log('User logged in!');
      var uid = user.uid;
      // ...
    } else {
        console.log('User logged out!');
    }
  });

// dispay buttons on user state
// buttons
const loginButton = document.querySelector('#login-button');
const signupButton = document.querySelector('#signup-button');
const userButton = document.querySelector('#user-button');
const showLeftBar = document.querySelector('#show-side-bar');


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        loginButton.style.display="none";
        signupButton.style.display="none";
        userButton.style.display="block";
        showLeftBar.style.display="block";
        logOutButton.style.display="block";
        
    } else {
        loginButton.style.display="block";
        signupButton.style.display="block";
        userButton.style.display="none";
        showLeftBar.style.display="none";
        logOutButton.style.display="none";
    }
  });

// display content on user state
const homePage = document.querySelector('#starting-page');
const taskDisplay = document.querySelector('#display-task');
const leftbar = document.querySelector('#leftbar');
const userSection = document.querySelector('#user');
const centerContainer = document.querySelector('#center-container');
const EditProfile = document.querySelector('#edit-profile');

const editprofileButton = document.querySelector('#edit-profile-button');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        
        
    } else {
        centerContainer.style.width="100%";
        taskDisplay.style.display="none";
        leftbar.style.display="none";
        userSection.style.display="none";
    }
  });

// user page content

const userNameText = document.querySelector('#user-name');
const userNameEdit = document.querySelector('#user-name-edit');
const passwordEdit = document.querySelector('#password-edit');
const submitPassword = document.querySelector('#submit-password');
const submitName = document.querySelector('#submit-name');


const userEmailText = document.querySelector('#user-email');
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        let user = firebase.auth().currentUser;
        // change name
        submitName.addEventListener('click',()=>{
            let nameValue = userNameEdit.value;
            user.updateProfile({
                displayName: nameValue
            });
            
        });
        // change password
        submitPassword.addEventListener('click',()=>{
            let passwordValue = passwordEdit.value;
            user.updatePassword(passwordValue);
        });
        
        const userEmail = user.email;
        userEmailText.innerHTML="Email&nbsp; : &nbsp;&nbsp;&nbsp;"+userEmail;
        const userName = user.displayName;
            userNameText.innerHTML="Name&nbsp;: &nbsp;&nbsp;&nbsp;"+userName;

        
    } else {
    }
  });

