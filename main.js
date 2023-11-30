document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputNome = document.getElementById('nome');
        const inputNumero = document.getElementById('numero');

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        const tabelaCorpo = document.querySelector('tbody');
        tabelaCorpo.innerHTML += linha;

        inputNome.value = '';
        inputNumero.value = '';
    });
});
