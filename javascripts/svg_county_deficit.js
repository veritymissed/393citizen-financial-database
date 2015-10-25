var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

var county_deficit_arr = [-119.02, 212.20, -60.44, -49.52, -19.39, -99.03, -3.14, -10.71, -40.61, -12.98, 21.29, -5.91, -3.99, 7.91, -4.39, -1.39, -4.18, 0.08, 0.65, 4.88, 9.58, 0.22];
var county_deficit_arr_2013 = [-95.55, -94.36, -70.44, -44.29, -100.03, 35.24, 7.36, 4.87, -45.91, -13.32, 5.87, -7.76, -2.85, -2.14, -3.86, 8.72, -5.84, 7.00, 10.00, 8.53, 23.84, 0.86];
var county_deficit_arr_2012 = [-151.89, -150.04, -47.22, -49.67, -210.80, 43.87, 6.61, 3.69, -57.00, -32.27, -0.73, -7.26, -8.85, -4.59, -6.79, 11.47, -7.83, 2.63, 4.82, 3.20, 29.54, -0.03];
var county_deficit_arr_2011 = [-30.96, -89.04, -58.91, -59.58, -138.73, 8.79, -0.67, -2.69, -47.10, -30.05, 9.33, -5.06, 1.80, -15.79, -1.55, -3.52, -4.71, -6.41, 1.63, 2.62, 1.43, -0.45];

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateDeficitChart(chartId, lineId, array, countyNameArr) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);

    var num_grade = deficit_getHeadAndInterval_inputMultipleArray(array).head;
    var debt_distance = deficit_getHeadAndInterval_inputMultipleArray(array).interval;

    var h_h = parseFloat($('#chart_svg').attr('height'));
    // console.log(h_h);
    var chart_part_height = h_h * 0.8 / 2;
    var chart_part_head_height = 20;








    // if (screen.width > 900) {



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
        tns.textContent = countyNameArr[i];
        chart_2013.appendChild(tns);
    }

    // }
    // else if (screen.width < 500) {
    //     chart_part_height = chart_part_height * 5 / 11;
    //     var chart_part_height_unit = (chart_part_height - chart_part_head_height * 5 / 11) / (num_grade * debt_distance);
    //     // console.log(chart_part_height_unit);
    //
    //     for (var i = 0; i <= num_grade; i++) {
    //         var lns = document.createElementNS(svgns, "path");
    //         lns.setAttribute("stroke", "#C7C7C7");
    //         lns.setAttribute("stroke-width", "1");
    //         var h = chart_part_height + 30 - i * debt_distance * chart_part_height_unit;
    //         var d_str = 'M30 ' + h + ' H850';
    //         lns.setAttribute('d', d_str);
    //         line_2013.appendChild(lns);
    //
    //         var grade_tag = Math.round(i * debt_distance); //四捨五入做出左邊的級距取到整數位
    //         // console.log(grade_tag);
    //         var grdns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:13px;font-weight: 800;';
    //         grdns.setAttribute("x", 0);
    //         grdns.setAttribute("y", h);
    //         grdns.setAttribute("fill", "#50938f");
    //         grdns.setAttribute("style", txt_sty_str);
    //         grdns.textContent = grade_tag;
    //         line_2013.appendChild(grdns);
    //     }
    //     var unitns = document.createElementNS(svgns, "text");
    //     unitns.setAttribute("x", 10);
    //     unitns.setAttribute("y", chart_part_height + 30);
    //     unitns.setAttribute("fill", "#6B6B6B");
    //     unitns.setAttribute("style", txt_sty_str);
    //     unitns.textContent = "億元";
    //     line_2013.appendChild(unitns);
    //
    //     num_grade = deficit_getHeadAndInterval_inputMultipleArray_neg(array).head;
    //     debt_distance = deficit_getHeadAndInterval_inputMultipleArray_neg(array).interval;
    //     var chart_part_height_unit_neg = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);
    //
    //     for (var i = 1; i <= num_grade; i++) {
    //         var lns = document.createElementNS(svgns, "path");
    //         lns.setAttribute("stroke", "#C7C7C7");
    //         lns.setAttribute("stroke-width", "1");
    //         var h = chart_part_height + 30 + i * debt_distance * chart_part_height_unit_neg;
    //         // var h = 40;
    //         var d_str = 'M30 ' + h + ' H850';
    //         lns.setAttribute('d', d_str);
    //         line_2013.appendChild(lns);
    //
    //         var grade_tag = -i * debt_distance; //四捨五入做出左邊的級距取到整數位
    //         // console.log(grade_tag);
    //         var grdns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:13px;font-weight: 800;';
    //         grdns.setAttribute("x", 0);
    //         grdns.setAttribute("y", h);
    //         grdns.setAttribute("fill", "#d35a52");
    //         grdns.setAttribute("style", txt_sty_str);
    //         grdns.textContent = grade_tag;
    //         line_2013.appendChild(grdns);
    //     }
    //
    //
    //     for (var i = 0; i < array.length; i++) {
    //         var w = 8;
    //         var ins = document.createElementNS(svgns, "rect");
    //         if (array[i] >= 0) {
    //             var val = array[i] * chart_part_height_unit;
    //             var h = chart_part_height + 35 - val;
    //             var fillColor = '#50938f';
    //             ins.setAttribute("height", val);
    //         } else {
    //             var val = array[i] * chart_part_height_unit_neg;
    //             var h = chart_part_height + 35;
    //             var fillColor = '#d35a52';
    //             ins.setAttribute("height", -val);
    //         }
    //         ins.setAttribute("x", i * 12 + 30);
    //         ins.setAttribute("y", h);
    //         ins.setAttribute("width", w);
    //         ins.setAttribute("fill", fillColor);
    //         ins.setAttribute("stroke", "tranparent");
    //         ins.setAttribute("class", 'rect' + i);
    //         chart_2013.appendChild(ins);
    //
    //         var tns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    //         tns.setAttribute("x", (i * 12 + 30) + (w / 2));
    //         tns.setAttribute("y", chart_part_height * 2 + 25);
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
    //         var d_str = 'M30 ' + h + ' H850';
    //         lns.setAttribute('d', d_str);
    //         line_2013.appendChild(lns);
    //
    //         var grade_tag = Math.round(i * debt_distance); //四捨五入做出左邊的級距取到整數位
    //         // console.log(grade_tag);
    //         var grdns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:13px;font-weight: 800;';
    //         grdns.setAttribute("x", 0);
    //         grdns.setAttribute("y", h);
    //         grdns.setAttribute("fill", "#50938f");
    //         grdns.setAttribute("style", txt_sty_str);
    //         grdns.textContent = grade_tag;
    //         line_2013.appendChild(grdns);
    //     }
    //     var unitns = document.createElementNS(svgns, "text");
    //     unitns.setAttribute("x", 10);
    //     unitns.setAttribute("y", chart_part_height + 30);
    //     unitns.setAttribute("fill", "#6B6B6B");
    //     unitns.setAttribute("style", txt_sty_str);
    //     unitns.textContent = "億元";
    //     line_2013.appendChild(unitns);
    //
    //     num_grade = deficit_getHeadAndInterval_inputMultipleArray_neg(array).head;
    //     debt_distance = deficit_getHeadAndInterval_inputMultipleArray_neg(array).interval;
    //     var chart_part_height_unit_neg = (chart_part_height - chart_part_head_height) / (num_grade * debt_distance);
    //
    //     for (var i = 1; i <= num_grade; i++) {
    //         var lns = document.createElementNS(svgns, "path");
    //         lns.setAttribute("stroke", "#C7C7C7");
    //         lns.setAttribute("stroke-width", "1");
    //         var h = chart_part_height + 30 + i * debt_distance * chart_part_height_unit_neg;
    //         // var h = 40;
    //         var d_str = 'M30 ' + h + ' H850';
    //         lns.setAttribute('d', d_str);
    //         line_2013.appendChild(lns);
    //
    //         var grade_tag = -i * debt_distance; //四捨五入做出左邊的級距取到整數位
    //         // console.log(grade_tag);
    //         var grdns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:13px;font-weight: 800;';
    //         grdns.setAttribute("x", 0);
    //         grdns.setAttribute("y", h);
    //         grdns.setAttribute("fill", "#d35a52");
    //         grdns.setAttribute("style", txt_sty_str);
    //         grdns.textContent = grade_tag;
    //         line_2013.appendChild(grdns);
    //     }
    //
    //
    //     for (var i = 0; i < array.length; i++) {
    //         var w = 14;
    //         var ins = document.createElementNS(svgns, "rect");
    //         if (array[i] >= 0) {
    //             var val = array[i] * chart_part_height_unit;
    //             var h = chart_part_height + 40 - val;
    //             var fillColor = '#50938f';
    //             ins.setAttribute("height", val);
    //         } else {
    //             var val = array[i] * chart_part_height_unit_neg;
    //             var h = chart_part_height + 40;
    //             var fillColor = '#d35a52';
    //             ins.setAttribute("height", -val);
    //         }
    //         ins.setAttribute("x", i * 20 + 40);
    //         ins.setAttribute("y", h);
    //         ins.setAttribute("width", w);
    //         ins.setAttribute("fill", fillColor);
    //         ins.setAttribute("stroke", "tranparent");
    //         ins.setAttribute("class", 'rect' + i);
    //         chart_2013.appendChild(ins);
    //
    //         var tns = document.createElementNS(svgns, "text");
    //         var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    //         tns.setAttribute("x", (i * 20 + 40) + (w / 2));
    //         tns.setAttribute("y", chart_part_height * 2 + 25);
    //         tns.setAttribute("fill", "#6B6B6B");
    //         tns.setAttribute("style", txt_sty_str);
    //         tns.textContent = county_name[i];
    //         chart_2013.appendChild(tns);
    //     }
    // }
    //
    //
    //
    //
    //
    //
    //


}









generateDeficitChart('chart_2014', 'line_2014', county_deficit_arr, county_name);
generateDeficitChart('chart_2013', 'line_2013', county_deficit_arr_2013, county_name_before_2014);
generateDeficitChart('chart_2012', 'line_2012', county_deficit_arr_2012, county_name_before_2014);
generateDeficitChart('chart_2011', 'line_2011', county_deficit_arr_2011, county_name_before_2014);









////
$(document).ready(function() {
    var chart_div_height = parseFloat($('#chart_svg').attr('height'));
    var chart_div_width = parseFloat($('#chart_svg').attr('width'));

    $('rect,#county_tag').mouseover(function() {
        var rect_class = $(this).attr('class');
        var rect_index = parseInt(rect_class.slice(4, rect_class.length));

        var rect_x = parseFloat($(this).attr('x'));
        var rect_y = parseFloat($("." + rect_class).attr('y')) - 0;

        // var box_top = -chart_div_height + rect_y;
        var box_top = rect_y;
        // var box_left = -chart_div_width + rect_x;
        // var box_left = chart_div_width / 4 + rect_x;
        var box_left = rect_x + 40;
        // console.log(box_top + " " + box_left);
        $('#box_2014').css('top', box_top);
        $('#box_2014').css('left', box_left);
        $('#box_2014 > p:nth-child(2) > map').text(Math.round(county_deficit_arr[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2014').css('visibility', 'visible');

        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        $('#box_2013 > p:nth-child(2) > map').text(Math.round(county_deficit_arr_2013[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2012').css('top', box_top);
        $('#box_2012').css('left', box_left);
        $('#box_2012 > p:nth-child(2) > map').text(Math.round(county_deficit_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2012').css('visibility', 'visible');

        $('#box_2011').css('top', box_top);
        $('#box_2011').css('left', box_left);
        $('#box_2011 > p:nth-child(2) > map').text(Math.round(county_deficit_arr_2011[rect_index]));
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
