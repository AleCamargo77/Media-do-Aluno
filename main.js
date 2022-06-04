//arrendondamento
//validação COM NOTA ZERO
//FORMA DE ABREVIAR A CONDIÇÃO FALSE
//BOOLEAN ???

function calcular() {
    const noteOne = parseFloat(document.getElementById('note1').value);
    const noteTwo = parseFloat(document.getElementById('note2').value);
    const noteThree = parseFloat(document.getElementById('note3').value);
    const noteFour = parseFloat(document.getElementById('note4').value);

    let isValid = validateNote(noteOne, noteTwo, noteThree, noteFour);

    if (isValid == true) {
        const noteFinal = Math.ceil((noteOne + noteTwo + noteThree + noteFour)/4).toFixed(2);
        const noteFinalConvert = parseFloat(noteFinal).toFixed(2);
        const classification = classifyNote(noteFinal);
        document.getElementById('result').innerText = (`A sua nota é ${noteFinalConvert}.${classification}`)
    }

    function validateNote(noteOne, noteTwo, noteThree, noteFour) {
        if (!noteOne || !noteTwo  || !noteThree || !noteFour) {
            alert('É preciso informar a nota.');
            return false;
        } 
        if (noteOne > 10 || noteTwo > 10 || noteThree > 10|| noteFour > 10) {
            alert('Insira um valor entre 0 e 10.');
            return false;
        }
        return true
    }

    function classifyNote(validateNote) {
        if (validateNote >= 7) {
            return 'Parabéns, você foi aprovado!';
        }
        else if (validateNote < 7 && validateNote >=4 ) {
            return 'Cuidado, você está de exame';
        }
        else if (validateNote < 4) {
            return 'Que pena, você já está reprovado.';
        }
    }
}