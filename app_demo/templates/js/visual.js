// //交通流量
// var data = {
//     id: 'multipleBarsLines',
//     legendBar: ['用户1', '用户2'],
//     symbol: ' ', //数值是否带百分号        --默认为空 ''
//     legendLine: ['用户3', '用户4'],
//     xAxis: ['1s', '2s', '3s', '4s', '5s',
//         '6s'
//     ],
//     yAxis: [
//         [8, 10, 10, 11, 4, 13],
//         [10, 7, 8, 8, 7, 9]
//     ],
//     lines: [
//         [10, 10, 9, 11, 7, 4],
//         [6, 12, 12, 2, 4, 4]
//     ],
//     barColor: ['#009883', '#e66922'], //柱子颜色 必填参数
//     lineColor: ['#fd6665', '#fba73b'], // 折线颜色
//
// }
//
// var myData = (function test() {
//     let yAxis = data.yAxis || []
//     let lines = data.lines || []
//     let legendBar = data.legendBar || []
//     let legendLine = data.legendLine || []
//     var symbol = data.symbol || ' '
//     let seriesArr = []
//     let legendArr = []
//     yAxis && yAxis.forEach((item, index) => {
//         legendArr.push({
//             name: legendBar && legendBar.length > 0 && legendBar[index]
//         })
//         seriesArr.push({
//             name: legendBar && legendBar.length > 0 && legendBar[index],
//             type: 'bar',
//             barGap: '0.5px',
//             data: item,
//             barWidth: data.barWidth || 12,
//             label: {
//                 normal: {
//                     show: false,
//                     formatter: '{c}' + symbol,
//                     position: 'top',
//                     textStyle: {
//                         color: '#000',
//                         fontStyle: 'normal',
//                         fontFamily: '微软雅黑',
//                         textAlign: 'left',
//                         fontSize: 11,
//                     },
//                 },
//             },
//             itemStyle: { //图形样式
//                 normal: {
//                     barBorderRadius:0,
//                     borderWidth:1,
//                     borderColor:'#dddddd',
//                     color: data.barColor[index]
//                 },
//             }
//         })
//     })
//
//     lines && lines.forEach((item, index) => {
//         legendArr.push({
//             name: legendLine && legendLine.length > 0 && legendLine[index]
//         })
//         seriesArr.push({
//             name: legendLine && legendLine.length > 0 && legendLine[index],
//             type: 'line',
//             data: item,
//             itemStyle: {
//                 normal: {
//                     color: data.lineColor[index],
//                     lineStyle: {
//                         width: 2,//折线宽度
//                         type: 'solid',
//                     }
//                 }
//             },
//             label: {
//                 normal: {
//                     show: false, //折线上方label控制显示隐藏
//                     position: 'top',
//                 }
//             },
//             symbol: 'circle',
//             symbolSize: 5
//         })
//     })
//
//     return {
//         seriesArr,
//         legendArr
//     }
// })()
// option1 = {
//     title: {
//         show: true,
//         text: data.title,
//         subtext: data.subTitle,
//         link: '1111'
//     },
//     tooltip: {
//         trigger: 'axis',
//         formatter: function(params) {
//             var time = '';
//             var str = '';
//             for (var i of params) {
//                 time = i.name.replace(/\n/g, '') + '<br/>';
//                 if (i.data == 'null' || i.data == null) {
//                     str += i.seriesName + '：无数据' + '<br/>'
//                 } else {
//                     str += i.seriesName + '：' + i.data + symbol + '%<br/>'
//                 }
//
//             }
//             return time + str;
//         },
//         axisPointer: {
//             type: 'none'
//         },
//     },
//     legend: {
//         right: data.legendRight || '30%',
//         top: 0,
//         right:10,
//         itemGap: 16,
//         itemWidth: 10,
//         itemHeight: 10,
//         data: myData.legendArr,
//         textStyle: {
//             color: '#fff',
//             fontStyle: 'normal',
//             fontFamily: '微软雅黑',
//             fontSize: 12,
//         }
//     },
//     grid: {
//         x: 0,
//         y: 30,
//         x2: 0,
//         y2: 25,
//     },
//     xAxis: {
//         type: 'category',
//         data: data.xAxis,
//         axisTick: {
//             show: false,
//         },
//
//         axisLine: {
//             show: false,
//         },
//         axisLabel: {       //轴标
//             show: true,
//             interval: '0',
//             textStyle: {
//                 lineHeight:5,
//                 padding: [2, 2, 0, 2],
//                 height: 50,
//                 fontSize: 12,
//                 color:'#fff',
//             },
//             rich: {
//                 Sunny: {
//                     height: 50,
//                     // width: 60,
//                     padding: [0, 5, 0, 5],
//                     align: 'center',
//                 },
//             },
//             formatter: function(params, index) {
//                 var newParamsName = "";
//                 var splitNumber = 5;
//                 var paramsNameNumber = params && params.length;
//                 if (paramsNameNumber && paramsNameNumber <= 4) {
//                     splitNumber = 4;
//                 } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
//                     splitNumber = 4;
//                 } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
//                     splitNumber = 5;
//                 } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
//                     splitNumber = 5;
//                 } else {
//                     params = params && params.slice(0, 15);
//                 }
//
//                 var provideNumber = splitNumber; //一行显示几个字
//                 var rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
//                 if (paramsNameNumber > provideNumber) {
//                     for (var p = 0; p < rowNumber; p++) {
//                         var tempStr = "";
//                         var start = p * provideNumber;
//                         var end = start + provideNumber;
//                         if (p == rowNumber - 1) {
//                             tempStr = params.substring(start, paramsNameNumber);
//                         } else {
//                             tempStr = params.substring(start, end) + "\n";
//                         }
//                         newParamsName += tempStr;
//                     }
//
//                 } else {
//                     newParamsName = params;
//                 }
//                 params = newParamsName
//                 return '{Sunny|' + params + '}';
//             },
//             color: '#687284',
//         },
//
//     },
//     yAxis: {
//         axisLine: {
//             show: false
//         },
//         axisTick: {
//             show: false
//         },
//         axisLabel: {
//             show: false
//         },
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: '#F1F3F5',
//                 type: 'solid'
//             },
//             interval: 2
//         },
//         splitNumber: 4,
//     },
//     series: myData.seriesArr
// }
//////////////////////交通流量 end

//注意力计算
option2 = {

    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 5,
        itemGap: 13,
        // data: ['用户1', '用户2', '用户3'],
        data: ['本周访问人次'],
        right: '12px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 35,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
        data: {{data}}
    }],
    yAxis: [{
        type: 'value',
        max:100,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [
    //     {
    //     name: '用户1',
    //     type: 'line',
    //     smooth: true,
    //     lineStyle: {
    //         normal: {
    //             width: 2
    //         }
    //     },
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                 offset: 0,
    //                 color: 'rgba(137, 189, 27, 0.3)'
    //             }, {
    //                 offset: 0.8,
    //                 color: 'rgba(137, 189, 27, 0)'
    //             }], false),
    //             shadowColor: 'rgba(0, 0, 0, 0.1)',
    //             shadowBlur: 10
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: 'rgb(137,189,27)'
    //         }
    //     },
    //     data: [20, 35, 34, 45, 52, 41, 49, 64, 24, 52.4, 24, 33]
    // }, {
    //     name: '用户2',
    //     type: 'line',
    //     smooth: true,
    //     lineStyle: {
    //         normal: {
    //             width: 2
    //         }
    //     },
    //     areaStyle: {
    //         normal: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                 offset: 0,
    //                 color: 'rgba(0, 136, 212, 0.3)'
    //             }, {
    //                 offset: 0.8,
    //                 color: 'rgba(0, 136, 212, 0)'
    //             }], false),
    //             shadowColor: 'rgba(0, 0, 0, 0.1)',
    //             shadowBlur: 10
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: 'rgb(0,136,212)'
    //         }
    //     },
    //     data: [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9]
    // },
        {
        name: '用户1',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(219,50,51)'
            }
        },
        data: {{hang}}
    },]
};


option_graph = {
        // backgroundColor: "white"
        title: {
            // text: '医疗实体关系图',
            textStyle: {
                color: "white",
                // fontWeight: "lighter",
            }
        },
        animation:false,
        backgroundColor:'rgba(255, 255, 255, 0)',
        legend: {
            x: "left",
            show: true,
            data: ["疾病", "症状", "科室", "检查", "药品", "食品"]
        },
        // grid: {
        //     top: 10,
        //     left: 10,
        //     right: 10,
        //     width:'auto',
        //     height:'auto'
        // },
        series: [
            {

                type: 'graph',
                layout: 'force',
                symbolSize: 50,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 4],
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        },
                        formatter: "{c}"
                    }
                },
                // force: {
                //     repulsion: 500,
                //     edgeLength: [10, 50]
                // },
                focusNodeAdjacency: true,
                draggable: false,
                roam: true,
                categories: [{
                    name: '疾病',
                }, {
                    name: '症状',
                }, {
                    name: '科室',
                },{
                    name: '检查',
                }, {
                    name: '药品',
                }, {
                    name: '食品',
                }],
                color:['#990b0b','#ED7C30','#335733','#205b72','#800080','#ea7ccc'],

                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        },
                    }
                },

                force: {
                    repulsion: 1000,
                    edgeLength: [10, 50],

                    layoutAnimation: true,
                    // layoutAnimation: false,
                    // animationDuration:300,

                    gravity: 1
                },
                tooltip: {
                    formatter: function (node) { // 区分连线和节点，节点上额外显示其他数字
                        if (!node.value) {
                            return node.data.name;
                        } else {
                            return node.data.name + ":" + node.data.showNum;
                        }
                    },
                },
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 1.5,
                        curveness: 0.3
                    }
                },
                // progressiveThreshold: 700,
                nodes: [],
                links: [],
            }
        ],
    };





















//情感识别

var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [
    {
        "name": "高兴",
        "value": 50
    },
    {
        "name": "惊讶",
        "value": 10
    },
    {
        "name": "生气",
        "value": 12
    },
    {
        "name": "害怕",
        "value": 1
    },
    {
        "name": "厌恶",
        "value": 80
    },
    {
        "name": "悲伤",
        "value": 62
    },
    {
        "name": "中性",
        "value": 100
    }
];

var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "多模离散情感识别",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option_emotion = {
    tooltip: {
        trigger: 'item'
    },
    textStyle:{
        fontSize:15,
    },
        legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            type: 'pie',
            radius: '80%',
            data: [
    {
        "name": "高兴",
        "value": 40
    },
    {
        "name": "惊讶",
        "value": 10
    },
        {
        "name": "中性",
        "value": 80
    },
    {
        "name": "悲伤",
        "value": 62
    },
    {
        "name": "生气",
        "value": 20
    },
    {
        "name": "害怕",
        "value": 10
    },
    {
        "name": "厌恶",
        "value": 10
    }
  ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


option_emotion2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    textStyle: {'font-size':20},
    backgroundColor:'rgba(255, 255, 255, 0)',
    grid: {
        left: '3%',
        right: '4%',
        top: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['高兴', '惊讶', '中性', '悲伤', '生气', '害怕', '厌恶'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            max:100
        }
    ],
    series: [
        {
            name: '置信度',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 100, 50, 30, 20, 10],
            itemStyle: {
            normal: {
　　　　　　　　//这里是重点
                color: function(params) {
                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['#d48265', '#ca8622', '#61a0a8', '#91c7ae','#c23531','#749f83','#2f4554'];
                    return colorList[params.dataIndex]
                }
            }
        }
        }
    ]
};




option3 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },

    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件1 end
//本月发生事件2
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
    "name": "高兴",
    "value": 30
},
    {
        "name": "惊讶",
        "value": 30
    },
    {
        "name": "生气",
        "value": 42
    },
    {
        "name": "害怕",
        "value": 20
    },
    {
        "name": "厌恶",
        "value": 34
    },
    {
        "name": "悲伤",
        "value": 34
    },
    {
        "name": "中性",
        "value": 60
    }
];

var max = data[0].value;
data.forEach(function (d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "多模离散情感识别",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function (d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
        renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function (d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option31 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件2 end


//体势识别
var spirit = '../images.ksh45.png';

var maxData = 200;

option4 = {
    "title": {
        "text": " ",
        "left": "center",
        "y": "10",
        "textStyle": {
            "color": "#fff"
        }
    },

    "grid": {
        "left": 30,
        "top": 0,
        "bottom": 10
    },
    "tooltip": {
        "trigger": "item",
        "textStyle": {
            "fontSize": 12
        },
        "formatter": "{b0}:{c0}"
    },
    "xAxis": {
        "max": 100,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [
        {
            "type": "category",
            "inverse": false,
            "data": [
                "停止",
                "停止",
                "挥手",
                "停止",
                "挥手"
            ],
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "margin": -4,
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 16.25
                }
            }
        },

    ],
    "series": [
        {
            "type": "pictorialBar",
            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            "symbolRepeat": "fixed",
            "symbolMargin": "5%",
            "symbolClip": true,
            "symbolSize": 22.5,
            "symbolPosition": "start",
            "symbolOffset": [
                20,
                0
            ],
            "symbolBoundingData": 300,
            "data": [
                13,
                42,
                67,
                81,
                86,

            ],
            "z": 10
        },
        {
            "type": "pictorialBar",
            "itemStyle": {
                "normal": {
                    "opacity": 0.3
                }
            },
            "label": {
                "normal": {
                    "show": false
                }
            },
            "animationDuration": 0,
            "symbolRepeat": "fixed",
            "symbolMargin": "5%",
            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            "symbolSize": 22.5,
            "symbolBoundingData": 300,
            "symbolPosition": "start",
            "symbolOffset": [
                20,
                0
            ],
            "data": [
                13,
                42,
                67,
                81,
                86,

            ],
            "z": 5
        }
    ]
};


// Make dynamic data.
// function random() {
//     return +(Math.random() * (maxData - 10)).toFixed(1);
// }
// setInterval(function () {
//     var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
//     myChart.setOption({
//         series: [{
//             data: dynamicData.slice()
//         }, {
//             data: dynamicData.slice()
//         }]
//     })
// }, 3000)
//////////////////////收费站收费排行2 end

//收费站收费排行2
var spirit = '../images.ksh45.png';

var maxData = 200;

option41 = {
    "title": {
        "text": " ",
        "left": "center",
        "y": "10",
        "textStyle": {
            "color": "#fff"
        }
    },

    "grid": {
        "left": 30,
        "top": 0,
        "bottom": 10
    },
    "tooltip": {
        "trigger": "item",
        "textStyle": {
            "fontSize": 12
        },
        "formatter": "{b0}:{c0}"
    },
    "xAxis": {
        "max": 100,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [
        {
            "type": "category",
            "inverse": false,
            "data": [
                "停止",
                "停止",
                "挥手",
                "停止",
                "挥手"
            ],
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "margin": -4,
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 16.25
                }
            }
        },

    ],
    "series": [
        {
            "type": "pictorialBar",
            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            "symbolRepeat": "fixed",
            "symbolMargin": "5%",
            "symbolClip": true,
            "symbolSize": 22.5,
            "symbolPosition": "start",
            "symbolOffset": [
                20,
                0
            ],
            "symbolBoundingData": 300,
            "data": [
                51,
                32,
                82,
                42,
                81,

            ],
            "z": 10
        },
        {
            "type": "pictorialBar",
            "itemStyle": {
                "normal": {
                    "opacity": 0.3
                }
            },
            "label": {
                "normal": {
                    "show": false
                }
            },
            "animationDuration": 0,
            "symbolRepeat": "fixed",
            "symbolMargin": "5%",
            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            "symbolSize": 22.5,
            "symbolBoundingData": 300,
            "symbolPosition": "start",
            "symbolOffset": [
                20,
                0
            ],
            "data": [
                51,
                32,
                82,
                42,
                81,

            ],
            "z": 5
        }
    ]
};


// Make dynamic data.
// function random() {
//     return +(Math.random() * (maxData - 10)).toFixed(1);
// }
// setInterval(function () {
//     var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
//     myChart.setOption({
//         series: [{
//             data: dynamicData.slice()
//         }, {
//             data: dynamicData.slice()
//         }]
//     })
// }, 3000)


var shadowColor = '#374b86';
var value = 80;
option5 = {

    title: {
        //text: `${value}万辆`,
        text: `意图类型`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 70;
option6 = {

    title: {
        //text: `${value}万辆`,
        text: `手势识别`,
        subtext: value + "%",
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 85;
option7 = {

    title: {
        //text: `${value}万辆`,
        text: `体势识别`,
        subtext: value + '%',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}
















