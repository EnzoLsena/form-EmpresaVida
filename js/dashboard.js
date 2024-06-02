document.addEventListener('DOMContentLoaded', function() {
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

    const tableBody = document.querySelector('#patientsTable tbody');
    pacientes.forEach(paciente => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${paciente.nome}</td>
            <td>${paciente.dataNascimento}</td>
            <td>${paciente.endereco}</td>
            <td>${paciente.telefone}</td>
            <td>${paciente.email}</td>
            <td>${paciente.genero}</td>
        `;

        tableBody.appendChild(row);
    });
});
