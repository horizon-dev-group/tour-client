document.getElementById('registerForm').addEventListener('submit', performRegister);
function performRegister(e){
    var resultElement = document.getElementById('postResultRegister');
    var name = document.getElementById('signup-username').value;

    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var password_confirm = document.getElementById('signup-password-confirm').value;
    var role= document.getElementById('signup-role').value;



    resultElement.innerHTML = '';


    const config = {
        headers: {
            'Content-Type': 'Application/json',

        }
    };

    const body = JSON.stringify({name, email, password, role});

    axios.post('https://tour-server-side.herokuapp.com/api/users',body,config)
        .then(function (response) {
            localStorage.setItem('token', response.data.token);
            if(response.status===200 && response.data.role==='Admin'){
                window.location.replace("Admin/admin/index.html")

            }
            else if(response.status===200){
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