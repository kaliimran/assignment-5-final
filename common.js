
function getInputByElement (element){
    const field = document.getElementById(element);
    const fieldString = field.value;
    const input = parseInt(fieldString);
    return input;
}


function getNameElement (event){
    const logic = document.getElementById(event);
    return logic
}

// Random Background Color

function colorRandom (color){
    const cardRandomElements = document.getElementById(color);
    const random = Math.floor(Math.random()*1000).toString(25);
    cardRandomElements.style.background = '#' + random;
}


function valueClear (clearValue){
    const clear = document.getElementById(clearValue);
    clear.value = ''
}