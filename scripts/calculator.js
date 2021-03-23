function updateDisplay(newValue){
    var d = document.getElementById('display');
    var result = "";
 
    switch(newValue){
        case '0':
            d.innerHTML += newValue;
            break;
        case '1':
            d.innerHTML += newValue;
            break;
        case '2':
            d.innerHTML += newValue;
            break;
        case '3':
            d.innerHTML += newValue;
            break;
        case '4':
            d.innerHTML += newValue;
            break;
        case '5':
            d.innerHTML += newValue;
            break;
        case '6':
            d.innerHTML += newValue;
            break;
        case '7':
            d.innerHTML += newValue;
            break;
        case '8':
            d.innerHTML += newValue;
            break;
        case '9':
            d.innerHTML += newValue;
            break;
        case '+':
            if(newValue == " "){
            return;
        }
            else{
                d.innerHTML += newValue;
                break;
            }
        case '-':
            if(newValue == " "){
                return;
            }
                else{
                    d.innerHTML += newValue;
                    break;
                }
        case '*':
            if(newValue == " "){
                return;
            }
                else{
                    d.innerHTML += newValue;
                    break;
                }
        case '/':
            if(newValue == " "){
                return;
            }
                else{
                    d.innerHTML += newValue;
                    break;
                }
        case '=':
            result = eval(d.innerHTML);
            d.innerHTML = result;
            break;
        case 'AC':
            d.innerHTML = '';
            break;
    }
}