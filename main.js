/*//! ------cart item adding------

   document.getElementById("phoneAddButton").addEventListener('click',function(){
    const phoneQuantity = document.getElementById("phoneQuantity");

    const currentPhoneQuantity = parseFloat(phoneQuantity.value);
    
    const phoneNewQuantity = currentPhoneQuantity + 1;
    phoneQuantity.value = phoneNewQuantity;
    
    const phoneTotalValue = phoneNewQuantity * 1219;
      document.getElementById('phoneTotalValue').innerText = '$' + phoneTotalValue;

    
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
//! ------cart item adding------

document.getElementById("phoneAddButton").addEventListener('click',function(){
  cartItemHandler(true); 
})

//! ------cart item remove------
document.getElementById('phoneSubstractButton').addEventListener('click', function(){
  cartItemHandler(false);
})
function cartItemHandler(bolean) {
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





// console.log('got it');


