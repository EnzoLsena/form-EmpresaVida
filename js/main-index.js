document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        authenticateUser(username, password);
    });

    function authenticateUser(username, password) {
        
        if (username === 'admin123' && password === '72ca8300') {
            alert('Login efetuado com sucesso!');
            
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    }
});



