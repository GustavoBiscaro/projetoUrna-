
//Candidatos
const candidatos = [
    {id: 01, nome:'Felipo Lima', numeroEleitoral: 22, partido: 'PT(Partido Dos Trabalhadores)'},
    {id: 02, nome:'Guto, simplesmente', numeroEleitoral: 17, partido: 'Novo'},
    {id: 03, nome:'Isaac do Truco', numeroEleitoral: 42, partido: 'Frente Nacionalista'},
    {id: 04, nome:'Guigui Adams', numeroEleitoral: 69, partido: 'PCO'},
    {id: 04, nome:'Gustavin', numeroEleitoral: 7, partido: 'Mestre Do Capitalismo'}
];

function insert(num) {
    var number = document.getElementById('leitor').innerHTML;
    numeroEscolhido = number + num;
    document.getElementById('leitor').innerHTML = numeroEscolhido;
}

function corrige() {
    document.getElementById('leitor').innerHTML = "";
}

function resultadoFinal(numeroEleitoral) {
    document.getElementById('tela-candidato').innerHTML = numeroEscolhido;
}
