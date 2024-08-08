var btnOpenModal = document.querySelectorAll('#btnCadaster');
btnOpenModal.forEach(openE1 => openE1.addEventListener('click', openModal));

function openModal(e){
    var modalContainer = document.querySelector('#modalContainer');
    modalContainer.classList.add('visivel');
}

var btnCloseModal = document.querySelector('#btnClose');
btnCloseModal.addEventListener('click', closeModal);

function closeModal(e){
    var modalContainer = document.querySelector('#modalContainer');
    modalContainer.classList.remove('visivel');
}
