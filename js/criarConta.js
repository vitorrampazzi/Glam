document.querySelector('#criarConta').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Sua conta foi criada!!!!');
    this.reset();
    window.location.href = './index.html';
})