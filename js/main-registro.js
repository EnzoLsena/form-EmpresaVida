document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const paciente = {
        nome: document.getElementById('nome').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        genero: document.getElementById('genero').value
    };

    // Recuperar ou inicializar o array de pacientes no localStorage
    let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.push(paciente);

    // Armazenar novamente o array atualizado no localStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    // Redirecionar para o dashboard
    window.location.href = 'dashboard.html';
});
