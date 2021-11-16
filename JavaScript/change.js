const userBusinessChange = () => {
  const userBusiness = forms.userBusiness.value;
  let element0 = document.getElementById('userRetireAge');
  let element1 = document.getElementById('severancePay');

  if (userBusiness == 0) {
    element1.classList.add('hide');
    element0.classList.remove('hide');
  } else if (userBusiness == 1) {
    element0.classList.add('hide');
    element1.classList.remove('hide');
  } else {
    element0.classList.add('hide');
    element1.classList.add('hide');
  }
}

const spouseChange = () => {
  const spouse = forms.spouse.value;
  let element = document.getElementById('spouse');
  if (spouse == 0) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
}

const spouseBusinessChange = () => {
  const spouseBusiness = forms.spouseBusiness.value;
  let element = document.getElementById('spouse-retire-age')
  if (spouseBusiness == 0) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
}

let x = 0;
const childeNumberChange = () => {
  const childeNumber = forms.childeNumber.value;
  let element = document.getElementById('childe-number');
  
  if (x == 1) {
    let element2 = document.getElementById('childeNumber');
    element2.remove();
    x = 0;
  }

  if (0 < childeNumber) {
    element.insertAdjacentHTML(
      'beforeend',
      `<div id='childeNumber'></div>`
    )
    let element1 = document.getElementById('childeNumber');
    for (let i=1; i <= childeNumber; i++) {
      element1.insertAdjacentHTML(
        'beforeend',
        `<div><label for="childeAge">子供${i}の年齢：</label><input type="text" name="childeAge"></div>`
      )
    }
    x++;
  }  
}


const houseChange = () => {
  const house = forms.house.value;
  let element0 = document.getElementById('house0');
  let element1 = document.getElementById('house1');

  if (house == 0) {
    element1.classList.add('hide');
    element0.classList.remove('hide');
  } else {
    element0.classList.add('hide');
    element1.classList.remove('hide');
  }
}