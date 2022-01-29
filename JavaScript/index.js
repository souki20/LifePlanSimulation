// 教育費の計算
for (n = userAge; n < 90; n++) {
  totalEducationCostList.push(0);
}
if (0 < childeNumber) {
  totalEducationCostList[0] += educationCostYear;
  for (i = 0; i < childeNumber; i++) {
    let x = 0;
    for (k = childeAgeList[i]; k < 23; k++) {
      x++;
      totalEducationCostList[x] += aveEducationCost[k];
    }
  }
}


// 家賃の計算
if (house === 0) {
  for (i = userAge; i < 90; i++) {
    houseCostList.push(houseCostYear);
  }
} else if (house === 1) {
  let x = 0;
  for (i = userAge; i < 90; i++) {
    if (x < houseLoanYears) {
      houseCostList.push(houseRepaymentYear);
      x++;
    } else {
      houseCostList.push(0);
      x++;
    }
  }
}


// 貯蓄残高の計算関数
const savingsCal = () => {
  let savings = income - totalCost;
  if (savings <= savingsPossibleYear) {
    nowSavings += savings;
    savingsList.push(Math.round(nowSavings));
  } else {
    nowSavings += savingsPossibleYear;
    savingsList.push(Math.round(nowSavings));
  }
}
const savingsRetireCal = () => {
  let savings = income - totalCost;
  nowSavings += savings;
  savingsList.push(Math.round(nowSavings));
}


// 自営業者の収入計算関数
const userSelfemploy = () => {
  if (userAge <= userRetireAge) {
    userSelfemployIncomeList.push(userIncome);
    userIncome *= 1.02;
  } else {
    userSelfemployIncomeList.push(pension[spouseBusiness]);
  }
}
const spouseSelfemploy = () => {
  if (spouseAge <= spouseRetireAge) {
    spouseSelfemployIncomeList.push(spouseIncome);
    spouseIncome *= 1.02;
  } else {
    spouseSelfemployIncomeList.push(pension[spouseBusiness]);
  }
}


// 収入の計算関数
// const incomeCal = () => {
//   if (userBusiness === 0) {

//   }
// }


let count = 0;
for (i = userAge; i < 90; i++) {
  totalCost = (houseCostList[count] + communicationCostYear + lifeCostYear + insuranceCostYear + utilityCostYear + totalEducationCostList[count]);
  totalCostList.push(Math.round(totalCost));
  yearList.push(i);

  if (spouse === 0) {
    if ((userBusiness === 0) && (spouseBusiness === 0)) {
      userSelfemploy();
      spouseSelfemploy();
      income = userSelfemployIncomeList[count] + spouseSelfemployIncomeList[count];
      incomeList.push(Math.round(income));
      savingsCal();

    } else if ((userBusiness === 0) && (spouseBusiness !== 0)) {
      userSelfemploy();
      if (i <= 65) {
        income = userSelfemployIncomeList[count] + spouseIncome;
        incomeList.push(Math.round(income));
      } else if (65 < i) {
        income = userSelfemployIncomeList[count] + pension[spouseBusiness];
        incomeList.push(Math.round(income));
      }
      spouseIncome *= 1.02;
      savingsCal();

    } else if ((userBusiness !== 0) && (spouseBusiness === 0)) {
      spouseSelfemploy();
      if (i < 65) {
        income = userIncome + spouseSelfemployIncomeList[count];
        incomeList.push(Math.round(income));
        userIncome *= 1.02;
        savingsCal();
      } else if (i === 65) {
        if (userBusiness === 1) {
          income = severancePay + spouseSelfemployIncomeList[count];
          incomeList.push(Math.round(income));
          savingsRetireCal();
        } else if (userBusiness === 2) {
          income = userIncome + spouseSelfemployIncomeList[count];
          incomeList.push(Math.round(income));
          savingsCal();
        }
      } else if (65 < i) {
        income = pension[userBusiness] + spouseSelfemployIncomeList[count];
        incomeList.push(Math.round(income));
        savingsCal();
      }

    } else if ((userBusiness !== 0) && (spouseBusiness !== 0)) {
      if (i < 65) {
        income = userIncome + spouseIncome;
        incomeList.push(Math.round(income));
        userIncome *= 1.02;
        spouseIncome *= 1.02;
        savingsCal();
      } else if (i ===65) {
        if (userBusiness === 1) {
          income = severancePay + spouseIncome;
          incomeList.push(Math.round(income));
          savingsRetireCal();
        } else if (userBusiness === 2) {
          income = userIncome + spouseIncome;
          incomeList.push(Math.round(income));
          savingsCal();
        }
      } else if (65 < i) {
        income = pension[userBusiness] + pension[spouseBusiness];
        incomeList.push(Math.round(income));
        savingsCal();
      }
      // if ((i < 65) && (spouseAge < 65)) {
      //   income = userIncome + spouseIncome;
      //   incomeList.push(Math.round(income));
      //   userIncome *= 1.02;
      //   spouseIncome *= 1.02;
      //   savingsCal();
      // } else if ((i === 65) && (spouseAge < 65)) {
      //   if (userBusiness === 1) {
      //     income = severancePay + spouseIncome;
      //     incomeList.push(Math.round(income));
      //     spouseIncome *= 1.02;
      //     savingsRetireCal();
      //   } else if (userBusiness === 2) {
      //     income = userIncome + spouseIncome;
      //     incomeList.push(Math.round(income));
      //     userIncome *= 1.02;
      //     spouseIncome *= 1.02;
      //     savingsCal();
      //   }
      // } else if ((65 < i) && (spouseAge < 65)) {
      //   income = pension[userBusiness] + spouseIncome;
      //   incomeList.push(Math.round(income));
      //   spouseIncome *= 1.02;
      //   savingsCal();
      // } else if ((65 < i) && (spouseAge === 65)) {
      //   income = pension[userBusiness] + spouseIncome;
      //   incomeList.push(Math.round(income));
      //   savingsCal();
      // } else if ((i === 65) && (spouseAge === 65)) {
      //   if (userBusiness === 1) {
      //     income = severancePay + spouseIncome;
      //     incomeList.push(Math.round(income));
      //     savingsRetireCal();
      //   } else if (userBusiness === 2) {
      //     income = userIncome + spouseIncome;
      //     incomeList.push(Math.round(income));
      //     savingsCal();
      //   }
      // } else if ((i < 65) && (spouseAge === 65)) {
      //   income = userIncome + spouseIncome;
      //   incomeList.push(Math.round(income));
      //   userIncome *= 1.02;
      //   savingsCal();
      // } else if ((i < 65) && (65 < spouseAge)) {
      //   income = userIncome + pension[spouseBusiness];
      //   incomeList.push(Math.round(income));
      //   userIncome *= 1.02;
      //   savingsCal();
      // } else if ((i === 65) && (65 < spouseAge)) {
      //   if (userBusiness === 1) {
      //     income = severancePay + pension[spouseBusiness];
      //     incomeList.push(Math.round(income));
      //     savingsRetireCal();
      //   } else if (userBusiness === 2) {
      //     income = userIncome + pension[spouseBusiness];
      //     incomeList.push(Math.round(income));
      //     savingsCal();
      //   }
      // } else if ((65 < i) && (65 < spouseAge)) {
      //   income = pension[userBusiness] + pension[spouseBusiness];
      //   incomeList.push(Math.round(income));
      //   savingsCal();
      // }

    }
  } else if (spouse === 1) {
    if (userBusiness === 0) {
      userSelfemploy();
      income = userSelfemployIncomeList[count];
      incomeList.push(Math.round(income));
      savingsCal();
    } else if (userBusiness !== 0) {
      if (i < 65) {
        income = userIncome;
        incomeList.push(Math.round(income));
        userIncome *= 1.02;
        savingsCal();
      } else if (i === 65) {
        if (userBusiness === 1) {
          income = severancePay;
          incomeList.push(Math.round(income));
          savingsRetireCal();
        } else if (userBusiness === 2) {
          income = userIncome;
          incomeList.push(Math.round(income));
          savingsCal();
        }
      } else if (65 < i) {
        income = pension[userBusiness];
        incomeList.push(Math.round(income));
        savingsCal();
      }
    }
  }
  count++;
}