var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];


var county_expenditure_general_arr = [197.72, 131.32, 57.09, 113.40, 88.90, 130.87, 17.99, 19.62, 31.85, 30.56, 22.44, 21.63, 25.80, 34.28, 26.08, 20.66, 9.60, 23.37, 20.05, 15.30, 17.45, 4.43];
var county_expenditure_economic_arr = [284.90, 182.80, 83.63, 214.14, 133.48, 131.06, 19.46, 50.91, 49.36, 63.17, 41.93, 53.87, 36.87, 41.41, 17.82, 32.67, 20.98, 29.67, 19.59, 11.59, 34.67, 13.38];
var county_expenditure_edu_arr = [475.44, 637.80, 281.37, 331.93, 278.21, 452.45, 80.05, 86.23, 85.19, 164.54, 72.88, 86.60, 64.59, 109.91, 40.80, 53.52, 19.56, 47.55, 58.48, 35.85, 25.69, 7.14];
var county_expenditure_fare_arr = [212.73, 395.48, 72.54, 133.20, 94.65, 265.49, 22.96, 26.79, 27.50, 54.01, 25.73, 38.11, 30.77, 39.58, 18.97, 20.05, 10.88, 21.35, 20.68, 11.95, 15.16, 2.19];
var county_expenditure_retire_arr = [121.00, 49.08, 49.05, 86.21, 36.85, 54.85, 20.75, 22.95, 27.76, 47.13, 25.53, 30.46, 33.19, 44.33, 18.33, 19.27, 7.32, 17.05, 20.19, 13.64, 4.52, 0.33];

// 歲入總表
var county_expenditure_general_arr_2013 = [201.65, 128.59, 110.51, 130.47, 124.04, 50.75, 18.20, 18.96, 28.92, 30.10, 26.64, 21.63, 19.49, 32.94, 17.91, 19.80, 9.05, 22.20, 17.60, 14.26, 14.90, 4.38];
var county_expenditure_economic_arr_2013 = [254.13, 202.63, 266.35, 119.01, 95.47, 80.95, 36.72, 38.83, 44.23, 56.77, 42.70, 45.38, 47.06, 46.01, 24.71, 34.71, 29.31, 25.70, 18.83, 12.63, 35.65, 15.67];
var county_expenditure_edu_arr_2013 = [443.59, 631.89, 324.72, 280.49, 437.82, 242.84, 68.51, 72.44, 93.56, 155.21, 73.61, 84.88, 62.36, 112.71, 39.99, 53.02, 18.74, 46.37, 54.54, 33.55, 25.18, 6.68];
var county_expenditure_fare_arr_2013 = [209.01, 401.19, 118.75, 94.77, 259.41, 66.75, 21.38, 26.55, 31.16, 48.48, 25.35, 38.92, 30.86, 40.33, 18.79, 18.70, 10.44, 20.80, 20.68, 11.93, 14.13, 2.20];
var county_expenditure_retire_arr_2013 = [119.91, 48.41, 85.21, 41.98, 51.06, 51.50, 20.51, 18.92, 26.91, 43.98, 24.50, 28.10, 31.15, 40.65, 17.80, 18.97, 7.47, 16.71, 21.11, 14.48, 4.07, 0.29];

var county_expenditure_general_arr_2012 = [205.58, 127.33, 106.92, 138.92, 128.54, 48.07, 18.33, 18.75, 33.96, 29.28, 25.75, 21.54, 20.00, 35.50, 19.20, 20.30, 9.17, 23.10, 17.45, 15.18, 16.00, 4.96];
var county_expenditure_economic_arr_2012 = [192.02, 208.32, 130.72, 114.05, 112.67, 62.42, 34.64, 50.93, 40.72, 65.24, 25.62, 44.36, 44.31, 56.17, 27.10, 28.44, 26.53, 24.99, 22.60, 12.30, 35.80, 13.14];
var county_expenditure_edu_arr_2012 = [418.98, 625.79, 336.57, 279.16, 454.43, 235.06, 65.66, 76.43, 94.89, 145.08, 79.08, 82.88, 64.08, 109.41, 39.82, 52.62, 18.98, 45.37, 55.64, 32.20, 22.96, 6.78];
var county_expenditure_fare_arr_2012 = [304.60, 447.21, 148.29, 136.32, 250.59, 97.01, 22.34, 25.56, 28.01, 50.08, 25.17, 35.57, 30.10, 40.80, 18.43, 17.76, 10.52, 22.37, 17.46, 10.64, 13.36, 2.18];
var county_expenditure_retire_arr_2012 = [125.01, 51.23, 86.42, 44.62, 52.45, 50.04, 21.48, 22.90, 27.57, 47.37, 29.13, 30.94, 32.22, 43.67, 17.44, 19.82, 7.24, 17.55, 21.12, 14.56, 3.96, 0.25];

var county_expenditure_general_arr_2011 = [168.19, 125.08, 103.34, 86.78, 133.00, 49.40, 17.63, 18.59, 38.60, 27.68, 22.50, 22.52, 19.81, 43.95, 18.14, 19.65, 8.69, 23.07, 16.91, 14.18, 17.32, 4.92];
var county_expenditure_economic_arr_2011 = [191.18, 256.61, 102.34, 112.56, 146.43, 66.72, 42.56, 52.01, 45.28, 45.01, 31.27, 41.62, 51.94, 85.43, 29.55, 32.31, 23.94, 38.87, 19.00, 21.99, 53.96, 16.29];
var county_expenditure_edu_arr_2011 = [391.61, 580.97, 323.06, 265.16, 440.63, 222.51, 63.73, 101.83, 92.37, 150.48, 73.12, 84.16, 60.31, 100.48, 39.08, 52.47, 18.52, 48.32, 54.83, 34.14, 21.03, 6.21];
var county_expenditure_fare_arr_2011 = [314.06, 435.19, 173.35, 162.98, 248.39, 108.85, 23.67, 21.69, 27.49, 47.61, 24.44, 36.18, 29.37, 40.11, 17.64, 17.04, 10.87, 20.90, 15.10, 9.75, 12.88, 2.18];
var county_expenditure_retire_arr_2011 = [118.62, 49.62, 82.83, 39.06, 51.12, 47.83, 20.67, 5.41, 24.45, 43.56, 25.73, 28.58, 23.81, 47.17, 16.59, 19.06, 6.98, 16.77, 19.94, 13.94, 3.92, 0.26];

var county_expenditure = [1544.73, 1675.04, 627.60, 1048.69, 735.21, 1262.66, 197.72, 231.50, 264.56, 412.05, 216.92, 266.32, 219.10, 310.58, 142.13, 170.91, 83.76, 166.66, 168.48, 106.41, 114.12, 30.31];
var county_expenditure_2013 = [1467.54, 1695.80, 1095.38, 779.17, 1220.72, 577.36, 197.79, 201.70, 269.42, 388.93, 222.84, 255.71, 219.47, 315.69, 139.34, 169.58, 90.56, 160.68, 162.06, 105.55, 108.33, 32.27];
var county_expenditure_2012 = [1498.67, 1760.75, 998.83, 825.84, 1248.90, 580.94, 192.96, 222.90, 279.35, 394.75, 216.28, 247.35, 219.79, 328.27, 142.09, 163.67, 87.47, 162.19, 163.59, 103.65, 105.21, 30.72];
var county_expenditure_2011 = [1458.99, 1730.32, 968.87, 775.79, 1267.12, 571.75, 204.52, 230.42, 264.66, 365.77, 210.31, 251.14, 214.44, 359.91, 141.07, 165.37, 83.97, 176.10, 154.91, 112.35, 121.22, 33.91];
var county_expenditure_retireOthers_arr = [];
var county_expenditure_retireOthers_arr_2013 = [];
var county_expenditure_retireOthers_arr_2012 = [];
var county_expenditure_retireOthers_arr_2011 = [];

county_expenditure.forEach(function(val, idx, arr) {
    var others = val - county_expenditure_general_arr[idx] - county_expenditure_economic_arr[idx] - county_expenditure_edu_arr[idx] - county_expenditure_fare_arr[idx];
    if (others >= 0)
        county_expenditure_retireOthers_arr.push(others);
    else
        county_expenditure_retireOthers_arr.push(0);
});
county_expenditure_2013.forEach(function(val, idx, arr) {
    var others = val - county_expenditure_general_arr_2013[idx] - county_expenditure_economic_arr_2013[idx] - county_expenditure_edu_arr_2013[idx] - county_expenditure_fare_arr_2013[idx];
    if (others >= 0)
        county_expenditure_retireOthers_arr_2013.push(others);
    else
        county_expenditure_retireOthers_arr_2013.push(0);
});
county_expenditure_2012.forEach(function(val, idx, arr) {
    var others = val - county_expenditure_general_arr_2012[idx] - county_expenditure_economic_arr_2012[idx] - county_expenditure_edu_arr_2012[idx] - county_expenditure_fare_arr_2012[idx];
    if (others >= 0)
        county_expenditure_retireOthers_arr_2012.push(others);
    else
        county_expenditure_retireOthers_arr_2012.push(0);
});
county_expenditure_2011.forEach(function(val, idx, arr) {
    var others = val - county_expenditure_general_arr_2011[idx] - county_expenditure_economic_arr_2011[idx] - county_expenditure_edu_arr_2011[idx] - county_expenditure_fare_arr_2011[idx];
    if (others >= 0)
        county_expenditure_retireOthers_arr_2011.push(others);
    else
        county_expenditure_retireOthers_arr_2011.push(0);
});

// 預決算數比較
var county_revenue_decided_arr = [1372, 1601, 1025, 735, 1121, 613, 205, 207, 224, 376, 229, 248, 217, 314, 135, 178, 85, 168, 172, 114, 132, 33];
var county_revenue_budget_arr = [155.42, 176.95, 119.56, 83.46, 126.38, 62.93, 20.63, 25.02, 28.69, 41.34, 24.87, 28.73, 24.44, 32.88, 15.26, 18.16, 9.95, 17.11, 18.06, 11.83, 12.29, 3.64];
var county_revenue_decided_arr_2012 = [1347, 1611, 952, 776, 1038, 625, 200, 227, 222, 362, 216, 240, 211, 324, 135, 175, 80, 165, 168, 106, 135, 31];
var county_revenue_budget_arr_2012 = [157.45, 186.89, 110.70, 87.47, 131.27, 62.15, 20.10, 25.81, 33.68, 41.55, 23.28, 27.74, 23.56, 34.24, 15.57, 17.70, 9.47, 17.63, 18.28, 11.29, 11.50, 3.34];
var county_revenue_decided_arr_2011 = [1428, 1641, 910, 716, 1128, 581, 204, 228, 218, 336, 220, 246, 216, 344, 140, 162, 79, 170, 157, 115, 123, 33];
var county_revenue_budget_arr_2011 = [1552.00, 1796.00, 1054.00, 841.00, 1349.00, 621.00, 216.00, 276.00, 414.00, 393.00, 234.00, 286.00, 235.00, 399.00, 158.00, 183.00, 92.00, 189.00, 182.00, 122.00, 132.00, 37.00];

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateExpenditureChart(chartId, lineId, array1, array2, array3, array4, array5, countyNameArr) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).interval;

    // console.log(num_grade + " " + debt_distance);
    var h_h = parseFloat($('#chart_svg').attr('height'));
    // console.log(h_h);
    var chart_part_height = h_h * 0.78;
    var chart_part_head_height = 20;









    // if (screen.width > 900) {
    var chart_part_height_unit = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);
    // console.log(chart_part_height_unit);

    for (var i = 0; i <= num_grade; i++) {
        var lns = document.createElementNS(svgns, "path");
        lns.setAttribute("stroke", "#C7C7C7");
        lns.setAttribute("stroke-width", "1");
        var h = chart_part_height + 30 - i * debt_distance * chart_part_height_unit;
        var d_str = 'M30 ' + h + ' H900';
        lns.setAttribute('d', d_str);
        line_2013.appendChild(lns);

        var grade_tag = Math.round(i * debt_distance); //四捨五入做出左邊的級距取到整數位
        // console.log(grade_tag);
        var grdns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:13px;font-weight: bold;';
        grdns.setAttribute("x", 0);
        grdns.setAttribute("y", h);
        grdns.setAttribute("fill", "#6B6B6B");
        grdns.setAttribute("style", txt_sty_str);
        grdns.textContent = grade_tag;
        line_2013.appendChild(grdns);
    }
    var unitns = document.createElementNS(svgns, "text");
    unitns.setAttribute("x", 0);
    unitns.setAttribute("y", 20);
    unitns.setAttribute("fill", "#6B6B6B");
    unitns.setAttribute("style", txt_sty_str);
    unitns.textContent = "億元";
    line_2013.appendChild(unitns);

    for (var i = 0; i < county_revenue_decided_arr.length; i++) {
        var value = [array1[i], array2[i], array3[i], array4[i], array5[i]];

        value.forEach(function(_value, index, array) {
            array[index] = array[index] * chart_part_height_unit;
        });

        var w = 20;
        var H = [chart_part_height + 30 - value[0]];
        value.forEach(function(element, index, array) {
            if (index != 0)
                H[index] = (H[index - 1] - element);
        });

        var fill_color = ['#813d3e', '#b54c52', '#e27e33', '#f3ba33', '#f4e696'];

        for (var j = 0; j < value.length; j++) {
            var ins = document.createElementNS(svgns, "rect");
            ins.setAttribute("x", i * 38 + 50);
            ins.setAttribute("y", H[j]);
            ins.setAttribute("width", w);
            ins.setAttribute("height", value[j]);
            ins.setAttribute("fill", fill_color[j]);
            ins.setAttribute("stroke", "tranparent");
            ins.setAttribute("class", 'rect' + i);
            chart_2013.appendChild(ins);
        }

        var tns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:15px;font-weight: bold;cursor:pointer;';
        tns.setAttribute("x", (i * 38 + 50) + 1.5);
        tns.setAttribute("y", H[0] + value[0] + 13);
        tns.setAttribute("dx", "0, -15,-15");
        tns.setAttribute("dy", "10,20,20");
        tns.setAttribute("fill", "#6B6B6B");
        tns.setAttribute("style", txt_sty_str);
        tns.setAttribute("class", 'rect' + i);
        tns.setAttribute("id", 'county_tag');
        tns.textContent = countyNameArr[i];
        chart_2013.appendChild(tns);
    }
    // } else if (screen.width < 500) {
    //     chart_part_height = chart_part_height * 5 / 11;
    //     var chart_part_height_unit = (chart_part_height - chart_part_head_height * 5 / 11) / (num_grade * debt_distance);
    //     // console.log(chart_part_height_unit);
    //
    //     for (var i = 0; i <= num_grade; i++) {
    //         var lns = document.createElementNS(svgns, "path");
    //         lns.setAttribute("stroke", "#C7C7C7");
    //         lns.setAttribute("stroke-width", "1");
    //         var h = chart_part_height + 30 - i * debt_distance * chart_part_height_unit;
    //         var d_str = 'M30 ' + h + ' H900';
    //         lns.setAttribute('d', d_str);
    //         line_2013.appendChild(lns);
    //
    //         var grade_tag = Math.round(i * debt_distance); //四捨五入做出左邊的級距取到整數位
    //         // console.log(grade_tag);
    //         var grdns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:13px;font-weight: bold;';
    //         grdns.setAttribute("x", 0);
    //         grdns.setAttribute("y", h);
    //         grdns.setAttribute("fill", "#6B6B6B");
    //         grdns.setAttribute("style", txt_sty_str);
    //         grdns.textContent = grade_tag;
    //         line_2013.appendChild(grdns);
    //     }
    //     var unitns = document.createElementNS(svgns, "text");
    //     unitns.setAttribute("x", 0);
    //     unitns.setAttribute("y", h - 12);
    //     unitns.setAttribute("fill", "#6B6B6B");
    //     unitns.setAttribute("style", txt_sty_str);
    //     unitns.textContent = "元";
    //     line_2013.appendChild(unitns);
    //
    //     for (var i = 0; i < county_revenue_decided_arr.length; i++) {
    //         var value = [array1[i], array2[i], array3[i], array4[i], array5[i]];
    //
    //         value.forEach(function(_value, index, array) {
    //             array[index] = array[index] * chart_part_height_unit;
    //         });
    //
    //         var w = 8;
    //         var H = [chart_part_height + 30 - value[0]];
    //         value.forEach(function(element, index, array) {
    //             if (index != 0)
    //                 H[index] = (H[index - 1] - element);
    //         });
    //
    //         var fill_color = ['#813d3e', '#b54c52', '#e27e33', '#f3ba33', '#f4e696'];
    //
    //         for (var j = 0; j < value.length; j++) {
    //             var ins = document.createElementNS(svgns, "rect");
    //             ins.setAttribute("x", i * 12 + 30);
    //             ins.setAttribute("y", H[j]);
    //             ins.setAttribute("width", w);
    //             ins.setAttribute("height", value[j]);
    //             ins.setAttribute("fill", fill_color[j]);
    //             ins.setAttribute("stroke", "tranparent");
    //             ins.setAttribute("class", 'rect' + i);
    //             chart_2013.appendChild(ins);
    //         }
    //
    //         var tns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    //         tns.setAttribute("x", (i * 12 + 30) + (w / 2));
    //         tns.setAttribute("y", H[0] + value[0] + 8);
    //         tns.setAttribute("fill", "#6B6B6B");
    //         tns.setAttribute("style", txt_sty_str);
    //         tns.textContent = county_name[i];
    //         chart_2013.appendChild(tns);
    //     }
    // } else if (screen.width >= 500 && screen.width < 900) {
    //     chart_part_height = chart_part_height * 2 / 3;
    //     var chart_part_height_unit = (chart_part_height - chart_part_head_height * 2 / 3) / (num_grade * debt_distance);
    //     // console.log(chart_part_height_unit);
    //
    //     for (var i = 0; i <= num_grade; i++) {
    //         var lns = document.createElementNS(svgns, "path");
    //         lns.setAttribute("stroke", "#C7C7C7");
    //         lns.setAttribute("stroke-width", "1");
    //         var h = chart_part_height + 30 - i * debt_distance * chart_part_height_unit;
    //         var d_str = 'M30 ' + h + ' H900';
    //         lns.setAttribute('d', d_str);
    //         line_2013.appendChild(lns);
    //
    //         var grade_tag = Math.round(i * debt_distance); //四捨五入做出左邊的級距取到整數位
    //         // console.log(grade_tag);
    //         var grdns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:13px;font-weight: bold;';
    //         grdns.setAttribute("x", 0);
    //         grdns.setAttribute("y", h);
    //         grdns.setAttribute("fill", "#6B6B6B");
    //         grdns.setAttribute("style", txt_sty_str);
    //         grdns.textContent = grade_tag;
    //         line_2013.appendChild(grdns);
    //     }
    //     var unitns = document.createElementNS(svgns, "text");
    //     unitns.setAttribute("x", 0);
    //     unitns.setAttribute("y", h - 12);
    //     unitns.setAttribute("fill", "#6B6B6B");
    //     unitns.setAttribute("style", txt_sty_str);
    //     unitns.textContent = "元";
    //     line_2013.appendChild(unitns);
    //
    //     for (var i = 0; i < county_revenue_decided_arr.length; i++) {
    //         var value = [array1[i], array2[i], array3[i], array4[i], array5[i]];
    //
    //         value.forEach(function(_value, index, array) {
    //             array[index] = array[index] * chart_part_height_unit;
    //         });
    //
    //         var w = 14;
    //         var H = [chart_part_height + 30 - value[0]];
    //         value.forEach(function(element, index, array) {
    //             if (index != 0)
    //                 H[index] = (H[index - 1] - element);
    //         });
    //
    //         var fill_color = ['#813d3e', '#b54c52', '#e27e33', '#f3ba33', '#f4e696'];
    //
    //         for (var j = 0; j < value.length; j++) {
    //             var ins = document.createElementNS(svgns, "rect");
    //             ins.setAttribute("x", i * 20 + 40);
    //             ins.setAttribute("y", H[j]);
    //             ins.setAttribute("width", w);
    //             ins.setAttribute("height", value[j]);
    //             ins.setAttribute("fill", fill_color[j]);
    //             ins.setAttribute("stroke", "tranparent");
    //             ins.setAttribute("class", 'rect' + i);
    //             chart_2013.appendChild(ins);
    //         }
    //
    //         var tns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    //         tns.setAttribute("x", (i * 20 + 40) + (w / 2));
    //         tns.setAttribute("y", H[0] + value[0] + 8);
    //         tns.setAttribute("fill", "#6B6B6B");
    //         tns.setAttribute("style", txt_sty_str);
    //         tns.textContent = county_name[i];
    //         chart_2013.appendChild(tns);
    //     }
    // }









};








generateExpenditureChart('chart_2014', 'line_2014', county_expenditure_general_arr, county_expenditure_economic_arr, county_expenditure_edu_arr, county_expenditure_fare_arr, county_expenditure_retireOthers_arr, county_name);

generateExpenditureChart('chart_2013', 'line_2013', county_expenditure_general_arr_2013, county_expenditure_economic_arr_2013, county_expenditure_edu_arr_2013, county_expenditure_fare_arr_2013, county_expenditure_retireOthers_arr_2013, county_name_before_2014);
generateExpenditureChart('chart_2012', 'line_2012', county_expenditure_general_arr_2012, county_expenditure_economic_arr_2012, county_expenditure_edu_arr_2012, county_expenditure_fare_arr_2012, county_expenditure_retireOthers_arr_2012, county_name_before_2014);
generateExpenditureChart('chart_2011', 'line_2011', county_expenditure_general_arr_2011, county_expenditure_economic_arr_2011, county_expenditure_edu_arr_2011, county_expenditure_fare_arr_2011, county_expenditure_retireOthers_arr_2011, county_name_before_2014);


////
$(document).ready(function() {
    var chart_div_height = parseFloat($('#chart_svg').attr('height'));
    var chart_div_width = parseFloat($('#chart_svg').attr('width'));

    $('rect,#county_tag').mouseover(function() {
        var rect_class = $(this).attr('class');
        var rect_index = parseInt(rect_class.slice(4, rect_class.length));

        var rect_x = parseFloat($(this).attr('x')) + 30;
        var rect_y = parseFloat($("." + rect_class).attr('y')) - 280;

        // var box_top = -chart_div_height + rect_y;
        var box_top = rect_y;
        // var box_left = -chart_div_width + rect_x;
        // var box_left = chart_div_width / 4 + rect_x;
        var box_left = rect_x + 40;
        // console.log(box_top + " " + box_left);
        $('#box_2014').css('top', box_top);
        $('#box_2014').css('left', box_left);
        $('#box_2014 > p:nth-child(2) > map').text(Math.round(county_expenditure_retireOthers_arr[rect_index]));
        $('#box_2014 > p:nth-child(4) > map').text(Math.round(county_expenditure_fare_arr[rect_index]));
        $('#box_2014 > p:nth-child(6) > map').text(Math.round(county_expenditure_edu_arr[rect_index]));
        $('#box_2014 > p:nth-child(8) > map').text(Math.round(county_expenditure_economic_arr[rect_index]));
        $('#box_2014 > p:nth-child(10) > map').text(Math.round(county_expenditure_general_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2014').css('visibility', 'visible');

        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_expenditure_retireOthers_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(4) > map').text(Math.round(county_expenditure_fare_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(6) > map').text(Math.round(county_expenditure_edu_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(8) > map').text(Math.round(county_expenditure_economic_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(10) > map').text(Math.round(county_expenditure_general_arr_2013[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2012').css('top', box_top);
        $('#box_2012').css('left', box_left);
        $('#box_2012 > p:nth-child(2) > map').text(Math.round(county_expenditure_retireOthers_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(4) > map').text(Math.round(county_expenditure_fare_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(6) > map').text(Math.round(county_expenditure_edu_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(8) > map').text(Math.round(county_expenditure_economic_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(10) > map').text(Math.round(county_expenditure_general_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2012').css('visibility', 'visible');

        $('#box_2011').css('top', box_top);
        $('#box_2011').css('left', box_left);
        $('#box_2011 > p:nth-child(2) > map').text(Math.round(county_expenditure_retireOthers_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(4) > map').text(Math.round(county_expenditure_fare_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(6) > map').text(Math.round(county_expenditure_edu_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(8) > map').text(Math.round(county_expenditure_economic_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(10) > map').text(Math.round(county_expenditure_general_arr_2011[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2011').css('visibility', 'visible');

    }).mouseout(function() {
        var rect_class = $(this).attr('class');
        $("." + rect_class).css('opacity', 1);
        $('#box_2014').css('visibility', 'hidden');

        $('#box_2013').css('visibility', 'hidden');

        $('#box_2012').css('visibility', 'hidden');

        $('#box_2011').css('visibility', 'hidden');
    });
});

// 這個函數能判斷輸入數值的整數位數
function theDecimalDigit(arg_num) {
    arg_num = Math.floor(arg_num);
    return arg_num.toString().length;
}
// 這個函數能算出同樣位數大於輸入值的數，當作截距最高點標記數值
function getHeadAndInterval_inputMultipleArray() {
    // 這個區塊是用來處理不固定數量的陣列輸入，可以以最小陣列長度來求總和陣列
    // ，然後找出總和陣列最大值
    var length_arr = [];
    for (var i = 0; i < arguments.length; i++) {
        length_arr.push(arguments[i].length);
    }
    var min_length = Math.min.apply(null, length_arr);
    var arg_arr = [];
    for (var i = 0; i < min_length; i++) {
        var each_index_sum = 0;
        for (var j = 0; j < arguments.length; j++) {
            each_index_sum += arguments[j][i];
        }
        arg_arr.push(each_index_sum);
    }
    var arr_max = Math.max.apply(null, arg_arr);
    /////////////////////////////////////////////////////////
    var node = Math.pow(10, (theDecimalDigit(arr_max) - 1));
    for (var i = 2; i <= 9; i++) {
        if (i * node > arr_max) break;
    }
    if (i >= 6) {
        var obj = {
            head: i,
            interval: node
        }
        return obj
    } else {
        var obj = {
            head: i * 2,
            interval: node / 2
        }
        return obj;
    }
}
