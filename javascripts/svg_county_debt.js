var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];


var county_public_debt_arr = [1100.50, 2169.99, 262.00, 856.81, 721.29, 2448.04, 231.54, 227.90, 398.10, 238.53, 167.42, 266.00, 212.22, 278.82, 72.53, 124.12, 22.20, 124.29, 130.55, 10.51, 0.00];
var county_hidden_debt_arr = [];

var county_public_debt_arr_2013 = [891.86, 2359.43, 737.99, 651.38, 2352.35, 258.75, 234.59, 210.55, 401.59, 236.47, 178.97, 255.42, 212.68, 277.1, 74.62, 124.06, 21.75, 117.33, 127.16, 19.35, 0, 0];
var county_hidden_debt_arr_2013 = [116.9243, 1465.0582, 23.155, 106.0264, 666.611, 132.3762, 23.8551, 117.0158, 89.8421, 82.0268, 15.5245, 42.312, 23.9179, 11.3216, 16.5472, 8.9532, 6.1512, 0.9915, 46.494, 3.7637, 0, 0];
var county_public_debt_arr_2012 = [763.64, 2210.48, 713.33, 696.12, 2253.58, 277.50, 238.28, 206.96, 397.34, 233.09, 173.90, 247.15, 207.02, 280.27, 84.19, 127.76, 16.97, 114.14, 130.32, 28.74, 0.00, 0.00];
var county_hidden_debt_arr_2012 = [151.43, 574.05, 24.53, 164.82, 602.12, 150.98, 25.67, 130.56, 85.59, 55.25, 6.98, 45.88, 36.57, 22.50, 2.00, 4.36, 6.81, 15.97, 34.35, 0.00, 0.00, 0.00];
var county_public_debt_arr_2011 = [664.00, 2028.09, 724.37, 656.76, 2032.31, 342.50, 246.25, 203.30, 341.29, 209.97, 176.45, 240.45, 198.97, 265.08, 72.14, 132.06, 15.70, 105.95, 132.01, 34.51, 0.00, 0.00];
var county_hidden_debt_arr_2011 = [260.03, 1474.47, 38.60, 134.22, 534.65, 140.40, 17.22, 155.79, 103.20, 50.84, 23.37, 58.47, 39.97, 38.07, 1.33, 3.20, 3.20, 19.57, 37.39, 3.01, 0.00, 0.00];

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateDebtChart(chartId, lineId, array1, array2, countyNameArr) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    var num_grade = getHeadAndInterval_inputMultipleArray(array1, array2).head;
    var debt_distance = getHeadAndInterval_inputMultipleArray(array1, array2).interval;

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
        tns.textContent = countyNameArr[i];
        chart_2013.appendChild(tns);
    }
}









generateDebtChart('chart_2014', 'line_2014', county_public_debt_arr, county_hidden_debt_arr,county_name);
generateDebtChart('chart_2013', 'line_2013', county_public_debt_arr_2013, county_hidden_debt_arr_2013, county_name_before_2014);
generateDebtChart('chart_2012', 'line_2012', county_public_debt_arr_2012, county_hidden_debt_arr_2012, county_name_before_2014);
generateDebtChart('chart_2011', 'line_2011', county_public_debt_arr_2011, county_hidden_debt_arr_2011, county_name_before_2014);

////
$(document).ready(function() {
    var chart_div_height = parseFloat($('#chart_svg').attr('height'));
    var chart_div_width = parseFloat($('#chart_svg').attr('width'));

    $('rect,#county_tag').mouseover(function() {
        var rect_class = $(this).attr('class');
        var rect_index = parseInt(rect_class.slice(4, rect_class.length));

        var rect_x = parseFloat($(this).attr('x')) + 30;
        var rect_y = parseFloat($("." + rect_class).attr('y')) - 80;

        // var box_top = -chart_div_height + rect_y;
        var box_top = rect_y;
        // var box_left = -chart_div_width + rect_x;
        // var box_left = chart_div_width / 4 + rect_x;
        var box_left = rect_x + 40;
        // console.log(box_top + " " + box_left);
        $('#box_2014').css('top', box_top);
        $('#box_2014').css('left', box_left);
        $('#box_2014 > p:nth-child(2) > map').text(Math.round(county_hidden_debt_arr[rect_index]));
        $('#box_2014 > p:nth-child(4) > map').text(Math.round(county_public_debt_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2014').css('visibility', 'visible');


        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_hidden_debt_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(4) > map').text(Math.round(county_public_debt_arr_2013[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2012').css('top', box_top);
        $('#box_2012').css('left', box_left);
        $('#box_2012 > p:nth-child(2) > map').text(Math.round(county_hidden_debt_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(4) > map').text(Math.round(county_public_debt_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2012').css('visibility', 'visible');

        $('#box_2011').css('top', box_top);
        $('#box_2011').css('left', box_left);
        $('#box_2011 > p:nth-child(2) > map').text(Math.round(county_hidden_debt_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(4) > map').text(Math.round(county_public_debt_arr_2011[rect_index]));
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
