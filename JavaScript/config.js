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
let houseRepaymentYear = houseRepaymentMonth * 12;
let communicationCostYear = communicationCostMonth * 12;
let lifeCostYear = lifeCostMonth * 12;
let insuranceCostYear = insuranceCostMonth * 12;
let utilityCostYear = utilityCostMonth * 12;
let educationCostYear = educationCostMonth * 12;
let savingsPossibleYear = savingsPossibleMonth * 12;


let pension = {0:78.1700, 1:172.5132, 2:78.1700};
let aveEducationCost = {'0':0, '1':0, '2':0, '3':3.84, '4':58.5516, '5':60.4716, '6':62.3916, '7':43.6481, '8':45.5681, '9':47.4881, '10':49.4081, '11':51.3281, '12':53.2481, '13':71.8797, '14':73.7997, '15':75.7197, '16':125.7911, '17':127.7111, '18':129.6311, '19':116.6922, '20':78.5581, '21':78.5581, '22':78.5581};