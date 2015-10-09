var county_name = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

// 自籌稅入來源
var county_revenue_land_arr = [109.27, 220.86, 61.93, 40.02, 92.82, 63.96, 7.09, 12.14, 9.88, 18.91, 5.75, 12.28, 6.01, 9.58, 2.06, 4.31, 0.85, 9.04, 14.11, 7.07, 0.24, 0.05];
var county_revenue_landRise_arr = [248.13, 189.73, 140.54, 54.13, 73.57, 130.55, 28.01, 31.71, 15.73, 27.66, 8.51, 9.55, 5.68, 11.82, 3.70, 9.81, 2.44, 9.13, 23.90, 5.99, 2.23, 0.04];
var county_revenue_house_arr = [97.84, 119.76, 78.22, 48.35, 81.18, 65.92, 9.11, 13.13, 11.08, 26.75, 7.67, 14.71, 8.92, 11.40, 2.46, 4.75, 0.93, 7.20, 14.27, 5.87, 0.57, 0.06];
var county_revenue_self_others_arr = [];

//
var county_revenue_land_arr_2012 = [94.64, 206.71, 45.64, 35.50, 80.29, 53.56, 5.78, 10.44, 8.69, 17.47, 5.49, 14.13, 5.13, 9.04, 1.85, 3.79, 0.81, 7.48, 13.45, 6.94, 0.25, 0.05];
var county_revenue_landRise_arr_2012 = [169.48, 163.97, 113.39, 45.80, 56.31, 106.18, 19.75, 27.89, 14.23, 20.93, 7.90, 8.46, 5.62, 9.39, 2.98, 5.77, 1.11, 5.94, 18.96, 5.59, 1.66, 0.06];
var county_revenue_house_arr_2012 = [97.68, 118.60, 75.87, 47.72, 80.41, 63.73, 8.78, 12.47, 11.03, 24.75, 7.64, 14.51, 7.87, 11.12, 2.43, 4.94, 0.92, 7.31, 13.82, 5.78, 0.53, 0.06];
var county_revenue_self_others_arr_2012 = [];

//
var county_revenue_land_arr_2011 = [98.13, 205.05, 46.52, 36.16, 82.36, 53.56, 5.88, 10.85, 8.25, 17.59, 5.48, 11.47, 5.71, 9.03, 1.89, 3.91, 0.80, 10.33, 13.59, 6.86, 0.26, 0.05];
var county_revenue_landRise_arr_2011 = [157.77, 174.07, 91.70, 41.27, 56.87, 99.44, 17.61, 34.05, 19.06, 25.23, 7.16, 7.73, 5.84, 7.98, 3.38, 6.97, 1.04, 5.60, 16.66, 5.32, 1.30, 0.03];
var county_revenue_house_arr_2011 = [90.10, 108.65, 74.12, 46.57, 80.16, 62.11, 8.62, 11.92, 10.42, 24.91, 7.48, 15.58, 7.76, 11.18, 2.41, 4.71, 0.90, 7.18, 13.50, 5.84, 0.51, 0.06];
var county_revenue_self_others_arr_2011 = [];


var county_revenue_self_raised_arr_2 = [610.68, 717.33, 413.79, 214.09, 363.89, 261.20, 42.74, 56.67, 41.12, 83.29, 29.55, 41.15, 25.59, 41.54, 10.89, 21.79, 3.66, 35.41, 70.32, 28.55, 11.17, 0.98];
var county_revenue_self_raised_arr_2_2012 = [515.85, 682.50, 364.35, 199.09, 330.55, 229.56, 35.11, 52.06, 38.09, 76.05, 27.79, 39.72, 24.85, 38.97, 10.13, 17.93, 2.52, 31.52, 64.98, 27.83, 10.37, 0.95];
var county_revenue_self_raised_arr_2_2011 = [486.78, 670.92, 336.17, 193.07, 334.52, 219.45, 32.99, 56.79, 40.19, 77.05, 28.65, 38.53, 24.34, 37.28, 10.11, 18.49, 2.45, 29.91, 62.15, 28.54, 10.32, 0.96];

county_revenue_self_raised_arr_2.forEach(function(val, idx, arr) {
    var others = val - county_revenue_land_arr[idx] - county_revenue_landRise_arr[idx] - county_revenue_house_arr[idx];
    if (others >= 0)
        county_revenue_self_others_arr.push(others);
    else
        county_revenue_self_others_arr.push(0);
});
county_revenue_self_raised_arr_2_2012.forEach(function(val, idx, arr) {
    var others = val - county_revenue_land_arr_2012[idx] - county_revenue_landRise_arr_2012[idx] - county_revenue_house_arr_2012[idx];
    if (others >= 0)
        county_revenue_self_others_arr_2012.push(others);
    else
        county_revenue_self_others_arr_2012.push(0);
});
county_revenue_self_raised_arr_2_2011.forEach(function(val, idx, arr) {
    var others = val - county_revenue_land_arr_2011[idx] - county_revenue_landRise_arr_2011[idx] - county_revenue_house_arr_2011[idx];
    if (others >= 0)
        county_revenue_self_others_arr_2011.push(others);
    else
        county_revenue_self_others_arr_2011.push(0);
});
// console.log(county_revenue_self_others_arr);
// console.log(county_revenue_self_others_arr_2012);
// console.log(county_revenue_self_others_arr_2011);

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateChart(chartId, lineId, array1, array2, array3, array4) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2, array3, array4).interval;

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

    for (var i = 0; i < county_revenue_land_arr.length; i++) {
        var value = [array1[i], array2[i], array3[i], array4[i]];
        value.forEach(function(_value, index, array) {
            array[index] = array[index] * chart_part_height_unit;
        });

        var w = 20;
        var H = [chart_part_height + 30 - value[0]];
        value.forEach(function(element, index, array) {
            if (index != 0)
                H[index] = (H[index - 1] - element);
        });

        var fill_color = ['#20567d', '#4688a3', '#56a69d', '#abcf9b'];

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








generateChart('chart_2013_3', 'line_2013_3', county_revenue_house_arr, county_revenue_land_arr, county_revenue_landRise_arr, county_revenue_self_others_arr);
generateChart('chart_2012_3', 'line_2012_3', county_revenue_house_arr_2012, county_revenue_land_arr_2012, county_revenue_landRise_arr_2012, county_revenue_self_others_arr_2012);
generateChart('chart_2011_3', 'line_2011_3', county_revenue_house_arr_2011, county_revenue_land_arr_2011, county_revenue_landRise_arr_2011, county_revenue_self_others_arr_2011);

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
        $('#box_3_2013').css('top', box_top);
        $('#box_3_2013').css('left', box_left);
        $('#box_3_2013 > p:nth-child(2) > map').text((county_revenue_self_others_arr[rect_index].toFixed(1)));
        $('#box_3_2013 > p:nth-child(4) > map').text(Math.round(county_revenue_landRise_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(6) > map').text(Math.round(county_revenue_land_arr[rect_index]));
        $('#box_3_2013 > p:nth-child(8) > map').text(Math.round(county_revenue_house_arr[rect_index]));

        $("." + rect_class).css('opacity', 0.7);
        $('#box_3_2013').css('visibility', 'visible');

        $('#box_3_2012').css('top', box_top);
        $('#box_3_2012').css('left', box_left);
        $('#box_3_2012 > p:nth-child(2) > map').text((county_revenue_self_others_arr_2012[rect_index].toFixed(1)));
        $('#box_3_2012 > p:nth-child(4) > map').text(Math.round(county_revenue_landRise_arr_2012[rect_index]));
        $('#box_3_2012 > p:nth-child(6) > map').text(Math.round(county_revenue_land_arr_2012[rect_index]));
        $('#box_3_2012 > p:nth-child(8) > map').text(Math.round(county_revenue_house_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_3_2012').css('visibility', 'visible');

        $('#box_3_2011').css('top', box_top);
        $('#box_3_2011').css('left', box_left);
        $('#box_3_2011 > p:nth-child(2) > map').text((county_revenue_self_others_arr_2011[rect_index].toFixed(1)));
        $('#box_3_2011 > p:nth-child(4) > map').text(Math.round(county_revenue_landRise_arr_2011[rect_index]));
        $('#box_3_2011 > p:nth-child(6) > map').text(Math.round(county_revenue_land_arr_2011[rect_index]));
        $('#box_3_2011 > p:nth-child(8) > map').text(Math.round(county_revenue_house_arr_2011[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_3_2011').css('visibility', 'visible');

    }).mouseout(function() {
        var rect_class = $(this).attr('class');
        $("." + rect_class).css('opacity', 1);
        $('#box_3_2013').css('visibility', 'hidden');

        $('#box_3_2012').css('visibility', 'hidden');

        $('#box_3_2011').css('visibility', 'hidden');
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
