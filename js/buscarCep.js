 document.getElementById('btnCEP').addEventListener('click', function () {
     const cep = document.getElementById('cep').value.replace(/\D/g, '');
     if (cep !== "") {
         const validacep = /^[0-9]{8}$/;
         if (validacep.test(cep)) {
             fetch(`https://viacep.com.br/ws/${cep}/json/`)
                 .then(response => response.json())
                 .then(data => {
                     if (!("erro" in data)) {
                         document.getElementById('logradouro').value = data.logradouro;
                         document.getElementById('bairro').value = data.bairro;
                         document.getElementById('cidade').value = data.localidade;
                         document.getElementById('uf').value = data.uf;
                     } else {
                         alert("CEP não encontrado.");
                         limparCampos();
                     }
                 })
                 .catch(() => alert("Erro ao buscar o CEP."));
         } else {
             alert("Formato de CEP inválido.");
             limparCampos();
         }
     } else {
         alert("Por favor, insira um CEP.");
         limparCampos();
     }
 });

 function limparCampos() {
     document.getElementById('logradouro').value = '';
     document.getElementById('bairro').value = '';
     document.getElementById('cidade').value = '';
     document.getElementById('uf').value = '';
 }