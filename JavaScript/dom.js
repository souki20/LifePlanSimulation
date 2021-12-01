var forms = document.forms.formItem;

const resetButton = () => {
  let userSexElements = document.getElementsByName('userSex');
  let userBusinessElements = document.getElementsByName('userBusiness');
  let spouseElements = document.getElementsByName('spouse');
  let spouseBusinessElements = document.getElementsByName('spouseBusiness')
  let houseElements = document.getElementsByName('house');

  forms.userAge.value = "";
  for (i=0; i<userSexElements.length; i++) {
    userSexElements[i].checked = false;
  }
  for (i=0; i<userBusinessElements.length; i++) {
    userBusinessElements[i].checked = false;
  }
  forms.userRetireAge.value = "";
  forms.severancePay.value = "";
  forms.userIncome.value = "";
  for (i=0; i<spouseElements.length; i++) {
    spouseElements[i].checked = false;
  }
  forms.spouseAge.value = "";
  for (i=0; i<spouseBusinessElements.length; i++) {
    spouseBusinessElements[i].checked = false;
  }
  forms.spouseRetireAge.value = "";
  forms.spouseIncome.value = "";
  forms.childeNumber.value = "";
  for (i=0; i<houseElements.length; i++) {
    houseElements[i].checked = false;
  }
  forms.houseCostMonth.value = "";
  forms.houseRepaymentMonth.value = "";
  forms.houseLoanYears.value = "";
  forms.communicationCostMonth.value = "";
  forms.lifeCostMonth.value = "";
  forms.insuranceCostMonth.value = "";
  forms.utilityCostMonth.value = "";
  forms.educationCostMonth.value = "";
  forms.savingsPossibleMonth.value = "";
  forms.nowSavings.value = "";

  location.reload();
}


const reset = document.getElementById('reset');
reset.addEventListener('click', resetButton);