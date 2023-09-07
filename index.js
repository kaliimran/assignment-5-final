// Blog Input

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html'
})



// Calculation part

let calculationCount = 1;

document.getElementById('btn-triangle').addEventListener('click', function(){
    const trainer = getInputByElement('triangleB');
    const trainerB = getInputByElement('triangleH');
    const trainerCalculateString = (0.5 * trainer * trainerB).toFixed(2);
    const trainerCalculate = parseInt(trainerCalculateString);
    if(isNaN(trainer&&trainerB)){
        alert('Could You Please Input a Number');
    }
    else{
        const logic = getNameElement('triangle')
        const areaText = getNameElement('resultAreaText');
        const areaData = getNameElement('resultAreaData');
        const divContainerText = document.createElement('div');
        const divContainerData = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = calculationCount+'. '+logic.innerText;
        calculationCount++;

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate + ' cm²';
        divContainerText.appendChild(h2);
        divContainerData.appendChild(h3);

        areaText.appendChild(divContainerText);
        areaData.appendChild(divContainerData);



        valueClear('triangleB');
        valueClear('triangleH');

        const btn = getNameElement('btn-purpose');
        const convertM = getNameElement('btnConvert');
        const btnConvert = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.innerText = 'Convert to m²';

        btnConvert.appendChild(h4)

        convertM.appendChild(btnConvert);
        btn.appendChild(convertM);
        btn.style.backgroundColor = 'lightBlue'
        btn.style.color = 'white'
        btn.style.paddingTop = '5px';
        btn.style.paddingBottom = '5px';
        btn.style.paddingLeft = '5px';
        btn.style.paddingRight = '5px';
    }
});
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const trainer = getInputByElement('rectangleW');
    const trainerB = getInputByElement('rectangleL');
    const trainerCalculateString = (trainer * trainerB).toFixed(2);
    const trainerCalculate = parseInt(trainerCalculateString);
    if(isNaN(trainer&&trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('rectangle')
        const areaText = getNameElement('resultAreaText');
        const areaData = getNameElement('resultAreaData');
        const divContainerText = document.createElement('div');
        const divContainerData = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = calculationCount+'. '+logic.innerText;
        calculationCount++;

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate + ' cm²';
        divContainerText.appendChild(h2);
        divContainerData.appendChild(h3);

        areaText.appendChild(divContainerText);
        areaData.appendChild(divContainerData);



        valueClear('rectangleW');
        valueClear('rectangleL');

        const btn = getNameElement('btn-purpose');
        const convertM = getNameElement('btnConvert');
        const btnConvert = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.innerText = 'Convert to m²';

        btnConvert.appendChild(h4)

        convertM.appendChild(btnConvert);
        btn.appendChild(convertM);
        btn.style.backgroundColor = 'lightBlue'
        btn.style.color = 'white'
        btn.style.paddingTop = '5px';
        btn.style.paddingBottom = '5px';
        btn.style.paddingLeft = '5px';
        btn.style.paddingRight = '5px';


    }
});
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const trainer = getInputByElement('parallelogramB');
    const trainerB = getInputByElement('parallelogramH');
    const trainerCalculateString = (trainer * trainerB).toFixed(2);
    const trainerCalculate = parseInt(trainerCalculateString);
    if(isNaN(trainer&&trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('parallelogram')
        const areaText = getNameElement('resultAreaText');
        const areaData = getNameElement('resultAreaData');
        const divContainerText = document.createElement('div');
        const divContainerData = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = calculationCount+'. '+logic.innerText;
        calculationCount++;

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate + ' cm²';
        divContainerText.appendChild(h2);
        divContainerData.appendChild(h3);

        areaText.appendChild(divContainerText);
        areaData.appendChild(divContainerData);



        valueClear('parallelogramB');
        valueClear('parallelogramH');

        const btn = getNameElement('btn-purpose');
        const convertM = getNameElement('btnConvert');
        const btnConvert = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.innerText = 'Convert to m²';

        btnConvert.appendChild(h4)

        convertM.appendChild(btnConvert);
        btn.appendChild(convertM);
        btn.style.backgroundColor = 'lightBlue'
        btn.style.color = 'white'
        btn.style.paddingTop = '5px';
        btn.style.paddingBottom = '5px';
        btn.style.paddingLeft = '5px';
        btn.style.paddingRight = '5px';
    }
});
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const trainer = getInputByElement('rhombus1');
    const trainerB = getInputByElement('rhombus2');
    const trainerCalculateString = (0.5 * trainer * trainerB).toFixed(2);
    const trainerCalculate = parseInt(trainerCalculateString);
    if(isNaN(trainer&&trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('rhombus')
        const areaText = getNameElement('resultAreaText');
        const areaData = getNameElement('resultAreaData');
        const divContainerText = document.createElement('div');
        const divContainerData = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = calculationCount+'. '+logic.innerText;
        calculationCount++;

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate + ' cm²';
        divContainerText.appendChild(h2);
        divContainerData.appendChild(h3);

        areaText.appendChild(divContainerText);
        areaData.appendChild(divContainerData);



        valueClear('rhombus1');
        valueClear('rhombus2');

        const btn = getNameElement('btn-purpose');
        const convertM = getNameElement('btnConvert');
        const btnConvert = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.innerText = 'Convert to m²';

        btnConvert.appendChild(h4)

        convertM.appendChild(btnConvert);
        btn.appendChild(convertM);
        btn.style.backgroundColor = 'lightBlue'
        btn.style.color = 'white'
        btn.style.paddingTop = '5px';
        btn.style.paddingBottom = '5px';
        btn.style.paddingLeft = '5px';
        btn.style.paddingRight = '5px';
    }
});
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const trainer = getInputByElement('PentagonP');
    const trainerB = getInputByElement('PentagonB');
    const trainerCalculateString = (0.5 * trainer * trainerB).toFixed(2);
    const trainerCalculate = parseInt(trainerCalculateString);
    if(isNaN(trainer&&trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('pentagon')
        const areaText = getNameElement('resultAreaText');
        const areaData = getNameElement('resultAreaData');
        const divContainerText = document.createElement('div');
        const divContainerData = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = calculationCount+'. '+logic.innerText;
        calculationCount++;

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate + ' cm²';
        divContainerText.appendChild(h2);
        divContainerData.appendChild(h3);

        areaText.appendChild(divContainerText);
        areaData.appendChild(divContainerData);



        valueClear('PentagonP');
        valueClear('PentagonB');

        const btn = getNameElement('btn-purpose');
        const convertM = getNameElement('btnConvert');
        const btnConvert = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.innerText = 'Convert to m²';

        btnConvert.appendChild(h4)

        convertM.appendChild(btnConvert);
        btn.appendChild(convertM);
        btn.style.backgroundColor = 'lightBlue'
        btn.style.color = 'white'
        btn.style.paddingTop = '5px';
        btn.style.paddingBottom = '5px';
        btn.style.paddingLeft = '5px';
        btn.style.paddingRight = '5px';
    }
    
});
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const trainer = getInputByElement('ellipseA');
    const trainerB = getInputByElement('ellipseB');
    const trainerCalculateString = (3.14 * trainer * trainerB).toFixed(2);
    const trainerCalculate = parseInt(trainerCalculateString);
    if(isNaN(trainer&&trainerB)){
        alert('Could You Please Input a Number')
    }
    else{
        const logic = getNameElement('ellipse')
        const areaText = getNameElement('resultAreaText');
        const areaData = getNameElement('resultAreaData');
        const divContainerText = document.createElement('div');
        const divContainerData = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = calculationCount+'. '+logic.innerText;
        calculationCount++;

        const h3 = document.createElement('h3');
        h3.innerText = trainerCalculate + ' cm²';
        divContainerText.appendChild(h2);
        divContainerData.appendChild(h3);

        areaText.appendChild(divContainerText);
        areaData.appendChild(divContainerData);



        valueClear('ellipseA');
        valueClear('ellipseB');

        const btn = getNameElement('btn-purpose');
        const convertM = getNameElement('btnConvert');
        const btnConvert = document.createElement('div');

        const h4 = document.createElement('h4');
        h4.innerText = 'Convert to m²';

        btnConvert.appendChild(h4)

        convertM.appendChild(btnConvert);
        btn.appendChild(convertM);
        btn.style.backgroundColor = 'lightBlue'
        btn.style.color = 'white'
        btn.style.paddingTop = '5px';
        btn.style.paddingBottom = '5px';
        btn.style.paddingLeft = '5px';
        btn.style.paddingRight = '5px';
    }
});


// Button For Disabled

function checkMe(){
    const box = getNameElement('triangleCheck');
    const inputId = getNameElement('triangleB');
    const inputId2 = getNameElement('triangleH');

    if(box.checked === true){
        inputId.removeAttribute('disabled');
        inputId2.removeAttribute('disabled');
    }
    else{
        inputId.setAttribute('disabled', true);
        inputId2.setAttribute('disabled', true);
    }
}

/* Random Background Color Change */

document.getElementById('cardTriangle').addEventListener('mouseover', function(){
    colorRandom('cardTriangle');
});
document.getElementById('cardRectangle').addEventListener('mousemove', function(){
    colorRandom('cardRectangle');
});
document.getElementById('cardParallelogram').addEventListener('mousemove', function(){
    colorRandom('cardParallelogram');
});
document.getElementById('cardRhombus').addEventListener('mousemove', function(){
    colorRandom('cardRhombus');
});
document.getElementById('cardPentagon').addEventListener('mousemove', function(){
    colorRandom('cardPentagon');
});
document.getElementById('cardEllipse').addEventListener('mousemove', function(){
    colorRandom('cardEllipse');
});

