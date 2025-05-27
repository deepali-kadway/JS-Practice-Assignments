const textbox = document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFarenheit.checked){
          temp = textbox.value;
          temp = temp * 9/5 + 32;
          result.textContent = `${textbox.value}°C is equal to ${temp.toFixed(2)}°F`;
    }
    else if(toCelsius.checked){
            temp = textbox.value;
            temp = (temp - 32) * 5/9;
            result.textContent = `${textbox.value}°F is equal to ${temp.toFixed(2)}°C`;
    }
    else{
        result.textContent = "Please select a conversion option.";
    }
}