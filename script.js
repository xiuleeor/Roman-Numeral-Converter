const NO_VALID_NUMBER_MESSAGE = "Please enter a valid number";
const NUMBER_LESS_THAN_1_MESSAGE = "Please enter a number greater than or equal to 1";
const NUMBER_GREATER_THAN_3999_MESSAGE = "Please enter a number less than or equal to 3999";
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

function convertArabicToRoman(num) {
  let romanNumber = "";
  let transformNumb = num;
  while (transformNumb > 0) {
    switch (true) {
      case (transformNumb >= 1000):
        romanNumber = romanNumber + "M";
        transformNumb -=1000;
        break;
      case (transformNumb < 1000 && transformNumb >= 900):
        romanNumber = romanNumber + "CM";
        transformNumb -=900;
        break;
      case (transformNumb < 900 &&  transformNumb >= 500):
        romanNumber = romanNumber + "D";
        transformNumb -=500;
        break;
      case (transformNumb < 500 &&  transformNumb >= 400):
        romanNumber = romanNumber + "CD";
        transformNumb -=400;
        break;
      case (transformNumb < 400 &&  transformNumb >= 100):
        romanNumber = romanNumber + "C";
        transformNumb -=100;
        break;  
      case (transformNumb < 100 &&  transformNumb >= 90):
        romanNumber = romanNumber + "XC";
        transformNumb -=90;
        break;
      case (transformNumb < 90 &&  transformNumb >= 50):
        romanNumber = romanNumber + "L";
        transformNumb -=50;
        break;
      case (transformNumb < 50 &&  transformNumb >= 40):
        romanNumber = romanNumber + "XL";
        transformNumb -=40;
        break;
      case (transformNumb < 40 &&  transformNumb >= 10):
        romanNumber = romanNumber + "X";
        transformNumb -=10;
        break;
      case (transformNumb < 10 &&  transformNumb >= 9):
        romanNumber = romanNumber + "IX";
        transformNumb -=9;
        break;
      case (transformNumb < 9 &&  transformNumb >= 5):
        romanNumber = romanNumber + "V";
        transformNumb -=5;
        break; 
      case (transformNumb < 5 &&  transformNumb >= 4):
        romanNumber = romanNumber + "IV";
        transformNumb -=4;
        break;
      case (transformNumb < 4 &&  transformNumb >= 1):
        romanNumber = romanNumber + "I";
        transformNumb -=1;
        break;
      default:
        break;
    }
  }
  return romanNumber
}

function convertionEvnt() {
  let num = number.value;
  if (num === "") {
    output.textContent = NO_VALID_NUMBER_MESSAGE;
    output.classList?.remove('converted');
    output.classList.add('error');
    return
  }
  if (num < 1) {
    output.textContent = NUMBER_LESS_THAN_1_MESSAGE;
    output.classList?.remove('converted');
    output.classList.add('error');
    return
  }
  if(num > 3999){
    output.textContent = NUMBER_GREATER_THAN_3999_MESSAGE;
    output.classList?.remove('converted');
    output.classList.add('error');
    return
  }
  let arabicNumber = convertArabicToRoman(num);
  output.innerHTML = arabicNumber;
  output.classList?.remove('error');
  output.classList.add('converted');
}
convertBtn.addEventListener("click", convertionEvnt)