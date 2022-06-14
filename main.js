function createGrade() {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('noteOne');

    let baseDiv = document.getElementById('notes');
    let labelGrade = document.createElement('label');
    labelGrade.innerHTML = baseDiv.children.length + 1 + 'ª nota';
    let addGrade = baseDiv.children.length
    labelGrade.classList.add('noteItem');
    let inputGrade = document.createElement('input');
    // inputGrade.onchange.
    inputGrade.placeholder = "0 a 10";
    inputGrade.classList.add('note1');
    mainDiv.append(labelGrade, inputGrade);
    // mainDiv.append(input);
    baseDiv.append(mainDiv);
    while (addGrade > 7) {
        alert('Números máximo de notas atingido');
        return removeGrade();
    }
}

    function removeGrade() {
        let element = document.querySelector('.grade > *:last-child');
        element.remove();
    }

    function calculate() {
        let totalGrade = 0;
        let baseDiv = document.getElementById('notes');
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