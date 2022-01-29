const userBusinessChange = () => {
  let userBusiness = forms.userBusiness.value;
  let element0 = document.getElementById('userRetireAge');
  let element1 = document.getElementById('severancePay');
  // let element_0 = document.getElementById('userRetireAge0');
  // let element_1 = document.getElementById('severancePay0');

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
  let spouse = forms.spouse.value;
  let element = document.getElementById('spouse');
  // let element_0 = document.getElementById('spouseAge0');
  // let element_1 = document.getElementById('spouseBusiness0');
  // let element_2 = document.getElementById('spouseIncome0');

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
  // let element_0 = document.getElementById('spouseRetireAge0');

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
  // let element_0 = document.getElementById('educationCostMonth0');
  
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
        `<div class='box'><label for="childeAge" class='add-label'>子供${i}の年齢：</label><div class='add-input'><input type='text' name="childeAge${i}"></div></div>`
      )
    }
    x++;
  }  
}


const houseChange = () => {
  const house = forms.house.value;
  let element0 = document.getElementById('house0');
  let element1 = document.getElementById('house1');
  // let element_0 = document.getElementById('houseCostMonth0');
  // let element_1 = document.getElementById('houseRepaymentMonth0');
  // let element_2 = document.getElementById('houseLoanYears0');


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



const eventUserBusinessChange = document.getElementById('userBusinessChange');
const eventSpouseChange = document.getElementById('spouseChange');
const eventSpouseBusinessChange = document.getElementById('spouseBusinessChange');
const eventChildeNumber = document.getElementById('childeNumber');
const eventHouseChange = document.getElementById('houseChange');


eventUserBusinessChange.addEventListener('change', userBusinessChange);
eventSpouseChange.addEventListener('change', spouseChange);
eventSpouseBusinessChange.addEventListener('change',spouseBusinessChange);
eventChildeNumber.addEventListener('change', childeNumberChange);
eventHouseChange.addEventListener('change', houseChange);