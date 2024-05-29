document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        authenticateUser(username, password);
    });

    function authenticateUser(username, password) {
        
        if (username === 'admin' && password === 'admin123') {
            alert('Login bem-sucedido!');
            
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    }
});



