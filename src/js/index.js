// variáveis
import { inputFile, containerDragAndDrop, btnImages } from './variables.js';
import { onFocus, onLeave, inputFileHandler, buttonAction } from './input-file-logic.js';

// funcionalidade da imagem do usuário

containerDragAndDrop.addEventListener('dragenter', onFocus);
containerDragAndDrop.addEventListener('drop', onLeave);
containerDragAndDrop.addEventListener('dragend', onLeave);
containerDragAndDrop.addEventListener('dragleave', onLeave);

inputFile.addEventListener('change', event => {
    inputFileHandler.handleFile(event);
});

btnImages.forEach(button => {
    button.addEventListener('click', btnFather => {
        buttonAction(btnFather);
    });
});

// validação dos campos do formulário

const form = document.getElementById('my-form')

const formData = new FormData(form)
const dataToSave = {
    image: formData.get('file'),
    name: formData.get('name'),
    email: formData.get('email'),
    gitHubUser: formData.get('github-user')
}

form.onsubmit = (event) => {
    event.preventDefault()

}
