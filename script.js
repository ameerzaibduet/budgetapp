//higher scope veriable
    //for cart
    // var setDate = document.getElementById("CurrentDate");
    // var date = new Date();
    // var days = date.getDate() ;
    // var months = date.getMonth();
    // var years = date.getFullYear();
    // setDate.innerHTML = days + " - " + months +" - " + years;

var setBudget;
var setExpense;
var budget;
var setBalance;
var BalanceCal;
var ExpenseCal;
var count = 0;
var ExpensePercrnt;
var BalancePercrnt;
function colours(){
ExpenceColour =document.getElementsByValue(--Expence-color);
BalanceColour =document.getElementsByValue(--Balance-color);
if(ExpenseCal>=50){
  ExpenceColour ="Orange";
}
}

//function for set budget button.

function getbudget() {
  
  //fatch data from document
    if(document.getElementById("input").value===""){
      alert("Fields can not be empty");
    }
    else{
    budget = document.getElementById("input").value;
    setBudget = document.getElementById("Totalbudget");
    setExpense = document.getElementById("Totalexpance");
    setBalance = document.getElementById("Totalbalance");
    
    //displaying data

    setBudget.innerHTML = "Rs: " + budget;
    setExpense.innerHTML= 00;
    setBalance.innerHTML = budget - setExpense.innerHTML;

    //fatch data from document

    ExpensePercrnt = document.getElementById("ExpencePercrnt");
    BalancePercrnt = document.getElementById("BalancePercrnt");

    //calculations 

    ExpenseCal=(setExpense.innerHTML*100)/budget;
    ExpensePercrnt.innerHTML= ExpenseCal.toFixed(1)+"%";
    ExpensePercrnt.style.width =ExpenseCal+"%";
    BalanceCal=100-ExpenseCal;
    BalancePercrnt.innerHTML = BalanceCal.toFixed(1)+"%";
    BalancePercrnt.style.width = BalanceCal+"%";
    document.getElementById("input").value ="";
  }}


  //function for submit button:
  function submition(){
    if (document.getElementById("Amount").value ==="" || document.getElementById("tax").value === "") 
    {
      alert("Fields can not be empty");
    }
    if(isNaN(document.getElementById("Amount").value) === true || isNaN(document.getElementById("tax").value) === true){
     alert("Your value should be numeric: ")
    }
    else{
    var AmountData= document.getElementById("Amount").value;
    var taxData= document.getElementById("tax").value;

    setExpense.innerHTML = parseInt(setExpense.innerHTML) + parseInt(AmountData) + parseInt(taxData);
    setBalance.innerHTML = budget - setExpense.innerHTML;
    ExpenseCal = (setExpense.innerHTML*100)/budget;
    BalanceCal = 100 - ExpenseCal;

    ExpensePercrnt.innerHTML= ExpenseCal.toFixed(1)+"%";
    ExpensePercrnt.style.width =ExpenseCal+"%";
    BalancePercrnt.innerHTML = BalanceCal.toFixed(1)+"%";
    BalancePercrnt.style.width = BalanceCal+"%";
    //clear fields
    document.getElementById("Amount").value="";
    document.getElementById("tax").value = "";}
    
    count +=1;
    //for cart visibility
     cart1 = document.getElementById("list"+count);
     cart1.style.display="flex";
     var images = document.getElementById("selectbox").value
     document.getElementById("discription"+count).innerHTML = document.getElementById("selectbox").value + " Paid Bill";
     document.getElementById("image"+count).src= images+".png";
     document.getElementById("price"+count).innerHTML="Rs: "+ (parseInt(AmountData) + parseInt(taxData));
     document.getElementById("setdate"+count).innerHTML = new Date().getDate()+"/"+ new Date().getMonth() +"/"+new Date().getFullYear();
  }