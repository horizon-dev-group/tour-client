
document.getElementById('loginForm').addEventListener('submit', performLogin);


function performLogin(e) {
    var resultElement = document.getElementById('postResult');
    var email = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    resultElement.innerHTML = '';


    const config = {
        headers: {
            'Content-Type': 'Application/json',

        }
    };

    const body = JSON.stringify({email, password});

    axios.post('https://tour-server-side.herokuapp.com/api/auth',body,config)
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            if(response.status===200){
                window.location.replace("be_pages_dashboard.html")
            }

            // resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });

    e.preventDefault();
}


function generateSuccessHTMLOutput(response) {
    return  '<h4>Result</h4>' +
        '<h5>Status:</h5> ' +
        '<pre>' + response.status + ' ' + response.statusText +  'Status code is'+response.status+ '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
    return  '<h4>'+error.response.data.errors[0].msg+'</h4>';

}