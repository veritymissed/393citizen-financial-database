var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

// var county_public_debt_arr = [891.86, 2359.43, 737.99, 651.38, 2352.35, 258.75, 234.59, 210.55, 401.59, 236.47, 178.97, 255.42, 212.68, 277.1, 74.62, 124.06, 21.75, 117.33, 127.16, 19.35, 0, 0];
// var county_hidden_debt_arr = [116.9243, 1465.0582, 23.155, 106.0264, 666.611, 132.3762, 23.8551, 117.0158, 89.8421, 82.0268, 15.5245, 42.312, 23.9179, 11.3216, 16.5472, 8.9532, 6.1512, 0.9915, 46.494, 3.7637, 0, 0];


var county_revenue_supply_arr = [291.97, 237.32, 134.59, 217.27, 234.34, 278.55, 93.30, 82.87, 109.39, 176.26, 123.28, 129.54, 124.60, 180.65, 87.05, 95.88, 53.92, 76.76, 50.22, 54.21, 30.30, 24.62];
var county_revenue_distributed_arr = [271.95, 366.00, 138.69, 225.76, 181.27, 256.79, 32.54, 44.56, 42.99, 77.53, 64.33, 69.61, 52.37, 74.29, 30.91, 36.59, 16.94, 34.27, 29.89, 20.62, 11.70, 3.12];
var county_revenue_others_arr = [142.67, 306.88, 42.49, 126.41, 51.20, 205.07, 23.49, 28.28, 16.03, 58.24, 14.67, 16.32, 9.95, 14.10, 5.77, 8.72, 3.77, 18.89, 18.32, 6.66, 67.83, 1.74];
var county_revenue_self_raised_arr = [610.27, 758.08, 249.14, 419.02, 222.56, 364.01, 44.21, 52.53, 44.01, 85.46, 34.93, 42.23, 27.26, 43.95, 11.40, 26.25, 4.15, 33.03, 68.61, 28.47, 12.12, 0.97];
var county_revenue_properties_arr = [108.86, 218.97, 2.26, 10.72, 26.46, 59.20, 1.05, 12.54, 11.53, 1.57, 0.99, 2.70, 0.93, 5.49, 2.60, 2.07, 0.80, 3.79, 2.09, 1.33, 1.76, 0.08];

var county_revenue_decided_arr = [1372, 1601, 1025, 735, 1121, 613, 205, 207, 224, 376, 229, 248, 217, 314, 135, 178, 85, 168, 172, 114, 132, 33];


// 歲入總表
var county_expenditure_general_arr = [197.72, 131.32, 57.09, 113.40, 88.90, 130.87, 17.99, 19.62, 31.85, 30.56, 22.44, 21.63, 25.80, 34.28, 26.08, 20.66, 9.60, 23.37, 20.05, 15.30, 17.45, 4.43];
var county_expenditure_economic_arr = [284.90, 182.80, 83.63, 214.14, 133.48, 131.06, 19.46, 50.91, 49.36, 63.17, 41.93, 53.87, 36.87, 41.41, 17.82, 32.67, 20.98, 29.67, 19.59, 11.59, 34.67, 13.38];
var county_expenditure_edu_arr = [475.44, 637.80, 281.37, 331.93, 278.21, 452.45, 80.05, 86.23, 85.19, 164.54, 72.88, 86.60, 64.59, 109.91, 40.80, 53.52, 19.56, 47.55, 58.48, 35.85, 25.69, 7.14];
var county_expenditure_fare_arr = [212.73, 395.48, 72.54, 133.20, 94.65, 265.49, 22.96, 26.79, 27.50, 54.01, 25.73, 38.11, 30.77, 39.58, 18.97, 20.05, 10.88, 21.35, 20.68, 11.95, 15.16, 2.19];
var county_expenditure_retire_arr = [121.00, 49.08, 49.05, 86.21, 36.85, 54.85, 20.75, 22.95, 27.76, 47.13, 25.53, 30.46, 33.19, 44.33, 18.33, 19.27, 7.32, 17.05, 20.19, 13.64, 4.52, 0.33];


var county_coma_arr = [4.87, 6.67, 4.89, 4.94, 3.78, 4.09, 4.50, 4.52, 3.19, 4.53, 3.88, 3.86, 4.10, 4.19, 3.64, 3.12, 4.61, 3.58, 4.86, 5.10];
var county_coma_cash_arr = [2.97, 6.04, 4.25, 3.35, 3.00, 2.75, 4.10, 4.54, 3.20, 5.02, 4.15, 4.20, 4.86, 6.05, 4.66, 3.04, 5.87, 2.72, 4.72, 5.75]
var county_coma_budget_arr = [5.97, 7.96, 4.78, 5.36, 5.68, 6.24, 3.85, 4.85, 4.03, 3.46, 2.60, 3.17, 1.82, 1.58, 1.92, 2.97, 5.09, 3.46, 3.67, 2.46];
var county_coma_longdebt_arr = [5.55, 4.43, 5.96, 6.30, 3.01, 3.69, 6.77, 3.68, 2.62, 5.49, 6.50, 5.65, 7.78, 5.76, 6.44, 4.78, 6.01, 5.62, 4.94, 8.23];
var county_coma_long_arr = [6.90, 8.85, 5.20, 6.33, 4.21, 5.03, 3.65, 5.01, 2.90, 3.67, 2.02, 2.09, 1.18, 1.52, 0.54, 1.75, 0.24, 3.38, 6.21, 3.30];
var coma_tag_name = ['腦死區', '重度葉克膜區', '中重度插管區', '中度加護病房', '普通病房', '追蹤觀察'];

var county_total_population_arr = [396.68, 270.23, 205.83, 271.98, 188.43, 277.90, 45.88, 53.76, 56.71, 129.15, 51.43, 70.54, 52.48, 84.79, 22.45, 33.34, 10.18, 37.31, 43.20, 27.09, 12.77, 1.25];
var county_old_population_arr = [40.05, 38.05, 19.16, 26.64, 23.77, 33.21, 6.34, 6.03, 7.88, 17.06, 7.56, 11.35, 8.84, 11.83, 3.15, 4.52, 1.47, 4.68, 4.37, 3.33, 1.43, 0.12];
var county_deficit_arr = [-119.02, 212.20, -60.44, -49.52, -19.39, -99.03, -3.14, -10.71, -40.61, -12.98, 21.29, -5.91, -3.99, 7.91, -4.39, -1.39, -4.18, 0.08, 0.65, 4.88, 9.58, 0.22];


var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateDebtChart(chartId, lineId, array1, array2) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2).interval;

    // console.log(num_grade + " " + debt_distance);
    var h_h = parseFloat($('#chart_svg').attr('height'));
    // console.log(h_h);
    var chart_part_height = h_h * 0.78;
    var chart_part_head_height = 20;

    var chart_part_height_unit = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);

    for (var i = 0; i <= num_grade; i++) {
        var lns = document.createElementNS(svgns, "path");
        lns.setAttribute("stroke", "#C7C7C7");
        lns.setAttribute("stroke-width", "1");
        lns.setAttributeNS(xlinkns, "xlink:href", "#rect");
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

    var display_arr = [];
    for (var i = 0; i < array1.length; i++) {
        display_arr[i] = Math.round(array1[i]);
    }
    // console.log(display_arr);
    for (var i = 0; i < array1.length; i++) {
        var val = array1[i] * chart_part_height_unit;
        var val_2 = array2[i] * chart_part_height_unit;
        var h = chart_part_height + 30 - val;
        var h2 = h - array2[i] * chart_part_height_unit;
        var w = 20;
        var fillColor = '#B54D52';
        var fillColor_2 = '#D67547';

        var ins = document.createElementNS(svgns, "rect");
        ins.setAttribute("x", i * 38 + 50);
        ins.setAttribute("y", h);
        ins.setAttribute("width", w);
        ins.setAttribute("height", val);
        ins.setAttribute("fill", fillColor);
        ins.setAttribute("stroke", "tranparent");
        ins.setAttribute("class", 'rect' + i);
        chart_2013.appendChild(ins);

        var ins_2 = document.createElementNS(svgns, "rect");
        ins_2.setAttribute("x", i * 38 + 50);
        ins_2.setAttribute("y", h2);
        ins_2.setAttribute("width", w);
        ins_2.setAttribute("height", val_2);
        ins_2.setAttribute("fill", fillColor_2);
        ins_2.setAttribute("stroke", "tranparent");
        ins_2.setAttribute("class", 'rect' + i);
        chart_2013.appendChild(ins_2);

        var tns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:15px;font-weight: bold;cursor:pointer;';
        tns.setAttribute("x", (i * 38 + 50) + 1.5);
        tns.setAttribute("y", h + val + 13);
        tns.setAttribute("dx", "0, -15,-15");
        tns.setAttribute("dy", "10,20,20");
        tns.setAttribute("fill", "#6B6B6B");
        tns.setAttribute("style", txt_sty_str);
        tns.setAttribute("class", 'rect' + i);
        tns.setAttribute("id", 'county_tag');
        tns.textContent = county_name[i];
        chart_2013.appendChild(tns);
    }

}
//generateDebtChart('chart_2013', 'line_2013', county_public_debt_arr, county_hidden_debt_arr);





function generateChart_reveneue(chartId, lineId, array1, array2, array3, array4, array5) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).interval;

    var h_h = parseFloat($('#chart_svg').attr('height'));

    var chart_part_height = h_h * 0.78;
    var chart_part_head_height = 20;

    var chart_part_height_unit = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);

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

        var fill_color = ['#236278', '#4688a3', '#61afa7', '#b4d5a5', '#e6e1a5'];

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
        tns.textContent = county_name[i];
        chart_2013.appendChild(tns);
    }
}

generateChart_reveneue('chart_2_2013', 'line_2_2013', county_revenue_supply_arr, county_revenue_distributed_arr, county_revenue_self_raised_arr, county_revenue_properties_arr, county_revenue_others_arr);







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

var county_expenditure = [1544.73, 1675.04, 627.60, 1048.69, 735.21, 1262.66, 197.72, 231.50, 264.56, 412.05, 216.92, 266.32, 219.10, 310.58, 142.13, 170.91, 83.76, 166.66, 168.48, 106.41, 114.12, 30.31];

var county_expenditure_retireOthers_arr = [];
county_expenditure.forEach(function(val, idx, arr) {
    var others = val - county_expenditure_general_arr[idx] - county_expenditure_economic_arr[idx] - county_expenditure_edu_arr[idx] - county_expenditure_fare_arr[idx];
    if (others >= 0)
        county_expenditure_retireOthers_arr.push(others);
    else
        county_expenditure_retireOthers_arr.push(0);
});
generateExpenditureChart('chart_3_2013', 'line_3_2013', county_expenditure_general_arr, county_expenditure_economic_arr, county_expenditure_edu_arr, county_expenditure_fare_arr, county_expenditure_retireOthers_arr, county_name);

function generateComaChart(chartId, rectId, lineId, year_coma_array) {
    var chart_2013 = document.getElementById(chartId);
    var rect_2013 = document.getElementById(rectId);
    var line_2013 = document.getElementById(lineId);

    var year_coma_array_modified = [];
    year_coma_array.forEach(function(val,idx,arr) {
      if(val<6) year_coma_array_modified.push(val);
      else year_coma_array_modified.push(5.99);
    });

    var num_grade = coma_getHeadAndInterval_inputMultipleArray(year_coma_array_modified).head;
    var debt_distance = coma_getHeadAndInterval_inputMultipleArray(year_coma_array_modified).interval;

    // console.log(num_grade + " " + debt_distance);
    var h_h = parseFloat($('#chart_svg').attr('height'));
    var w_w = parseFloat($('#chart_svg').attr('width'));
    // console.log(w_w);
    var chart_part_height = h_h * 0.7;
    var chart_part_head_height = 20;
    // if (screen.width >= 950) {
    var chart_part_height_unit = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);

    for (var i = 4; i <= num_grade - 1; i++) {
        var lns = document.createElementNS(svgns, "path");
        lns.setAttribute("stroke", "#C7C7C7");
        lns.setAttribute("stroke-width", "1");
        var h = chart_part_height + 100 - i * debt_distance * chart_part_height_unit;
        var d_str = 'M30 ' + h + ' H900';
        lns.setAttribute('d', d_str);
        // line_2013.appendChild(lns);
        // ////////////////////////////////////////////////////////////////////////
        var rect = document.createElementNS(svgns, "rect");
        var fillColor;
        if (i * debt_distance < 3) {
            fillColor = '#391450';
        } else if (i * debt_distance >= 3 && i * debt_distance < 3.5) {
            fillColor = '#763536';
        } else if (i * debt_distance >= 3.5 && i * debt_distance < 4) {
            fillColor = '#cd4f48';
        } else if (i * debt_distance >= 4 && i * debt_distance < 4.5) {
            fillColor = '#f2865d';
        } else if (i * debt_distance >= 4.5 && i * debt_distance < 5) {
            fillColor = '#d7b96f';
        } else if (i * debt_distance >= 5) {
            fillColor = '#9aba74';
        } else {
            fillColor = "#CCCCCC"
        }


        rect.setAttribute("x", 0);
        if (i == 4) {
            rect.setAttribute("x", 0);
            rect.setAttribute("y", h - debt_distance * chart_part_height_unit);
            rect.setAttribute("height", debt_distance * chart_part_height_unit);
        } else if (i == 5) {
            rect.setAttribute("x", 0);
            rect.setAttribute("y", h - debt_distance * chart_part_height_unit);
            rect.setAttribute("height", debt_distance * chart_part_height_unit + 10);
        } else if (i == 6) {
            rect.setAttribute("x", 10);
            rect.setAttribute("y", h - 2 * debt_distance * chart_part_height_unit);
            rect.setAttribute("height", 2 * debt_distance * chart_part_height_unit);
        } else if (i == 7) {
            rect.setAttribute("x", 20);
            rect.setAttribute("y", h - 3 * debt_distance * chart_part_height_unit);
            rect.setAttribute("height", 2 * debt_distance * chart_part_height_unit);

        } else if (i == 8) {
            rect.setAttribute("x", 30);
            rect.setAttribute("y", h - 4 * debt_distance * chart_part_height_unit);
            rect.setAttribute("height", 2 * debt_distance * chart_part_height_unit);

        } else if (i == 9) {
            rect.setAttribute("x", 47);
            rect.setAttribute("y", h - 5 * debt_distance * chart_part_height_unit);
            rect.setAttribute("height", 2 * debt_distance * chart_part_height_unit);


        } else if (i == 10) {
            rect.setAttribute("x", 55);
            rect.setAttribute("y", h - 5 * debt_distance * chart_part_height_unit);
            rect.setAttribute("height", debt_distance * chart_part_height_unit);
        } else if (i == 11) {
            rect.setAttribute("x", 55);
            rect.setAttribute("y", h - 5 * debt_distance * chart_part_height_unit + 2);
            rect.setAttribute("height", debt_distance * chart_part_height_unit);
        }
        rect.setAttribute("width", 980);
        rect.setAttribute("fill", fillColor);
        rect.setAttribute("stroke", "tranparent");
        chart_2013.appendChild(rect);
    }
    var theBottomTagY = 290;
    for (var i = 0; i < coma_tag_name.length; i++) {
        var grdns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:15px;font-weight: bold;';
        if (i == 5) {
            grdns.setAttribute("x", 62);
            grdns.setAttribute("y", theBottomTagY - i * 2 * debt_distance * chart_part_height_unit);
        } else if (i == 4) {
            grdns.setAttribute("x", 60);
            grdns.setAttribute("y", theBottomTagY - i * 2 * debt_distance * chart_part_height_unit);
        } else if (i == 3) {
            grdns.setAttribute("x", 37);
            grdns.setAttribute("y", theBottomTagY - i * 2 * debt_distance * chart_part_height_unit);
        } else if (i == 2) {
            grdns.setAttribute("x", 34);
            grdns.setAttribute("y", theBottomTagY - i * 2 * debt_distance * chart_part_height_unit);
        } else if (i == 1) {
            grdns.setAttribute("x", 28);
            grdns.setAttribute("y", theBottomTagY - i * 2 * debt_distance * chart_part_height_unit);
        } else {
            grdns.setAttribute("x", 40);
            grdns.setAttribute("y", theBottomTagY);
        }
        grdns.setAttribute("fill", "#f1f3f3");
        grdns.setAttribute("style", txt_sty_str);
        grdns.textContent = coma_tag_name[i];
        chart_2013.appendChild(grdns);
    }


    var sep = document.createElementNS(svgns, "rect");
    sep.setAttribute("x", 127);
    sep.setAttribute("y", 0);
    sep.setAttribute("width", 6);
    sep.setAttribute("height", chart_part_height + 10);
    sep.setAttribute("fill", '#f1f3f3');
    sep.setAttribute("stroke", "tranparent");
    chart_2013.appendChild(sep);

    for (var i = 0; i < year_coma_array.length; i++) {
        var val;
        // console.log(debt_distance);
        var test = year_coma_array_modified[i] - 5 * debt_distance; //全部減去2.5，從2.5開始往上一個區間0.5作表
        //console.log(test);
        // if (test >= 0 || test < 0.5) {
        //     val = (test - 4 * debt_distance + 2 * 4 * debt_distance) * chart_part_height_unit;
        // } else if (test >= 0.5 || test < 1) {
        //     val = (test - 3 * debt_distance + 2 * 3 * debt_distance) * chart_part_height_unit;
        // } else if (test >= 1 || test < 1.5) {
        //     val = (test - 2 * debt_distance + 2 * 2 * debt_distance) * chart_part_height_unit;
        // } else if (test >= 1.5 || test < 2) {
        //     val = (test - 1 * debt_distance + 2 * 1 * debt_distance) * chart_part_height_unit;
        // } else {}

        if (test >= 0 || test < 0.5) {
            val = (test * 4 * debt_distance) * chart_part_height_unit;
        } else if (test >= 0.5 || test < 1) {
            val = (test * 4 * debt_distance) * chart_part_height_unit;
        } else if (test >= 1 || test < 1.5) {
            val = (test * 4 * debt_distance) * chart_part_height_unit;
        } else if (test >= 1.5 || test < 2) {
            val = (test * 4 * debt_distance) * chart_part_height_unit;
        } else {}

        var h = chart_part_height + 30 - val - 1 * debt_distance * chart_part_height_unit;

        var w = 20;
        var fillColor = get_chart_bar_color(year_coma_array_modified[i]);

        var ins = document.createElementNS(svgns, "rect");
        ins.setAttribute("x", i * 38 + 140);
        ins.setAttribute("y", h);
        ins.setAttribute("width", w);
        ins.setAttribute("height", val);
        ins.setAttribute("fill", '#f1f3f3');
        ins.setAttribute("stroke", "tranparent");
        ins.setAttribute("class", 'rect' + i);
        chart_2013.appendChild(ins);

        var tns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:15px;font-weight: bold;cursor:pointer;';
        tns.setAttribute("x", (i * 38 + 140) + 1.5);
        tns.setAttribute("y", h + val + 15);
        tns.setAttribute("dx", "0, -15,-15");
        tns.setAttribute("dy", "10,20,20");
        tns.setAttribute("fill", "#6B6B6B");
        tns.setAttribute("style", txt_sty_str);
        tns.setAttribute("class", 'rect' + i);
        tns.setAttribute("id", 'county_tag');
        tns.textContent = county_name[i];
        chart_2013.appendChild(tns);
    }
};
generateComaChart('chart_4_2013', 'rect_4_2013', 'line_4_2013', county_coma_arr);


function generatePopulationChart(chartId, lineId, array1, array2) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1).interval;

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
    unitns.textContent = "萬人";
    line_2013.appendChild(unitns);

    // console.log(display_arr);
    for (var i = 0; i < array1.length; i++) {
        var val = array2[i] * chart_part_height_unit;
        var val_2 = array1[i] * chart_part_height_unit;
        val_2 -= val;
        var h = chart_part_height + 30 - val;
        var h2 = h - val_2;
        var w = 20;
        var fillColor = '#7dafa7';
        var fillColor_2 = ' #d35a52';

        var ins = document.createElementNS(svgns, "rect");
        ins.setAttribute("x", i * 38 + 50);
        ins.setAttribute("y", h);
        ins.setAttribute("width", w);
        ins.setAttribute("height", val);
        ins.setAttribute("fill", fillColor_2);
        ins.setAttribute("stroke", "tranparent");
        ins.setAttribute("class", 'rect' + i);
        chart_2013.appendChild(ins);

        var ins_2 = document.createElementNS(svgns, "rect");
        ins_2.setAttribute("x", i * 38 + 50);
        ins_2.setAttribute("y", h2);
        ins_2.setAttribute("width", w);
        ins_2.setAttribute("height", val_2);
        ins_2.setAttribute("fill", fillColor);
        ins_2.setAttribute("stroke", "tranparent");
        ins_2.setAttribute("class", 'rect' + i);
        chart_2013.appendChild(ins_2);

        var tns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:15px;font-weight: bold;cursor:pointer;';
        tns.setAttribute("x", (i * 38 + 50) + 1.5);
        tns.setAttribute("y", h + val + 13);
        tns.setAttribute("dx", "0, -15,-15");
        tns.setAttribute("dy", "10,20,20");
        tns.setAttribute("fill", "#6B6B6B");
        tns.setAttribute("style", txt_sty_str);
        tns.setAttribute("class", 'rect' + i);
        tns.setAttribute("id", 'county_tag');
        tns.textContent = county_name[i];
        chart_2013.appendChild(tns);
    }
}

generatePopulationChart('chart_5_2013', 'line_5_2013', county_total_population_arr, county_old_population_arr);





function generateDeficitChart(chartId, lineId, array) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);

    var num_grade = deficit_getHeadAndInterval_inputMultipleArray(array).head;
    var debt_distance = deficit_getHeadAndInterval_inputMultipleArray(array).interval;

    var h_h = parseFloat($('#chart_svg').attr('height'));
    // console.log(h_h);
    var chart_part_height = h_h * 0.8 / 2;
    var chart_part_head_height = 20;

    var chart_part_height_unit = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);
    // console.log(chart_part_height_unit);
    var txt_sty_str = 'font-size:20px;font-weight: 800;';
    var unitns = document.createElementNS(svgns, "text");
    unitns.setAttribute("x", 0);
    unitns.setAttribute("y", 140);
    unitns.setAttribute("fill", "#50938f");
    unitns.setAttribute("style", txt_sty_str);
    unitns.textContent = '賸餘';
    line_2013.appendChild(unitns);
    var unitns = document.createElementNS(svgns, "text");
    unitns.setAttribute("x", 0);
    unitns.setAttribute("y", 280);
    unitns.setAttribute("fill", "#d35a52");
    unitns.setAttribute("style", txt_sty_str);
    unitns.textContent = '赤字';
    line_2013.appendChild(unitns);


    for (var i = 0; i <= num_grade; i++) {
        var lns = document.createElementNS(svgns, "path");
        lns.setAttribute("stroke", "#C7C7C7");
        lns.setAttribute("stroke-width", "1");
        var h = chart_part_height + 30 - i * debt_distance * chart_part_height_unit;
        var d_str = 'M83 ' + h + ' H850';
        if (i == 0) {
            lns.setAttribute("stroke", "#50938f");
            lns.setAttribute("stroke-width", "1.5");
            var d_str = 'M0 ' + h + ' H850';
        }
        lns.setAttribute('d', d_str);
        line_2013.appendChild(lns);

        var grade_tag = Math.round(i * debt_distance); //四捨五入做出左邊的級距取到整數位
        // console.log(grade_tag);
        var grdns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:13px;font-weight: 800;';
        grdns.setAttribute("x", 865);
        grdns.setAttribute("y", h);
        grdns.setAttribute("fill", "#50938f");
        grdns.setAttribute("style", txt_sty_str);
        grdns.textContent = grade_tag;
        line_2013.appendChild(grdns);
    }
    var unitns = document.createElementNS(svgns, "text");
    unitns.setAttribute("x", 875);
    unitns.setAttribute("y", chart_part_height + 30);
    unitns.setAttribute("fill", "#6B6B6B");
    unitns.setAttribute("style", txt_sty_str);
    unitns.textContent = "億元";
    line_2013.appendChild(unitns);

    num_grade = deficit_getHeadAndInterval_inputMultipleArray_neg(array).head;
    debt_distance = deficit_getHeadAndInterval_inputMultipleArray_neg(array).interval;
    var chart_part_height_unit_neg = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);

    for (var i = 1; i <= num_grade; i++) {
        var lns = document.createElementNS(svgns, "path");
        lns.setAttribute("stroke", "#C7C7C7");
        lns.setAttribute("stroke-width", "1");
        var h = chart_part_height + 30 + i * debt_distance * chart_part_height_unit_neg;
        // var h = 40;
        var d_str = 'M83 ' + h + ' H850';
        lns.setAttribute('d', d_str);
        line_2013.appendChild(lns);

        var grade_tag = -i * debt_distance; //四捨五入做出左邊的級距取到整數位
        // console.log(grade_tag);
        var grdns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:13px;font-weight: 800;';
        grdns.setAttribute("x", 865);
        grdns.setAttribute("y", h);
        grdns.setAttribute("fill", "#d35a52");
        grdns.setAttribute("style", txt_sty_str);
        grdns.textContent = grade_tag;
        line_2013.appendChild(grdns);
    }


    for (var i = 0; i < array.length; i++) {
        var w = 18;
        var ins = document.createElementNS(svgns, "rect");
        if (array[i] >= 0) {
            var val = array[i] * chart_part_height_unit;
            var h = chart_part_height + 30 - val;
            var fillColor = '#50938f';
            ins.setAttribute("height", val);
        } else {
            var val = array[i] * chart_part_height_unit_neg;
            var h = chart_part_height + 30;
            var fillColor = '#d35a52';
            ins.setAttribute("height", -val);
        }
        ins.setAttribute("x", i * 33 + 110);
        ins.setAttribute("y", h);
        ins.setAttribute("width", w);
        ins.setAttribute("fill", fillColor);
        ins.setAttribute("stroke", "tranparent");
        ins.setAttribute("class", 'rect' + i);
        chart_2013.appendChild(ins);

        var tns = document.createElementNS(svgns, "text");
        var txt_sty_str = 'font-size:15px;font-weight: bold;cursor:pointer;';
        tns.setAttribute("x", (i * 33 + 110) + 1.5);
        tns.setAttribute("y", chart_part_height * 2 + 25);
        tns.setAttribute("dx", "0, -15,-15");
        tns.setAttribute("dy", "10,20,20");
        tns.setAttribute("fill", "#6B6B6B");
        tns.setAttribute("style", txt_sty_str);
        tns.setAttribute("class", 'rect' + i);
        tns.setAttribute("id", 'county_tag');
        tns.textContent = county_name[i];
        chart_2013.appendChild(tns);
    }
}









generateDeficitChart('chart_6_2013', 'line_6_2013', county_deficit_arr);
////
$(document).ready(function() {
    var chart_div_height = parseFloat($('#chart_svg').attr('height'));
    var chart_div_width = parseFloat($('#chart_svg').attr('width'));

    $('rect,#county_tag').mouseover(function() {
        var rect_class = $(this).attr('class');
        var rect_index = parseInt(rect_class.slice(4, rect_class.length));

        var rect_x = parseFloat($(this).attr('x')) + 30;
        var rect_y = parseFloat($("." + rect_class).attr('y')) - 150;

        var box_top = rect_y;
        var box_left = rect_x + 40;
        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        // $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_hidden_debt_arr[rect_index]));
        // $('#box_2013 > p:nth-child(4) > map').text(Math.round(county_public_debt_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2_2013').css('top', box_top);
        $('#box_2_2013').css('left', box_left);
        $('#box_2_2013 > p:nth-child(2) > map').text(Math.round(county_revenue_others_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(4) > map').text(Math.round(county_revenue_properties_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(6) > map').text(Math.round(county_revenue_self_raised_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(8) > map').text(Math.round(county_revenue_distributed_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(10) > map').text(Math.round(county_revenue_supply_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2_2013').css('visibility', 'visible');

        $('#box_3_2013').css('top', box_top);
        $('#box_3_2013').css('left', box_left);
        $('#box_3_2013 > p:nth-child(2) > map').text(Math.round(county_expenditure_retireOthers_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(4) > map').text(Math.round(county_expenditure_fare_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(6) > map').text(Math.round(county_expenditure_edu_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(8) > map').text(Math.round(county_expenditure_economic_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(10) > map').text(Math.round(county_expenditure_general_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_3_2013').css('visibility', 'visible');

        $('#box_4_2013').css('top', box_top);
        $('#box_4_2013').css('left', box_left);
        $('#box_4_2013 > p:nth-child(2) > map').text(county_coma_arr[rect_index]);
        $('#box_4_2013 > p:nth-child(3) > map').text(county_coma_cash_arr[rect_index]);
        $('#box_4_2013 > p:nth-child(4) > map').text(county_coma_budget_arr[rect_index]);
        $('#box_4_2013 > p:nth-child(5) > map').text(county_coma_longdebt_arr[rect_index]);
        $('#box_4_2013 > p:nth-child(6) > map').text(county_coma_long_arr[rect_index]);
        $(this).css('opacity', 0.7);
        $('#box_4_2013').css('visibility', 'visible');

        $('#box_5_2013').css('top', box_top);
        $('#box_5_2013').css('left', box_left);
        $('#box_5_2013 > p:nth-child(2) > map').text(Math.round(county_total_population_arr[rect_index]));
        $('#box_5_2013 > p:nth-child(4) > map').text(Math.round(county_old_population_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_5_2013').css('visibility', 'visible');

        $('#box_6_2013').css('top', box_top);
        $('#box_6_2013').css('left', box_left);
        $('#box_6_2013 > p:nth-child(2) > map').text(Math.round(county_deficit_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_6_2013').css('visibility', 'visible');

    }).mouseout(function() {
        var rect_class = $(this).attr('class');
        $("." + rect_class).css('opacity', 1);
        $('#box_2013').css('visibility', 'hidden');
        $('#box_2_2013').css('visibility', 'hidden');
        $('#box_3_2013').css('visibility', 'hidden');
        $('#box_4_2013').css('visibility', 'hidden');
        $('#box_5_2013').css('visibility', 'hidden');
        $('#box_6_2013').css('visibility', 'hidden');
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


function coma_getHeadAndInterval_inputMultipleArray() {
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

    var obj = {
        head: i * 2,
        interval: node / 2
    }
    return obj;

}

function get_chart_bar_color(coma) {
    if (coma <= 3) {
        return '#391450';
    } else if (coma >= 3 && coma < 3.5) {
        return '#B54D52';
    } else if (coma >= 3.5 && coma < 4) {
        return '#cd4f48';
    } else if (coma >= 4 && coma < 4.5) {
        return '#f2865d';
    } else if (coma >= 4.5 && coma < 5) {
        return '#d7b96f';
    } else if (coma >= 5) {
        return '#859E66';
    } else {
        return "#CCCCCC"
    }
}


// 這個函數能算出同樣位數大於輸入值的數，當作截距最高點標記數值
function deficit_getHeadAndInterval_inputMultipleArray() {
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
    var arr_min = Math.min.apply(null, arg_arr);
    /////////////////////////////////////////////////////////
    var node = Math.pow(10, (theDecimalDigit(arr_max) - 1));
    for (var i = 2; i <= 9; i++) {
        if (i * node > arr_max) break;
    }
    if (i >= 6) {
        var obj = {
            head: i / 2,
            interval: node * 2
        }
        return obj
    } else {
        var obj = {
            head: i,
            interval: node
        }
        return obj;
    }
}


function deficit_getHeadAndInterval_inputMultipleArray_neg() {
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
            if (arguments[j][i] < 0) {
                each_index_sum += arguments[j][i];
            }
        }
        arg_arr.push(each_index_sum);
    }
    // console.log(arg_arr);
    // var arr_max = Math.max.apply(null, arg_arr);
    var arr_min = Math.min.apply(null, arg_arr);
    var arr_max = -arr_min;
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
        for (var k = 0; k * (node / 2) < arr_max; k++) {}
        var obj = {
            head: k,
            interval: node / 2
        }
        return obj;
    }
}
