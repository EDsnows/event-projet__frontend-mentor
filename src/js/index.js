// variáveis
const containerDragAndDrop = document.querySelector('.container_input-avatar');
const inputFile = document.querySelector('#upload-avatar');
const containerImageAvatar = document.querySelector('.container_image-upload');

const textInfoActions = document.querySelector('.text-info-actions');
const btnImages = document.querySelectorAll('button[type="button"]');

const imgBackup = document.querySelector('.image-default');

// funcionalidade da imagem do usuário

function onFocus() {
    containerDragAndDrop.classList.add('active');
}

function onLeave() {
    containerDragAndDrop.classList.remove('active');
}

containerDragAndDrop.addEventListener('dragenter', onFocus);
containerDragAndDrop.addEventListener('drop', onLeave);
containerDragAndDrop.addEventListener('dragend', onLeave);
containerDragAndDrop.addEventListener('dragleave', onLeave);

inputFile.addEventListener('change', event => {
    console.log('entrou no evento');
    const file = event.target.files[0];
    const type = file.type;
    const formats = ['image/jpeg', 'image/png'];
    if (!formats.includes(type)) {
        alert('Esse formato não é permitido!');
        return;
    }

    const maxSizeInBytes = 500 * 1024;
    if (file.size > maxSizeInBytes) {
        alert('O arquivo precisa ser menos que 500KB');
        return;
    }

    const newImg = document.createElement('img');
    newImg.src = URL.createObjectURL(file);
    newImg.alt = 'New image avatar';
    newImg.setAttribute('class', 'new-img');

    textInfoActions.classList.remove('active');
    btnImages.forEach(button => {
        button.classList.add('active');
    });

    containerImageAvatar.replaceChild(newImg, containerImageAvatar.children[0]);
});

btnImages[0].addEventListener('click', () => {
    containerImageAvatar.replaceChild(
        imgBackup,
        containerImageAvatar.children[0]
    );

    btnImages.forEach(button => {
        button.classList.remove('active');
    });
    textInfoActions.classList.add('active');

    inputFile.value = '';
});

btnImages[1].addEventListener('click', () => {
    inputFile.click();
});
