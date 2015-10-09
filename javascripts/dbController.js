var financialDBCtrl = angular.module('financialDBCtrl', []);

financialDBCtrl.controller('mainController', function($scope, $http) {

    $scope.selectYearTab = 0;
    $scope.selectCountyTab = 0;
    $scope.selectItemTab = 0;


    $scope.yearTabIsSelected = function(checkedYear) {
        return $scope.selectYearTab === checkedYear;
    };
    $scope.countyTabIsSelected = function(checkedCounty) {
        return $scope.selectCountyTab === checkedCounty;
    };
    $scope.itemTabIsSelected = function(checkedItem) {
        return $scope.selectItemTab === checkedItem;
    };

    //下方為設置提醒目前查詢項目的標頭，分別為年分，縣市，項目，經由呼叫query函數之後才會更動值
    $scope.query_window = {
        year: null,
        county: null,
        item: null,
        beenQueried: false,
        notBeenQuery: true,
        setYear: function(setYear) {
            this.year = setYear;
        },
        setCounty: function(setCounty) {
            this.county = setCounty;
        },
        setItem: function(setItem) {
            this.item = setItem;
        },
        setAll: function(setYear, setCounty, setItem) {
            this.setYear(setYear);
            this.setCounty(setCounty);
            this.setItem(setItem);
        }
    };
    // 意思是，剛進頁面的時候就先查詢第一項第一年六都
    angular.element(document).ready(function() {
        if (screen.width < 1000) {
            $scope.selectYear = '2013';
            $scope.selectYearTab = 3;
            $scope.query_window.setYear($scope.selectYear);
            $scope.selectCounty = '六都(北北桃中南高)';
            $scope.selectCountyTab = 1;
            $scope.query_window.setCounty($scope.selectCounty);
            $scope.selectItem = '縣市債務資料';
            $scope.selectItemTab = 1;
            $scope.query_window.setItem($scope.selectItem);
            $scope.query_window.beenQueried = true;
            $scope.query_window.notBeenQuery = false;
        }
    });


    // 按下查詢按鈕之後呼叫的函數
    $scope.query = function() {
        if ($scope.selectYear != null && $scope.selectCounty != null && $scope.selectItem != null) {

            $scope.selectYearTab = parseInt(queryYear($scope.selectYear));

            $scope.query_window.setYear($scope.selectYear);

            $scope.selectCountyTab = parseInt(queryCounty($scope.selectCounty));

            $scope.query_window.setCounty($scope.selectCounty);

            $scope.selectItemTab = parseInt(queryItem($scope.selectItem));

            $scope.query_window.setItem($scope.selectItem);

            $scope.query_window.beenQueried = true;
            $scope.query_window.notBeenQuery = false;
        } else {
            alert("請輸入完整選項!");
        };
    };



    $scope.county_debt = null;
    $scope.public_revenue = null;
    $scope.coma_exp = null;
    $scope.selectCtrl = {
        years: ['2011', '2012', '2013'],
        countys: ['六都(北北桃中南高)', '北部(北北桃基蘭竹)', '中部(中苗彰投雲)', '南部(南高嘉屏)', '東部(花東)', '離島(澎金馬)'],
        items: ['縣市債務資料', '縣市歲入資料', '昏迷指數', '縣市人口資料', '縣市歲出資料', '縣市赤字資料']
    };
    $http({
        method: 'GET',
        url: 'javascripts/county_debt.json'
    }).success(function(data, status, headers, config) {
        $scope.county_debt = angular.fromJson(data);
        for (var i = 0; i < $scope.county_debt.public_debt.length; i++) {
            handle_year($scope.county_debt.public_debt[i]);
        };
        for (var i = 0; i < $scope.county_debt.public_debt_potential.length; i++) {
            handle_year_5($scope.county_debt.public_debt_potential[i]);
        };
    }).error(function(data, status, headers, config) {
        console.log("Error occured when get the county_debt");
    });


    $http({
        method: 'GET',
        url: 'javascripts/county_revenue.json'
    }).success(function(data, status, headers, config) {
        $scope.county_revenue = angular.fromJson(data);

        for (var i = 0; i < $scope.county_revenue.revenue.length; i++) {
            handle_year_3($scope.county_revenue.revenue[i]);
        };
        for (var i = 0; i < $scope.county_revenue.budget.length; i++) {
            handle_year($scope.county_revenue.budget[i]);
        };
        for (var i = 0; i < $scope.county_revenue.regular_revenue.length; i++) {
            handle_year_3($scope.county_revenue.regular_revenue[i]);
        };
        for (var i = 0; i < $scope.county_revenue.supply_and_help_revenue.length; i++) {
            handle_year_3($scope.county_revenue.supply_and_help_revenue[i]);
        };
        for (var i = 0; i < $scope.county_revenue.distributed_tax.length; i++) {
            handle_year_3($scope.county_revenue.distributed_tax[i]);
        };
        for (var i = 0; i < $scope.county_revenue.self_raised_funds.length; i++) {
            handle_year_3($scope.county_revenue.self_raised_funds[i]);
        };
        for (var i = 0; i < $scope.county_revenue.tax_revenue.length; i++) {
            handle_year_2($scope.county_revenue.tax_revenue[i]);
        };
        for (var i = 0; i < $scope.county_revenue.land_value_increment_tax.length; i++) {
            handle_year($scope.county_revenue.land_value_increment_tax[i]);
        };
        for (var i = 0; i < $scope.county_revenue.house_tax.length; i++) {
            handle_year($scope.county_revenue.house_tax[i]);
        };
        for (var i = 0; i < $scope.county_revenue.land_value_tax.length; i++) {
            handle_year($scope.county_revenue.land_value_tax[i]);
        };
        for (var i = 0; i < $scope.county_revenue.operating_revenue.length; i++) {
            handle_year_2($scope.county_revenue.operating_revenue[i]);
        };
    }).error(function(data, status, headers, config) {
        console.log("Error occured when get the county_revenue");
    });

    $http({
        method: 'GET',
        url: 'javascripts/coma_exp.json'
    }).success(function(data, status, headers, config) {
        $scope.coma_exp = angular.fromJson(data);
    }).error(function(data, status, headers, config) {
        console.log("Error occured when get the coma_exp");
    });

    $scope.keys_north = ['新北市', '台北市', '桃園縣', '宜蘭縣', '新竹縣', '基隆市', '新竹市'];
    $scope.keys_center = ['台中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'];
    $scope.keys_south = ['台南市', '高雄市', '嘉義縣', '屏東縣', '嘉義市'];
    $scope.keys_east = ['台東縣', '花蓮縣'];
    $scope.keys_island = ['澎湖縣', '金門縣', '連江縣'];



    function queryYear(selectYearStr) {
        for (var i = 0; i < $scope.selectCtrl.years.length; i++) {
            if ($scope.selectCtrl.years[i] === selectYearStr) {
                return i + 1;
            };
        };
    };

    function queryCounty(selectCountyStr) {
        for (var i = 0; i < $scope.selectCtrl.countys.length; i++) {
            if ($scope.selectCtrl.countys[i] === selectCountyStr) {
                return i + 1;
            }
        };
    };

    function queryItem(selectItem) {
        for (var i = 0; i < $scope.selectCtrl.items.length; i++) {
            if ($scope.selectCtrl.items[i] === selectItem) {
                return i + 1;
            }
        };
    };

    // 從千元轉為億元的函數，四捨五入取到小數點後一位
    function amount_set(value) {
        var newValue = value / 1000;
        newValue = Math.round(newValue);
        newValue = newValue / 100;
        return newValue;
    };

    function handle_year(obj) {
        obj.year2011 = amount_set(obj.year2011);
        obj.year2012 = amount_set(obj.year2012);
        obj.year2013 = amount_set(obj.year2013);
    };
    //從元轉為億元的函數，四捨五入取到小數點後一位
    function amount_set_2(value) {
        var newValue = value / 1000000;
        newValue = Math.round(newValue);
        newValue = newValue / 100;
        return newValue;
    };

    function handle_year_2(obj) {
        obj.year2011 = amount_set_2(obj.year2011);
        obj.year2012 = amount_set_2(obj.year2012);
        obj.year2013 = amount_set_2(obj.year2013);
    };
    //從百萬元到億元的函數，四捨五入取到小數點後一位
    function amount_set_3(value) {
        var newValue = value / 10;
        newValue = Math.round(newValue);
        newValue = newValue / 10;
        return newValue;
    };

    function handle_year_3(obj) {
        obj.year2011 = amount_set_3(obj.year2011);
        obj.year2012 = amount_set_3(obj.year2012);
        obj.year2013 = amount_set_3(obj.year2013);
    };
    //從萬元到億元的函數，四捨五入取到小數點後一位
    function amount_set_4(value) {
        var newValue = value / 1000;
        newValue = Math.round(newValue);
        newValue = newValue / 100;
        return newValue;
    };

    function handle_year_4(obj) {
        obj.year2011 = amount_set_4(obj.year2011);
        obj.year2012 = amount_set_4(obj.year2012);
        obj.year2013 = amount_set_4(obj.year2013);
    };

    function amount_set_5(value) {
        var newValue = value / 100;
        newValue = Math.round(newValue);
        newValue = newValue / 100;
        return newValue;
    };

    function handle_year_5(obj) {
        obj.year2011 = amount_set_5(obj.year2011);
        obj.year2012 = amount_set_5(obj.year2012);
        obj.year2013 = amount_set_5(obj.year2013);
    };

    // 處理收入那頁的說明Mark，點擊一個?mark的說明時會切換不同內容show在Modal李
    $scope.county_revenue_set_illu_tab = 1;
    $scope.county_revenue_set_illu = function(selectTab) {
        $scope.county_revenue_set_illu_tab = selectTab;
    };
    $scope.county_revenue_set_illu_isSelected = function(checkedTab) {
        return $scope.county_revenue_set_illu_tab === checkedTab;
    };
    //
    $scope.coma_exp_color = function(c_tab) {
        if ($scope.selectYearTab === 1) {
            var result = $scope.get_level_coma($scope.coma_exp[c_tab].year2011);
        } else if ($scope.selectYearTab === 2) {
            var result = $scope.get_level_coma($scope.coma_exp[c_tab].year2012);
        } else if ($scope.selectYearTab === 3) {
            var result = $scope.get_level_coma($scope.coma_exp[c_tab].year2013);
        } else {}

        return result;
    };

    $scope.get_level_coma = function(exp) {
        if (exp <= 3) {
            return 6;
        } else if (exp >= 3 && exp < 3.5) {
            return 5;
        } else if (exp >= 3.5 && exp < 4) {
            return 4;
        } else if (exp >= 4 && exp < 4.5) {
            return 3;
        } else if (exp >= 4.5 && exp < 5) {
            return 2;
        } else if (exp >= 5) {
            return 1;
        } else {}
    };
    // 昏迷指數資料
    $scope.coma = [
        [5.34, 5.48, 5.04, 3.51, 4.26, 4.63, 4.47, 5.07, 2.94, 3.36, 2.80, 3.20, 3.40, 3.13, 3.14, 3.17, 3.30, 3.68, 4.87, 4.49],
        [5.06, 5.32, 5.43, 3.84, 4.12, 5.51, 4.76, 4.91, 2.67, 3.20, 3.37, 3.31, 3.42, 2.87, 3.37, 3.46, 2.87, 3.27, 5.16, 4.23],
        [5.04, 5.47, 5.60, 3.95, 4.46, 5.59, 5.50, 5.23, 3.40, 3.59, 3.11, 3.98, 3.31, 3.72, 3.99, 3.84, 3.78, 3.68, 5.42, 4.53]
    ];
    // 昏迷指數資料-現金償付能力
    $scope.coma_cash_pay = [
        [3.05, 3.35, 5.35, 3.10, 3.71, 4.12, 3.86, 3.97, 3.36, 3.78, 2.82, 4.42, 5.07, 4.23, 5.69, 3.69, 5.08, 3.14, 3.91, 5.49],
        [2.94, 3.48, 4.40, 1.64, 3.14, 4.11, 5.61, 6.64, 3.66, 3.65, 3.99, 5.97, 5.26, 4.40, 5.58, 3.96, 6.31, 3.65, 4.93, 5.96],
        [3.54, 3.53, 4.29, 3.15, 3.45, 4.65, 4.58, 4.72, 2.58, 4.04, 3.74, 4.49, 6.31, 4.17, 7.05, 2.38, 4.41, 3.11, 4.75, 5.16]
    ];
    //昏迷指數資料-預算支應能力
    $scope.coma_budget_pay = [
        [7.02, 8.16, 5.93, 5.37, 5.90, 5.68, 4.05, 6.70, 3.76, 3.01, 3.01, 2.85, 3.21, 2.76, 2.23, 2.54, 2.81, 4.16, 5.54, 3.99],
        [7.36, 7.75, 6.42, 6.07, 5.78, 6.38, 4.35, 6.21, 3.92, 3.06, 2.46, 2.91, 2.12, 2.26, 1.97, 3.29, 2.65, 3.92, 5.66, 3.55],
        [7.28, 7.98, 7.28, 6.20, 6.55, 6.67, 4.97, 6.05, 4.70, 4.08, 3.18, 3.67, 2.64, 2.80, 2.28, 3.86, 3.57, 4.39, 5.77, 3.83]
    ];
    //昏迷指數資料-長期償還能力
    $scope.coma_long_term_pay = [
        [5.57, 3.24, 3.68, 1.91, 2.99, 3.46, 7.72, 3.87, 2.07, 4.23, 3.11, 3.42, 3.33, 3.52, 3.11, 5.27, 4.21, 4.86, 4.15, 4.94],
        [3.06, 3.22, 5.68, 1.50, 2.83, 4.81, 6.82, 1.95, 1.40, 2.98, 5.89, 3.35, 3.38, 3.32, 2.71, 6.46, 3.37, 3.03, 4.06, 4.95],
        [3.06, 3.23, 3.71, 3.56, 2.72, 5.16, 7.76, 1.69, 1.32, 3.12, 3.21, 3.26, 3.45, 6.23, 7.42, 5.13, 3.41, 3.00, 4.73, 4.66]
    ];
    //昏迷指數資料-永續服務能力
    $scope.coma_forever_serve = [
        [6.01, 6.92, 4.57, 2.94, 3.89, 4.98, 2.76, 5.49, 1.92, 2.38, 2.16, 1.68, 1.27, 1.62, 0.71, 1.23, 0.45, 2.61, 6.01, 3.27],
        [5.89, 6.44, 5.42, 3.85, 3.92, 6.22, 3.60, 6.21, 2.21, 2.37, 1.67, 2.10, 1.09, 1.39, 0.60, 2.33, 0.39, 2.78, 6.11, 3.14],
        [6.80, 6.93, 6.76, 4.39, 5.03, 6.64, 3.89, 5.43, 3.15, 3.21, 1.58, 2.16, 1.23, 1.57, 0.72, 2.36, 0.68, 3.36, 6.31, 3.30]
    ];
    // 昏迷指數資料->經過函數判斷得整數等級，儲存於陣列
    $scope.coma_color_array = [
        [],
        [],
        []
    ];
    for (var i = 0; i < $scope.coma.length; i++) {
        for (var j = 0; j < $scope.coma[i].length; j++) {
            var bePushed = $scope.get_level_coma($scope.coma[i][j]);
            $scope.coma_color_array[i].push(bePushed);
        };
    };
    // console.log($scope.coma_color_array);

    $scope.get_coma_color = function(cty_index, color_index) {
        var level = $scope.coma_color_array[$scope.selectYearTab - 1][cty_index];
        return level === color_index;
    };

    // 縣市人口資料-戶籍總人口
    $scope.county_total_population = [
        [3916451, 2650968, 2664394, 1876960, 2774470, 2013305, 459061, 517641, 562010, 1303039, 522807, 713556, 537942, 864529, 228290, 336838, 97157, 379927, 420052, 271526, 103883, 10106],
        [3939305, 2673226, 2684893, 1881645, 2778659, 2030161, 458595, 523993, 563976, 1299868, 520196, 710991, 533723, 858441, 226252, 335190, 98843, 377153, 425071, 271220, 113111, 11310],
        [3954929, 2686516, 2701661, 1883208, 2779877, 2044023, 458456, 530486, 565554, 1296013, 517222, 707792, 529229, 852286, 224821, 333897, 100400, 374914, 428483, 270872, 120713, 12165]
    ];
    // 縣市人口資料-老年人口
    $scope.county_old_population = [
        [334479, 338199, 235152, 218693, 291452, 168570, 60666, 57355, 75473, 159154, 71845, 109014, 84934, 110539, 30054, 42726, 14083, 42511, 39657, 30334, 12383, 976],
        [353396, 348656, 243197, 222930, 301960, 174266, 61137, 57941, 76362, 162143, 72541, 110164, 85612, 112453, 30470, 43365, 14110, 43558, 40768, 31161, 12908, 1054],
        [374883, 362605, 253616, 229827, 316234, 181860, 62074, 58844, 77402, 166051, 73941, 111629, 86959, 115371, 30826, 44117, 14367, 44942, 42032, 32138, 13554, 1134]
    ];
    // 縣市歲出資料-歲出
    $scope.county_expenditure = [
        [145899.01, 173032.48, 96887.31, 77578.82, 126711.54, 57174.9, 20452.16, 23041.6, 26465.78, 36576.7, 21030.55, 25114.16, 21444.47, 35990.9, 14106.78, 16537.18, 8397.49, 17609.7, 15490.59, 11234.92, 12122.2, 3390.79],
        [149866.52, 176075.23, 99883.36, 82584.34, 124889.95, 58093.63, 19295.87, 22289.75, 27935.19, 39474.68, 21628.39, 24734.76, 21978.57, 32826.95, 14208.85, 16366.66, 8746.7, 16218.75, 16358.94, 10365.03, 10521.3, 3072.07],
        [146754.1, 169580.24, 109538.02, 77916.85, 122071.85, 57736.47, 19779.05, 20169.72, 26942.14, 38893.13, 22284.39, 25570.98, 21947.03, 31568.77, 13933.99, 16958.46, 9056.19, 16068.11, 16205.96, 10554.82, 10832.59, 3227.38]
    ];
    for (var i = 0; i < $scope.county_expenditure.length; i++) {
        for (var j = 0; j < $scope.county_expenditure[i].length; j++) {
            $scope.county_expenditure[i][j] = amount_set_3($scope.county_expenditure[i][j]);
        };
    };
    // 歲出資料-歲出預算數
    $scope.county_expenditure_budget = [
        [155200000, 179600000, 105400000, 84100000, 134900000, 62100000, 21600000, 27600000, 41400000, 39300000, 23400000, 28600000, 23500000, 39900000, 15800000, 18300000, 9200000, 18900000, 18200000, 12200000, 13200000, 3700000],
        [15744800, 18689200, 11070200, 8747300, 13126700, 6215200, 2009700, 2580800, 3368300, 4154900, 2328300, 2774100, 2356200, 3424100, 1556600, 1770300, 946600, 1763100, 1828300, 1128800, 1149500, 334300],
        [15541636.23, 17695405.52, 11956341.5, 8346041.2, 12638251.9, 6292800, 2063318.2, 2502107.8, 2868677.8, 4133961.1, 2486886.1, 2872690.8, 2444173.8, 3287538.8, 1525716.3, 1815644.8, 994727.3, 1711101.5, 1806442.1, 1183092.7, 1228932.8, 363615.9]
    ];
    for (var i = 0; i < $scope.county_expenditure_budget.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_budget[i].length; j++) {
            $scope.county_expenditure_budget[i][j] = amount_set($scope.county_expenditure_budget[i][j]);
        };
    };
    // 歲出資料-經常支出
    $scope.county_expenditure_regular_pay = [
        [3916451, 2650968, 2664394, 1876960, 2774470, 2013305, 459061, 517641, 562010, 1303039, 522807, 713556, 537942, 864529, 228290, 336838, 97157, 379927, 420052, 271526, 103883, 10106],
        [3939305, 2673226, 2684893, 1881645, 2778659, 2030161, 458595, 523993, 563976, 1299868, 520196, 710991, 533723, 858441, 226252, 335190, 98843, 377153, 425071, 271220, 113111, 11310],
        [3954929, 2686516, 2701661, 1883208, 2779877, 2044023, 458456, 530486, 565554, 1296013, 517222, 707792, 529229, 852286, 224821, 333897, 100400, 374914, 428483, 270872, 120713, 12165]
    ];
    for (var i = 0; i < $scope.county_expenditure_regular_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_regular_pay[i].length; j++) {
            $scope.county_expenditure_regular_pay[i][j] = amount_set_3($scope.county_expenditure_regular_pay[i][j]);
        };
    };
    // 歲出資料-一般政務支出
    $scope.county_expenditure_general_pay = [
        [16819.01, 12507.98, 10334.1, 8677.96, 13300.09, 4940.35, 1762.71, 1859.36, 3860.08, 2768.03, 2249.75, 2251.91, 1981.31, 4394.98, 1813.92, 1964.5, 868.72, 2307.12, 1690.68, 1417.83, 1732, 491.88],
        [20558.38, 12732.79, 10691.97, 13892.36, 12854.42, 4806.51, 1833.44, 1874.81, 3396.34, 2928.3, 2574.61, 2153.54, 2000.45, 3549.52, 1920.02, 2029.66, 916.9, 2310.39, 1744.78, 1517.67, 1600.4, 495.56],
        [20165.37, 12859.13, 11051, 13046.54, 12403.67, 5075.13, 1820.2, 1896.12, 2891.99, 3009.92, 2663.98, 2162.67, 1948.67, 3293.8, 1791.43, 1979.88, 905.47, 2219.8, 1759.52, 1426.43, 1490.03, 437.78]
    ];
    for (var i = 0; i < $scope.county_expenditure_general_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_general_pay[i].length; j++) {
            $scope.county_expenditure_general_pay[i][j] = amount_set_3($scope.county_expenditure_general_pay[i][j]);
        };
    };
    // 歲出資料-教科文支出
    $scope.county_expenditure_edu_sci_cul_pay = [
        [39160.64, 58097.12, 32305.86, 26515.84, 44063.31, 22251.11, 6372.85, 10182.55, 9237.22, 15047.85, 7312.29, 8415.54, 6031.09, 10048.48, 3908.38, 5246.51, 1851.99, 4831.53, 5483.49, 3414.12, 2102.98, 620.63],
        [41898.2, 62578.87, 33656.58, 27916.33, 45442.59, 23506.08, 6565.83, 7642.6, 9488.78, 14508.21, 7907.82, 8288.44, 6408.21, 10940.56, 3981.53, 5262.47, 1898.44, 4537.28, 5563.56, 3219.92, 2296.31, 678.31],
        [44359.23, 63188.65, 32471.65, 28048.66, 43781.75, 24283.74, 6851.45, 7243.89, 9356.31, 15520.87, 7360.78, 8488.3, 6236.11, 11271.39, 3998.51, 5301.55, 1873.85, 4637.11, 5453.64, 3354.94, 2517.5, 668]
    ];
    for (var i = 0; i < $scope.county_expenditure_edu_sci_cul_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_edu_sci_cul_pay[i].length; j++) {
            $scope.county_expenditure_edu_sci_cul_pay[i][j] = amount_set_3($scope.county_expenditure_edu_sci_cul_pay[i][j]);
        };
    };
    // 縣市歲出資料-經濟發展支出
    $scope.county_expenditure_eco_develop_pay = [
        [19117.73, 25660.9, 10234.11, 11255.77, 14642.6, 6672.36, 4255.91, 5200.98, 4528.26, 4500.5, 3127.39, 4161.56, 5194.16, 8542.95, 2954.98, 3230.82, 2394.09, 3886.76, 1900.06, 2199.4, 5395.63, 1628.93],
        [19202.05, 20831.56, 13072.22, 11404.69, 11267.19, 6242.38, 3464.02, 5093.4, 4071.92, 6524.11, 2562.04, 4435.5, 4431.42, 5616.54, 2710.06, 2844.08, 2653.47, 2499.22, 2259.96, 1229.62, 3579.7, 1314.15],
        [25412.57, 20262.53, 26634.9, 11900.93, 9546.77, 8095.05, 3671.8, 3882.97, 4423.03, 5677.4, 4269.89, 4538.45, 4706.09, 4600.79, 2471.19, 3470.6, 2930.89, 2570.18, 1882.66, 1262.75, 3565.42, 1566.85]
    ];
    for (var i = 0; i < $scope.county_expenditure_eco_develop_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_eco_develop_pay[i].length; j++) {
            $scope.county_expenditure_eco_develop_pay[i][j] = amount_set_3($scope.county_expenditure_eco_develop_pay[i][j]);
        };
    };
    // 縣市歲出資料-社會福利支出
    $scope.county_expenditure_socail_fare_pay = [
        [31406.28, 43518.87, 17335.08, 16298.14, 24839.48, 10885.35, 2366.52, 2169.09, 2748.71, 4761.17, 2444.14, 3617.52, 2937.34, 4010.87, 1764.47, 1703.5, 1086.8, 2090.16, 1509.73, 974.6, 1287.7, 218.12],
        [30460.24, 44720.84, 14829.44, 13631.59, 25058.76, 9701.03, 2234.02, 2555.83, 2801.23, 5007.88, 2516.91, 3556.9, 3010.49, 4080.28, 1843.25, 1776.17, 1052.16, 2237, 1746.28, 1064.26, 1335.88, 217.81],
        [20901.26, 40119.14, 11875.24, 9477, 25940.5, 6675.18, 2137.9, 2655.05, 3116.48, 4847.65, 2534.64, 3892.48, 3086.13, 4032.71, 1878.81, 1870.38, 1043.57, 2079.61, 2067.93, 1192.84, 1413.23, 220.04]
    ];
    for (var i = 0; i < $scope.county_expenditure_socail_fare_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_socail_fare_pay[i].length; j++) {
            $scope.county_expenditure_socail_fare_pay[i][j] = amount_set_3($scope.county_expenditure_socail_fare_pay[i][j]);
        };
    };
    // 縣市歲出資料-社區發展支出
    $scope.county_expenditure_com_develop_pay = [
        [418299454, 3137163803, 300490643, 212614331, 1184788276, 93649026, 1062726464, 0, 144634990, 58396511, 99849762, 9447038, 0, 516513, 1842681, 13104711, 6334660, 12246340, 31399299, 82144170, 0, 48644124],
        [67998682, 3829436433, 407106385, 391700362, 1552916074, 9355452, 527358772, 0, 128207181, 67998682, 18927859, 4345103, 0, 9882976, 1641657, 10418938, 6301996, 11663430, 25976052, 9106026, 0, 42898932],
        [523012494, 2454154312, 2198368139, 479931284, 3144730808, 17868059, 801707376, 0, 566576814, 63340729, 33948212, 23690744, 0, 19708133, 1697931, 16831341, 11573365, 41153717, 27372043, 10221824, 0, 66707409]
    ];
    for (var i = 0; i < $scope.county_expenditure_com_develop_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_com_develop_pay[i].length; j++) {
            $scope.county_expenditure_com_develop_pay[i][j] = amount_set_2($scope.county_expenditure_com_develop_pay[i][j]);
        };
    };
    // 縣市歲出資料-環境保護支出
    $scope.county_expenditure_enviro_protect_pay = [
        [12495918178, 8673509566, 3774339756, 2424700674, 7508475674, 1190587816, 117409273, 367484924, 379502607, 272534674, 186439445, 223083662, 126057849, 287235478, 135349488, 161597932, 146771365, 729313200, 805625703, 458833711, 421131913, 44466207],
        [266792053, 8326602423, 4428998014, 2342398452, 8122717744, 1657699204, 101979396, 215415457, 146512103, 266792053, 184440573, 181797711, 101350296, 339251450, 178863767, 164448985, 1664047987, 760382503, 941295933, 470210389, 441887781, 50137713],
        [10367422970, 9056183800, 5394753649, 2642161254, 8740227457, 1825635884, 97431695, 491949322, 869586084, 251029103, 161441311, 200100105, 192752774, 359039123, 167312302, 240619776, 249885505, 751741638, 1275555734, 521037867, 723671512, 54236246]
    ];
    for (var i = 0; i < $scope.county_expenditure_enviro_protect_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_enviro_protect_pay[i].length; j++) {
            $scope.county_expenditure_enviro_protect_pay[i][j] = amount_set_2($scope.county_expenditure_enviro_protect_pay[i][j]);
        };
    };
    // 縣市歲出資料-警政支出
    $scope.county_expenditure_police_pay = [
        [10111.77, 12226.41, 8926.1, 5927.72, 9998.09, 5295.69, 1766.65, 1511.7, 2048.88, 4205.81, 2266.5, 2370.92, 1983.12, 2864.14, 1526.2, 1843.54, 1164.9, 1710.93, 1389.07, 1216.65, 501.69, 144.81],
        [10447.68, 12503.99, 9214.18, 6029.02, 10413.56, 5434.55, 1785.56, 1559.68, 2094.38, 4080.22, 2161.72, 2310.06, 1968.65, 2817.31, 1508.62, 1826, 1154.58, 1757.66, 1398.32, 1214.22, 540.21, 147.93],
        [10326.34, 12241.56, 9165.74, 6036.15, 9805.83, 5461.23, 1794.75, 1527.35, 1984.22, 4016, 2205.86, 2307.31, 1890.52, 2966.21, 1493.82, 1812.13, 1143.4, 1693.33, 1351.59, 1201.58, 619.89, 138.68]
    ];
    for (var i = 0; i < $scope.county_expenditure_police_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_police_pay[i].length; j++) {
            $scope.county_expenditure_police_pay[i][j] = amount_set_3($scope.county_expenditure_police_pay[i][j]);
        };
    };
    // 縣市歲出資料-退休撫卹支出
    $scope.county_expenditure_retire_pay = [
        [11862.34, 4961.52, 8282.92, 3905.87, 5111.68, 4782.6, 2066.7, 541.23, 2444.69, 4356.04, 2572.54, 2857.93, 2380.89, 4716.66, 1658.93, 1905.87, 697.73, 1676.94, 1994.49, 1394.14, 392.19, 25.56],
        [12500.69, 5122.55, 8642.36, 4461.78, 5244.84, 5004.34, 2148.1, 2290.47, 2756.84, 4736.58, 2913.17, 3094.01, 3221.59, 4367.16, 1743.62, 1981.54, 724.24, 1755.13, 2112.26, 1455.64, 396.4, 24.52],
        [11990.94, 4840.91, 8521.18, 4197.7, 5105.52, 5149.67, 2051.46, 1892.31, 2690.51, 4398.02, 2450.38, 2809.65, 3115.43, 4065.01, 1780.26, 1896.78, 747.03, 1671.42, 2110.56, 1447.91, 406.55, 29.29]
    ];
    for (var i = 0; i < $scope.county_expenditure_retire_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_retire_pay[i].length; j++) {
            $scope.county_expenditure_retire_pay[i][j] = amount_set_3($scope.county_expenditure_retire_pay[i][j]);
        };
    };
    // 縣市歲出資料-債務支出
    $scope.county_expenditure_debt_pay = [
        [756.12, 1718, 536.67, 840.49, 1807.87, 340.44, 211.63, 317.9, 298.74, 206.11, 188.54, 262.97, 191.29, 200, 45.73, 136.16, 21, 113.95, 136.25, 27.78, 0, 0],
        [544.87, 2794.13, 539.92, 803.98, 2265.38, 372.64, 248.8, 473.05, 350, 254.34, 214.34, 246.54, 224.51, 338.15, 60.58, 140.82, 19, 113.98, 150, 21.1, 0, 0],
        [715.93, 3693.43, 583.43, 948.19, 1636.71, 321.6, 259.99, 285.18, 649.82, 249.19, 210.07, 253.76, 235.98, 300, 62.81, 134.42, 24.3, 118.26, 152.12, 15.34, 0, 0]
    ];
    for (var i = 0; i < $scope.county_expenditure_debt_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_debt_pay[i].length; j++) {
            $scope.county_expenditure_debt_pay[i][j] = amount_set_3($scope.county_expenditure_debt_pay[i][j]);
        };
    };
    // 縣市歲出資料-專案補助支出
    $scope.county_expenditure_project_sup_pay = [
        [0, 0, 0, 0, 0, 0, 17250000, 0, 0, 83299273, 60691000, 90000000, 25867997, 140713000, 13522000, 0, 66674353, 0, 0, 0, 0, 33685611],
        [0, 0, 0, 0, 0, 0, 14250000, 0, 0, 77997187, 37500000, 81000000, 22619687, 97985935, 667505, 0, 61296188, 0, 0, 0, 0, 34558764],
        [0, 0, 0, 0, 0, 0, 13274443, 0, 0, 58781534, 39000000, 77250000, 55165475, 100543993, 417733, 0, 65897184, 0, 0, 0, 0, 28518701]
    ];
    for (var i = 0; i < $scope.county_expenditure_project_sup_pay.length; i++) {
        for (var j = 0; j < $scope.county_expenditure_project_sup_pay[i].length; j++) {
            $scope.county_expenditure_project_sup_pay[i][j] = amount_set_2($scope.county_expenditure_project_sup_pay[i][j]);
        };
    };

    // 縣市赤字資料-歲入歲出剩餘
    $scope.county_remainder = [
        [-3096.08, -8904.00, -5891.02, -5958.15, -13872.53, 879.15, -66.89, -269.03, -4709.95, -3004.53, 932.7, -505.71, 179.82, -1578.76, -155.49, -352.1, -470.56, -641.19, 163.34, 262.27, 142.52, -44.77],
        [-15188.79, -15004.31, -4722.02, -4967.28, -21079.60, 4386.97, 661.28, 368.99, -5699.53, -3226.68, -72.69, -725.91, -885.32, -458.5, -678.53, 1146.94, -782.54, 262.75, 482.07, 319.81, 2953.98, -3.1],
        [-9555.14, -9435.83, -7044.19, -4429.45, -10003.13, 3524.36, 736.21, 486.68, -4590.78, -1332.36, 587.13, -776.24, -285.24, -213.80, -386.31, 872.46, -583.89, 700.41, 1000.28, 852.65, 2383.90, 86.49]
    ];

    for (var i = 0; i < $scope.county_remainder.length; i++) {
        for (var j = 0; j < $scope.county_remainder[i].length; j++) {
            if ($scope.county_remainder[i][j] > 0) {
                $scope.county_remainder[i][j] = amount_set_3($scope.county_remainder[i][j]);
            }
            if ($scope.county_remainder[i][j] < 0) {
                $scope.county_remainder[i][j] = $scope.county_remainder[i][j] * (-1);
                $scope.county_remainder[i][j] = amount_set_3($scope.county_remainder[i][j]);
                $scope.county_remainder[i][j] = $scope.county_remainder[i][j] * (-1);
            }
        };
    };

    $scope.chart_tab = 1;
    $scope.setChartTab = function(selectTab) {
        $scope.chart_tab = selectTab;
    };
    $scope.isThisChartTab = function(checkTab) {
        return $scope.chart_tab == checkTab;
    };

});









financialDBCtrl
    .directive('countyDebt', function() {
        return {
            restrict: 'A',
            templateUrl: 'county_debt.html'
        };
    })
    .directive('countyRevenue', function() {
        return {
            restrict: 'A',
            templateUrl: 'county_revenue.html'
        };
    })
    .directive('countyComa', function() {
        return {
            retrict: 'A',
            templateUrl: 'county_coma.html'
        };
    })
    .directive('countyPopulation', function() {
        return {
            retrict: 'A',
            templateUrl: 'county_population.html'
        };
    })
    .directive('countyExpenditure', function() {
        return {
            retrict: 'A',
            templateUrl: 'county_expenditure.html'
        };
    })
    .directive('countyDeficit', function() {
        return {
            retrict: 'A',
            templateUrl: 'county_deficit.html'
        };
    });
