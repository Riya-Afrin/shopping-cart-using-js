// //! ------cart item adding or removing function------

   document.getElementById("phoneAddButton").addEventListener('click',function(){
    const phoneQuantity = document.getElementById("phoneQuantity");

    const convertPhoneQuantity = parseFloat(phoneQuantity.value);
    
    const increasedPhoneQuantity = convertPhoneQuantity + 1;
    phoneQuantity.value = increasedPhoneQuantity;
    
    // console.log(increasedQuantity);
 })

// console.log('got it');


