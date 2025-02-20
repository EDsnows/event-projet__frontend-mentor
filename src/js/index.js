/*
campo input da imagem deve ser alterado para adicionar 3 novos elementos
    1- imagem do usuário que foi enviada (não fazer nada)

    2- botão para remover a imagem
        !! se o botão for clicado, a imagem que o usuário mandou deve ser removida e então voltar a como o campo input estava no seu estado "neutro"
    
    3- botão para trocar a imagem (terá o mesmo comportamento para caso o usuário esteja mandando a imagem pela primeira vez)
*/

// PRIMEIRO DESAFIO:
// o campo input img deve receber a imagem que o usuário envio e substituir a imagem "placeholder", porém só deve ser feita essa alteração caso a imagem for do formato .JPG ou .PNG e também, se seu tamanho for de no máximo de 500KB. A imagem substituída deve receber o mesmo padrão de estilização aplicada na imagem "placeholder"

const containerInputFile = document.querySelector('.container_input-avatar');
const inputAvatarArea = document.querySelector('#upload-avatar');
const containerImageAvatar = document.querySelector('.container_image-upload');

function onFocus() {
    containerInputFile.classList.add('active');
}

function onLeave() {
    containerInputFile.classList.remove('active');
}

containerInputFile.addEventListener('dragenter', onFocus);
containerInputFile.addEventListener('drop', onLeave);
containerInputFile.addEventListener('dragend', onLeave);
containerInputFile.addEventListener('dragleave', onLeave);

inputAvatarArea.addEventListener('change', event => {
    if (event.target.files.length > 0) {
        const type = event.files[0].type;
        const formats = ['image/jpg', 'image/png'];
        if (!formats.includes(type)) {
            alert('Esse formato não é permitido!');
            return;
        }

        const newImg = document.createElement('img');
        newImg.src = URL.createObjectURL(event.target.files[0]);
        newImg.alt = 'New image avatar';

        containerImageAvatar.replaceChild(newImg);
    }
});
