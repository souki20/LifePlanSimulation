{
  // 訪問者の年齢、性別、収入、職業、勇退年齢
  // 性別は、0:男性、1:女性、3:その他
  // 職業は、0:自営業、1:会社員、2:専業主婦
  let userAge = 50;
  let userSex = 0;
  let userIncome = 700;
  let userBusiness = 1;
  let userRetireAge = 70;

  // spouseは配偶者、0:あり、0:なし
  let spouse = 1;
  let spouseAge = 65;
  // let spouseSex = 0;
  let spouseIncome = 600;
  let spouseBusiness = 1;
  let spouseRetireAge = 70;

  let childeNumber = 2;
  let childeAgeList = [];
  childeAgeList[0] = 21;
  childeAgeList[1] = 17;

  // houseは、0:賃貸、1:持ち家
  // 家賃(住居費返済額)、ローン返済年数
  let house = 0;
  let houseCostMonth = 25;
  // let houseRepaymentMonth = 20;
  let houseLoanYears = 30;

  // 通信費、生活費、保険料、水道光熱費、教育費
  let communicationCostMonth= 3;
  let lifeCostMonth = 20;
  let insuranceCostMonth = 3;
  let utilityCostMonth = 5; 
  let educationCostMonth = 17;

  // 貯蓄可能額、退職金、現在の貯金額
  let savingsPossibleMonth = 10;
  let severancePay = 200;
  let nowSavings = 100;


  // 年数、収入リスト、教育費リスト、全教育入リスト
  // 全出費リスト、貯金残高、住居費リスト、保険料リスト
  let year = [];
  let incomeList = [];
  let totalEducationCostList = [];
  let totalCostList = [];
  let savingsList = [];
  let houseCostList = [];
  let insuranceCostList = [];


  // 月額→年額
  let houseCostYear = houseCostMonth * 12;
  let houseRepaymentYear = houseRepaymentMonth * 12;
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
      totalEducationCostList[x] += Math.round(aveEducationCost[k]);
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


  


}