var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

var county_total_population_arr = [396.68, 270.23, 205.83, 271.98, 188.43, 277.90, 45.88, 53.76, 56.71, 129.15, 51.43, 70.54, 52.48, 84.79, 22.45, 33.34, 10.18, 37.31, 43.20, 27.09, 12.77, 1.25];
var county_old_population_arr = [40.05, 38.05, 19.16, 26.64, 23.77, 33.21, 6.34, 6.03, 7.88, 17.06, 7.56, 11.35, 8.84, 11.83, 3.15, 4.52, 1.47, 4.68, 4.37, 3.33, 1.43, 0.12];

var county_total_population_arr_2013 = [395.49, 268.65, 270.17, 188.32, 277.99, 204.40, 45.85, 53.05, 56.56, 129.60, 51.72, 70.78, 52.92, 85.23, 22.48, 33.39, 10.04, 37.49, 42.85, 27.09, 12.07, 1.22]
var county_old_population_arr_2013 = [37.49, 36.26, 25.36, 22.98, 31.62, 18.19, 6.21, 5.88, 7.74, 16.61, 7.39, 11.16, 8.70, 11.54, 3.08, 4.41, 1.44, 4.49, 4.20, 3.21, 1.36, 0.11];
var county_total_population_arr_2012 = [393.93, 267.32, 268.49, 188.16, 277.87, 203.02, 45.86, 52.40, 56.40, 129.99, 52.02, 71.10, 53.37, 85.84, 22.63, 33.52, 9.88, 37.72, 42.51, 27.12, 11.31, 1.13];
var county_old_population_arr_2012 = [35.34, 34.87, 24.32, 22.29, 30.20, 17.43, 6.11, 5.79, 7.64, 16.21, 7.25, 11.02, 8.56, 11.25, 3.05, 4.34, 1.41, 4.36, 4.08, 3.12, 1.29, 0.11];
var county_total_population_arr_2011 = [391.65, 265.10, 266.44, 187.70, 277.45, 201.33, 45.91, 51.76, 56.20, 130.30, 52.28, 71.36, 53.79, 86.45, 22.83, 33.68, 9.72, 37.99, 42.01, 27.15, 10.39, 1.01];
var county_old_population_arr_2011 = [33.45, 33.82, 23.52, 21.87, 29.15, 16.86, 6.07, 5.74, 7.55, 15.92, 7.18, 10.90, 8.49, 11.05, 3.01, 4.27, 1.41, 4.25, 3.97, 3.03, 1.24, 0.10];
var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generatePopulationChart(chartId, lineId, array1, array2,countyNameArr) {
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
    //     unitns.textContent = "(萬人)";
    //     line_2013.appendChild(unitns);
    //
    //     // console.log(display_arr);
    //     for (var i = 0; i < array1.length; i++) {
    //         var val = array2[i] * chart_part_height_unit;
    //         var val_2 = array1[i] * chart_part_height_unit;
    //         val_2 -= val;
    //         var h = chart_part_height + 30 - val;
    //         var h2 = h - val_2;
    //         var w = 8;
    //         var fillColor = '#7dafa7';
    //         var fillColor_2 = ' #d35a52';
    //
    //         var ins = document.createElementNS(svgns, "rect");
    //         ins.setAttribute("x", i * 12 + 30);
    //         ins.setAttribute("y", h);
    //         ins.setAttribute("width", w);
    //         ins.setAttribute("height", val);
    //         ins.setAttribute("fill", fillColor_2);
    //         ins.setAttribute("stroke", "tranparent");
    //         ins.setAttribute("class", 'rect' + i);
    //         chart_2013.appendChild(ins);
    //
    //         var ins_2 = document.createElementNS(svgns, "rect");
    //         ins_2.setAttribute("x", i * 12 + 30);
    //         ins_2.setAttribute("y", h2);
    //         ins_2.setAttribute("width", w);
    //         ins_2.setAttribute("height", val_2);
    //         ins_2.setAttribute("fill", fillColor);
    //         ins_2.setAttribute("stroke", "tranparent");
    //         ins_2.setAttribute("class", 'rect' + i);
    //         chart_2013.appendChild(ins_2);
    //
    //
    //         var tns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    //         tns.setAttribute("x", (i * 12 + 30) + (w / 2));
    //         tns.setAttribute("y", h + val + 8);
    //         tns.setAttribute("fill", "#6B6B6B");
    //         tns.setAttribute("style", txt_sty_str);
    //         tns.textContent = county_name[i];
    //         chart_2013.appendChild(tns);
    //     }
    // } else if (screen.width >= 500 && screen.width < 900) {
    //     chart_part_height = chart_part_height * 2 / 3;
    //
    //
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
    //     unitns.textContent = "(萬人)";
    //     line_2013.appendChild(unitns);
    //
    //     // console.log(display_arr);
    //     for (var i = 0; i < array1.length; i++) {
    //         var val = array2[i] * chart_part_height_unit;
    //         var val_2 = array1[i] * chart_part_height_unit;
    //         val_2 -= val;
    //         var h = chart_part_height + 30 - val;
    //         var h2 = h - val_2;
    //         var w = 14;
    //         var fillColor = '#7dafa7';
    //         var fillColor_2 = ' #d35a52';
    //
    //         var ins = document.createElementNS(svgns, "rect");
    //         ins.setAttribute("x", i * 20 + 40);
    //         ins.setAttribute("y", h);
    //         ins.setAttribute("width", w);
    //         ins.setAttribute("height", val);
    //         ins.setAttribute("fill", fillColor_2);
    //         ins.setAttribute("stroke", "tranparent");
    //         ins.setAttribute("class", 'rect' + i);
    //         chart_2013.appendChild(ins);
    //
    //         var ins_2 = document.createElementNS(svgns, "rect");
    //         ins_2.setAttribute("x", i * 20 + 40);
    //         ins_2.setAttribute("y", h2);
    //         ins_2.setAttribute("width", w);
    //         ins_2.setAttribute("height", val_2);
    //         ins_2.setAttribute("fill", fillColor);
    //         ins_2.setAttribute("stroke", "tranparent");
    //         ins_2.setAttribute("class", 'rect' + i);
    //         chart_2013.appendChild(ins_2);
    //
    //
    //         var tns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    //         tns.setAttribute("x", (i * 20 + 40) + (w / 2));
    //         tns.setAttribute("y", h + val + 8);
    //         tns.setAttribute("fill", "#6B6B6B");
    //         tns.setAttribute("style", txt_sty_str);
    //         tns.textContent = county_name[i];
    //         chart_2013.appendChild(tns);
    //     }
    // }



}









generatePopulationChart('chart_2014', 'line_2014', county_total_population_arr, county_old_population_arr,county_name);
generatePopulationChart('chart_2013', 'line_2013', county_total_population_arr_2013, county_old_population_arr_2013,county_name_before_2014);
generatePopulationChart('chart_2012', 'line_2012', county_total_population_arr_2012, county_old_population_arr_2012,county_name_before_2014);
generatePopulationChart('chart_2011', 'line_2011', county_total_population_arr_2011, county_old_population_arr_2011,county_name_before_2014);

////
$(document).ready(function() {
    var chart_div_height = parseFloat($('#chart_svg').attr('height'));
    var chart_div_width = parseFloat($('#chart_svg').attr('width'));

    $('rect,#county_tag').mouseover(function() {
        var rect_class = $(this).attr('class');
        var rect_index = parseInt(rect_class.slice(4, rect_class.length));

        var rect_x = parseFloat($(this).attr('x')) + 30;
        var rect_y = parseFloat($("." + rect_class).attr('y')) - 180;

        // var box_top = -chart_div_height + rect_y;
        var box_top = rect_y;
        // var box_left = -chart_div_width + rect_x;
        // var box_left = chart_div_width / 4 + rect_x;
        var box_left = rect_x + 40;
        // console.log(box_top + " " + box_left);
        $('#box_2014').css('top', box_top);
        $('#box_2014').css('left', box_left);
        $('#box_2014 > p:nth-child(2) > map').text(Math.round(county_total_population_arr[rect_index]));
        $('#box_2014 > p:nth-child(4) > map').text(Math.round(county_old_population_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2014').css('visibility', 'visible');

        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_total_population_arr_2013[rect_index]));
        $('#box_2013 > p:nth-child(4) > map').text(Math.round(county_old_population_arr_2013[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2012').css('top', box_top);
        $('#box_2012').css('left', box_left);
        $('#box_2012 > p:nth-child(2) > map').text(Math.round(county_total_population_arr_2012[rect_index]));
        $('#box_2012 > p:nth-child(4) > map').text(Math.round(county_old_population_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2012').css('visibility', 'visible');

        $('#box_2011').css('top', box_top);
        $('#box_2011').css('left', box_left);
        $('#box_2011 > p:nth-child(2) > map').text(Math.round(county_total_population_arr_2011[rect_index]));
        $('#box_2011 > p:nth-child(4) > map').text(Math.round(county_old_population_arr_2011[rect_index]));
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
