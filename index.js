// 訪問者の年齢、性別、収入、職業、勇退年齢
// 性別は、0:男性、1:女性、3:その他
// 職業は、0:自営業、1:会社員、2:専業主婦
let userAge = 35;
let userSex = 0;
let userIncome = 500;
let userBusiness = 1;
let userRetireAge = 70;

// spouseは配偶者、0:あり、0:なし
let spouse = 0;
let spouseAge = 30;
// let spouseSex = 0;
let spouseIncome = 300;
let spouseBusiness = 1;
let spouseRetireAge = 60;

let childeNumber = 1;
let childeAgeList = [];
childeAgeList[0] = 5;
childeAgeList[1] = 5;

// houseは、0:賃貸、1:持ち家
// 家賃(住居費返済額)、ローン返済年数
let house = 0;
let houseCostMonth = 25;
// let houseRepaymentMonth = 20;
let houseLoanYears = 30;

// 通信費、生活費、保険料、水道光熱費、教育費
let communicationCostMonth= 5;
let lifeCostMonth = 20;
let insuranceCostMonth = 3;
let utilityCostMonth = 5; 
let educationCostMonth = 5;

// 貯蓄可能額、退職金、現在の貯金額
let savingsPossibleMonth = 10;
let severancePay = 200;
let nowSavings = 100;


// 年数、収入リスト、全教育費リスト
// 全出費リスト、貯金残高、住居費リスト、保険料リスト
let yearList = [];
let incomeList = [];
let totalEducationCostList = [];
let totalCostList = [];
let savingsList = [];
let houseCostList = [];
// let insuranceCostList = [];
let userSelfemployIncomeList = [];
let spouseSelfemployIncomeList = [];


let totalCost = 0;
let income = 0;
let savings = 0;


// 月額→年額
let houseCostYear = houseCostMonth * 12;
// let houseRepaymentYear = houseRepaymentMonth * 12;
let communicationCostYear = communicationCostMonth * 12;
let lifeCostYear = lifeCostMonth * 12;
let insuranceCostYear = insuranceCostMonth * 12;
let utilityCostYear = utilityCostMonth * 12;
let educationCostYear = educationCostMonth * 12;
let savingsPossibleYear = savingsPossibleMonth * 12;


let pension = {0:78.1700, 1:172.5132, 2:78.1700};
let aveEducationCost = {'0':0, '1':0, '2':0, '3':3.84, '4':58.5516, '5':60.4716, '6':62.3916, '7':43.6481, '8':45.5681, '9':47.4881, '10':49.4081, '11':51.3281, '12':53.2481, '13':71.8797, '14':73.7997, '15':75.7197, '16':125.7911, '17':127.7111, '18':129.6311, '19':116.6922, '20':78.5581, '21':78.5581, '22':78.5581};


// 教育費の計算
for (n = userAge; n < 90; n++) {
  totalEducationCostList.push(0);
}
totalEducationCostList[0] += educationCostYear;
for (i = 0; i < childeNumber; i++) {
  let x = 0;
  for (k = childeAgeList[i]; k < 23; k++) {
    x++;
    totalEducationCostList[x] += aveEducationCost[k];
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
      houseCostList.push(houseCostYear);
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
const incomeCal = () => {
  if (userBusiness === 0) {

  }
}


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



let leftMax = incomeList.concat(totalCostList).reduce(function(a,b) {
  return Math.max(a,b);
})
let rightMax = 0;
let savingsListMax = savingsList.reduce(function(a,b) {
  return Math.max(a,b);
})
let savingsListMin = savingsList.reduce(function(a,b) {
  return Math.min(a,b);
})

if (savingsListMin < 0) {
  savingsListMin = -(savingsListMin);
  if (savingsListMax < savingsListMin) {
    rightMax = savingsListMin;
  } else {
    rightMax = savingsListMax;
  }
} else {
  rightMax = savingsListMax;
}

const graphMain = () => {
  'use strict';

  let type = 'bar';

  let data = {
    labels: yearList,
    datasets: [{
      label: '収入',
      data: incomeList,
      backgroundColor: 'orange',
      yAxisID: 'balanceAmountAxes'
    }, {
      label: '支出',
      data: totalCostList,
      yAxisID: 'balanceAmountAxes'
    },{
      label: '貯蓄残高',
      data: savingsList,
      type: 'line',
      borderColor: 'lightblue',
      backgroundColor: 'lightblue',
      fill: false,
      yAxisID: 'savingsBalanceAxes'
    }]
  }


  let options = {
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: -(leftMax),
          suggestedMax: leftMax,
          callback: function(value, index, values) {
            return value + '(万円)';
          },
        },
        scaleLabel: {
          display: true,
          labelString:'収入額,支出額',
          fontSize: 18,
        },
        id: 'balanceAmountAxes',
        type: 'linear',
        positons: 'left',
      },{
        ticks: {
          // min: right_min,
          // max: right_max,
          suggestedMin: -(rightMax),
          suggestedMax: rightMax,
          callback: function(value, index, values) {
            return value + '(万円)';
          }
        },
        scaleLabel: {
          display: true,
          labelString: '貯蓄残高',
          fontSize: 19,
        },
        id: 'savingsBalanceAxes',
        type: 'linear',
        position: 'right',
        zeroLineColor: "black",
        gridLines: {
          display: false,
        },
      }]
    },
    title: {
      display: true,
      text: '年齢',
      fontSize: 13,
      position: 'bottom'
    }
  }

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options
  });


}
graphMain();