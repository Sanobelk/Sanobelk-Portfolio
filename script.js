"use strict";

/* Bottom Right Task-bar Real Time*/

let taskBarClock = document.getElementById('taskbar-time');

setInterval(() =>{
    let d = new Date();
    taskBarClock.innerHTML = d.toLocaleTimeString();
},1000);


const startButton = document.querySelector('nav');

/*Show the Menu after clicking start*/

startButton.addEventListener('click',function()
{
    menuToggle();
});


function menuToggle(){
    let menu =  document.getElementById('start-menu-container');
    menu.classList.toggle('hidden');
    startButton.classList.toggle('menu-active');
    menu.style.zIndex = '100';
}


///////////////////////*Menu Buttons*///////////////////////


/*About Button*/

let menu_about_button = document.getElementById('about-button');

menu_about_button.addEventListener('click',function(){

    let container = document.getElementById('about-container');

    container.classList.toggle('hidden');
    document.getElementById('start-menu-container').classList.toggle('hidden');
});


/*My Work Button*/

let menu_mywork_button = document.getElementById('mywork-button');

menu_mywork_button.addEventListener('click',function(){
    let container = document.getElementById('mywork-container');
    container.classList.toggle('hidden');
    document.getElementById('start-menu-container').classList.toggle('hidden');
});


/*Resources Button*/ 

let resources_button = document.getElementById('resources-button');

resources_button.addEventListener('click',function(){
    let container = document.getElementById('resources-container');
    container.classList.toggle('hidden');
    document.getElementById('start-menu-container').classList.toggle('hidden');
});


/*Github Button */

/*Contact Button */ 



///////////////////////*About Window*///////////////////////


/*Close Button*/

const about_close_button = document.getElementById('about_close_button');

about_close_button.addEventListener('click',function(){
    let container = document.getElementById('about-container');
    container.classList.toggle('hidden');
});

/*Maximize Button*/

const about_maximize_button = document.getElementById('about_maximize_button');

about_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('about-container');

    if(container.classList.contains('window-max')){
        container.style.left = 500 + 'px';
        container.style.bottom = 300 + 'px';
        container.style.width = 600 + 'px';
        container.style.height =  600 + 'px';
        container.querySelector('.desktop-window-topbar ul').style.height='';
        container.classList.remove('window-max');

    }else{
        container.style.left = 0;
        container.style.bottom = 0;
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = -100;
    container.classList.add('window-max');
    container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
    }
});


///////////////////////*My Work*///////////////////////


/*Close Button*/
const mywork_close_button = document.getElementById('mywork_close_button');
mywork_close_button.addEventListener('click',function(){
    let container = document.getElementById('mywork-container');
    container.classList.toggle('hidden');
});

/*Maximize Button*/ 

const mywork_maximize_button = document.getElementById('mywork_maximize_button');

mywork_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('mywork-container');

    if(container.classList.contains('window-max')){
        container.style.left = 100 + 'px';
        container.style.bottom = 200 + 'px';
        container.style.width = 500 + 'px';
        container.style.height =  600 + 'px';
        container.querySelector('.desktop-window-topbar ul').style.height='';
        container.classList.remove('window-max');

    }else{
        container.style.left = 0;
        container.style.bottom = 0;
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = -100;
    container.classList.add('window-max');
    container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
    }
});







///////////////////////*RESOURCES*///////////////////////


/*Close Button*/
const resources_close_button = document.getElementById('resources_close_button');

resources_close_button.addEventListener('click',function(){
    let container = document.getElementById('resources-container');
    container.classList.toggle('hidden');
});


/*Maximize Button*/ 

const resources_maximize_button = document.getElementById('resources_maximize_button');

resources_maximize_button.addEventListener('click',function(){


    let container = document.getElementById('resources-container');

    if(container.classList.contains('window-max')){
        container.style.left = 700 + 'px';
        container.style.bottom = 100 + 'px';
        container.style.width = 900 + 'px';
        container.style.height =  600 + 'px';
        container.querySelector('.desktop-window-topbar ul').style.height='';
        container.classList.remove('window-max');

    }else{
        container.style.left = 0;
        container.style.bottom = 0;
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = -100;
    container.classList.add('window-max');
    container.querySelector('.desktop-window-topbar ul').style.height=30 + 'px';
    }
});

/*Login Home Screen*/


/*  

 </div>
                <div id="login-middle-right">
                    <p>Please Login</p>
                    <input type="text" id="username" placeholder=""><br>
                    <input type="text" id="password" placeholder="">
                    <button value="enter" id="login_button">Enter</button>
                </div>
            </div>



*/

/*Login Function*/ 

let login_username = document.getElementById('username')
let login_password = document.getElementById('password')
let login_submit = document.getElementById('login_button');

let username = '';
let password = '';

let taskbar = document.querySelector('header');

login_submit.addEventListener('click',function(){
    if(login_username.value == username && login_password.value == password){
        let login_audio = new Audio("login_sound.mp3");
        login_audio.volume = 1;
        login_audio.play();

        login_username.disabled=true;
        login_password.disabled=true;
        //document.getElementById('login-message').innerHTML = 'Logging In...';
        setTimeout(() =>{
            document.getElementById('logon_screen').style.display='none';
        },0); //2000
        setTimeout(()=>{
            taskbar.style.display='flex';
        },0); //4000

    }else{
        login_username.style.border='2px solid red';
        login_password.style.border='2px solid red';
        alert('Incorrect Credentials.');
        
    }
});

/*Log Out from Menu */ 

const logout_button = document.getElementById('logoff-button');

logout_button.addEventListener('click',function(){
    document.getElementById('logon_screen').style.display='grid';
    let logoff_audio = new Audio('logoff_sound.mp3');
    let menu =  document.getElementById('start-menu-container');
    menu.classList.toggle('hidden');
    logoff_audio.volume = 1;
    logoff_audio.play();
        login_username.disabled=false;
        login_password.disabled=false;
});

