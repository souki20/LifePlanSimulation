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