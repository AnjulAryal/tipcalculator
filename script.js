billAmount = document.querySelector(".billamount");
buttons = document.querySelectorAll(".button");
customBox = document.querySelector(".custom-box");
console.log(customBox)
peoples = document.querySelector(".people");
tipAmount = document.querySelector(".tip-amounts");
totalAmount = document.querySelector(".total-amounts");
submitBtn = document.querySelector(".reset-button");
errors = document.querySelector(".errors");
peopleContainer = document.querySelector(".people-container");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(peoples.value==="0" || peoples.value===0 || peoples.value===""){
            errors.classList.add("error");
            peopleContainer.classList.add("error-active");
            tipAmount.textContent = "$0.00";
            totalAmount.textContent ="$0.00";
        }else{
            errors.classList.remove("error");
            peopleContainer.classList.remove("error-active");
            percentage = button.getAttribute("percentage");
            perPersonAmount = parseFloat(billAmount.value)/parseFloat(peoples.value);
            perPersonTipAmount = perPersonAmount * (parseFloat(percentage)/parseFloat(100));
            console.log(perPersonTipAmount);
            perPersonTotalAmount = perPersonAmount + perPersonTipAmount;
            console.log(perPersonTotalAmount)
            tipAmount.textContent = "$"  + perPersonTipAmount.toFixed(2);
            totalAmount.textContent = "$"  + perPersonTotalAmount.toFixed(2);
        }
    })
    submitBtn.addEventListener("click",()=>{
        tipAmount.textContent = "$0.00";
        totalAmount.textContent ="$0.00";
        errors.classList.remove("error");
        peopleContainer.classList.remove("error-active");
        billAmount.value = "";
        peoples.value = "";
    })
    customBox.addEventListener("input",()=>{
        perPersonAmount = parseFloat(billAmount.value)/parseFloat(peoples.value);
        console.log(perPersonAmount);
        perPersonTipAmount = perPersonAmount * (parseFloat(customBox.value)/parseFloat(100));
        perPersonTotalAmount = perPersonAmount + perPersonTipAmount;
        tipAmount.textContent = "$"  + perPersonTipAmount.toFixed(2);
        totalAmount.textContent = "$"  + perPersonTotalAmount.toFixed(2);
    })
})
