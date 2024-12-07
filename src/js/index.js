const subCheckBox = document.getElementById("subCheckBox");
const MyBtn = document.getElementById("MyBtn");
const Visa = document.getElementById("Visa");
const Master = document.getElementById("Master");
const PayPal = document.getElementById("PayPal");
const myP = document.getElementById("myP");
const PayInfo = document.getElementById("PayInfo");

MyBtn.onclick = function(){
    if(subCheckBox.checked){
        myP.textContent = "Danke";
    }else{
        
        myP.textContent = "Subiscribe jetzt!!!";
    }
    if(Visa.checked){
        PayInfo.textContent = 'Du bezahlst jetzt mit Visa'
    }
    else if(Master.checked) {
        PayInfo.textContent = 'Du bezahlst jetzt mit Master Card'
    }
    else if(PayPal.checked) {
        PayInfo.textContent = 'Du bezahlst jetzt mit PayPal'
    }



}