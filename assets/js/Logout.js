var logoutLink = document.getElementById('logout');

logoutLink.onclick = function performLogout() {

    localStorage.removeItem('token');
    window.location.replace("login.html");


};

