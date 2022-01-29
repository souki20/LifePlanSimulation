<?php
session_start();
?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/index.css">
  <script src="path/to/my/store.legacy.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>ライフプラン</title>
</head>


<body class="index-body">
  <h1>ライフプランの診断</h1>
  <form name="formItem" id="formItem" action="./php/main.php" method="post">

    <div class='box'>
      <label for="userAge" class="label">年齢</label>
      <div class="input">
        <input type='text' name="userAge" required value=<?= $_SESSION['userAge']?> >　歳
      </div>
    </div>

    <div class='box'>
      <label for="userSex" class="label">性別</label>
      <div class="input">
        <label class="radio-input">
          <input type="radio" name="userSex" value= "0" required
          <?php 
          if($_SESSION['userSex'] == "0") {
            echo 'checked';
          } else {
            echo '';
          }
          ?> >男</label>
        <label class="radio-input">
          <input type="radio" name="userSex" value="1" required
          <?php 
            if($_SESSION['userSex'] == "1") {
              echo 'checked';
            } else {
              echo '';
            }
          ?> >女性</label>
        <label class="radio-input">
          <input type="radio" name="userSex" value="2" required
          <?php 
          if($_SESSION['userSex'] == "2") {
            echo 'checked';
          } else {
            echo '';
          }
          ?> 
          >その他</label>
      </div>
    </div>
    
    <div class='box' id="userBusinessChange">
      <label for="userBusiness" class="label">職業</label>
      <div class="input">
        <label class="radio-input">
          <input type="radio" name="userBusiness" value="0" required
          <?php 
            if($_SESSION['userBusiness'] == "0") {
              echo 'checked';
            } else {
              echo '';
            }
          ?>>自営業</label>
        <label class="radio-input">
          <input type="radio" name="userBusiness" value="1" required
          <?php 
            if($_SESSION['userBusiness'] == "1") {
              echo 'checked';
            } else {
              echo '';
            }
          ?>>会社員</label>
        <label class="radio-input">
          <input type="radio" name="userBusiness" value="2" required
          <?php 
            if($_SESSION['userBusiness'] == "2") {
              echo 'checked';
            } else {
              echo '';
            }
          ?>>その他</label>
      </div>
    </div>

    <?php 
    if (!empty($_SESSION['userRetireAge'])) {
      echo "
      <div id='userRetireAge' class='box'>
        <label for='userRetireAge' class='add-label'>勇退年齢</label>
        <div class='add-input'>
          <input type='text' id='userRetireAge0' name='userRetireAge' value={$_SESSION['userRetireAge']} >　歳
        </div>
      </div>";
    } else {
      echo "
      <div id='userRetireAge' class='hide box'>
        <label for='userRetireAge' class='add-label'>勇退年齢</label>
        <div class='add-input'>
          <input type='text' id='userRetireAge0' name='userRetireAge' >　歳
        </div>
      </div>";
    }

    if (!empty($_SESSION['severancePay'])) {
      echo "
      <div id='severancePay' class='box'>
        <label for='severancePay' class='add-label'>退職金</label>
        <div class='add-input'>
          <input type='text' id='severancePay0' name='severancePay' value={$_SESSION['severancePay']} >　万円
        </div>
      </div>";
    } else {
      echo "
      <div id='severancePay' class='hide box'>
        <label for='severancePay' class='add-label'>退職金</label>
        <div class='add-input'>
          <input type='text' id='severancePay0' name='severancePay' >　万円
        </div>
      </div>";
    }
    ?>

    <div class='box'>
      <label for="userIncome" class="label">収入</label>
      <div class="input">
        <input type='text' name="userIncome" required value=<?= $_SESSION['userIncome']?> >　万円
      </div>
    </div>

    <div class='box' id="spouseChange">
      <label for="spouse" class="label">配偶者の有無</label>
      <div class="input">
        <label class="radio-input">
          <input type="radio" name="spouse" value="0" required
          <?php 
            if($_SESSION['spouse'] == "0") {
              echo 'checked';
            } else {
              echo '';
            }
            ?> >あり</label>
        <label class="radio-input">
          <input type="radio" name="spouse" value="1" required
          <?php 
            if($_SESSION['spouse'] == "1") {
              echo 'checked';
            } else {
              echo '';
            }
            ?> >なし</label>
      </div>
    </div>

    <?php
    function spouseSession($session, $i) {
      if ($session == $i) {
        echo 'checked';
      } else {
        echo '';
      }
    }

    if (!empty($_SESSION['spouseAge'])) {
      echo "
      <div id=\"spouse\" class=\"\">
        <div class=\"box\">
          <label for=\"spouseAge\" class=\"add-label\">配偶者の年齢</label>
          <div class=\"add-input\">
            <input type=\"text\" id=\"spouseAge0\" name=\"spouseAge\" value={$_SESSION['spouseAge']} >　歳
          </div>
        </div>
        <div class=\"box\" id=\"spouseBusinessChange\">
          <label for=\"spouseBusiness\" class=\"add-label\">配偶者の職業</label>
          <div class=\"add-input\">
            <label class=\"radio-input\">
              <input type=\"radio\" name=\"spouseBusiness\" value=\"0\" ";
      echo spouseSession($_SESSION['spouseBusiness'], 0);
      echo ">自営業</label>
            <label class=\"radio-input\">
              <input type=\"radio\" name=\"spouseBusiness\" value=\"1\" ";
      echo spouseSession($_SESSION['spouseBusiness'], 1);
      echo ">会社員</label>
            <label class=\"radio-input\">
              <input type=\"radio\" name=\"spouseBusiness\" value=\"2\" ";
      echo spouseSession($_SESSION['spouseBusiness'], 2);
      echo ">その他</label>
          </div>
        </div>";
        if ($_SESSION['spouseBusiness'] == 0) {
          echo "
          <div id=\"spouseRetireAge\" class=\"box\">
            <label for=\"spouseRetireAge\" class=\"add-label\">配偶者の勇退年齢</label>
            <div class=\"add-input\">
              <input type=\"text\" id=\"spouseRetireAge0\" name=\"spouseRetireAge\"  value={$_SESSION['spouseRetireAge']} >　歳
            </div>
          </div>
          <div class=\"box\">
            <label for=\"spouseIncome\" class=\"add-label\">配偶者の収入</label>
            <div class=\"add-input\">
              <input type=\"text\" id=\"spouseIncome0\" name=\"spouseIncome\" value={$_SESSION['spouseIncome']} >　万円
            </div>
          </div>
        </div>";
      } else {
          echo "
          <div id=\"spouseRetireAge\" class=\"hide box\">
            <label for=\"spouseRetireAge\" class=\"add-label\">配偶者の勇退年齢</label>
            <div class=\"add-input\">
              <input type=\"text\" id=\"spouseRetireAge0\" name=\"spouseRetireAge\" >　歳
            </div>
          </div>
          <div class=\"box\">
            <label for=\"spouseIncome\" class=\"add-label\">配偶者の収入</label>
            <div class=\"add-input\">
              <input type=\"text\" id=\"spouseIncome0\" name=\"spouseIncome\" value={$_SESSION['spouseIncome']} >　万円
            </div>
          </div>
        </div>";
        }
    } else {
      echo "
      <div id=\"spouse\" class=\"hide\">
        <div class=\"box\">
          <label for=\"spouseAge\" class=\"add-label\">配偶者の年齢</label>
          <div class=\"add-input\">
            <input type=\"text\" id=\"spouseAge0\" name=\"spouseAge\" >　歳
          </div>
        </div>
        <div class=\"box\" id=\"spouseBusinessChange\">
          <label for=\"spouseBusiness\" class=\"add-label\">配偶者の職業</label>
          <div class=\"add-input\">
            <label class=\"radio-input\">
              <input type=\"radio\" name=\"spouseBusiness\" value=\"0\" >自営業</label>
            <label class=\"radio-input\">
              <input type=\"radio\" name=\"spouseBusiness\" value=\"1\" >会社員</label>
            <label class=\"radio-input\">
              <input type=\"radio\" name=\"spouseBusiness\" value=\"2\" >その他</label>
          </div>
        </div>
        <div id=\"spouseRetireAge\" class=\"hide box\">
          <label for=\"spouseRetireAge\" class=\"add-label\">配偶者の勇退年齢</label>
          <div class=\"add-input\">
            <input type=\"text\" id=\"spouseRetireAge0\" name=\"spouseRetireAge\" >　歳
          </div>
        </div>
        <div class=\"box\">
          <label for=\"spouseIncome\" class=\"add-label\">配偶者の収入</label>
          <div class=\"add-input\">
            <input type=\"text\" id=\"spouseIncome0\" name=\"spouseIncome\" >　万円
          </div>
        </div>
      </div>";
    }

    ?>

    <div id="childeNumber" class='box'>
      <label for="childeNumber" class="label">子供の人数(居ない場合は0)</label>
      <div class="input">
        <input type='text' name="childeNumber" required value=<?= $_SESSION['childeNumber']?> >　人
      </div>
    </div>

    <div id="childeAge">
    <?php
    if(0 < $_SESSION['childeNumber']) {
      for ($i=1; $i<=$_SESSION['childeNumber']; $i++) {
        echo "
        <div class='box'>
          <label for='childeAge' class='add-label'>子供${i}の年齢：</label>
          <div class='add-input'>
            <input type='text' required name='childeAge${i}' value={$_SESSION['childeAgeList'][$i-1]}>
          </div>
        </div>";
      }
    }
    ?>
    </div>


    <div id="houseChange" class='box'>
      <label for="house" class="label">住居</label>
      <div class="input">
        <label class="radio-input">
          <input type="radio" name="house" value="0" required
          <?php 
            if($_SESSION['house'] == "0") {
              echo 'checked';
            } else {
              echo '';
            }
            ?> >賃貸</label>
        <label class="radio-input">
          <input type="radio" name="house" value="1" required
          <?php 
            if($_SESSION['house'] == "1") {
              echo 'checked';
            } else {
              echo '';
            }
            ?> >持ち家</label>
      </div>
    </div>

    <?php
    if (!empty($_SESSION['houseCostMonth'])) {
      echo "
      <div id='house0' class='box'>
        <label for='houseCostMonth' class='add-label'>家賃（月額）</label>
        <div class='add-input'>
          <input type='text' id='houseCostMonth0' name='houseCostMonth' value={$_SESSION['houseCostMonth']} >　万円
        </div>
      </div>";
    } else {
      echo "
      <div id='house0' class='hide box'>
        <label for='houseCostMonth' class='add-label'>家賃（月額）</label>
        <div class='add-input'>
          <input type='text' id='houseCostMonth0' name='houseCostMonth' >　万円
        </div>
      </div>";
    }

    if (!empty($_SESSION['houseRepaymentMonth'])) {
      echo "
      <div id='house1' class=''>
        <div class='box'>
          <label for='houseRepaymentMonth' class='add-label'>返済額（月額）</label>
          <div class='add-input'>
            <input type='text' id='houseRepaymentMonth0' name='houseRepaymentMonth' value={$_SESSION['houseRepaymentMonth']} >　万円
          </div>
        </div>
        <div class='box'>
          <label for='houseLoanYears' class='add-label'>残りのローン年数</label>
          <div class='add-input'>
            <input type='text' id='houseLoanYears0' name='houseLoanYears' value={$_SESSION['houseLoanYears']} >　年
          </div>
        </div>  
      </div>";
    } else {
      echo "
      <div id='house1' class='hide'>
        <div class='box'>
          <label for='houseRepaymentMonth' class='add-label'>返済額（月額）</label>
          <div class='add-input'>
            <input type='text' id='houseRepaymentMonth0' name='houseRepaymentMonth' >　万円
          </div>
        </div>
        <div class='box'>
          <label for='houseLoanYears' class='add-label'>残りのローン年数</label>
          <div class='add-input'>
            <input type='text' id='houseLoanYears0' name='houseLoanYears' >　年
          </div>
        </div>  
      </div>";
    }
    ?>

    <div class='box'>
      <label for="communicationCostMonth" class="label">通信費（月額）</label>
      <div class="input">
        <input type='text' name="communicationCostMonth" required value=<?= $_SESSION['communicationCostMonth']?> >　万円
      </div>
    </div>

    <div class='box'>
      <label for="lifeCostMonth" class="label">生活費（月額）</label>
      <div class="input">
        <input type='text' name="lifeCostMonth" required value=<?= $_SESSION['lifeCostMonth']?> >　万円
      </div>
    </div>

    <div class='box'>
      <label for="insuranceCostMonth" class="label">保険料（月額）</label>
      <div class="input">
        <input type='text' name="insuranceCostMonth" required value=<?= $_SESSION['insuranceCostMonth']?> >　万円
      </div>
    </div>

    <div class='box'>
      <label for="utilityCostMonth" class="label">水道光熱費（月額）</label>
      <div class="input">
        <input type='text' name="utilityCostMonth" required value=<?= $_SESSION['utilityCostMonth']?> >　万円
      </div>
    </div>

    <?php
    if (0 < $_SESSION['childeNumber']) {
      echo "
      <div id='educationCostMonth' class='box'>
        <label for='educationCostMonth' class='add-label'>教育費（月額）</label>
        <div class='add-input'>
          <input type='text' id='educationCostMonth0' name='educationCostMonth' value={$_SESSION['educationCostMonth']} >　万円
        </div>
      </div>";
    } else {
      echo "
      <div id='educationCostMonth' class='hide box'>
        <label for='educationCostMonth' class='add-label'>教育費（月額）</label>
        <div class='add-input'>
          <input type='text' id='educationCostMonth0' name='educationCostMonth' >　万円
        </div>
      </div>";
    }
    ?>

    <div class='box'>
      <label for="savingsPossibleMonth" class="label">毎月の貯蓄額</label>
      <div class="input">
        <input type='text' name="savingsPossibleMonth" required value=<?= $_SESSION['savingsPossibleMonth']?> >　万円
      </div>
    </div>

    <div class='box'>
      <label for="nowSavings" class="label">現在の貯金</label>
      <div class="input">
        <input type='text' name="nowSavings" required value=<?= $_SESSION['nowSavings']?> >　万円
      </div>
    </div>


    <div class="submit-button">
      <input type="button" id="reset" name="reset" value="リセット">
      <input type="submit" id="send" name="send" value="グラフを作成">
      <!-- <input type="button" id="send" name="send" onclick="submit();" value="グラフを作成"> -->
    </div>
    
  </form>


  <?php
  unset($_SESSION['userAge']);
  unset($_SESSION['userSex']);
  unset($_SESSION['userBusiness']);
  unset($_SESSION['userRetireAge']);
  unset($_SESSION['severancePay']);
  unset($_SESSION['userIncome']);
  unset($_SESSION['spouse']);
  unset($_SESSION['spouseAge']);
  unset($_SESSION['spouseBusiness']);
  unset($_SESSION['spouseRetireAge']);
  unset($_SESSION['spouseIncome']);
  unset($_SESSION['childeNumber']);
  unset($_SESSION['childeAgeList']);
  unset($_SESSION['house']);
  unset($_SESSION['houseCostMonth']);
  unset($_SESSION['houseRepaymentMonth']);
  unset($_SESSION['houseLoanYears']);
  unset($_SESSION['communicationCostMonth']);
  unset($_SESSION['lifeCostMonth']);
  unset($_SESSION['insuranceCostMonth']);
  unset($_SESSION['utilityCostMonth']);
  unset($_SESSION['educationCostMonth']);
  unset($_SESSION['savingsPossibleMonth']);
  unset($_SESSION['nowSavings']);
  ?>


  <!-- <script src="./JavaScript/dom.js"></script>
  <script src="./JavaScript/change.js"></script> -->
  <script src="./JavaScript/dom-jquery.js"></script>
  <script src="./JavaScript/change-jquery.js"></script>
  <script src="./JavaScript/changeInt.js"></script>
</body>
</html>