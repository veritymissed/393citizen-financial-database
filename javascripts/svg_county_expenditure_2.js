var county_name = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];

// 預決算數比較
var county_expenditure_decided_arr = [1467.54, 1695.80, 1095.38, 779.17, 1220.72, 577.36, 197.79, 201.70, 269.42, 388.93, 222.84, 255.71, 219.47, 315.69, 139.34, 169.58, 90.56, 160.68, 162.06, 105.55, 108.33, 32.27];
var county_expenditure_budget_arr = [1554.16, 1769.54, 1195.63, 834.60, 1263.83, 629.28, 206.33, 250.21, 286.87, 413.40, 248.69, 287.27, 244.42, 328.75, 152.57, 181.56, 99.47, 171.11, 180.64, 118.31, 122.89, 36.36];
var county_expenditure_decided_arr_2012 = [1498.67, 1760.75, 998.83, 825.84, 1248.90, 580.94, 192.96, 222.90, 279.35, 394.75, 216.28, 247.35, 219.79, 328.27, 142.09, 163.67, 87.47, 162.19, 163.59, 103.65, 105.21, 30.72];
var county_expenditure_budget_arr_2012 = [1574.48, 1868.92, 1107.02, 874.73, 1312.67, 621.52, 200.97, 258.08, 336.83, 415.49, 232.83, 277.41, 235.62, 342.41, 155.66, 177.03, 94.66, 176.31, 182.83, 112.88, 114.95, 33.43];
var county_expenditure_decided_arr_2011 = [1458.99, 1730.32, 968.87, 775.79, 1267.12, 571.75, 204.52, 230.42, 264.66, 365.77, 210.31, 251.14, 214.44, 359.91, 141.07, 165.37, 83.97, 176.10, 154.91, 112.35, 121.22, 33.91];
var county_expenditure_budget_arr_2011 = [1552.00, 1796.00, 1054.00, 841.00, 1349.00, 621.00, 216.00, 276.00, 414.00, 393.00, 234.00, 286.00, 235.00, 399.00, 158.00, 183.00, 92.00, 189.00, 182.00, 122.00, 132.00, 37.00];

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function generateExpenditureChart(chartId, lineId, array1, array2) {
    var chart_2013 = document.getElementById(chartId);
    var line_2013 = document.getElementById(lineId);
    if (Math.max.apply(null, array1) >= Math.max.apply(null, array2)) {
        var num_grade = getHeadAndInterval_inputMultipleArray(array1).head;
        var debt_distance = getHeadAndInterval_inputMultipleArray(array1).interval;
    } else {
        var num_grade = getHeadAndInterval_inputMultipleArray(array2).head;
        var debt_distance = getHeadAndInterval_inputMultipleArray(array2).interval;
    }
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
        var value = [array1[i], array2[i]];
        value.forEach(function(_value, index, array) {
            array[index] = array[index] * chart_part_height_unit;
        });

        var w = 10;
        var H = [chart_part_height + 30 - value[0], chart_part_height + 30 - value[1]];

        var fill_color = ['#ac4348', '#f1b12d'];

        for (var j = 0; j < value.length; j++) {
            var ins = document.createElementNS(svgns, "rect");
            ins.setAttribute("x", i * 38 + 50 + j * w);
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
    };

}


generateExpenditureChart('chart_2013_2', 'line_2013_2', county_expenditure_budget_arr, county_expenditure_decided_arr);
generateExpenditureChart('chart_2012_2', 'line_2012_2', county_expenditure_budget_arr_2012, county_expenditure_decided_arr_2012);
generateExpenditureChart('chart_2011_2', 'line_2011_2', county_expenditure_budget_arr_2011, county_expenditure_decided_arr_2011);

$(document).ready(function() {
    var chart_div_height = parseFloat($('#chart_svg').attr('height'));
    var chart_div_width = parseFloat($('#chart_svg').attr('width'));

    $('rect,#county_tag').mouseover(function() {
        var rect_class = $(this).attr('class');
        var rect_index = parseInt(rect_class.slice(4, rect_class.length));

        var rect_x = parseFloat($(this).attr('x')) + 25;
        var rect_y = parseFloat($("." + rect_class).attr('y')) - 150;

        // var box_top = -chart_div_height + rect_y;
        var box_top = rect_y;
        // var box_left = -chart_div_width + rect_x;
        // var box_left = chart_div_width / 4 + rect_x;
        var box_left = rect_x + 40;
        // console.log(box_top + " " + box_left);
        $('#box_2_2013').css('top', box_top);
        $('#box_2_2013').css('left', box_left);
        $('#box_2_2013 > p:nth-child(2) > map').text(Math.round(county_expenditure_decided_arr[rect_index]));
        $('#box_2_2013 > p:nth-child(4) > map').text(Math.round(county_expenditure_budget_arr[rect_index]));

        $("." + rect_class).css('opacity', 0.7);
        $('#box_2_2013').css('visibility', 'visible');

        $('#box_2_2012').css('top', box_top);
        $('#box_2_2012').css('left', box_left);
        $('#box_2_2012 > p:nth-child(2) > map').text(Math.round(county_expenditure_decided_arr_2012[rect_index]));
        $('#box_2_2012 > p:nth-child(4) > map').text(Math.round(county_expenditure_budget_arr_2012[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2_2012').css('visibility', 'visible');

        $('#box_2_2011').css('top', box_top);
        $('#box_2_2011').css('left', box_left);
        $('#box_2_2011 > p:nth-child(2) > map').text(Math.round(county_expenditure_decided_arr_2011[rect_index]));
        $('#box_2_2011 > p:nth-child(4) > map').text(Math.round(county_expenditure_budget_arr_2011[rect_index]));
        $("." + rect_class).css('opacity', 0.7);
        $('#box_2_2011').css('visibility', 'visible');

    }).mouseout(function() {
        var rect_class = $(this).attr('class');
        $("." + rect_class).css('opacity', 1);
        $('#box_2_2013').css('visibility', 'hidden');

        $('#box_2_2012').css('visibility', 'hidden');

        $('#box_2_2011').css('visibility', 'hidden');
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
