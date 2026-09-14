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
    const cepsemhifem = campocep.value.replace (/\D/g, '')

    if (cepsemhifem.length <= 5) {
        campocep.value = cepsemhifem
        return
    }

    if (cepsemhifem.length > 5 && cepsemhifem.length <= 8) {
        campocep.value = `${cepsemhifem.slice(0, 5)}-${cepsemhifem.slice(5, 8)}`
    }


    console.log(cepsemhifem);

    if (cepsemhifem.length ===8) {
        statuscep.textContent = 'Buscando endereço'
       
        const dados = await buscarcep(cepsemhifem);

        if (dados.erro) { statuscep.textContent = 'CEP não encontrado'
            return
        }
        
        camporua.value = dados.logradouro
        campobairro.value = dados.bairro
        campocidade.value = dados.localidade
        campoestado.value = dados.uf
        
        statuscep.textContent = 'Endereço encontrado'

        console.log(dados);
    }
    
});

