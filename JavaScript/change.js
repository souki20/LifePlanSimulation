const userBusinessChange = () => {
  const userBusiness = forms.userBusiness.value;
  let element0 = document.getElementById('userRetireAge');
  let element1 = document.getElementById('severancePay');
  let element_0 = document.getElementById('userRetireAge0');
  let element_1 = document.getElementById('severancePay0');

  if (userBusiness == 0) {
    element1.classList.add('hide');
    // if (forms.severancePay.value !== 0) {
    //   element_1.value = 0;
    // }
    element0.classList.remove('hide');
    // if (forms.userRetireAge.value == 0) {
    //   element_0.value = "";
    // }
  } else if (userBusiness == 1) {
    element0.classList.add('hide');
    // if (forms.userRetireAge.value !== 0) {
    //   element_0.value = 0;
    // }
    element1.classList.remove('hide');
    // if (forms.severancePay.value == 0) {
    //   element_1.value = "";
    // }
  } else {
    element0.classList.add('hide');
    // if (forms.userRetireAge.value !== 0) {
    //   element_0.value = 0;
    // }
    element1.classList.add('hide');
    // if (forms.severancePay.value !== 0) {
    //   element_1.value = 0;
    // }
  }
}

const spouseChange = () => {
  const spouse = forms.spouse.value;
  let element = document.getElementById('spouse');
  let element_0 = document.getElementById('spouseAge0');
  let element_1 = document.getElementById('spouseBusiness0');
  let element_2 = document.getElementById('spouseIncome0');

  if (spouse == 0) {
    element.classList.remove('hide');
    // element_0.value = "";
    // element_1.value = "";
    // element_2.value = "";
  } else {
    element.classList.add('hide');
    // element_0.value = 0;
    // element_1.value = 3;
    // element_2.value = 0;
  }
}

const spouseBusinessChange = () => {
  const spouseBusiness = forms.spouseBusiness.value;
  let element = document.getElementById('spouseRetireAge');
  let element_0 = document.getElementById('spouseRetireAge0');

  if (spouseBusiness == 0) {
    element.classList.remove('hide');
    // element_0.value = "";
  } else {
    element.classList.add('hide');
    // element_0.value = 0;
  }
}

let x = 0;
const childeNumberChange = () => {
  const childeNumber = forms.childeNumber.value;
  let element = document.getElementById('childeNumber');
  let element0 = document.getElementById('educationCostMonth');
  let element_0 = document.getElementById('educationCostMonth0');
  
  if (childeNumber == 0) {
    element0.classList.add('hide');
    // element_0.value = 0;
  } else {
    element0.classList.remove('hide');
    // element_0.value = "";
  }
  
  if (x == 1) {
    let element1 = document.getElementById('childeAge');
    element1.remove();
    x = 0;
  }

  if (0 < childeNumber) {
    element.insertAdjacentHTML(
      'afterend',
      `<div id='childeAge'></div>`
    )
    let element1 = document.getElementById('childeAge');
    for (let i=1; i <= childeNumber; i++) {
      element1.insertAdjacentHTML(
        'beforeend',
        `<div class='box'><label for="childeAge" class='add-label'>子供${i}の年齢：</label><div class='add-input'><input type="text" name="childeAge${i}"></div></div>`
      )
    }
    x++;
  }  
}


const houseChange = () => {
  const house = forms.house.value;
  let element0 = document.getElementById('house0');
  let element1 = document.getElementById('house1');
  let element_0 = document.getElementById('houseCostMonth0');
  let element_1 = document.getElementById('houseRepaymentMonth0');
  let element_2 = document.getElementById('houseLoanYears0');


  if (house == 0) {
    element1.classList.add('hide');
    // element_1.value = 0;
    // element_2.value = 0;
    element0.classList.remove('hide');
    // element_0.value = "";
  } else {
    element0.classList.add('hide');
    // element_0.value = 0;
    element1.classList.remove('hide');
    // element_1.value = "";
    // element_2.value = "";
  }
}

// const submitData = () => {
//   // let houseCostMonth           = 0;
//   // let houseRepaymentMonth      = 0;
//   // let educationCostMonth       = 0;

//   const userAge                = forms.userAge.value;
//   const userSex                = forms.userSex.value;
//   const userBusiness           = forms.userBusiness.value;
//   const userRetireAge          = forms.userRetireAge.value;
//   const severancePay           = forms.severancePay.value;
//   let userIncome             = forms.userIncome.value;
//   const spouse                 = forms.spouse.value;
//   const spouseAge              = forms.spouseAge.value;
//   const spouseBusiness         = forms.spouseBusiness.value;
//   const spouseRetireAge        = forms.spouseRetireAge.value;
//   let spouseIncome           = forms.spouseIncome.value;
//   const childeNumber           = forms.childeNumber.value;
//   const house                  = forms.house.value;
//   const houseCostMonth         = forms.houseCostMonth.value;
//   const houseRepaymentMonth    = forms.houseRepaymentMonth.value;
//   const houseLoanYears         = forms.houseLoanYears.value;
//   const communicationCostMonth = forms.communicationCostMonth.value;
//   const lifeCostMonth          = forms.lifeCostMonth.value;
//   const insuranceCostMonth     = forms.insuranceCostMonth.value;
//   const utilityCostMonth       = forms.utilityCostMonth.value;
//   const educationCostMonth     = forms.educationCostMonth.value;
//   const savingsPossibleMonth   = forms.savingsPossibleMonth.value;
//   const nowSavings             = forms.nowSavings.value;
//   // var souki = 21;
//   // console.log('souki:',souki)


//   if (houseCostMonth == " ") {
//     houseCostMonth = 0;
//   }
//   if (houseRepaymentMonth == " ") {
//     houseRepaymentMonth = 0;
//   }
//   if (educationCostMonth == " ") {
//     educationCostMonth =0;
//   }

//   for (i=0; i<forms.childeAge.length; i++) {
//     childeAgeList.push(forms.childeAge[i]);
//   }
// }

{
  // souki = 20;
}

// var souki = 21;