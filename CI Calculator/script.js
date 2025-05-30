function calculate(){
    const principalAmount = document.getElementById("principalAmount");
    const interestAmount = document.getElementById("interestAmount");
    const years = document.getElementById("years");
    const amount = document.getElementById("amount");

    let principal = Number(principalAmount.value)
    let interest = Number(interestAmount.value / 100)
    let numofyears = Number(years.value)

    if(principal < 0 || isNaN(principal))
    {
        principal = 0
        principalAmount.value = 0;          //The input field value is set to 0, so the user sees a corrected input.
    }
    if(interest < 0 || isNaN(interest))
    {   
        interest = 0
        interestAmount.value = 0;
    }
    if(numofyears < 0 || isNaN(numofyears))
    {   
        numofyears = 0
        years.value = 0;
    }

    // Compound interest calculation (annual compounding)
    const total = principal * Math.pow(1 + interest, numofyears)
    
   // Compounding more than once per year: A = P * (1 + r/n)^(n*t)
   // const total = principal * Math.pow((1 + interest / 1), 1 * numofyears)
    
    amount.textContent = total.toLocaleString(undefined,
                                               {style: "currency", 
                                                currency: "CAD"
                                               } 
    )

}