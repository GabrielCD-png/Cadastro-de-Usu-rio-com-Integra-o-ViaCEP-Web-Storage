# 📍 Cadastro Inteligente com ViaCEP e LocalStorage

Este projeto é uma aplicação web interativa de cadastro de usuários. O foco principal é otimizar a experiência do usuário (UX) automatizando o preenchimento de dados de endereço e garantindo que as informações digitadas não sejam perdidas em caso de recarregamento acidental da página.

## 🚀 Funcionalidades

* **Autopreenchimento de Endereço**: Integração com a API pública do ViaCEP através da `Fetch API`. Ao digitar um CEP válido, os campos de Rua, Bairro, Cidade e Estado são preenchidos automaticamente e bloqueados para edição manual (`readonly`).
* **Persistência de Dados**: Utilização da `Web Storage API` (`localStorage`) para salvar o conteúdo de cada campo em tempo real a cada tecla digitada (evento `input`).
* **Recuperação Automática**: Ao carregar a página (`window.onload`), o sistema verifica o `localStorage` e restaura instantaneamente as informações previamente preenchidas pelo usuário.
* **Validação Básica e Tratamento de Erros**: O sistema limpa caracteres não numéricos do CEP, verifica se possui 8 dígitos antes de fazer a requisição, e exibe alertas caso o CEP não seja encontrado na base de dados ou ocorra erro na rede.

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estruturação de formulários, uso de atributos como `required`, `maxlength="8"` e `readonly` para controle de validação nativa.
* **CSS3**: Layout responsivo centralizado utilizando `Flexbox`, com estilização de inputs e botões para uma interface limpa e amigável.
* **JavaScript (Vanilla)**:
  * Consumo de APIs RESTful com `fetch()`, `Promises` (`.then`, `.catch`) e manipulação de respostas JSON.
  * Armazenamento local no navegador com `localStorage.setItem()` e `localStorage.getItem()`.
  * Escuta de eventos do DOM (`addEventListener`, `onload`, `blur`, `input`).

## 📖 Como Executar o Projeto

1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Digite o seu nome e um CEP válido (ex: 01001000).
4. Clique fora do campo de CEP e observe o endereço ser preenchido automaticamente.
5. Atualize a página (F5) para testar a persistência: seus dados continuarão lá!

---
Desenvolvido por Gabriel como parte do portfólio prático de estudos em Desenvolvimento Front-End na EBAC.
