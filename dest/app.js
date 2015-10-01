$(function () {
  measuresList();
  coresList();
  calculations();
  overlay();
});


measures = {
  "incomeStatement":[
    {
      "name":"SAL",
      "fullname":"Sales",
      "descr":"The amount of money that a company actually receives during a specific period, including discounts and deductions for returned merchandise. It is the 'top line' or 'gross income' figure from which costs are subtracted to determine net income. Revenue is calculated by multiplying the price at which goods or services are sold by the number of units or amount sold."
    },
    {
      "name":"CGS",
      "fullname":"Cost of Goods Sold",
      "descr":"Cost of goods sold are the direct costs attributable to the production of the goods sold by a company. This amount includes the cost of the materials used in creating the good along with the direct labor costs used to produce the good. It excludes indirect expenses such as distribution costs and sales force costs. COGS appears on the income statement and can be deducted from revenue to calculate a company's gross margin. Also referred to as cost of sales."
    },
    {
      "name":"GRI",
      "fullname":"Gross Income",
      "descr":"A company's revenue minus cost of goods sold. Also called gross margin and gross profit."
    },
    {
      "name":"GRM",
      "fullname":"Gross Profit Margin",
      "descr":"A financial metric used to assess a firm's financial health by revealing the proportion of money left over from revenues after accounting for the cost of goods sold. Gross profit margin serves as the source for paying additional expenses and future savings."
    },
    {
      "name":"RDE",
      "fullname":"Research and Development Expenses",
      "descr":"Investigative activities that a business chooses to conduct with the intention of making a discovery that can either lead to the development of new products or procedures, or to improvement of existing products or procedures. Research and development is one of the means by which business can experience future growth by developing new products or processes to improve and expand their operations."
    },
    {
      "name":"SGE",
      "fullname":"Selling and General Expenses",
      "descr":"Direct selling expenses are expenses that can be directly linked to the sale of a specific unit such as credit, warranty and advertising expenses. Indirect selling expenses are expenses which cannot be directly linked to the sale of a specific unit, but which are proportionally allocated to all units sold during a certain period, such as telephone, interest and postal charges. General and administrative expenses include salaries of non-sales personnel, rent, heat and lights."
    },
    {
      "name":"TCE",
      "fullname":"Wages and Salaries",
      "descr":"In financial accounting, wage expense represents payments made to non-manufacturing employees, regardless of whether they are hourly or salaried. Depending on the presentation, this line item may also include payroll tax expenses and other benefits paid to employees. Wage expense is recorded as a line item in the expense portion of the income statement."
    },
    {
      "name":"OPE",
      "fullname":"Operating Expenses",
      "descr":"A category of expenditure that a business incurs as a result of performing its normal business operations. One of the typical responsibilities that management must contend with is determining how low operating expenses can be reduced without significantly affecting the firm's ability to compete with its competitors."
    },
    {
      "name":"DPA",
      "fullname":"Depreciation and Amortization",
      "descr":"The spreading out of capital expenses for intangible assets over a specific period of time (usually over the asset's useful life) for accounting and tax purposes. Amortization is similar to depreciation, which is used for tangible assets, and to depletion, which is used with natural resources. Amortization roughly matches an asset’s expense with the revenue it generates."
    },
    {
      "name":"EBI",
      "fullname":"Operating Profit",
      "descr":"An indicator of a company's profitability, calculated as revenue minus expenses, excluding tax and interest. EBIT is also referred to as operating earnings, operating profit and profit before interest and taxes."
    },
    {
      "name":"EBT",
      "fullname":"Earnings Before Interest, Taxes, Depreciation and Amortization",
      "descr":"EBITDA is essentially net income with interest, taxes, depreciation, and amortization added back to it, and can be used to analyze and compare profitability between companies and industries because it eliminates the effects of financing and accounting decisions."
    },
    {
      "name":"EBS",
      "fullname":"EBITDA per share",
      "descr":"EBITDA divided by the number of shares"
    },
    {
      "name":"PRE",
      "fullname":"Profit Before Tax Adjusted",
      "descr":"A profitability measure that looks at a company's profits before the company has to pay corporate income tax. This measure deducts all expenses from revenue including interest expenses and operating expenses, but it leaves out the payment of tax. Also referred to as earnings before tax."
    },
    {
      "name":"PRR",
      "fullname":"Profit Before Tax Reported",
      "descr":"A profitability measure that looks at a company's profits before the company has to pay corporate income tax. This measure deducts all expenses from revenue including interest expenses and operating expenses, but it leaves out the payment of tax. Also referred to as earnings before tax. Collected staight form the income statement without adjustments"
    },
    {
      "name":"TXP",
      "fullname":"Tax Provision",
      "descr":"A deduction from gross income that arises due to various types of expenses incurred by a taxpayer. Tax deductions are removed from taxable income (adjusted gross income) and thus lower the overall tax-expense liability."
    },
    {
      "name":"TXR",
      "fullname":"Tax Rate",
      "descr":"The percentage at which an individual or corporation is taxed. The tax rate is the tax imposed by the federal government and some states based on an individual's taxable income or a corporation's earnings. The United States uses a progressive tax rate system, where the percentage of tax increases as taxable income."
    },
    {
      "name":"NET",
      "fullname":"Net Profit Adjusted",
      "descr":"A company's total earnings (or profit). Net income is calculated by taking revenues and adjusting for the cost of doing business, depreciation, interest, taxes and other expenses. This number is found on a company's income statement and is an important measure of how profitable the company is over a period of time. The measure is also used to calculate earnings per share."
    },
    {
      "name":"NER",
      "fullname":"Net Profit Reported",
      "descr":"A company's total earnings (or profit). Net income is calculated by taking revenues and adjusting for the cost of doing business, depreciation, interest, taxes and other expenses. This number is found on a company's income statement and is an important measure of how profitable the company is over a period of time. The measure is also used to calculate earnings per share."
    },
    {
      "name":"EPS",
      "fullname":"Earnings Per Share Adjusted",
      "descr":"The portion of a company's profit allocated to each outstanding share of common stock. Earnings per share serves as an indicator of a company's profitability.When calculating, it is more accurate to use a weighted average number of shares outstanding over the reporting term, because the number of shares outstanding can change over time. However, data sources sometimes simplify the calculation by using the number of shares outstanding at the end of the period."
    },
    {
      "name":"GPS",
      "fullname":"Earnings Per Share Reported",
      "descr":"The portion of a company's profit allocated to each outstanding share of common stock. Earnings per share serves as an indicator of a company's profitability.When calculating, it is more accurate to use a weighted average number of shares outstanding over the reporting term, because the number of shares outstanding can change over time. However, data sources sometimes simplify the calculation by using the number of shares outstanding at the end of the period."
    }
  ],
  "balanceSheet": [
    {
      "name":"TAS-1",
      "fullname":"Total Assets Current",
      "descr":"A resource with economic value that an individual, corporation or country owns or controls with the expectation that it will provide future benefit. A balance sheet item representing what a firm owns."
    },
    {
      "name":"TAS-0",
      "fullname":"Total Assets Previous",
      "descr":"A resource with economic value that an individual, corporation or country owns or controls with the expectation that it will provide future benefit. A balance sheet item representing what a firm owns."
    },
    {
      "name":"ROA",
      "fullname":"Return On Assets",
      "descr":"An indicator of how profitable a company is relative to its total assets. ROA gives an idea as to how efficient management is at using its assets to generate earnings. Calculated by dividing a company's annual earnings by its total assets, ROA is displayed as a percentage. Sometimes this is referred to as return on investment."
    },
    {
      "name":"SHE-1",
      "fullname":"Shareholders' Equity Current",
      "descr":"A firm's total assets minus its total liabilities. Equivalently, it is share capital plus retained earnings minus treasury shares. Shareholders' equity represents the amount by which a company is financed through common and preferred shares."
    },
    {
      "name":"SHE-0",
      "fullname":"Shareholders' Equity Previous",
      "descr":"A firm's total assets minus its total liabilities. Equivalently, it is share capital plus retained earnings minus treasury shares. Shareholders' equity represents the amount by which a company is financed through common and preferred shares."
    },
    {
      "name":"ROE",
      "fullname":"Return On Equity",
      "descr":"The amount of net income returned as a percentage of shareholders equity. Return on equity measures a corporation's profitability by revealing how much profit a company generates with the money shareholders have invested."
    },
    {
      "name":"IBV",
      "fullname":"Intangible Book Value",
      "descr":"An asset that is not physical in nature. Corporate intellectual property (items such as patents, trademarks, copyrights, business methodologies), goodwill and brand recognition are all common intangible assets in today's marketplace. An intangible asset can be classified as either indefinite or definite depending on the specifics of that asset. A company brand name is considered to be an indefinite asset, as it stays with the company as long as the company continues operations. However, if a company enters a legal agreement to operate under another company's patent, with no plans of extending the agreement, it would have a limited life and would be classified as a definite asset."
    },
    {
      "name":"TBV",
      "fullname":"Tangible Book Value",
      "descr":"The value at which an asset is carried on a balance sheet. To calculate, take the cost of an asset minus the accumulated depreciation."
    },
    {
      "name":"BPS",
      "fullname":"Book Value Per Share",
      "descr":"A financial measure that represents a per share assessment of the minimum value of a company's equity. More specifically, this value is determined by relating the original value of a firm's common stock adjusted for any outflow (dividends and stock buybacks) and inflow (retained earnings) modifiers to the amount of shares outstanding."
    },
    {
      "name":"CA",
      "fullname":"Current Assets",
      "descr":"A balance sheet account that represents the value of all assets that can reasonably expected to be converted into cash within one year. Current assets include cash and cash equivalents, accounts receivable, inventory, marketable securities, prepaid expenses and other liquid assets that can be readily converted to cash."
    },
    {
      "name":"CL",
      "fullname":"Current Liabilities",
      "descr":"A company's debts or obligations that are due within one year. Current liabilities appear on the company's balance sheet and include short term debt, accounts payable, accrued liabilities and other debts."
    },
    {
      "name":"NWC",
      "fullname":"Net Working Capital",
      "descr":"Working Capital is a measure of both a company's efficiency and its short-term financial health. Working capital is calculated as: Working Capital = Current Assets - Current Liabilities"
    },
    {
      "name":"Cash",
      "fullname":"Cash and Cash Equivalents",
      "descr":"An item on the balance sheet that reports the value of a company's assets that are cash or can be converted into cash immediately."
    },
    {
      "name":"FL",
      "fullname":"Net Financial Liabilities",
      "descr":"Long-term financial liabilities minus short-term financial liabilities"
    },
    {
      "name":"NDT",
      "fullname":"Net Debt",
      "descr":"A metric that shows a company's overall debt situation by netting the value of a company's liabilities and debts with its cash and other similar liquid assets."
    },
    {
      "name":"P",
      "fullname":"Price of Share",
      "descr":"Share price at the end of reporting period"
    },
    {
      "name":"MNT",
      "fullname":"Minority Interest",
      "descr":"A non-current liability that can be found on a parent company's balance sheet that represents the proportion of its subsidiaries owned by minority shareholders."
    },
    {
      "name":"ENT",
      "fullname":"Enterprise Value",
      "descr":"Enterprise Value is a measure of a company's total value, often used as a more comprehensive alternative to equity market capitalization. The market capitalization of a company is simply its share price multiplied by the number of shares a company has outstanding. Enterprise value is calculated as the market capitalization plus debt, minority interest and preferred shares, minus total cash and cash equivalents. Often times, the minority interest and preferred equity is effectively zero, although this need not be the case."
    }
  ],
  "cashFlow": [
    {
      "name":"CFO",
      "fullname":"Operating Cash Flow ",
      "descr":"Operating Cash Flow is a measure of the amount of cash generated by a company's normal business operations. Operating cash flow is important because it indicates whether a company is able to generate sufficient positive cash flow to maintain and grow its operations, or whether it may require external financing. Calculated by adjusting net income for items such as depreciation, changes to accounts receivable and changes in inventory."
    },
    {
      "name":"CPX",
      "fullname":"Capital Expenditure (CAPEX)",
      "descr":"Capital expenditure, or CapEx, are funds used by a company to acquire or upgrade physical assets such as property, industrial buildings or equipment. It is often used to undertake new projects or investments by the firm. This type of outlay is also made by companies to maintain or increase the scope of their operations. These expenditures can include everything from repairing a roof to building, to purchasing a piece of a equipment, or building a brand new factory."
    },
    {
      "name":"FRC",
      "fullname":"Free Cash Flow",
      "descr":"A measure of financial performance calculated as operating cash flow minus capital expenditures. Free cash flow represents the cash that a company is able to generate after laying out the money required to maintain or expand its asset base. Free cash flow is important because it allows a company to pursue opportunities that enhance shareholder value. Without cash, it's tough to develop new products, make acquisitions, pay dividends and reduce debt. Calculated as:EBIT + Depreciation & Amortization - Change in Net Working Capital - Capital ExpenditureIt can also be calculated by taking operating cash flow and subtracting capital expenditures."
    },
    {
      "name":"CPS",
      "fullname":"Cash Flow Per Share",
      "descr":"Cash flow per share shows the after-tax earnings plus depreciation, on a per share basis. Many financial analysts place more emphasis on the cash flow per share value than on earnings per share values. While an earnings per share value can be easily manipulated to appear more positive than it really is, therefore putting its reliability in question, cash is more difficult to alter, resulting in what some analysts believe is a more accurate value of the strength and sustainability of a particular business model."
    },
    {
      "name":"FCF",
      "fullname":"Free Cash Flow per Share",
      "descr":"Free cash flow devided by the weighted average number of shares outstanding for the reporting period."
    },
    {
      "name":"CSH",
      "fullname":"Cash Earnings Per Share",
      "descr":"A measure of financial performance that looks at the cash flow generated by a company on a per share basis. This differs from basic earnings per share (EPS), which looks at the net income of the company on a per share basis. The higher a company's cash EPS, the better it is considered to have performed over the period. A company's cash EPS can be used to draw comparisons to other companies or to the company's own past results."
    }
  ]
};


var income = measures.incomeStatement;
    balance = measures.balanceSheet;
    cash = measures.cashFlow;

function measuresList() {
// Injects input fields

  for ( var i in income) {
    var name = income[i].name;

    $( "#incomeStatement" ).append("<div class='measure income'><input type='text' id='"+ name +"'><label class='measure-label info'>" + name +  "</label></div>");

  }

   for ( var i in balance) {
    var name = balance[i].name;
    $( "#balanceSheet" ).append("<div class='measure balance'><label class='measure-label info'>" + name +  "</label><input type='text' id='"+ name +"'></div>");
  }

  for ( var i in cash) {
    var name = cash[i].name;
    $( "#cashFlow" ).append("<div class='measure balance'><label class='measure-label info'>" + name +  "</label><input type='text' id='"+ name +"'></div>");
  }

  overlayLoad();

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
    return false;
  });

  $('.close-btn').click(function(){
    $('.overlay').removeClass('is-open');
  });
};


// Overlay load information
function overlayLoad () {
  $('.info').click(function(){
    var text = $(this).text();

    for(var i = 0, numIncome = income.length; i < numIncome; i++)
    {
      if(income[i].name == text)
      {
        $('.overlay .lead').text(income[i].name + " - " + income[i].fullname);
        $('.overlay p').text(income[i].descr);
      }
    }

    for(var i = 0, numBalance = balance.length; i < numBalance; i++)
    {
      if(balance[i].name == text)
      {
        $('.overlay .lead').text(balance[i].name + " - " + balance[i].fullname);
        $('.overlay p').text(balance[i].descr);
      }
    }

    for(var i = 0, numCash = cash.length; i < numCash; i++)
    {
      if(cash[i].name == text)
      {
        $('.overlay .lead').text(cash[i].name + " - " + cash[i].fullname);
        $('.overlay p').text(cash[i].descr);
      }
    }


  });
};