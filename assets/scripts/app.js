const defaultResult = 0;
let currentResult = defaultResult;
function add(){
    console.log("hi i am in!!")
    const calcDescription = `${currentResult} + ${parseInt(userInput.value)}`;
    currentResult = currentResult+parseInt(userInput.value)
    userInput.value=null;
    if(Number.isNaN(currentResult)){
        outputResult("invalid operends", '');
        currentResult = 0
        return;
    } else{
        console.log(currentResult)
        outputResult(currentResult, calcDescription);    
    }
}

function sub(){
    const calcDescription = `${currentResult} - ${parseInt(userInput.value)}`;
    currentResult = currentResult-parseInt(userInput.value)
    userInput.value=null;
    if(Number.isNaN(currentResult)){
        outputResult("invalid operends", '');
        currentResult = 0
        return;
    }
    outputResult(currentResult, calcDescription);
}

function mul(){
    const calcDescription = `${currentResult} * ${parseInt(userInput.value)}`;
    currentResult = currentResult*parseInt(userInput.value)
    userInput.value=null;
    if(Number.isNaN(currentResult)){
        outputResult("invalid operends", '');
        currentResult = 0
        return;
    }
    outputResult(currentResult, calcDescription);
}

function div(){
    const calcDescription = `${currentResult} / ${parseInt(userInput.value)}`;
    currentResult = currentResult/parseInt(userInput.value)
    userInput.value=null;
    if(Number.isNaN(currentResult)){
        outputResult("invalid operends", '');
        currentResult = 0
        return;
    }
    outputResult(currentResult, calcDescription);
}

function rem(){
    const calcDescription = `${currentResult} % ${parseInt(userInput.value)}`;
    currentResult = currentResult%parseInt(userInput.value)
    userInput.value=null;
    if(Number.isNaN(currentResult)){
        outputResult("invalid operends", '');
        currentResult = 0
        return;
    }
    outputResult(currentResult, calcDescription);
}

function pow(){
    const calcDescription = `${currentResult} ^ ${parseInt(userInput.value)}`;
    currentResult = currentResult**parseInt(userInput.value)
    userInput.value=null;
    if(Number.isNaN(currentResult)){
        outputResult("invalid operends", '');
        currentResult = 0
        return;
    }
    outputResult(currentResult, calcDescription);
}

function clear(){
    currentResult = 0;
    outputResult(currentResult, '');
}

function round(){
    outputResult(parseInt(currentResult), `RoundOf(${currentResult})`);
    currentResult = parseInt(currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);
reminderBtn.addEventListener('click',rem);
powerBtn.addEventListener('click',pow);
clearBtn.addEventListener('click',clear);
roundBtn.addEventListener('click',round);