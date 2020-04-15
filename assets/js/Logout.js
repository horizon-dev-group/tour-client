var logoutLink = document.getElementById('logout');

logoutLink.onclick = function performLogout() {

    localStorage.removeItem('token');
    window.location.replace("https://tour-client.herokuapp.com/login.html");


};

