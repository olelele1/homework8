function showresult(calc){
var n1=parseFloat(document.getElementById('num1').value);
var n2=parseFloat(document.getElementById('num2').value);
var result;
var calc;

switch(calc)
	{
	case '1':
		result=n1-n2;
		break;
	case '2':
		result=n1+n2;
		break;
	case '3':
        if(n2===0){
        result="На нуль ділити не можна)))";
        }
        else {
            result=n1/n2;
        }
		break;
	case '4':
		result=n1*n2;
		break;
	case '5':
		result=n2*100/n1;
		break;
    case '6':
        result=Math.pow(n1,n2);
		break;
    case '7':
        result=Math.sqrt(n1);
        break;
    case '8':
        result=Math.log(n1);
        break;
    }
document.getElementById('result').value=result;
}