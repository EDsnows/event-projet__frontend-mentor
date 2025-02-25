import { containerDragAndDrop, inputFile, containerImageAvatar, textInfoActions, btnImages, imgBackup } from './variables.js';

function onFocus() {
    containerDragAndDrop.classList.add('active');
}

function onLeave() {
    containerDragAndDrop.classList.remove('active');
}

const inputFileHandler = {
    maxSizeInBytes: 500 * 1024,
    allowedFormats: ['image/jpeg', 'image/png'],

    handleFile(event) {
        if (event.target.files.length > 1) {
            alert('somente uma única imagem pode ser selecionada');
            return;
        }

        const file = event.target.files[0];
        const type = file.type;

        if (!this.allowedFormats.includes(type)) {
            alert('Esse formato não é permitido!');
            return;
        }

        if (file.size > this.maxSizeInBytes) {
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
    }
};

const buttonAction = btnFather => {
    if (btnFather.target.innerHTML === 'Change image') {
        inputFile.click();
    }

    if (btnFather.target.innerHTML === 'Remove image') {
        containerImageAvatar.replaceChild(
            imgBackup,
            containerImageAvatar.children[0]
        );

        btnImages.forEach(button => {
            button.classList.remove('active');
        });
        textInfoActions.classList.add('active');

        inputFile.value = '';
    }
};

export { onLeave, onFocus, inputFileHandler, buttonAction };
