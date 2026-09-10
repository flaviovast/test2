const camponome = document.querySelector('#nome')
const campoemail = document.querySelector('#email')
const compotelefone =document.querySelector('#telefone')
const campocep = document.querySelector('#cep')
const camporua = document.querySelector('#endereco')
const camponumero = document.querySelector('#numero')
const campobairro = document.querySelector('#bairro')
const campocidade = document.querySelector('#cidade')
const campoestado = document.querySelector('#estado')
const statuscep = document.querySelector('#status-cep')



async function buscarcep(cep){
    const resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
    );

    const dados = await resposta.json();

    return dados;
}


campocep.addEventListener('input', async function(){
    const cepsemhifem = campocep.value.replace ('-','')

    console.log(cepsemhifem);

    if (cepsemhifem.length ===8) {
        statuscep.textContent = 'Buscando endereço'
       
        const dados = await buscarcep(cepsemhifem);

        statuscep.textContent = 'Endereço encontrado'

        console.log(dados);
    }
    
});

