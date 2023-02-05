/*//! ------cart item adding------

   document.getElementById("phoneAddButton").addEventListener('click',function(){    //fetching add button
    const phoneQuantity = document.getElementById("phoneQuantity");               //fetching quantity

    const currentPhoneQuantity = parseFloat(phoneQuantity.value);             //converting from string
    
    const phoneNewQuantity = currentPhoneQuantity + 1;                       //increasing by 1
    phoneQuantity.value = phoneNewQuantity;                                //assigning increased value to the input field
    
    const phoneTotalValue = phoneNewQuantity * 1219;                      //multiplying quantity by amount
      document.getElementById('phoneTotalValue').innerText = '$' + phoneTotalValue;  //assigning calculated value to totatl amount

    
 })
 //! ------cart item remove------
document.getElementById('phoneSubstractButton').addEventListener('click', function(){
   const phoneQuantity = document.getElementById('phoneQuantity');

   const currentPhoneQuantity = parseFloat(phoneQuantity.value);

   const phoneNewQuantity = currentPhoneQuantity - 1;
   phoneQuantity.value = phoneNewQuantity;

   const phoneTotalValue = phoneNewQuantity * 1219;
   document.getElementById('phoneTotalValue').innerText = '$' + phoneTotalValue;
})
*/

//! -------------------------Using function-----------------------------
//! ------cart item adding (PHONE)------

document.getElementById("phoneAddButton").addEventListener('click',function(){
  cartPhoneHandler(true); 
})

//! ------cart item remove------
document.getElementById('phoneSubstractButton').addEventListener('click', function(){
  cartPhoneHandler(false);
})
function cartPhoneHandler(bolean) {
   const phoneQuantity = document.getElementById('phoneQuantity');

  const currentPhoneQuantity = parseFloat(phoneQuantity.value);

  let phoneNewQuantity = currentPhoneQuantity;
  if(bolean == true){
   phoneNewQuantity =  currentPhoneQuantity + 1;
  }
  if(bolean == false && currentPhoneQuantity>0) {
   phoneNewQuantity =  currentPhoneQuantity - 1;
  }


  phoneQuantity.value = phoneNewQuantity;

  const phoneTotalValue = phoneNewQuantity * 1219;
  document.getElementById('phoneTotalValue').innerText = '$' + phoneTotalValue;
}

//! ------cart item adding (CASE)------
document.getElementById('caseAddButton').addEventListener('click', function(){
  cartCaseHandler(true);

})
 //! ------cart item remove------
document.getElementById('caseSubstractButton').addEventListener('click', function(){
  cartCaseHandler(false);
})

function cartCaseHandler(bolean) {
  const caseQuantity = document.getElementById('caseQuantity');
  const currentCaseQuantity = parseFloat(caseQuantity.value);

  let caseNewQuantity = currentCaseQuantity;
  if(bolean == true){
    caseNewQuantity = currentCaseQuantity + 1;
  }
  if(bolean == false && currentCaseQuantity>0){
    caseNewQuantity = currentCaseQuantity - 1;
  }

  caseQuantity.value = caseNewQuantity;

  const caseTotalValue = caseNewQuantity * 59;
  document.getElementById('caseTotal').innerText = caseTotalValue;

}





// console.log('got it');


