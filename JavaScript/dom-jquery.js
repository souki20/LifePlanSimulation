$(function() {

  // $("#send").on("click", function() {
  //   // $("form [name = formItem]").submit();
  // });

  $("#reset").on("click", function() {
    $("form [name = userAge]").val("");
    for (i=0; i<3; i++) {
      $("form [name = userSex]")[i].checked = false;
    };
    for (i=0; i<3; i++) {
      $("form [name = userBusiness]")[i].checked = false;
    };
    $("form [name = userRetireAge]").val("");
    $("form [name = severancePay]").val("");
    $("form [name = userIncome]").val("");
    for (i=0; i<2; i++) {
      $("form [name = spouse]")[i].checked = false;
    };
    $("form [name = spouseAge]").val("");
    for (i=0; i<3; i++) {
      $("form [name = spouseBusiness]")[i].checked = false;
    };
    $("form [name = spouseRetireAge]").val("");
    $("form [name = spouseIncome]").val("");
    $("form [name = childeNumber]").val("");
    for (i=0; i<2; i++) {
      $("form [name = house]")[i].checked = false;
    };
    $("form [name = houseCostMonth]").val("");
    $("form [name = houseRepaymentMonth]").val("");
    $("form [name = houseLoanYears]").val("");
    $("form [name = communicationCostMonth]").val("");
    $("form [name = lifeCostMonth]").val("");
    $("form [name = insuranceCostMonth]").val("");
    $("form [name = utilityCostMonth]").val("");
    $("form [name = educationCostMonth]").val("");
    $("form [name = savingsPossibleMonth]").val("");
    $("form [name = nowSavings]").val("");

    location.reload();
  });

  // Enterキーでの送信を無効
  $(".submit-button input").on("keydown", function(e) {
    if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
      return false;
    } else {
      return true;
    }
  });


})

