$(function () {
  measuresList();
  coresList();
  calculations();
  // text();
  // showMeasures();
});

function measuresList() {
  var measures = {
    "incomeStatement":[
      {"name":"SAL", "descr":"Sales is ..."},
      {"name":"CGS"},
      {"name":"GRI"},
      {"name":"GRM"},
      {"name":"RDE"},
      {"name":"SGE"},
      {"name":"TCE"},
      {"name":"OPE"},
      {"name":"DPA"},
      {"name":"EBI"},
      {"name":"EBT"},
      {"name":"EBS"},
      {"name":"PRE"},
      {"name":"PRR"},
      {"name":"TXP"},
      {"name":"TXR"},
      {"name":"NET" },
      {"name":"NER"},
      {"name":"EPS"},
      {"name":"GPS"}
    ],
    "balanceSheet": [
      {"name":"TAS-1"},
      {"name":"TAS-0"},
      {"name":"ROA"},
      {"name":"SHE-1"},
      {"name":"SHE-0"},
      {"name":"ROE"},
      {"name":"IBV"},
      {"name":"TBV"},
      {"name":"BPS"},
      {"name":"CA"},
      {"name":"CL"},
      {"name":"NWC"},
      {"name":"Cash"},
      {"name":"FL"},
      {"name":"NDT"},
      {"name":"P"},
      {"name":"MNT"},
      {"name":"ENT"}
    ],
    "cashFlow": [
      {"name":"CFO"},
      {"name":"CPX"},
      {"name":"FRC"},
      {"name":"CPS"},
      {"name":"FCF"},
      {"name":"CSH"}
    ]
  };


  var incomeStatement = measures.incomeStatement;
      balanceSheet = measures.balanceSheet;
      cashFlow = measures.cashFlow;


// Injects input fields

  for ( var i in incomeStatement) {
    var name = incomeStatement[i].name;


    $( "#incomeStatement" ).append("<div class='measure income'><input type='text' id='"+ name +"'><label class='measure-label info'>" + name +  "</label></div>");

  }

  for ( var i in balanceSheet) {
    var name = balanceSheet[i].name;
    $( "#balanceSheet" ).append("<div class='measure balance'><label class='measure-label info'>" + name +  "</label><input type='text' id='"+ name +"'></div>");
  }

  for ( var i in cashFlow) {
    var name = cashFlow[i].name;
    $( "#cashFlow" ).append("<div class='measure balance'><label class='measure-label info'>" + name +  "</label><input type='text' id='"+ name +"'></div>");
  }


overlay();

};




// Defining core values
function coresList() {
  $('#SAL + label, #EBI + label, #EBT + label, #PRE + label, #NET + label, #NER + label, #EPS + label, #GPS + label').css('color', '#D4AF37');
};

// Select id's and inject sibling



// MATH
function calculations() {
  $('input').keyup(function () {

    var NSOa = parseFloat($('#NSOa').val()) || 0;
        NSOe = parseFloat($('#NSOe').val()) || 0;
        CURa = parseFloat($('#CURa').val()) || 0;
        CURe = parseFloat($('#CURe').val()) || 0;


// Income Statement Measures

    var SAL = parseFloat($('#SAL').val()) || 0;
        CGS = parseFloat($('#CGS').val()) || 0;
    $('#GRI').val((SAL - CGS).toFixed(3));
    var GRI = parseFloat($('#GRI').val()) || 0;
    $('#GRM').val(((GRI) / SAL * 100).toFixed(3));

    var RDE = parseFloat($('#RDE').val()) || 0;
        SGE = parseFloat($('#SGE').val()) || 0;
        TCE = parseFloat($('#TCE').val()) || 0;
    $('#OPE').val((RDE + SGE + TCE).toFixed(3));

    var DPA = parseFloat($('#DPA').val()) || 0;
        EBI = parseFloat($('#EBI').val()) || 0;
    $('#EBT').val((DPA + EBI).toFixed(3));
    var EBT = parseFloat($('#EBT').val()) || 0;
    $('#EBS').val((EBT / NSOa).toFixed(3));

    var PRE = parseFloat($('#PRE').val()) || 0;
        PRR = parseFloat($('#PRR').val()) || 0;
        TXP = parseFloat($('#TXP').val()) || 0;
    $('#TXR').val((TXP / PRE * 100).toFixed(3));

    var NET = parseFloat($('#NET').val()) || 0;
        NER = parseFloat($('#NER').val()) || 0;
    $('#EPS').val((NET / NSOa).toFixed(3));
    $('#GPS').val((NER / NSOa).toFixed(3));


// Balance Sheet Measures

    var TAS1 = parseFloat($('#TAS-1').val()) || 0;
        TAS0 = parseFloat($('#TAS-0').val()) || 0;
    $('#ROA').val(((NET / ((TAS1 + TAS0)/2)) * 100).toFixed(3));

    var SHE1 = parseFloat($('#SHE-1').val()) || 0;
        SHE0 = parseFloat($('#SHE-0').val()) || 0;
    $('#ROE').val(((NET / ((SHE1 + SHE0)/2)) * 100).toFixed(3));

    $('#BPS').val((SHE1 / NSOe).toFixed(3));

    var CA = parseFloat($('#CA').val()) || 0;
        CL = parseFloat($('#CL').val()) || 0;
    $('#NWC').val((CA - CL).toFixed(3));

    var Cash = parseFloat($('#Cash').val()) || 0;
        FL = parseFloat($('#FL').val()) || 0;
    $('#NDT').val((FL - Cash).toFixed(3));
    var NDT = parseFloat($('#NDT').val()) || 0;

    var P = parseFloat($('#P').val()) || 0;
        MNT = parseFloat($('#MNT').val()) || 0;
    $('#ENT').val(NDT + MNT + (P * NSOe));


// Cash Flow

    var CFO = parseFloat($('#CFO').val()) || 0;
        CPX = parseFloat($('#CPX').val()) || 0;
    $('#FRC').val((CFO - CPX).toFixed(3));
    var FRC = parseFloat($('#FRC').val()) || 0;
    $('#CPS').val((CFO / NSOa).toFixed(3));
    $('#FCF').val((FRC / NSOa).toFixed(3));
    $('#CSH').val(((DPA + NET) / NSOa).toFixed(3));

  });
};



// Overlay
function overlay () {
  $('.info').click(function(){
    $('.overlay').addClass('is-open');
    $('.text-box .lead').text("hello");
    return false;
  });

  $('.close-btn').click(function(){
    $('.overlay').removeClass('is-open');
  });
};