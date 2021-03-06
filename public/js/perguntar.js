var campo = document.querySelector('textarea')
campo.value = ''

var form = {
    textarea: true,
    select: true
}

function textareaForm() {
    var textareaPerguntar = document.getElementById('campo-perguntar')
    textareaPerguntar.addEventListener('keyup', () => {
        var valorTextarea = textareaPerguntar.value.trim()
        var spanAlertaText = textareaPerguntar.nextElementSibling

        form.textarea = false;
        btnEnviar()

        if (valorTextarea === '') {
            spanAlertaText.style.display = 'flex'
        } else if (valorTextarea.length < 7) {
            spanAlertaText.style.display = 'flex'
        } else {
            spanAlertaText.style.display = 'none'
            form.textarea = true;
        }
    })
}

function selectForm() {
    const hdSelect = (selectPerguntar) => {
        var selected = selectPerguntar.options[selectPerguntar.selectedIndex].index
        var spanAlertaSelect = selectPerguntar.nextElementSibling
        console.log(selected)

        btnEnviar()

        if (selected === 0) {
            spanAlertaSelect.style.display = 'flex';
            form.select = false;
        } else {
            spanAlertaSelect.style.display = 'none';
            form.select = false;
        }
    }
    var selectPerguntar = document.getElementById('select-perguntar');
    selectPerguntar.addEventListener('change', () => hdSelect(selectPerguntar))
    selectPerguntar.addEventListener('click', () => hdSelect(selectPerguntar))
}


function btnEnviar() {
    var botaoEnviar = document.getElementById('btn-enviar');

    if (form.textarea && !form.select) {
        botaoEnviar.removeAttribute('disabled');
    } else {
        botaoEnviar.setAttribute('disabled', true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    textareaForm()
    selectForm()
})
