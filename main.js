//arrendondamento aqui e na Calculadora para dois digitos após a virgula
//falta fazer o calculo do exame
//validação COM NOTA ZERO
//FORMA DE ABREVIAR A CONDIÇÃO FALSE
//USUARIO INCLUIR NOTAS
//trocar texto em vermelho no resultado
// integração do arq js no HTML no final ou no começo com deffer
// Sistema de metas 
// Sistema de Login
// Loja Virtual x Landing Page




// VALIDAR ZERO E ALTERAR NOTE PRA GRADE

function calcular() {
    const gradeOne = parseFloat(document.getElementById('note1').value);
    const noteTwo = parseFloat(document.getElementById('note2').value);
    const noteThree = parseFloat(document.getElementById('note3').value);
    const noteFour = parseFloat(document.getElementById('note4').value);

    let isValid = validateNote(gradeOne, noteTwo, noteThree, noteFour);

    if (isValid) {
        const noteFinal = (gradeOne + noteTwo + noteThree + noteFour) / 4;
        const noteFinalConvert = parseFloat(noteFinal).toFixed(1);
        const classification = classifyNote(noteFinal);
        let result = document.getElementById('result');
        // result.innerText = (`A sua nota é ${noteFinalConvert}.${classification.text}`)
        result.innerText = (totalGrade / baseDiv.children.length);
        result.style.color = classification.color;
    }

    function validateNote(noteOne, noteTwo, noteThree, noteFour) {
        if (noteOne == null || !noteTwo || !noteThree || !noteFour) {
            alert('É preciso informar a nota.');
            return false;
        }
        if (noteOne > 10 || noteTwo > 10 || noteThree > 10 || noteFour > 10) {
            alert('Insira um valor entre 0 e 10.');
            return false;
        }
        return true;
    }

    function classifyNote(validateNote) {
        if (validateNote >= 7) {
            return {
                color: "green",
                text: 'Parabéns, você foi aprovado!'
            };
        } else if (validateNote < 7 && validateNote >= 4) {
            return {
                color: "orange",
                text: 'Cuidado, você está de exame!'
            };
        } else if (validateNote < 4) {
            return {
                color: "red",
                text: "Que pena, você já está reprovado."
            };
        }
    }
}



function createGrade() {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('noteOne');
    let labelGrade = document.createElement('label');
    labelGrade.innerHTML = "* Nota *";
    labelGrade.classList.add('noteItem');
    let inputGrade = document.createElement('input');
    inputGrade.placeholder = "0 a 10";
    inputGrade.classList.add('note1');
    mainDiv.append(labelGrade, inputGrade);
    // mainDiv.append(input);
    let baseDiv = document.getElementById('notes');
    baseDiv.append(mainDiv);
}

    function removeGrade(){
        let element = document.querySelector('.note > *:last-child');
        element.remove();

}


function calculate() {
    let totalGrade = 0;
    let baseDiv = document.getElementById('notes');
    for (let index = 0; index < baseDiv.children.length; index++) {
        let childDiv = baseDiv.children[index].getElementsByTagName('input')[0];
        if (!childDiv.value) {
            return alert('Preencha os campos obrigatórios');
        }

        // else if (index < 7) {     (!childDiv.value)
        //     return alert('Você atingiu o número máximo de notas');
        //     }
        else {
            totalGrade += parseFloat(childDiv.value);
        }
    }

    let resultFinal = (totalGrade / baseDiv.children.length).toFixed(1);
    let result = document.getElementById('result');
    var classification = classifyNote(resultFinal);
    console.log(resultFinal);
    let exame = (10 - resultFinal).toFixed(1);
    if (resultFinal >= 7 || resultFinal < 4) {
        result.innerText = (`A sua média é de ${resultFinal}.${classification.text}.`);
    } else
        result.innerText = (`A sua média é de ${resultFinal}.${classification.text}. E você precisa nota ${exame} no exame. Estude!`);
}

function classifyNote(validation) {
    if (validation >= 7) {
        return {
            color: "green",
            text: 'Parabéns, você foi aprovado!'
        };
    } else if (validation < 7 && validation >= 4) {
        return {
            color: 'orange',
            text: 'Você está de exame!',
        };
    } else if (validation < 4) {
        return {
            color: "red",
            text: "Que pena, você já está reprovado."
        };
    }
}


function clearField() {
    let baseDiv = document.getElementById('notes');
    for (let index = 0; index < baseDiv.children.length; index++) {
        let childDiv = baseDiv.children[index].getElementsByTagName('input')[0];
        childDiv.value = "";
        result.innerText = "";
    }
}

function validateGrade(grade) {
    if (grade.value > 10) {
        grade.value = 10;
    }
}