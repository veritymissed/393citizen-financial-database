var county_name = ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
var county_name_before_2014 = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

var county_coma_arr = [4.87, 6.67, 4.89, 4.94, 3.78, 4.09, 4.50, 4.52, 3.19, 4.53, 3.88, 3.86, 4.10, 4.19, 3.64, 3.12, 4.61, 3.58, 4.86, 5.10];
var county_coma_cash_arr = [2.97, 6.04, 4.25, 3.35, 3.00, 2.75, 4.10, 4.54, 3.20, 5.02, 4.15, 4.20, 4.86, 6.05, 4.66, 3.04, 5.87, 2.72, 4.72, 5.75]
var county_coma_budget_arr = [5.97, 7.96, 4.78, 5.36, 5.68, 6.24, 3.85, 4.85, 4.03, 3.46, 2.60, 3.17, 1.82, 1.58, 1.92, 2.97, 5.09, 3.46, 3.67, 2.46];
var county_coma_longdebt_arr = [5.55, 4.43, 5.96, 6.30, 3.01, 3.69, 6.77, 3.68, 2.62, 5.49, 6.50, 5.65, 7.78, 5.76, 6.44, 4.78, 6.01, 5.62, 4.94, 8.23];
var county_coma_long_arr = [6.90, 8.85, 5.20, 6.33, 4.21, 5.03, 3.65, 5.01, 2.90, 3.67, 2.02, 2.09, 1.18, 1.52, 0.54, 1.75, 0.24, 3.38, 6.21, 3.30];

var county_coma_arr_2013 = [5.04, 5.47, 5.60, 3.95, 4.46, 5.59, 5.50, 5.23, 3.40, 3.59, 3.11, 3.98, 3.31, 3.72, 3.99, 3.84, 3.78, 3.68, 5.42, 4.53];
var county_coma_cash_arr_2013 = [3.54, 3.53, 4.29, 3.15, 3.45, 4.65, 4.58, 4.72, 2.58, 4.04, 3.74, 4.49, 6.31, 4.17, 7.05, 2.38, 4.41, 3.11, 4.75, 5.16];
var county_coma_budget_arr_2013 = [7.28, 7.98, 7.28, 6.20, 6.55, 6.67, 4.97, 6.05, 4.70, 4.08, 3.18, 3.67, 2.64, 2.80, 2.28, 3.86, 3.57, 4.39, 5.77, 3.83];
var county_coma_longdebt_arr_2013 = [3.06, 3.23, 3.71, 3.56, 2.72, 5.16, 7.76, 1.69, 1.32, 3.12, 3.21, 3.26, 3.45, 6.23, 7.42, 5.13, 3.41, 3.00, 4.73, 4.66];
var county_coma_long_arr_2013 = [6.80, 6.93, 6.76, 4.39, 5.03, 6.64, 3.89, 5.43, 3.15, 3.21, 1.58, 2.16, 1.23, 1.57, 0.72, 2.36, 0.68, 3.36, 6.31, 3.30];

var county_coma_arr_2012 = [5.06, 5.32, 5.43, 3.84, 4.12, 5.51, 4.76, 4.91, 2.67, 3.20, 3.37, 3.31, 3.42, 2.87, 3.37, 3.46, 2.87, 3.27, 5.16, 4.23];
var county_coma_cash_arr_2012 = [2.94, 3.48, 4.40, 1.64, 3.14, 4.11, 5.61, 6.64, 3.66, 3.65, 3.99, 5.97, 5.26, 4.40, 5.58, 3.96, 6.31, 3.65, 4.93, 5.96];
var county_coma_budget_arr_2012 = [7.36, 7.75, 6.42, 6.07, 5.78, 6.38, 4.35, 6.21, 3.92, 3.06, 2.46, 2.91, 2.12, 2.26, 1.97, 3.29, 2.65, 3.92, 5.66, 3.55];
var county_coma_longdebt_arr_2012 = [3.06, 3.22, 5.68, 1.50, 2.83, 4.81, 6.82, 1.95, 1.40, 2.98, 5.89, 3.35, 3.38, 3.32, 2.71, 6.46, 3.37, 3.03, 4.06, 4.95];
var county_coma_long_arr_2012 = [5.89, 6.44, 5.42, 3.85, 3.92, 6.22, 3.60, 6.21, 2.21, 2.37, 1.67, 2.10, 1.09, 1.39, 0.60, 2.33, 0.39, 2.78, 6.11, 3.14];

var county_coma_arr_2011 = [5.34, 5.48, 5.04, 3.51, 4.26, 4.63, 4.47, 5.07, 2.94, 3.36, 2.80, 3.20, 3.40, 3.13, 3.14, 3.17, 3.30, 3.68, 4.87, 4.49];
var county_coma_cash_arr_2011 = [3.05, 3.35, 5.35, 3.10, 3.71, 4.12, 3.86, 3.97, 3.36, 3.78, 2.82, 4.42, 5.07, 4.23, 5.69, 3.69, 5.08, 3.14, 3.91, 5.49];
var county_coma_budget_arr_2011 = [7.02, 8.16, 5.93, 5.37, 5.90, 5.68, 4.05, 6.70, 3.76, 3.01, 3.01, 2.85, 3.21, 2.76, 2.23, 2.54, 2.81, 4.16, 5.54, 3.99];
var county_coma_longdebt_arr_2011 = [5.57, 3.24, 3.68, 1.91, 2.99, 3.46, 7.72, 3.87, 2.07, 4.23, 3.11, 3.42, 3.33, 3.52, 3.11, 5.27, 4.21, 4.86, 4.15, 4.94];
var county_coma_long_arr_2011 = [6.01, 6.92, 4.57, 2.94, 3.89, 4.98, 2.76, 5.49, 1.92, 2.38, 2.16, 1.68, 1.27, 1.62, 0.71, 1.23, 0.45, 2.61, 6.01, 3.27];

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";
var coma_tag_name = ['腦死區', '重度葉克膜區', '中重度插管區', '中度加護病房', '普通病房', '追蹤觀察'];

function generateComaChart(chartId, rectId, lineId, year_coma_array, countyNameArr) {
    var chartAnchor = document.getElementById(chartId);
    var rect_2013 = document.getElementById(rectId);
    var line_2013 = document.getElementById(lineId);

    var year_coma_array_modified = [];
    year_coma_array.forEach(function(val, idx, arr) {
        if (val < 5.5) year_coma_array_modified.push(val);
        else year_coma_array_modified.push(5.5);
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
        rect.setAttribute("width", 1000);
        rect.setAttribute("fill", fillColor);
        rect.setAttribute("stroke", "tranparent");
        chartAnchor.appendChild(rect);
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
        chartAnchor.appendChild(grdns);
    }


    var sep = document.createElementNS(svgns, "rect");
    sep.setAttribute("x", 127);
    sep.setAttribute("y", 0);
    sep.setAttribute("width", 6);
    sep.setAttribute("height", chart_part_height + 10);
    sep.setAttribute("fill", '#f1f3f3');
    sep.setAttribute("stroke", "tranparent");
    chartAnchor.appendChild(sep);

    for (var i = 0; i < year_coma_array.length; i++) {
        var val;
        console.log(debt_distance);
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
        //console.log(val);

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
        chartAnchor.appendChild(ins);

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
        tns.textContent = countyNameArr[i];
        chartAnchor.appendChild(tns);
    }
};








generateComaChart('chart_2014', 'rect_2014', 'line_2014', county_coma_arr, county_name);
generateComaChart('chart_2013', 'rect_2013', 'line_2013', county_coma_arr_2013, county_name_before_2014);
generateComaChart('chart_2012', 'rect_2012', 'line_2012', county_coma_arr_2012, county_name_before_2014);
generateComaChart('chart_2011', 'rect_2011', 'line_2011', county_coma_arr_2011, county_name_before_2014);

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
        $('#box_2014 > p:nth-child(2) > map').text(county_coma_arr[rect_index]);
        $('#box_2014 > p:nth-child(3) > map').text(county_coma_cash_arr[rect_index]);
        $('#box_2014 > p:nth-child(4) > map').text(county_coma_budget_arr[rect_index]);
        $('#box_2014 > p:nth-child(5) > map').text(county_coma_longdebt_arr[rect_index]);
        $('#box_2014 > p:nth-child(6) > map').text(county_coma_long_arr[rect_index]);
        $(this).css('opacity', 0.7);
        $('#box_2014').css('visibility', 'visible');

        $('#box_2013').css('top', box_top);
        $('#box_2013').css('left', box_left);
        $('#box_2013 > p:nth-child(2) > map').text(county_coma_arr_2013[rect_index]);
        $('#box_2013 > p:nth-child(3) > map').text(county_coma_cash_arr_2013[rect_index]);
        $('#box_2013 > p:nth-child(4) > map').text(county_coma_budget_arr_2013[rect_index]);
        $('#box_2013 > p:nth-child(5) > map').text(county_coma_longdebt_arr_2013[rect_index]);
        $('#box_2013 > p:nth-child(6) > map').text(county_coma_long_arr_2013[rect_index]);
        $(this).css('opacity', 0.7);
        $('#box_2013').css('visibility', 'visible');

        $('#box_2012').css('top', box_top);
        $('#box_2012').css('left', box_left);
        $('#box_2012 > p:nth-child(2) > map').text(county_coma_arr_2012[rect_index]);
        $('#box_2012 > p:nth-child(3) > map').text(county_coma_cash_arr_2012[rect_index]);
        $('#box_2012 > p:nth-child(4) > map').text(county_coma_budget_arr_2012[rect_index]);
        $('#box_2012 > p:nth-child(5) > map').text(county_coma_longdebt_arr_2012[rect_index]);
        $('#box_2012 > p:nth-child(6) > map').text(county_coma_long_arr_2012[rect_index]);
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2012').css('visibility', 'visible');

        $('#box_2011').css('top', box_top);
        $('#box_2011').css('left', box_left);
        $('#box_2011 > p:nth-child(2) > map').text(county_coma_arr_2011[rect_index]);
        $('#box_2011 > p:nth-child(3) > map').text(county_coma_cash_arr_2011[rect_index]);
        $('#box_2011 > p:nth-child(4) > map').text(county_coma_budget_arr_2011[rect_index]);
        $('#box_2011 > p:nth-child(5) > map').text(county_coma_longdebt_arr_2011[rect_index]);
        $('#box_2011 > p:nth-child(6) > map').text(county_coma_long_arr_2011[rect_index]);
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
////
// 這個函數能判斷輸入數值的整數位數
function theDecimalDigit(arg_num) {
    arg_num = Math.floor(arg_num);
    return arg_num.toString().length;
}
// 這個函數能算出同樣位數大於輸入值的數，當作截距最高點標記數值
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
