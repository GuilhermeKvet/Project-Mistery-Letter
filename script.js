let input = document.getElementById('carta-texto');
let paragraph = document.getElementById('carta-gerada');
const buttonCreateLetter = document.getElementById('criar-carta');
let container = document.getElementById('container');
let counterLetter = document.getElementById('carta-contador');

function generationLetter() {

    buttonCreateLetter.addEventListener('click', function () {
        let misteryLetter = input.value.split(' ');
        if (input.value.length === 0 || !input.value.trim()) {
            paragraph.innerText = 'por favor, digite o conteúdo da carta.';
        } else {
            paragraph.innerText = null;
            for (let index = 0; index < misteryLetter.length; index += 1) {
                let spanElement = document.createElement('span');
                spanElement.innerText = misteryLetter[index];
                spanElement.className = randomStyles();
                paragraph.appendChild(spanElement);
                counterLetter.innerText = index + 1;
            }
        }
    })
}
generationLetter();

function randomStyles() {

    let styleGroup = ['newspaper', 'magazine1', 'magazine2'];
    let sizeGroup = ['medium', 'big', 'reallybig'];
    let rotateGroup = ['rotateleft', 'rotateright'];
    let inclineGroup = ['skewleft', 'skewright'];

    let classListArr = [];

    let style1 = Math.round(Math.random() * (styleGroup.length - 1));
    let style2 = Math.round(Math.random() * (sizeGroup.length - 1));
    let style3 = Math.round(Math.random() * (rotateGroup.length - 1));
    let style4 = Math.round(Math.random() * (inclineGroup.length - 1));

    let value1 = styleGroup[style1];
    let value2 = sizeGroup[style2];
    let value3 = rotateGroup[style3];
    let value4 = inclineGroup[style4];

    classListArr.push(value1, value2, value3, value4);

    return classListArr.join(' ');
}

function changeStyle() {

    container.addEventListener('click', function (event) {
        if (event.target.tagName == 'SPAN') {
            event.target.className = randomStyles();
        }
    })
}
changeStyle();





