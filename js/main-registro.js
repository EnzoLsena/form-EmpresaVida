document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const endereco = document.getElementById('endereco').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const genero = document.getElementById('genero').value;

        // Adicione aqui a lógica para processar os dados do formulário, por exemplo, enviando para um servidor
        console.log('Dados do Paciente:', { nome, dataNascimento, endereco, telefone, email, genero });

        alert('Paciente cadastrado com sucesso!');
        // Aqui você pode limpar o formulário ou redirecionar o usuário
        cadastroForm.reset();
    });
});