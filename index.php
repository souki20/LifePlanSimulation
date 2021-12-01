<?php
session_start();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ライフプラン</title>
</head>
<body>
  <h1>ライフプランの診断結果は？</h1>

  <div>
    <a href="./form.php" onclick="pageMoveCount()">←入力項目に戻る</a>
  </div>

  <canvas  id="myChart">not supported...</canvas>


  <?php 
  $childeNumber = $_POST['childeNumber'];
  $childeAgeList = [];
  for ($i=1; $i<=$childeNumber; $i++) {
    ${"childeAge{$i}"} = $_POST["childeAge{$i}"];
    array_push($childeAgeList ,(int) ${"childeAge{$i}"});
  }

  $strings = [
    $_POST['userAge'],
    $_POST['userSex'],
    $_POST['userBusiness'],
    $_POST['userRetireAge'],
    $_POST['severancePay'],
    $_POST['userIncome'],
    $_POST['spouse'],
    $_POST['spouseAge'],
    $_POST['spouseBusiness'],
    $_POST['spouseRetireAge'],
    $_POST['spouseIncome'],
    $_POST['childeNumber'],
    $childeAgeList,
    $_POST['house'],
    $_POST['houseCostMonth'],
    $_POST['houseRepaymentMonth'],
    $_POST['houseLoanYears'],
    $_POST['communicationCostMonth'],
    $_POST['lifeCostMonth'],
    $_POST['insuranceCostMonth'],
    $_POST['utilityCostMonth'],
    $_POST['educationCostMonth'],
    $_POST['savingsPossibleMonth'],
    $_POST['nowSavings'],
  ];
  $jsonArray = json_encode($strings);


  $_SESSION['userAge'] = $_POST['userAge'];
  $_SESSION['userSex'] = $_POST['userSex'];
  $_SESSION['userBusiness'] = $_POST['userBusiness'];
  $_SESSION['userRetireAge'] = $_POST['userRetireAge'];
  $_SESSION['severancePay'] = $_POST['severancePay'];
  $_SESSION['userIncome'] = $_POST['userIncome'];
  $_SESSION['spouse'] = $_POST['spouse'];
  $_SESSION['spouseAge'] = $_POST['spouseAge'];
  $_SESSION['spouseBusiness'] = $_POST['spouseBusiness'];
  $_SESSION['spouseRetireAge'] = $_POST['spouseRetireAge'];
  $_SESSION['spouseIncome'] = $_POST['spouseIncome'];
  $_SESSION['childeNumber'] = $_POST['childeNumber'];

  $_SESSION['house'] = $_POST['house'];
  $_SESSION['houseCostMonth'] = $_POST['houseCostMonth'];
  $_SESSION['houseRepaymentMonth'] = $_POST['houseRepaymentMonth'];
  $_SESSION['houseLoanYears'] = $_POST['houseLoanYears'];
  $_SESSION['communicationCostMonth'] = $_POST['communicationCostMonth'];
  $_SESSION['lifeCostMonth'] = $_POST['lifeCostMonth'];
  $_SESSION['insuranceCostMonth'] = $_POST['insuranceCostMonth'];
  $_SESSION['utilityCostMonth'] = $_POST['utilityCostMonth'];
  $_SESSION['educationCostMonth'] = $_POST['educationCostMonth'];
  $_SESSION['savingsPossibleMonth'] = $_POST['savingsPossibleMonth'];
  $_SESSION['nowSavings'] = $_POST['nowSavings'];

  
  // $_SESSION['reset'] = $_POST['reset'];
  ?>


  <script type="text/javascript">
    var jsArray = <?= $jsonArray; ?>;
    var childeAgeList = []

    var userAge = parseFloat(jsArray[0]);
    var userSex = parseFloat(jsArray[1]);
    var userBusiness = parseFloat(jsArray[2]);
    var userRetireAge = parseFloat(jsArray[3]);
    var severancePay = parseFloat(jsArray[4]);
    var userIncome = parseFloat(jsArray[5]);

    var spouse = parseFloat(jsArray[6]);
    var spouseAge = parseFloat(jsArray[7]);
    var spouseBusiness = parseFloat(jsArray[8]);
    var spouseRetireAge = parseFloat(jsArray[9]);
    var spouseIncome = parseFloat(jsArray[10]);

    var childeNumber = parseFloat(jsArray[11]);
    var childeAgeList = jsArray[12];

    var house = parseFloat(jsArray[13]);
    var houseCostMonth = parseFloat(jsArray[14]);
    var houseRepaymentMonth = parseFloat(jsArray[15]);
    var houseLoanYears = parseFloat(jsArray[16]);
    
    var communicationCostMonth = parseFloat(jsArray[17]);
    var lifeCostMonth = parseFloat(jsArray[18]);
    var insuranceCostMonth = parseFloat(jsArray[19]);
    var utilityCostMonth = parseFloat(jsArray[20]);
    var educationCostMonth = parseFloat(jsArray[21]);
    
    var savingsPossibleMonth = parseFloat(jsArray[22]);
    var nowSavings = parseFloat(jsArray[23]);
  </script>

  <script src="path/to/my/store.legacy.min.js"></script>
  <script type="text/javascript">
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
  <!-- <script src="./JavaScript/change.js"></script> -->
  <script src="./JavaScript/index.js"></script>
  <!-- <script src="./JavaScript/dom.js"></script> -->

</body>
</html>