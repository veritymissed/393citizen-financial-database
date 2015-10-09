var county_name = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_public_debt_arr = [891.86, 2359.43, 737.99, 651.38, 2352.35, 258.75, 234.59, 210.55, 401.59, 236.47, 178.97, 255.42, 212.68, 277.1, 74.62, 124.06, 21.75, 117.33, 127.16, 19.35, 0, 0];
var county_hidden_debt_arr = [116.9243, 1465.0582, 23.155, 106.0264, 666.611, 132.3762, 23.8551, 117.0158, 89.8421, 82.0268, 15.5245, 42.312, 23.9179, 11.3216, 16.5472, 8.9532, 6.1512, 0.9915, 46.494, 3.7637, 0, 0];


var county_revenue_supply_arr = [264, 259, 223, 230, 261, 144, 94, 74, 109, 178, 110, 125, 133, 185, 84, 101, 60, 79, 50, 54, 31, 26];
var county_revenue_distributed_arr = [251, 340, 202, 165, 263, 121, 41, 38, 35, 74, 76, 65, 52, 68, 35, 34, 16, 33, 31, 24, 11, 3];
var county_revenue_others_arr = [152.94, 247.59, 173.73, 49.85, 169.04, 84.89, 21.15, 36.50, 19.84, 38.68, 12.52, 16.53, 4.65, 14.90, 5.46, 8.98, 3.82, 15.50, 19.02, 6.91, 77.26, 2.42];
var county_revenue_self_raised_arr = [];
var county_revenue_properties_arr = [93.44, 37.36, 11.66, 75.92, 62.56, 1.50, 6.08, 1.86, 18.30, 1.37, 0.68, 0.15, 1.42, 3.84, 0.69, 12.24, 1.54, 4.70, 1.37, 1.43, 1.50, 0.10];
var county_revenue_land_arr = [1092.70, 2208.63, 619.33, 400.17, 928.19, 639.63, 70.88, 121.42, 98.77, 189.06, 57.55, 122.83, 60.13, 95.83, 20.64, 43.14, 8.49, 90.43, 141.10, 70.74, 2.42, 0.52];
var county_revenue_landRise_arr = [248.13, 189.73, 140.54, 54.13, 73.57, 130.55, 28.01, 31.71, 15.73, 27.66, 8.51, 9.55, 5.68, 11.82, 3.70, 9.81, 2.44, 9.13, 23.90, 5.99, 2.23, 0.04];
var county_revenue_house_arr = [97.84, 119.76, 78.22, 48.35, 81.18, 65.92, 9.11, 13.13, 11.08, 26.75, 7.67, 14.71, 8.92, 11.40, 2.46, 4.75, 0.93, 7.20, 14.27, 5.87, 0.57, 0.06];
//
for (var i = 0; i < county_revenue_land_arr.length; i++) {
    county_revenue_self_raised_arr.push(county_revenue_land_arr[i] + county_revenue_landRise_arr[i] + county_revenue_house_arr[i]);
}
var county_revenue_decided_arr = [1372, 1601, 1025, 735, 1121, 613, 205, 207, 224, 376, 229, 248, 217, 314, 135, 178, 85, 168, 172, 114, 132, 33];
var county_revenue_budget_arr = [1337, 1567, 1056, 834, 1129, 591, 206, 246, 289, 362, 249, 287, 239, 325, 135, 182, 85, 173, 180, 116, 132, 34];


// 歲入總表
var county_expenditure_general_arr = [201.65, 128.59, 110.51, 130.47, 124.04, 50.75, 18.20, 18.96, 28.92, 30.10, 26.64, 21.63, 19.49, 32.94, 17.91, 19.80, 9.05, 22.20, 17.60, 14.26, 14.90, 4.38];
var county_expenditure_economic_arr = [254.13, 202.63, 266.35, 119.01, 95.47, 80.95, 36.72, 38.83, 44.23, 56.77, 42.70, 45.38, 47.06, 46.01, 24.71, 34.71, 29.31, 25.70, 18.83, 12.63, 35.65, 15.67];
var county_expenditure_edu_arr = [443.59, 631.89, 324.72, 280.49, 437.82, 242.84, 68.51, 72.44, 93.56, 155.21, 73.61, 84.88, 62.36, 112.71, 39.99, 53.02, 18.74, 46.37, 54.54, 33.55, 25.18, 6.68];
var county_expenditure_fare_arr = [209.01, 401.19, 118.75, 94.77, 259.41, 66.75, 21.38, 26.55, 31.16, 48.48, 25.35, 38.92, 30.86, 40.33, 18.79, 18.70, 10.44, 20.80, 20.68, 11.93, 14.13, 2.20];
var county_expenditure_retire_arr = [119.91, 48.41, 85.21, 41.98, 51.06, 51.50, 20.51, 18.92, 26.91, 43.98, 24.50, 28.10, 31.15, 40.65, 17.80, 18.97, 7.47, 16.71, 21.11, 14.48, 4.07, 0.29];


var county_coma_arr = [5.04, 5.47, 5.60, 3.95, 4.46, 5.59, 5.50, 5.23, 3.40, 3.59, 3.11, 3.98, 3.31, 3.72, 3.99, 3.84, 3.78, 3.68, 5.42, 4.53];
var county_coma_cash_arr = [3.54, 3.53, 4.29, 3.15, 3.45, 4.65, 4.58, 4.72, 2.58, 4.04, 3.74, 4.49, 6.31, 4.17, 7.05, 2.38, 4.41, 3.11, 4.75, 5.16];
var county_coma_budget_arr = [7.28, 7.98, 7.28, 6.20, 6.55, 6.67, 4.97, 6.05, 4.70, 4.08, 3.18, 3.67, 2.64, 2.80, 2.28, 3.86, 3.57, 4.39, 5.77, 3.83];
var county_coma_longdebt_arr = [3.06, 3.23, 3.71, 3.56, 2.72, 5.16, 7.76, 1.69, 1.32, 3.12, 3.21, 3.26, 3.45, 6.23, 7.42, 5.13, 3.41, 3.00, 4.73, 4.66];
var county_coma_long_arr = [6.80, 6.93, 6.76, 4.39, 5.03, 6.64, 3.89, 5.43, 3.15, 3.21, 1.58, 2.16, 1.23, 1.57, 0.72, 2.36, 0.68, 3.36, 6.31, 3.30];
var coma_tag_name = ['腦死區', '重度葉克膜區', '中重度插管區', '中度加護病房', '普通病房', '追蹤觀察'];

var county_total_population_arr = [395.49, 268.65, 270.17, 188.32, 277.99, 204.40, 45.85, 53.05, 56.56, 129.60, 51.72, 70.78, 52.92, 85.23, 22.48, 33.39, 10.04, 37.49, 42.85, 27.09, 12.07, 1.22]
var county_old_population_arr = [37.49, 36.26, 25.36, 22.98, 31.62, 18.19, 6.21, 5.88, 7.74, 16.61, 7.39, 11.16, 8.70, 11.54, 3.08, 4.41, 1.44, 4.49, 4.20, 3.21, 1.36, 0.11];
var county_deficit_arr = [-956, -944, -704, -443, -1000, 352, 74, 49, -459, -133, 59, -78, -29, -21, -39, 87, -58, 70, 100, 85, 238, 9];


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
generateDebtChart('chart_2013', 'line_2013', county_public_debt_arr, county_hidden_debt_arr);





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







function generateExpenditureChart(chartId, lineId, array1, array2, array3, array4, array5) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).interval;

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
        tns.textContent = county_name[i];
        chart_2013.appendChild(tns);
    }
};
generateExpenditureChart('chart_3_2013', 'line_3_2013', county_expenditure_general_arr, county_expenditure_economic_arr, county_expenditure_edu_arr, county_expenditure_fare_arr, county_expenditure_retire_arr);

function generateComaChart(chartId, rectId, lineId, year_coma_array) {
    var chart_2013 = document.getElementById(chartId);
    var rect_2013 = document.getElementById(rectId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = coma_getHeadAndInterval_inputMultipleArray(year_coma_array).head;
    var debt_distance = coma_getHeadAndInterval_inputMultipleArray(year_coma_array).interval;

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
        var test = year_coma_array[i] - 4 * debt_distance;
        if (test >= 2.5 || test < 3) {
            val = (year_coma_array[i] - 4 * debt_distance - 4 * debt_distance + 2 * 4 * debt_distance) * chart_part_height_unit;
        } else if (test >= 2.0 || test < 2.5) {
            val = (year_coma_array[i] - 4 * debt_distance - 3 * debt_distance + 2 * 3 * debt_distance) * chart_part_height_unit;
        } else if (test >= 1.5 || test < 2) {
            val = (year_coma_array[i] - 4 * debt_distance - 2 * debt_distance + 2 * 2 * debt_distance) * chart_part_height_unit;
        } else if (test >= 1.0 || test < 1.5) {
            val = (year_coma_array[i] - 4 * debt_distance - 1 * debt_distance + 2 * 1 * debt_distance) * chart_part_height_unit;
        } else {}

        var h = chart_part_height + 30 - val - 1 * debt_distance * chart_part_height_unit;

        var w = 20;
        var fillColor = get_chart_bar_color(year_coma_array[i]);

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
        $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_hidden_debt_arr[rect_index]));
        $('#box_2013 > p:nth-child(4) > map').text(Math.round(county_public_debt_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2_2013').css('top', box_top);
        $('#box_2_2013').css('left', box_left);
        $('#box_2_2013 > p:nth-child(2) > map').text(Math.round(county_revenue_supply_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(4) > map').text(Math.round(county_revenue_distributed_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(6) > map').text(Math.round(county_revenue_self_raised_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(8) > map').text(Math.round(county_revenue_properties_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(10) > map').text(Math.round(county_revenue_others_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2_2013').css('visibility', 'visible');

        $('#box_3_2013').css('top', box_top);
        $('#box_3_2013').css('left', box_left);
        $('#box_3_2013 > p:nth-child(2) > map').text(Math.round(county_expenditure_general_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(4) > map').text(Math.round(county_expenditure_economic_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(6) > map').text(Math.round(county_expenditure_edu_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(8) > map').text(Math.round(county_expenditure_fare_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(10) > map').text(Math.round(county_expenditure_retire_arr[rect_index]));
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
