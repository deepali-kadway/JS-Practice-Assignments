function valueConvert(){
    const inputvalue = document.getElementById("inputvalue").value;
    const dollarstocents = document.getElementById("dollarstocents");
    const centstodollars = document.getElementById("centstodollars");
    const result = document.getElementById("result");

    if(dollarstocents.checked){

        if(inputvalue === "" || isNaN(inputvalue || inputvalue < 0)){
            result.textContent = `Please enter a valid number.`;
        }
        else{
            const cents = (inputvalue * 100).toFixed(2);
            result.textContent = `${inputvalue}$ is equal to ${cents}¢.`;
        }
    }

    if(centstodollars.checked){

        if(inputvalue === "" || isNaN(inputvalue || inputvalue < 0)){
            result.textContent = `Please enter a valid number.`;
        }
        else{
            const dollars = (inputvalue / 100).toFixed(2);
            result.textContent = `${inputvalue}¢ is equal to ${dollars}$.`;
        }
    }

}