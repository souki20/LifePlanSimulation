$(function() {

  $("#userBusinessChange").on("change", function() {
    let $valueUserBusiness = $("form [name = userBusiness]:checked").val();
    let $contentSeverancePay = $("#severancePay");
    let $contentUserRetireAge = $("#userRetireAge");

    if ($valueUserBusiness == 0) {
      $contentSeverancePay.addClass("hide");
      $contentUserRetireAge.removeClass('hide');
    } else if ($valueUserBusiness == 1) {
      $contentSeverancePay.removeClass("hide");
      $contentUserRetireAge.addClass('hide');
    } else {
      $contentSeverancePay.addClass("hide");
      $contentUserRetireAge.addClass('hide');
    }
  });

  $("#spouseChange").on("change", function() {
    let $valueSpouse = $("form [name = spouse]:checked").val();
    let $contentSpouse = $("#spouse");

    if ($valueSpouse == 0) {
      $contentSpouse.removeClass("hide");
    } else {
      $contentSpouse.addClass("hide");
    }
  });

  $("#spouseBusinessChange").on("change", function() {
    let $valueSpouseBusiness = $("form [name = spouseBusiness]:checked").val();
    let $nameSpouseRetireAge = $("#spouseRetireAge");

    if ($valueSpouseBusiness == 0) {
      $nameSpouseRetireAge.removeClass("hide");
    } else {
      $nameSpouseRetireAge.addClass("hide");
    }
  });

  $count = 0;
  $("#childeNumber").on("change", function() {
    let $valueChildeNumber = $("form [name = childeNumber]").val();
    $valueChildeNumber = $valueChildeNumber.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    $("form [name = childeNumber]").val($valueChildeNumber);
    let $nameEducationCostMonth = $("#educationCostMonth");

    if ($count == 1) {
      $("#childeAge").remove();
      $count = 0;
    }

    if ($valueChildeNumber == 0) {
      $nameEducationCostMonth.addClass("hide");
    } else {
      $nameEducationCostMonth.removeClass("hide");
    }

    if (0 < $valueChildeNumber) {
      $("#childeNumber").after('<div id=childeAge></div>');
      for (i=1; i<=$valueChildeNumber; i++) {
        $("#childeAge").append(
          `<div class='box'>
            <label for="childeAge" class='add-label'>子供${i}の年齢：</label>
            <div class='add-input'>
              <input type='text' name="childeAge${i}">
            </div>
          </div>`
        )
      }
      $count++;
    }
  });

  $("#houseChange").on("change", function() {
    $valueHouse = $("form [name = house]:checked").val();

    if ($valueHouse == 0) {
      $("#house0").removeClass('hide');
      $("#house1").addClass('hide');
    } else {
      $("#house0").addClass('hide');
      $("#house1").removeClass('hide');
    }
  })
})