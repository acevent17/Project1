const loginButton = document.getElementById('loginSubmit');
const loginHeader = document.getElementById('loginHeader');
const navBar = document.getElementById('navBar');


// hides login menu when login button is pressed.
// need to update this to be if correct user info and password are entered
function hideLogin(){
    const usernameInput = document.getElementById('loginUsername').value;
    const passwordInput = document.getElementById('loginPassword').value;
    
    if(usernameInput == '' || passwordInput == '' ){
        alert('Both username and password must be filled out');
        return false;
        
    } else{
        showNavBar();
    }

    // get username and password from database
    // if(loginUsername === username && loginPassword === password){
    //      Add validation functionality

    const login = document.getElementById('login');
    login.style.display = 'none';

    // } else if(loginUsername)
    //else {
    // console.log('Incorrect Username or Password')   
    //}

}

// shows login when logout button is clicked
function showLogin(){
    login.style.display = 'flex'
    hideNavBar();
}

// shows navbar when login button is clicked
function showNavBar(){
    navBar.style.display = 'block';
}

function hideNavBar(){
    navBar.style.display = 'none';
}


/* Probably will use later.
 * This could be used to toggle some button later
 *
 *
 *  function toggleDisplay(){
 *        const login = document.getElementById('login');
 *       if (login.style.display === 'none'){
 *         login.style.display = 'block';
 *       } else {
 *            login.style.display = 'none';
 *       }
 *   }
 */