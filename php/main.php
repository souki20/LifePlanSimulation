<?php
session_start();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/main.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>ライフプラン</title>
</head>
<body>
  <h1>ライフプランの診断結果</h1>

  <div>
    <a href="../index.php">←入力項目に戻る</a>
  </div>

  <canvas  id="myChart">not supported...</canvas>


  <?php 
  $childeNumber = $_POST['childeNumber'];
  $childeAgeList = [];
  for ($i=1; $i<=$childeNumber; $i++) {
    ${"childeAge{$i}"} = $_POST["childeAge{$i}"];
    array_push($childeAgeList ,(int) ${"childeAge{$i}"});
  }


  $_SESSION['itemList'] = array('userAge', 'userSex', 'userBusiness', 'userRetireAge', 'severancePay', 'userIncome', 'spouse', 'spouseAge', 'spouseBusiness', 'spouseRetireAge', 'spouseIncome', 'childeNumber', 'childeAgeList', 'house', 'houseCostMonth', 'houseRepaymentMonth', 'houseLoanYears', 'communicationCostMonth', 'lifeCostMonth', 'insuranceCostMonth', 'utilityCostMonth', 'educationCostMonth', 'savingsPossibleMonth', 'nowSavings');

  foreach ($_SESSION['itemList'] as $item) {
    if($item == 'childeAgeList') {
      for ($i=1; $i<=$_SESSION['childeNumber']; $i++) {
        $_SESSION['childeAgeList'][$i-1] = $childeAgeList[$i-1];
        // echo $item;
        // echo ":";
        // echo $_SESSION[$item][$i-1];
        // echo "<br />";
      }
    } else {
      $_SESSION[$item] = $_POST[$item];
      // echo $item;
      // echo ":";
      // echo $_SESSION[$item];
      // echo "<br />";
    }
  }


  $strings = [
    $_SESSION['userAge'],
    $_SESSION['userSex'],
    $_SESSION['userBusiness'],
    $_SESSION['userRetireAge'],
    $_SESSION['severancePay'],
    $_SESSION['userIncome'],

    $_SESSION['spouse'],
    $_SESSION['spouseAge'],
    $_SESSION['spouseBusiness'],
    $_SESSION['spouseRetireAge'],
    $_SESSION['spouseIncome'],

    $_SESSION['childeNumber'],
    $_SESSION['childeAgeList'],
    $_SESSION['house'],
    $_SESSION['houseCostMonth'],
    $_SESSION['houseRepaymentMonth'],
    $_SESSION['houseLoanYears'],
    $_SESSION['communicationCostMonth'],
    $_SESSION['lifeCostMonth'],
    $_SESSION['insuranceCostMonth'],
    $_SESSION['utilityCostMonth'],
    $_SESSION['educationCostMonth'],
    $_SESSION['savingsPossibleMonth'],
    $_SESSION['nowSavings'],
  ];
  $jsonArray = json_encode($strings);

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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
  <script src="../JavaScript/config.js"></script>
  <script src="../JavaScript/index.js"></script>
  <script src="../JavaScript/graph.js"></script>


</body>
</html>