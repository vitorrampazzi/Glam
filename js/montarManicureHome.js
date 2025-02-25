const divManicure = document.querySelector('#aparecerManicure');
let numeroc = 1

manicures.forEach(manicure => {
    {
        if (numeroc <= 6)
            divManicure.innerHTML += `    
        <div class="col-md-4 my-3">
        <div class="card bg-card p-4 rounded-4">
        <img src="${manicure.foto}" class="card-img-top rounded-2 mx-auto"
        alt="Manicure xpto">
        <div class = "card-body text-center text-light w-100">
        <p class="mb-0">${manicure.nome}</p>
        <p class = "mt-0 mb-4">${manicure.especialidade}</p> 
        <div class = "d-flex align-items-center justify-content-center">
        <a href = "#" class = "btn btn-outline-secondary mx-3 text-light modal-item"
        data-bs-toggle = "modal" data-bs-target = "#modal-modal"
        data-nome = "${manicure.nome}"
        data-img1 = "${manicure.foto_1}"
        data-img2 = "${manicure.foto_2}"
        data-img3 = "${manicure.foto_3}"
        data-img4 = "${manicure.foto_4}"
        data-shortbio = "${manicure.shortbio}"
        data-preco = "Preço médio : $${manicure.preco_medio}"
        data-avaliacao = "Avaliação: ${manicure.avaliacao}"> Detalhes </a>
        <a href = "reservar.html" class="btn btn-warning text-dark mx-3">Reservar</a>
        </div>
        </div>`;
    };
    numeroc++
});


document.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.classList.contains('modal-item')) {
        document.querySelector('#titulo').textContent = e.target.getAttribute('data-nome');
        document.querySelector('#img1').src = e.target.getAttribute('data-img1');
        document.querySelector('#img2').src = e.target.getAttribute('data-img2');
        document.querySelector('#img3').src = e.target.getAttribute('data-img3');
        document.querySelector('#img4').src = e.target.getAttribute('data-img4');
        document.querySelector('#shortbio').textContent = e.target.getAttribute('data-shortbio');
        document.querySelector('#preco').textContent = e.target.getAttribute('data-preco')
        document.querySelector('#avaliacao').textContent = e.target.getAttribute('data-avaliacao')
        const myModal = new bootstrap.Modal(document.getElementById('modal-modal'));
        myModal.show();
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('modal-modal');
    const modalInstance = new bootstrap.Modal(modalElement);

    modalElement.addEventListener('hidden.bs.modal', function () {
        // Remover backdrop
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        // Remover classes que impedem o scroll
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    });
});