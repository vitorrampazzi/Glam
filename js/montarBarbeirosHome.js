const divBarbeiro = document.querySelector('#aparecerBarbeiro');

let i = 1;
barbeiros.forEach(barbeiro => {
    if (i <= 6) {

        divBarbeiro.innerHTML += `    
        <div class="col-md-4 my-3">
        
            <div class = "card bg-card p-4 rounded-2 text-center">
                <img src="${barbeiro.foto}" class="mx-auto rounded"
                alt="barbeiro xpto">
                <div class = "card-body text-center text-light w-100">
                <p class="mb-0">${barbeiro.nome}</p>
                <p class="mt-0 mb-4">${barbeiro.especialidade}</p> 
                <div class = "d-flex align-items-center justify-content-center">
                <a href = "#"
                class = "btn btn-outline-secondary mx-3 text-light modal-item"
                data-bs-toggle = "modal"
                data-bs-target = "#modal-modal"
                data-nome = "${barbeiro.nome}"
                data-img1 = "${barbeiro.foto_1}"
                data-img2 = "${barbeiro.foto_2}"
                data-img3 = "${barbeiro.foto_3}"
                data-img4 = "${barbeiro.foto_4}"    
                data-shortbio = "${barbeiro.shortbio}"
                data-preco = "Preço médio : $${barbeiro.preco_medio}"
                data-avaliacao = "Avaliação: ${barbeiro.avaliacao}"> Detalhes </a>
                <a href = "reservar.html" class="btn btn-warning text-dark mx-3">Reservar</a>
            </div>
        </div>`;
    };
    i++;
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
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    });
});