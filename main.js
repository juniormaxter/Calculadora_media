const form = document.getElementById("form-atividade");
const imgAprovdo = '<img src ="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src ="./images/reprovado.png" alt="Emoji decepcionado" />';
let linhas = '';

form.addEventListener("submit" , function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

   

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovdo : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela= document.querySelector ('tbody');S
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';


    //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);//
});

