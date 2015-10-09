google.load("visualization", "1.1", {
    packages: ["bar"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {

    var data_5 = new google.visualization.DataTable();
    data_5.addColumn('string', 'Month'); // Implicit domain label col.
    data_5.addColumn('number', 'Sales'); // Implicit series 1 data_5 col.
    data_5.addColumn({
        type: 'string',
        role: 'style'
    }); // certainty col.

    data_5.addRows([
        ['April', 1000, 'color: green'],
        ['May', 1170, 'opacity: 0.5;' +
            'stroke-width: 5;' +
            'stroke-color: #01a0ff;' +
            'fill-color: #fff600'
        ],
        ['June', 660, 'color: #eee'],
        ['July', 1030, 'color: #FD9F01']
    ]);

    // var data_5 = google.visualization.arrayToDataTable([
    //     ['縣市', '元', "測", {
    //         role: 'style'
    //     }],
    //     ['基隆市', 11733000, 12424342, "color: red"],
    //     ['台北市', 235943000, 1233333, "color: #76A7FA"]
    //     // ,
    //     // ['新北市', 89186000, "color: #76A7FA"],
    //     // ['桃園縣', 25875000, "color: #76A7FA"],
    //     // ['新竹市', 12716000, "color: #76A7FA"],
    //     // ['新竹縣', 21055000, "color: #76A7FA"],
    //     // ['苗栗縣', 40159000, "color: #76A7FA"],
    //     // ['台中市', 73799000, "color: #76A7FA"],
    //     // ['彰化縣', 23647000, "color: #76A7FA"],
    //     // ['南投縣', 17897000, "color: #76A7FA"],
    //     // ['雲林縣', 25542000, "color: #76A7FA"],
    //     // ['嘉義市', 1935000, "color: #76A7FA"],
    //     // ['嘉義縣', 21268000, "color: #76A7FA"],
    //     // ['台南市', 65138000, "color: #76A7FA"],
    //     // ['高雄市', 235235000, "color: #76A7FA"],
    //     // ['屏東縣', 27710000, "color: #76A7FA"],
    //     // ['宜蘭縣', 23459000, "color: #76A7FA"],
    //     // ['花蓮縣', 12406000, "color: #76A7FA"],
    //     // ['台東縣', 7462000, "color: #76A7FA"],
    //     // ['澎湖縣', 2175000, "color: #76A7FA"],
    //     // ['金門縣', 0, "color: #76A7FA"],
    //     // ['連江縣', 0, "color: #76A7FA"]
    // ]);

    var data = google.visualization.arrayToDataTable([
        ['縣市', '基隆市', '台北市', '新北市', '桃園縣', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'],
        ['元', 89186000, 25875000, 12716000, 21055000, 40159000, 73799000, 23647000, 17897000, 25542000, 25542000, 1935000, 21268000, 65138000, 235235000, 27710000, 23459000, 12406000, 7462000, 2175000, 0, 0, 0]
    ]);

    var data_2 = google.visualization.arrayToDataTable([
        ['縣市', '基隆市', '台北市', '新北市', '桃園縣', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣'],
        ['      ', 4.39, 7.98, 7.28, 6.67, 5.77, 6.05, 4.70, 7.28, 4.08, 3.18, 3.67, 3.83, 2.64, 6.20, 6.55, 2.80, 4.97, 3.86, 2.28, 3.57]
    ]);

    var data_3 = google.visualization.arrayToDataTable([
        ['縣市', '基隆市', '台北市', '新北市', '桃園縣', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'],
        ['萬元', 146754.1, 169580.24, 109538.02, 77916.85, 122071.85, 57736.47, 19779.05, 20169.72, 26942.14, 38893.13, 22284.39, 25570.98, 21947.03, 31568.77, 13933.99, 16958.46, 9056.19, 16068.11, 16205.96, 10554.82, 10832.59, 3227.38]
    ]);

    var data_4 = google.visualization.arrayToDataTable([
        ['縣市', '基隆市', '台北市', '新北市', '桃園縣', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市', '嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'],
        ['萬元', 20901.26, 40119.14, 11875.24, 9477, 25940.5, 6675.18, 2137.9, 2655.05, 3116.48, 4847.65, 2534.64, 3892.48, 3086.13, 4032.71, 1878.81, 1870.38, 1043.57, 2079.61, 2067.93, 1192.84, 1413.23, 220.04]
    ]);

    var view = new google.visualization.DataView(data);
    var view_2 = new google.visualization.DataView(data_2);
    var view_3 = new google.visualization.DataView(data_3);
    var view_4 = new google.visualization.DataView(data_4);
    var view_5 = new google.visualization.DataView(data_5);


    var bg_green = '#859E66';
    var bg_orange = '#D67547';
    var bg_red = '#B54D52';
    var bg_yellow = '#F8DB01';
    var bg_brown = '#FD9F01';
    var bg = '#eee';
    var options = {
        width: 750,
        height: 500,
        backgroundColor: bg,
        title: 'Company Performance',
        hAxis: {
            title: 'Year',
            titleTextStyle: {
                color: 'red'
            }
        },
        colors: [bg_orange, bg_green, bg_green, bg_green, bg_green, bg_green, bg_red, bg_green, bg_orange, bg_green, bg_orange, bg_yellow, bg_green, bg_orange, bg_brown, bg_orange, bg_green, bg_orange, bg_orange, bg_orange, '#eee', '#eee'],
        is3D: true
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(view, options);

    var chart_2 = new google.charts.Bar(document.getElementById('columnchart_material_2'));

    chart_2.draw(view_2, options);

    var chart_3 = new google.charts.Bar(document.getElementById('columnchart_material_3'));

    chart_3.draw(view_3, options);

    var chart_4 = new google.charts.Bar(document.getElementById('columnchart_material_4'));

    chart_4.draw(view_4, options);

    var chart_5 = new google.charts.Bar(document.getElementById("columnchart_material_5"));

    chart_5.draw(view_5, options);
}
var fuck = {
    tab: 0
};

function onload() {
    // body...
    $('#columnchart_material').hide();
    $('#columnchart_material_2').hide();
    $('#columnchart_material_3').hide();
    $('#columnchart_material_4').hide();
}

function setChartTab(selectTab) {
    // var selectTab = selectTab;
    // selectTab = parseInt(selectTab);
    // console.log(selectTab);
    // fuck.tab = parseInt(selectTab);
    console.log(parseInt(selectTab));

    switch (parseInt(selectTab)) {
        case 1:
            $('#columnchart_material').show();
            $('#columnchart_material_2').hide();
            $('#columnchart_material_3').hide();
            $('#columnchart_material_4').hide();
            break;
        case 2:
            $('#columnchart_material_2').show();
            $('#columnchart_material').hide();
            $('#columnchart_material_3').hide();
            $('#columnchart_material_4').hide();
            break;
        case 3:
            $('#columnchart_material_3').show();
            $('#columnchart_material').hide();
            $('#columnchart_material_2').hide();
            $('#columnchart_material_4').hide();
            break;
        case 4:
            $('#columnchart_material_4').show();
            $('#columnchart_material').hide();
            $('#columnchart_material_2').hide();
            $('#columnchart_material_3').hide();
            break;
        default:
            $('#columnchart_material').hide();
            $('#columnchart_material_2').hide();
            $('#columnchart_material_3').hide();
            $('#columnchart_material_4').hide();
    }
}
