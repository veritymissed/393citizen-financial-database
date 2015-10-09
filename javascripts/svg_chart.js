var coma_arr = [5.04, 5.47, 5.60, 3.95, 4.46, 5.59, 5.50, 5.23, 3.40, 3.59, 3.11, 3.98, 3.31, 3.72, 3.99, 3.84, 3.78, 3.68, 5.42, 4.53];
var debt_arr = [89186000, 235943000, 73799000, 65138000, 235235000, 25875000, 23459000, 21055000, 40159000, 23647000, 17897000, 25542000, 21268000, 27710000, 7462000, 12406000, 2175000, 11733000, 12716000, 1935000, 0, 0];
var remainder_arr = [-9555.14, -9435.83, -7044.19, -4429.45, -10003.13, 3524.36, 736.21, 486.68, -4590.78, -1332.36, 587.13, -776.24, -285.24, -213.80, -386.31, 872.46, -583.89, 700.41, 1000.28, 852.65, 2383.90, 86.49];
var distributed_arr = [25102.7, 34042.96, 20234.27, 16507.5, 26258.27, 12053.17, 4134.88, 3767.91, 3493.92, 7444.24, 7640.84, 6535.84, 5216.56, 6843.27, 3485.7, 3398.13, 1563.46, 3272.81, 3097.43, 2366.68, 1140.71, 313.16];
var tax_revenue_arr = [86171180000, 105776210000, 61612860000, 37916900000, 62647230000, 38173160000, 8409160000, 9435320000, 7606380000, 15773220000, 10596320000, 10651100000, 7775530000, 10997190000, 4574670000, 5576760000, 1929020000, 6813920000, 10128970000, 5221740000, 2257280000, 411420000];
var supply_and_help_revenue_arr = [26383.45, 25874.05, 22341.59, 22993.77, 26136.97, 14448.7, 9382.94, 7385.26, 10930.86, 17782.63, 10954.47, 12474.98, 13279.33, 18483.04, 8358.69, 10132.43, 6007.18, 7934.5, 5038.38, 5352.03, 3083.69, 2649.74];
var expenditure_arr = [146754.1, 169580.24, 109538.02, 77916.85, 122071.85, 57736.47, 19779.05, 20169.72, 26942.14, 38893.13, 22284.39, 25570.98, 21947.03, 31568.77, 13933.99, 16958.46, 9056.19, 16068.11, 16205.96, 10554.82, 10832.59, 3227.38];
var social_fare_pay_arr = [20901.26, 40119.14, 11875.24, 9477, 25940.5, 6675.18, 2137.9, 2655.05, 3116.48, 4847.65, 2534.64, 3892.48, 3086.13, 4032.71, 1878.81, 1870.38, 1043.57, 2079.61, 2067.93, 1192.84, 1413.23, 220.04];
var keys = ['新北市', '台北市', '台中市', '台南市', '高雄市', '桃園縣', '宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '台東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣', '連江縣'];
// data part

if (screen.width > 1000) {
    var svgns = "http://www.w3.org/2000/svg";
    var xlinkns = "http://www.w3.org/1999/xlink";
    var chart_1 = document.getElementById('chart_1');
    var line_1 = document.getElementById('line_1');
    var chart_2 = document.getElementById('chart_2');
    var line_2 = document.getElementById('line_2');
    var chart_3 = document.getElementById('chart_3');
    var line_3 = document.getElementById('line_3');
    var chart_4 = document.getElementById('chart_4');
    var line_4 = document.getElementById('line_4');
    var chart_5 = document.getElementById('chart_5');
    var line_5 = document.getElementById('line_5');
    var chart_6 = document.getElementById('chart_6');
    var line_6 = document.getElementById('line_6');
    var chart_7 = document.getElementById('chart_7');
    var line_8 = document.getElementById('line_8');
    var chart_9 = document.getElementById('chart_9');
    var line_9 = document.getElementById('line_9');
}
//
//
var debt_arr_max = Math.max.apply(null, debt_arr);
var debt_arr_min = Math.min.apply(null, debt_arr);

var num_grade = 7;
var debt_distance = (debt_arr_max - debt_arr_min) / 100000 / num_grade / 9;

for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 310 - i * debt_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_1.appendChild(lns);

    var grade_tag = Math.round(310 - h); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag * 9;
    line_1.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - debt_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億";
line_1.appendChild(unitns);

var display_arr = [];
for (var i = 0; i < debt_arr.length; i++) {
    display_arr[i] = Math.round(debt_arr[i] / 100000);
}
// console.log(display_arr);
for (var i = 0; i < debt_arr.length; i++) {
    val = debt_arr[i] / 100000 / 9;
    var h = 310 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);

    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 38 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_1.appendChild(valtns);

    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 38 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_1.appendChild(ins);

    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_1.appendChild(tns);
}
////





var coma_arr_max = Math.max.apply(null, coma_arr);

var num_grade = 4;
var coma_distance = Math.round(coma_arr_max * 40 / num_grade);
// console.log(coma_distance);

for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 290 - i * coma_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_2.appendChild(lns);

    var grade_tag = Math.round(i * coma_distance) / 40; //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag;
    line_2.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - coma_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "指數";
line_2.appendChild(unitns);

var display_arr = [];
for (var i = 0; i < coma_arr.length; i++) {
    display_arr[i] = Math.round(coma_arr[i] * 10) / 10;
}
// console.log(display_arr);
for (var i = 0; i < coma_arr.length; i++) {
    val = coma_arr[i] * 40;
    var h = 290 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);

    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 43 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_2.appendChild(valtns);

    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 43 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_2.appendChild(ins);

    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 43 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_2.appendChild(tns);
}
////









var debt_arr_max = Math.max.apply(null, remainder_arr);
var debt_arr_min = Math.min.apply(null, remainder_arr);

var num_grade = 5;
var p_debt_distance = Math.round((debt_arr_max - 0) / num_grade / 100);
var n_debt_distance = Math.round((0 - debt_arr_min) / num_grade / 100);
// console.log(debt_arr_max + " " + debt_arr_min + " " + p_debt_distance + " " + n_debt_distance);

for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 170 + i * n_debt_distance * 1.5;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_3.appendChild(lns);

    var grade_tag = -(i * n_debt_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag.toString();
    line_3.appendChild(grdns);
}
for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 170 - i * (p_debt_distance * 3.5);
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_3.appendChild(lns);

    var grade_tag = Math.round(i * p_debt_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag;
    line_3.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", 270 - grade_tag * p_debt_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億元";
line_3.appendChild(unitns);

var display_arr = [];
for (var i = 0; i < remainder_arr.length; i++) {
    if (remainder_arr[i] >= 0) {
        display_arr[i] = Math.round(remainder_arr[i] / 10) / 10;
    } else {
        var p = Math.round((-1) * remainder_arr[i] / 10) / 10;
        display_arr[i] = (-1) * p;
    }
}
// console.log(display_arr);
for (var i = 0; i < remainder_arr.length; i++) {
    val = remainder_arr[i] / 100;
    // console.log(val);
    if (val >= 0) {
        var h = 170 - (val * 3.5);
        var w = 20;
        var fillColor = get_chart_bar_color(coma_arr[i]);

        var valtns = document.createElementNS(svgns, "text");
        valtns.setAttribute("x", i * 38 + 50);
        valtns.setAttribute("y", h - 3);
        valtns.setAttribute("fill", "#6B6B6B");
        valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
        valtns.textContent = display_arr[i];
        chart_3.appendChild(valtns);

        var ins = document.createElementNS(svgns, "rect");
        ins.setAttribute("x", i * 38 + 50);
        ins.setAttribute("y", h);
        ins.setAttribute("width", w);
        ins.setAttribute("height", Math.abs(val * 3.5));
        ins.setAttribute("fill", fillColor);
        ins.setAttribute("stroke", "tranparent");
        chart_3.appendChild(ins);
    } else {
        var h = 170;
        var w = 20;
        var fillColor = get_chart_bar_color(coma_arr[i]);

        var valtns = document.createElementNS(svgns, "text");
        valtns.setAttribute("x", i * 38 + 50);
        valtns.setAttribute("y", h + Math.abs(val * 1.5) + 15);
        valtns.setAttribute("fill", "#6B6B6B");
        valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
        valtns.textContent = display_arr[i];
        chart_3.appendChild(valtns);

        var ins = document.createElementNS(svgns, "rect");
        ins.setAttribute("x", i * 38 + 50);
        ins.setAttribute("y", h);
        ins.setAttribute("width", w);
        ins.setAttribute("height", Math.abs(val * 1.5));
        ins.setAttribute("fill", fillColor);
        ins.setAttribute("stroke", "tranparent");
        chart_3.appendChild(ins);
    }


    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", 150 * 2.4);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_3.appendChild(tns);
}





//
var distributed_arr_max = Math.max.apply(null, distributed_arr);

var num_grade = 5;
var distributed_distance = Math.round(distributed_arr_max / num_grade / 100 / 2);
// console.log(distributed_distance);

for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 230 - i * distributed_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_4.appendChild(lns);

    var grade_tag = Math.round(i * distributed_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag * 2;
    line_4.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - distributed_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億";
line_4.appendChild(unitns);

var display_arr = [];
for (var i = 0; i < distributed_arr.length; i++) {
    display_arr[i] = Math.round(distributed_arr[i] / 100);
}
// console.log(display_arr);
for (var i = 0; i < distributed_arr.length; i++) {
    val = distributed_arr[i] / 100 / 2;
    var h = 230 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);
    // 下面是各個縣市數值
    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 38 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_4.appendChild(valtns);
    // 下面是各個縣市數值的長條
    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 38 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_4.appendChild(ins);
    // 下面是處理各個縣市名稱
    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_4.appendChild(tns);
}
//
var tax_revenue_arr_max = Math.max.apply(null, tax_revenue_arr);

var num_grade = 6;
var tax_revenue_distance = Math.round(tax_revenue_arr_max / num_grade / 100000000 / 4);
// console.log(tax_revenue_distance);
for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 280 - i * distributed_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_5.appendChild(lns);

    var grade_tag = Math.round(i * distributed_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag * 4;
    line_5.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - distributed_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億";
line_5.appendChild(unitns);
var display_arr = [];
for (var i = 0; i < tax_revenue_arr.length; i++) {
    display_arr[i] = Math.round(tax_revenue_arr[i] / 100000000);
}
// console.log(display_arr);
for (var i = 0; i < tax_revenue_arr.length; i++) {
    val = tax_revenue_arr[i] / 100000000 / 4;
    var h = 280 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);
    // 下面是各個縣市數值
    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 38 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_5.appendChild(valtns);
    // 下面是各個縣市數值的長條
    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 38 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_5.appendChild(ins);
    // 下面是處理各個縣市名稱
    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_5.appendChild(tns);
}
//
var supply_and_help_revenue_arr_max = Math.max.apply(null, supply_and_help_revenue_arr);

var num_grade = 6;
var supply_and_help_revenue_distance = Math.round(supply_and_help_revenue_arr_max / num_grade / 100 / 1.5);
// console.log(supply_and_help_revenue_distance);
for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 240 - i * supply_and_help_revenue_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_6.appendChild(lns);

    var grade_tag = Math.round(i * supply_and_help_revenue_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag * 1.5;
    line_6.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - supply_and_help_revenue_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億";
line_6.appendChild(unitns);
var display_arr = [];
for (var i = 0; i < supply_and_help_revenue_arr.length; i++) {
    display_arr[i] = Math.round(supply_and_help_revenue_arr[i] / 100);
}
// console.log(display_arr);
for (var i = 0; i < supply_and_help_revenue_arr.length; i++) {
    val = supply_and_help_revenue_arr[i] / 100 / 1.5;
    var h = 240 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);
    // 下面是各個縣市數值
    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 38 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_6.appendChild(valtns);
    // 下面是各個縣市數值的長條
    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 38 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_6.appendChild(ins);
    // 下面是處理各個縣市名稱
    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_6.appendChild(tns);
}
//
var expenditure_arr_max = Math.max.apply(null, expenditure_arr);

var num_grade = 6;
var expenditure_arr_distance = Math.round(expenditure_arr_max / num_grade / 100 / 8);
// console.log(expenditure_arr_distance);
for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 250 - i * expenditure_arr_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_7.appendChild(lns);

    var grade_tag = Math.round(i * expenditure_arr_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag * 8;
    line_7.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - supply_and_help_revenue_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億";
line_7.appendChild(unitns);
var display_arr = [];
for (var i = 0; i < expenditure_arr.length; i++) {
    display_arr[i] = Math.round(expenditure_arr[i] / 100);
}
// console.log(display_arr);
for (var i = 0; i < expenditure_arr.length; i++) {
    val = expenditure_arr[i] / 100 / 8;
    var h = 250 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);
    // 下面是各個縣市數值
    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 38 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_7.appendChild(valtns);
    // 下面是各個縣市數值的長條
    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 38 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_7.appendChild(ins);
    // 下面是處理各個縣市名稱
    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_7.appendChild(tns);
}
//
var socail_fare_pay_arr_max = Math.max.apply(null, social_fare_pay_arr);
// console.log(socail_fare_pay_arr_max);
var num_grade = 6;
var socail_fare_pay_arr_distance = Math.round(socail_fare_pay_arr_max / num_grade / 100 / 2);
// console.log(socail_fare_pay_arr_distance);
for (var i = 0; i <= num_grade; i++) {
    var lns = document.createElementNS(svgns, "path");
    lns.setAttribute("stroke", "#C7C7C7");
    lns.setAttribute("stroke-width", "1");
    var h = 250 - i * socail_fare_pay_arr_distance;
    var d_str = 'M30 ' + h + ' H900';
    lns.setAttribute('d', d_str);
    line_8.appendChild(lns);

    var grade_tag = Math.round(i * socail_fare_pay_arr_distance); //四捨五入做出左邊的級距取到整數位
    // console.log(grade_tag);
    var grdns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:13px;font-weight: bold;';
    grdns.setAttribute("x", 0);
    grdns.setAttribute("y", h);
    grdns.setAttribute("fill", "#6B6B6B");
    grdns.setAttribute("style", txt_sty_str);
    grdns.textContent = grade_tag * 2;
    line_8.appendChild(grdns);
}
var unitns = document.createElementNS(svgns, "text");
unitns.setAttribute("x", 0);
unitns.setAttribute("y", h - supply_and_help_revenue_distance);
unitns.setAttribute("fill", "#6B6B6B");
unitns.setAttribute("style", txt_sty_str);
unitns.textContent = "億";
line_8.appendChild(unitns);
var display_arr = [];
for (var i = 0; i < social_fare_pay_arr.length; i++) {
    display_arr[i] = Math.round(social_fare_pay_arr[i] / 100);
}
for (var i = 0; i < social_fare_pay_arr.length; i++) {
    val = social_fare_pay_arr[i] / 100 / 2;
    var h = 250 - val;
    var w = 20;
    var fillColor = get_chart_bar_color(coma_arr[i]);
    // 下面是各個縣市數值
    var valtns = document.createElementNS(svgns, "text");
    valtns.setAttribute("x", i * 38 + 50);
    valtns.setAttribute("y", h - 3);
    valtns.setAttribute("fill", "#6B6B6B");
    valtns.setAttribute("style", 'font-size:15px;font-weight: bold;');
    valtns.textContent = display_arr[i];
    chart_8.appendChild(valtns);
    // 下面是各個縣市數值的長條
    var ins = document.createElementNS(svgns, "rect");
    ins.setAttribute("x", i * 38 + 50);
    ins.setAttribute("y", h);
    ins.setAttribute("width", w);
    ins.setAttribute("height", val);
    ins.setAttribute("fill", fillColor);
    ins.setAttribute("stroke", "tranparent");
    chart_8.appendChild(ins);
    // 下面是處理各個縣市名稱
    var tns = document.createElementNS(svgns, "text");
    var txt_sty_str = 'font-size:15px;font-weight: bold; writing-mode: tb;';
    tns.setAttribute("x", (i * 38 + 50) + (w / 2));
    tns.setAttribute("y", h + val);
    tns.setAttribute("fill", "#6B6B6B");
    tns.setAttribute("style", txt_sty_str);
    tns.textContent = keys[i];
    chart_8.appendChild(tns);
}

function get_chart_bar_color(coma) {
    if (coma <= 3) {
        return '#690502';
    } else if (coma >= 3 && coma < 3.5) {
        return '#B54D52';
    } else if (coma >= 3.5 && coma < 4) {
        return '#D67547';
    } else if (coma >= 4 && coma < 4.5) {
        return '#FD9F01';
    } else if (coma >= 4.5 && coma < 5) {
        return '#F8DB01';
    } else if (coma >= 5) {
        return '#859E66';
    } else {
        return "#CCCCCC"
    }
}
