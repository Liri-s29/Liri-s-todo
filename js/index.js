
// to change the content in the screen

// to change the leftbar display

const closeLeftBar = document.querySelector('#close-side-bar');

showLeftBar.addEventListener('click',()=>{
    showLeftBar.style.display="none";
    leftbar.style.display="block"
    centerContainer.style.width="82%";
    
});
closeLeftBar.addEventListener('click',()=>{
    showLeftBar.style.display="block";
    leftbar.style.display="none"
    centerContainer.style.width="100%";
});



// divs of center-container

const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const addTask = document.querySelector('#add-task');
const addNote = document.querySelector('#add-note');



// buttons
const aboutButton = document.querySelector('#about-button');
const addTaskButton = document.querySelector('#add-task-button');
const yourTaskButton = document.querySelector('#your-task-button');
const addNoteButton = document.querySelector('#add-note-button');
const submitTaskButton = document.querySelector('#submit-task-button');

const signUpUserButton =  document.querySelector('#signup-user');
const signInUserButton =  document.querySelector('#signin-user');


// Assign the content 
let displayOn = homePage;
let displayOff;

let button = document.querySelectorAll('.button');
let n = document.querySelectorAll('.button').length;


aboutButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = homePage;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

loginButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = login;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

signupButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = signup;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

userButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = userSection;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

yourTaskButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = taskDisplay;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

addTaskButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = addTask;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

submitTaskButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = taskDisplay;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

signInUserButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = userSection;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

submitPassword.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = userSection;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

submitName.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = userSection;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

editprofileButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = EditProfile;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

signUpUserButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = EditProfile;
    displayOff.style.display="none";
    displayOn.style.display="block";
});

logOutButton.addEventListener('click',() =>{
    displayOff = displayOn;
    displayOn = homePage;
    displayOff.style.display="none";
    displayOn.style.display="block";
});




//  To get the input from the task and note forms and make it appear 
const taskList = document.querySelector('#task-list');
const noteList = document.querySelector('#note-list');



let addTaskForm = document.querySelector('#add-task-form');
let addNoteForm = document.querySelector('#add-note-form');

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let taskNameValue = document.querySelector('#task-name-value');

     addList(taskNameValue,'none');
    addTaskForm.reset();
}) ;
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let noteNameValue = document.querySelector('#note-name-value');

     addList('none',noteNameValue);
    addNoteForm.reset();
}) ;
function addList(taskNameValue,noteNameValue){
    const addDiv = document.createElement('div');
    const addName = document.createElement('h4');
    const addCross = document.createElement('h4');
    addDiv.setAttribute('class','task-li');
    addName.setAttribute('class','list-heading');
    addCross.setAttribute('class','list-cross');
    addCross.setAttribute('id','list-cross');
    addDiv.appendChild(addName);
    addDiv.appendChild(addCross);
    addCross.innerText ="X";

    if (taskNameValue != 'none'){
        
    addName.innerText = taskNameValue.value;
    taskList.appendChild(addDiv);
    }
    else{
        addName.innerText = noteNameValue.value;
    noteList.appendChild(addDiv);

    }
    $('.list-cross').click(() =>{
        let deleteList = $('.list-cross').parent();
        deleteList.remove();
    });
    
}








    

