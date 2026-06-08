// 1. Capturamos todos os campos de input da tela
const inputs = document.querySelectorAll('input');
const cepInput = document.getElementById('cep');

// ==========================================
// REQUISITO: Restaurar os dados ao carregar
// ==========================================
// Quando a janela (window) terminar de carregar, rodamos essa função
window.onload = function() {
    inputs.forEach(input => {
        // Busca no Web Storage se existe algo salvo com o ID daquele input
        const valorSalvo = localStorage.getItem(input.id);
        
        // Se existir um valor salvo, preenchemos o campo com ele
        if (valorSalvo) {
            input.value = valorSalvo;
        }
    });
};

// ==========================================
// REQUISITO: Salvar os dados para não perder
// ==========================================
// Adicionamos um "ouvinte" em cada campo. Sempre que o usuário digitar algo ('input'), salvamos.
inputs.forEach(input => {
    input.addEventListener('input', () => {
        // localStorage.setItem guarda uma informação no navegador.
        // A "chave" é o ID do campo, e o "valor" é o texto digitado.
        localStorage.setItem(input.id, input.value);
    });
});

// ==========================================
// REQUISITO: Fetch API com ViaCEP
// ==========================================
// O evento 'blur' acontece quando o usuário clica fora do campo CEP após digitar
cepInput.addEventListener('blur', function() {
    // Removemos qualquer traço ou ponto que o usuário possa ter digitado
    const cepValor = cepInput.value.replace(/\D/g, '');

    // Verificamos se o CEP tem exatamente 8 números
    if (cepValor.length === 8) {
        const url = `https://viacep.com.br/ws/${cepValor}/json/`;

        fetch(url)
            .then(resposta => resposta.json())
            .then(dados => {
                if (dados.erro) {
                    alert("CEP não encontrado!");
                    return;
                }

                // Preenchemos os campos da tela com os dados vindos da API
                document.getElementById('rua').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('estado').value = dados.uf;

                // Como a API preencheu os campos sozinhos (sem o usuário digitar), 
                // precisamos mandar salvar no LocalStorage manualmente
                localStorage.setItem('rua', dados.logradouro);
                localStorage.setItem('bairro', dados.bairro);
                localStorage.setItem('cidade', dados.localidade);
                localStorage.setItem('estado', dados.uf);
            })
            .catch(erro => {
                console.error("Erro ao buscar o CEP:", erro);
                alert("Ocorreu um erro ao buscar o CEP.");
            });
    }
});