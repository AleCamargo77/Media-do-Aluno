let frases = ["Que a FORÇA esteja com você!",
    "Desistir NUNCA foi uma opção.",
    "Nunca foi sorte, sempre foi DEUS."
];

function incentive() {
    let i = parseInt(Math.random() * 3);
    return frases[i];
}

document.getElementById('phrases').innerHTML = incentive();

function validateMaxGrades(lengthGrades) {
    return lengthGrades == 8;
}

function validateMinGrades(miniLimmit) {
    return miniLimmit == 1;
}

function createGrade() {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('grade-content');
    let grades = document.getElementById('grades');
    let inLimmit = validateMaxGrades(grades.children.length);
    if (inLimmit == true) {
        return alert('Número máximo de notas atingido');
    }
    let labelGrade = document.createElement('label');
    labelGrade.innerHTML = grades.children.length + 1 + 'ª nota';
    let addGrade = grades.children.length;
    labelGrade.classList.add('grade-item');
    let inputGrade = document.createElement('input');
    inputGrade.type = 'number';
    inputGrade.onchange = function () {
        validateGrade(inputGrade);
    };
    inputGrade.placeholder = "0 a 10";
    inputGrade.classList.add('grade-item-one');
    mainDiv.append(labelGrade, inputGrade);
    grades.append(mainDiv);
}


function removeGrade() {
    let minLimmit = validateMinGrades(grades.children.length);
    if (minLimmit == true) {
        return alert('Número mínimo de notas atingido');
    }
    let element = document.querySelector('.grade > *:last-child');
    element.remove();
}

function calculate() {
    let totalGrade = 0;
    let baseDiv = document.getElementById('grades');
    for (let index = 0; index < baseDiv.children.length; index++) {
        let childDiv = baseDiv.children[index].getElementsByTagName('input')[0];
        if (!childDiv.value) {
            return alert('Preencha os campos obrigatórios');
        } else {
            totalGrade += parseFloat(childDiv.value);
        }
    }

    let resultFinal = (totalGrade / baseDiv.children.length).toFixed(1);
    let result = document.getElementById('result');
    let classification = classifyNote(resultFinal);
    console.log(resultFinal);
    let exame = (10 - resultFinal).toFixed(1);
    result.style.color = classification.color;
    if (resultFinal >= 7 || resultFinal < 4) {
        result.innerText = (`A sua média é de ${resultFinal}.${classification.text}.`);
    } else
        result.innerText = (`A sua média é de ${resultFinal}.${classification.text}. E você precisa nota ${exame} no exame. Estude!`);
}

function classifyNote(validation) {
    if (validation >= 7) {
        return {
            color: "green",
            text: 'Parabéns, você foi aprovado!',
        };
    } else if (validation < 7 && validation >= 4) {
        return {
            color: 'orange',
            text: 'Você está de exame!',
        };
    } else if (validation < 4) {
        return {
            color: "red",
            text: "Que pena, você já está reprovado.",
        };
    }
}

function clearField() {
    let baseDiv = document.getElementById('grades');
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