var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

var county_revenue_supply_arr = [291.97, 237.32, 134.59, 217.27, 234.34, 278.55, 93.30, 82.87, 109.39, 176.26, 123.28, 129.54, 124.60, 180.65, 87.05, 95.88, 53.92, 76.76, 50.22, 54.21, 30.30, 24.62];
var county_revenue_distributed_arr = [271.95, 366.00, 138.69, 225.76, 181.27, 256.79, 32.54, 44.56, 42.99, 77.53, 64.33, 69.61, 52.37, 74.29, 30.91, 36.59, 16.94, 34.27, 29.89, 20.62, 11.70, 3.12];
var county_revenue_others_arr = [142.67, 306.88, 42.49, 126.41, 51.20, 205.07, 23.49, 28.28, 16.03, 58.24, 14.67, 16.32, 9.95, 14.10, 5.77, 8.72, 3.77, 18.89, 18.32, 6.66, 67.83, 1.74];
var county_revenue_self_raised_arr = [610.27, 758.08, 249.14, 419.02, 222.56, 364.01, 44.21, 52.53, 44.01, 85.46, 34.93, 42.23, 27.26, 43.95, 11.40, 26.25, 4.15, 33.03, 68.61, 28.47, 12.12, 0.97];
var county_revenue_properties_arr = [108.86, 218.97, 2.26, 10.72, 26.46, 59.20, 1.05, 12.54, 11.53, 1.57, 0.99, 2.70, 0.93, 5.49, 2.60, 2.07, 0.80, 3.79, 2.09, 1.33, 1.76, 0.08];


// 歲入總表
var county_revenue_supply_arr_2013 = [264, 259, 223, 230, 261, 144, 94, 74, 109, 178, 110, 125, 133, 185, 84, 101, 60, 79, 50, 54, 31, 26];
var county_revenue_distributed_arr_2013 = [251, 340, 202, 165, 263, 121, 41, 38, 35, 74, 76, 65, 52, 68, 35, 34, 16, 33, 31, 24, 11, 3];
var county_revenue_others_arr_2013 = [152.94, 247.59, 173.73, 49.85, 169.04, 84.89, 21.15, 36.50, 19.84, 38.68, 12.52, 16.53, 4.65, 14.90, 5.46, 8.98, 3.82, 15.50, 19.02, 6.91, 77.26, 2.42];
var county_revenue_self_raised_arr_2013 = [610.68, 717.33, 413.79, 214.09, 363.89, 261.20, 42.74, 56.67, 41.12, 83.29, 29.55, 41.15, 25.59, 41.54, 10.89, 21.79, 3.66, 35.41, 70.32, 28.55, 11.17, 0.98];
var county_revenue_properties_arr_2013 = [93.444, 37.356, 11.662, 75.917, 62.562, 1.497, 6.081, 1.858, 18.298, 1.369, 0.683, 0.153, 1.421, 3.843, 0.687, 12.241, 1.538, 4.699, 1.370, 1.429, 1.499, 0.103];

var county_revenue_supply_arr_2012 = [315, 325, 237, 284, 312, 170, 105, 85, 120, 188, 124, 128, 125, 199, 89, 97, 54, 81, 48, 53, 35, 23];
var county_revenue_distributed_arr_2012 = [250, 337, 200, 166, 227, 115, 29, 33, 40, 79, 47, 56, 56, 69, 30, 36, 18, 35, 34, 19, 12, 5];
var county_revenue_others_arr_2012 = [229.92, 229.53, 131.12, 68.78, 127, 105.43, 14.73, 52.28, 20.81, 18.39, 16.53, 14.83, 4.74, 13.63, 4.88, 12.00, 3.11, 11.76, 20.56, 5.36, 76.13, 2.19];
var county_revenue_self_raised_arr_2012 = [515.85, 682.50, 364.35, 199.09, 330.55, 229.56, 35.11, 52.06, 38.09, 76.05, 27.79, 39.72, 24.85, 38.97, 10.13, 17.93, 2.52, 31.52, 64.98, 27.83, 10.37, 0.95];
var county_revenue_properties_arr_2012 = [35.419, 36.430, 18.516, 58.197, 41.162, 5.081, 15.543, 4.026, 3.090, 1.040, 0.339, 0.997, 0.450, 2.896, 0.850, 12.353, 1.591, 5.544, 1.067, 0.923, 1.156, 0.075];

var county_revenue_supply_arr_2011 = [459, 339, 283, 322, 431, 203, 115, 96, 124, 174, 124, 143, 135, 219, 96, 102, 58, 94, 47, 63, 38, 28];
var county_revenue_distributed_arr_2011 = [228, 327, 186, 155, 209, 98, 37, 32, 37, 67, 45, 54, 49, 63, 27, 33, 14, 29, 28, 16, 12, 3];
var county_revenue_others_arr_2011 = [246.19, 271.20, 91.12, 39.07, 127.72, 56.01, 18.21, 17.90, 13.61, 16.69, 22.36, 9.94, 6.58, 12.86, 5.76, 7.29, 2.90, 13.35, 18.51, 5.36, 61.26, 1.54];
var county_revenue_self_raised_arr_2011 = [486.78, 670.92, 336.17, 193.07, 334.52, 219.45, 32.99, 56.79, 40.19, 77.05, 28.65, 38.53, 24.34, 37.28, 10.11, 18.49, 2.45, 29.91, 62.15, 28.54, 10.32, 0.96];
var county_revenue_properties_arr_2011 = [7.817, 33.690, 12.875, 6.703, 25.704, 4.419, 0.951, 24.880, 2.289, 1.023, 0.256, 0.032, 1.338, 12.390, 0.840, 0.924, 2.127, 3.402, 1.042, 1.273, 1.385, 0.087];
// 自籌稅入來源
var county_revenue_land_arr = [1092.70, 2208.63, 619.33, 400.17, 928.19, 639.63, 70.88, 121.42, 98.77, 189.06, 57.55, 122.83, 60.13, 95.83, 20.64, 43.14, 8.49, 90.43, 141.10, 70.74, 2.42, 0.52];
var county_revenue_landRise_arr = [248.13, 189.73, 140.54, 54.13, 73.57, 130.55, 28.01, 31.71, 15.73, 27.66, 8.51, 9.55, 5.68, 11.82, 3.70, 9.81, 2.44, 9.13, 23.90, 5.99, 2.23, 0.04];
var county_revenue_house_arr = [97.84, 119.76, 78.22, 48.35, 81.18, 65.92, 9.11, 13.13, 11.08, 26.75, 7.67, 14.71, 8.92, 11.40, 2.46, 4.75, 0.93, 7.20, 14.27, 5.87, 0.57, 0.06];
//
var county_revenue_land_arr_2012 = [946.40, 2067.05, 456.43, 355.04, 802.91, 535.58, 57.77, 104.40, 86.91, 174.74, 54.93, 141.27, 51.30, 90.38, 18.46, 37.88, 8.09, 74.85, 134.49, 69.35, 2.47, 0.49];
var county_revenue_landRise_arr_2012 = [169.48, 163.97, 113.39, 45.80, 56.31, 106.18, 19.75, 27.89, 14.23, 20.93, 7.90, 8.46, 5.62, 9.39, 2.98, 5.77, 1.11, 5.94, 18.96, 5.59, 1.66, 0.06];
var county_revenue_house_arr_2012 = [97.68, 118.60, 75.87, 47.72, 80.41, 63.73, 8.78, 12.47, 11.03, 24.75, 7.64, 14.51, 7.87, 11.12, 2.43, 4.94, 0.92, 7.31, 13.82, 5.78, 0.53, 0.06];
//
var county_revenue_land_arr_2011 = [981.29, 2050.52, 465.15, 361.64, 823.65, 535.58, 58.82, 108.47, 82.53, 175.87, 54.78, 114.74, 57.11, 90.32, 18.91, 39.14, 7.98, 103.31, 135.88, 68.65, 2.59, 0.49];
var county_revenue_landRise_arr_2011 = [157.77, 174.07, 91.70, 41.27, 56.87, 99.44, 17.61, 34.05, 19.06, 25.23, 7.16, 7.73, 5.84, 7.98, 3.38, 6.97, 1.04, 5.60, 16.66, 5.32, 1.30, 0.03];
var county_revenue_house_arr_2011 = [90.10, 108.65, 74.12, 46.57, 80.16, 62.11, 8.62, 11.92, 10.42, 24.91, 7.48, 15.58, 7.76, 11.18, 2.41, 4.71, 0.90, 7.18, 13.50, 5.84, 0.51, 0.06];

// 預決算數比較
var county_revenue_decided_arr = [1372, 1601, 1025, 735, 1121, 613, 205, 207, 224, 376, 229, 248, 217, 314, 135, 178, 85, 168, 172, 114, 132, 33];
var county_revenue_budget_arr = [1337, 1567, 1056, 834, 1129, 591, 206, 246, 289, 362, 249, 287, 239, 325, 135, 182, 85, 173, 180, 116, 132, 34];
var county_revenue_decided_arr_2012 = [1347, 1611, 952, 776, 1038, 625, 200, 227, 222, 362, 216, 240, 211, 324, 135, 175, 80, 165, 168, 106, 135, 31];
var county_revenue_budget_arr_2012 = [1387, 1637, 1010, 837, 1152, 607, 201, 258, 339, 366, 228, 272, 229, 337, 138, 177, 81, 181, 182, 108, 122, 32];
var county_revenue_decided_arr_2011 = [1428, 1641, 910, 716, 1128, 581, 204, 228, 218, 336, 220, 246, 216, 344, 140, 162, 79, 170, 157, 115, 123, 33];
var county_revenue_budget_arr_2011 = [1406, 1589, 923, 792, 1183, 578, 216, 272, 385, 338, 234, 279, 228, 384, 140, 178, 78, 194, 182, 117, 124, 34];

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateChart(chartId, lineId, array1, array2, array3, array4, array5, countyNameArr) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4, array5).interval;

    // console.log(num_grade + " " + debt_distance);
    var h_h = parseFloat($('#chart_svg').attr('height'));
    // console.log(h_h);
    var chart_part_height = h_h * 0.78;
    var chart_part_head_height = 20;



    // if (screen.width >= 900) {
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
    //     unitns.textContent = "億元";
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
    //         var fill_color = ['#236278', '#70ba79', '#61afa7', '#b4d5a5', '#e6e1a5'];
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
    //     unitns.textContent = "億元";
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
    //         var fill_color = ['#236278', '#70ba79', '#61afa7', '#b4d5a5', '#e6e1a5'];
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
    //








}








generateChart('chart_2014', 'line_2014', county_revenue_supply_arr, county_revenue_distributed_arr, county_revenue_self_raised_arr, county_revenue_properties_arr, county_revenue_others_arr, county_name);

generateChart('chart_2013', 'line_2013', county_revenue_supply_arr_2013, county_revenue_distributed_arr_2013, county_revenue_self_raised_arr_2013, county_revenue_properties_arr_2013, county_revenue_others_arr_2013, county_name_before_2014);
generateChart('chart_2012', 'line_2012', county_revenue_supply_arr_2012, county_revenue_distributed_arr_2012, county_revenue_self_raised_arr_2012, county_revenue_properties_arr_2012, county_revenue_others_arr_2012, county_name_before_2014);
generateChart('chart_2011', 'line_2011', county_revenue_supply_arr_2011, county_revenue_distributed_arr_2011, county_revenue_self_raised_arr_2011, county_revenue_properties_arr_2011, county_revenue_others_arr_2011, county_name_before_2014);

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
        $('#box_2014 > p:nth-child(2) > map').text(Math.round(county_revenue_others_arr[rect_index]));
        $('#box_2014 > p:nth-child(4) > map').text(Math.round(county_revenue_properties_arr[rect_index]));
        $('#box_2014 > p:nth-child(6) > map').text(Math.round(county_revenue_self_raised_arr[rect_index]));
        $('#box_2014 > p:nth-child(8) > map').text(Math.round(county_revenue_distributed_arr[rect_index]));
        $('#box_2014 > p:nth-child(10) > map').text(Math.round(county_revenue_supply_arr[rect_index]));

        $("." + rect_class).css('opacity', 0.7);
        $('#box_2014').css('visibility', 'visible');


        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_revenue_others_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(4) > map').text(Math.round(county_revenue_properties_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(6) > map').text(Math.round(county_revenue_self_raised_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(8) > map').text(Math.round(county_revenue_distributed_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(10) > map').text(Math.round(county_revenue_supply_arr_2013[rect_index]));

        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2012').css('top', box_top);
        $('#box_2012').css('left', box_left);
        $('#box_2012 > p:nth-child(2) > map').text(Math.round(county_revenue_others_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(4) > map').text(Math.round(county_revenue_properties_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(6) > map').text(Math.round(county_revenue_self_raised_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(8) > map').text(Math.round(county_revenue_distributed_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(10) > map').text(Math.round(county_revenue_supply_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2012').css('visibility', 'visible');

        $('#box_2011').css('top', box_top);
        $('#box_2011').css('left', box_left);
        $('#box_2011 > p:nth-child(2) > map').text(Math.round(county_revenue_others_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(4) > map').text(Math.round(county_revenue_properties_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(6) > map').text(Math.round(county_revenue_self_raised_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(8) > map').text(Math.round(county_revenue_distributed_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(10) > map').text(Math.round(county_revenue_supply_arr_2011[rect_index]));
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
