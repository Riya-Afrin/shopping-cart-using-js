/*//! ------cart item adding------1st way------

   document.getElementById("phoneAddButton").addEventListener('click',function(){    //fetching add button
    const phoneQuantity = document.getElementById("phoneQuantity");               //fetching quantity

    const currentPhoneQuantity = parseFloat(phoneQuantity.value);             //converting from string
    
    const phoneNewQuantity = currentPhoneQuantity + 1;                       //increasing by 1
    phoneQuantity.value = phoneNewQuantity;                                //assigning increased value to the input field
    
    const phoneTotal = phoneNewQuantity * 1219;                      //multiplying quantity by amount
      document.getElementById('phoneTotal').innerText = '$' + phoneTotal;  //assigning calculated value to totatl amount

    
 })
 //! ------cart item remove------
document.getElementById('phoneSubstractButton').addEventListener('click', function(){
   const phoneQuantity = document.getElementById('phoneQuantity');

   const currentPhoneQuantity = parseFloat(phoneQuantity.value);

   const phoneNewQuantity = currentPhoneQuantity - 1;
   phoneQuantity.value = phoneNewQuantity;

   const phoneTotal = phoneNewQuantity * 1219;
   document.getElementById('phoneTotal').innerText = '$' + phoneTotal;
})
*/

/*//! -------------------------Using function(merging adding & removing)---------------2nd way--------------
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

  const phoneTotal = phoneNewQuantity * 1219;
  document.getElementById('phoneTotal').innerText = '$' + phoneTotal;
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
*/

//! -------------------------Using function(merging both product)---------------3rd way--------------

function cartProductHandler(product, bolean) {
  const productQuantity = document.getElementById(product + 'Quantity');
  const currentProductQuantity = inputValue(product);
//add or remove
  let productNewQuantity = currentProductQuantity;
  if(bolean == true){
    productNewQuantity = currentProductQuantity + 1;
  }
  if(bolean == false && currentProductQuantity>0){
    productNewQuantity = currentProductQuantity - 1;
  }

  productQuantity.value = productNewQuantity;
//price
  let productTotal = 0;
  if(product == 'phone'){
    productTotal = productNewQuantity *1219;
  }
  if(product == 'case'){
    productTotal = productNewQuantity *59;
  }
  document.getElementById(product + 'Total').innerText = productTotal;
  
  subtotalCalculation();  //subtotal function called to connect both function
}

//! calculating subtotal
/*function subtotalCalculation() {
 const phoneInput = document.getElementById('phoneQuantity');
 const phoneCount = parseFloat(phoneInput.value);

 const caseInput = document.getElementById('caseQuantity');
 const caseCount = parseFloat(caseInput.value);

 const subtotalPrice = phoneCount*1219 + caseCount*59;
 document.getElementById('subtotalPrice').innerText = '$' + subtotalPrice;
 
}*/
//! OR
function subtotalCalculation() {
  
  const phoneCount = inputValue('phone');
  const caseCount = inputValue('case');
 
  const subtotalPrice = phoneCount*1219 + caseCount*59;
  document.getElementById('subtotalPrice').innerText = '$' + subtotalPrice;
 
  //tax calculation 
  const tax = Math.round(subtotalPrice * 0.1);
  document.getElementById('taxPrice').innerText = tax;
 
  //total calculation
  const total = subtotalPrice + tax;
  document.getElementById('totalPrice').innerText = total;
 }
function inputValue(product) {
  const productInput = document.getElementById(product + 'Quantity');
 const productCount = parseFloat(productInput.value);
 return productCount;   //returning so that subtotal can be calculated
}

// console.log('got it');


