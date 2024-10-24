function drawtimeseries() {

    graphLoad = $.getJSON(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_cems + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&format=json&source=grid&timeformat=xml&tz=utc",
        function (data) {
            var graphdata_cems = [];

            for (i = 0; i < data.length; i++) {
                graphdata_cems[i] = [];
                graphdata_cems[i][0] = new Date(data[i][param_time]);
                for (j = 0; j <= perturbations; j++) {
                    graphdata_cems[i][j+1] = data[i][ensemblelist_cems[j]];
                }
                
            }

            if (!dateFixed && data.length > 0) {
                // Fix the last date of dateslider to timeseries data
                var maxDate = new Date(data[data.length - 1][param_time]);
                var maxDays = Math.ceil((maxDate - startDate) / 1000 / 60 / 60 / 24);
                if (dateslider.value > maxDays) {
                    dateslider.value = maxDays;
                    sliderDate = new Date(startDate);
                    sliderDate.setUTCDate(sliderDate.getUTCDate() + Number(dateslider.value));
                    dateoutput.innerHTML = sliderDate.toLocaleDateString();
                    map.timeDimension.setCurrentTime(sliderDate.getTime());
                }
                dateslider.max = maxDays;
                dateFixed = true;
            }

            if (graphdata_cems.length > 0) {
                g_cems = new Dygraph(
                    document.getElementById("graph_cems"),
                    // [graphdata_time, graphdata_cems],
                    graphdata_cems,
                    dyGraphOptions_cems
                );
                document.getElementById("graph_cems").style = "line-height: 1;";
            } else {
                document.getElementById("graph_cems").innerHTML = "Error loading data";
            }

            graphLoad2 = $.get(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_duff + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&source=grid&timeformat=sql&precision=full&separator=,&tz=utc",
                function (graphdata_duff) {

                    if (graphdata_duff.length > 0) {
                        g_duff = new Dygraph(
                            document.getElementById("graph_duff"),
                            // [graphdata_time, graphdata_duff],
                            graphdata_duff,
                            dyGraphOptions_duff
                        );
                        document.getElementById("graph_duff").style = "line-height: 1;";
                    } else {
                        document.getElementById("graph_duff").innerHTML = "Error loading data";
                    }
                    synctimeseries();
                });

            graphLoad3 = $.get(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_firebuildup + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&source=grid&timeformat=sql&precision=full&separator=,&tz=utc",
                function (graphdata_firebuildup) {

                    if (graphdata_firebuildup.length > 0) {
                        g_firebuildup = new Dygraph(
                            document.getElementById("graph_firebuildup"),
                            // [graphdata_time, graphdata_firebuildup],
                            graphdata_firebuildup,
                            dyGraphOptions_firebuildup
                        );
                        document.getElementById("graph_firebuildup").style = "line-height: 1;";
                    } else {
                        document.getElementById("graph_firebuildup").innerHTML = "Error loading data";
                    }
                    synctimeseries();
                });

            graphLoad4 = $.get(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_fireweather + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&source=grid&timeformat=sql&precision=full&separator=,&tz=utc",
                function (graphdata_fireweather) {
                    if (graphdata_fireweather.length > 0) {
                        g_fireweather = new Dygraph(
                            document.getElementById("graph_fireweather"),
                            // [graphdata_time, graphdata_fireweather],
                            graphdata_fireweather,
                            dyGraphOptions_fireweather
                        );
                        document.getElementById("graph_fireweather").style = "line-height: 1;";
                    } else {
                        document.getElementById("graph_fireweather").innerHTML = "Error loading data";
                    }
                    synctimeseries();
                });

            graphLoad5 = $.get(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_fuelmoisture + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&source=grid&timeformat=sql&precision=full&separator=,&tz=utc",
                function (graphdata_fuelmoisture) {
                    if (graphdata_fuelmoisture.length > 0) {
                        g_fuelmoisture = new Dygraph(
                            document.getElementById("graph_fuelmoisture"),
                            // [graphdata_time, graphdata_fuelmoisture],
                            graphdata_fuelmoisture,
                            dyGraphOptions_fuelmoisture
                        );
                        document.getElementById("graph_fuelmoisture").style = "line-height: 1;";
                    } else {
                        document.getElementById("graph_fuelmoisture").innerHTML = "Error loading data";
                    }
                    synctimeseries();
                });

            graphLoad6 = $.get(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_firespread + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&source=grid&timeformat=sql&precision=full&separator=,&tz=utc",
                function (graphdata_firespread) {
                    if (graphdata_firespread.length > 0) {
                        g_firespread = new Dygraph(
                            document.getElementById("graph_firespread"),
                            // [graphdata_time, graphdata_firespread],
                            graphdata_firespread,
                            dyGraphOptions_firespread
                        );
                        document.getElementById("graph_firespread").style = "line-height: 1;";
                    } else {
                        document.getElementById("graph_firespread").innerHTML = "Error loading data";
                    }
                    synctimeseries();
                });

            graphLoad7 = $.get(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_fireseverity + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&source=grid&timeformat=sql&precision=full&separator=,&tz=utc",
                function (graphdata_fireseverity) {
                    if (graphdata_fireseverity.length > 0) {
                        g_fireseverity = new Dygraph(
                            document.getElementById("graph_fireseverity"),
                            // [graphdata_time, graphdata_fireseverity],
                            graphdata_fireseverity,
                            dyGraphOptions_fireseverity
                        );
                        document.getElementById("graph_fireseverity").style = "line-height: 1;";
                    } else {
                        document.getElementById("graph_fireseverity").innerHTML = "Error loading data";
                    }
                    synctimeseries();
                });

                // if (typeof gsw !== 'undefined' && typeof gst !== 'undefined' && typeof gsh !== 'undefined') {
                //     var sync = Dygraph.synchronize(gsw, gst, gsh, {
                //         selection: false,
                //         zoom: true,
                //         range: false
                //     });
                //     //gB_ecsf.updateOptions({dateWindow: gB_ecbsf.xAxisExtremes()})
                //     gsw.updateOptions({ dateWindow: gsw.xAxisExtremes() })
                // }

            synctimeseries();

            // g_cems.updateOptions({ dateWindow: g_cems.xAxisExtremes() })
            // g_duff.updateOptions({ dateWindow: g_duff.xAxisExtremes() })
            // g_firebuildup.updateOptions({ dateWindow: g_firebuildup.xAxisExtremes() })
            // g_fireweather.updateOptions({ dateWindow: g_fireweather.xAxisExtremes() })
            // g_fuelmoisture.updateOptions({ dateWindow: g_fuelmoisture.xAxisExtremes() })
            // g_firespread.updateOptions({ dateWindow: g_firespread.xAxisExtremes() })
            // g_fireseverity.updateOptions({ dateWindow: g_fireseverity.xAxisExtremes() })



        });
}

function synctimeseries() {
    // if (typeof g_cems !== 'undefined' && typeof g_duff !== 'undefined' && typeof g_firebuildup !== 'undefined' && typeof g_fireweather !== 'undefined' && typeof g_fuelmoisture !== 'undefined' && typeof g_firespread !== 'undefined' && typeof g_fireseverity !== 'undefined') {
    //     var sync = Dygraph.synchronize(g_cems, g_duff, g_firebuildup, g_fireweather, g_fuelmoisture, g_firespread, g_fireseverity, {
    //         // selection: false,
    //         selection: true,
    //         zoom: true,
    //         range: false
    //     });
    // };
    change_cems();
    change_duff();
    change_firebuildup();
    change_fireweather();
    change_fuelmoisture();
    change_firespread();
    change_fireseverity();

}

// // Load all timeseries at once (slow)
// function drawtimeseries() {

//     graphLoad = $.getJSON(smarttimeseries + "latlon=" + latlonPoint + "&param=" + param_time + ensemble_cems + ensemble_duff + ensemble_firebuildup + ensemble_fireweather + ensemble_fuelmoisture + ensemble_firespread + ensemble_fireseverity + "&starttime=" + dateString_timeseries + "&endtime=" + dateString_ecbsf + "&timestep=1440&format=json&source=grid&timeformat=xml&tz=utc",
//         function (data) {

//             // console.debug(data[param_time]);

//             // var graphdata_time = [];
//             var graphdata_cems = [];
//             var graphdata_duff = [];
//             var graphdata_firebuildup = [];
//             var graphdata_fireweather = [];
//             var graphdata_fuelmoisture = [];
//             var graphdata_firespread = [];
//             var graphdata_fireseverity = [];

//             for (i = 0; i < data.length; i++) {
//                 // graphdata_time[i]=data[i][param_time];
//                 // graphdata_cems[i]=data[i][param_cems];
//                 // graphdata_duff[i]=data[i][param_duff];
//                 // graphdata_firebuildup[i]=data[i][param_firebuildup];
//                 // graphdata_fireweather[i]=data[i][param_fireweather];
//                 // graphdata_fuelmoisture[i]=data[i][param_fuelmoisture];
//                 // graphdata_firespread[i]=data[i][param_firespread];
//                 // graphdata_fireseverity[i]=data[i][param_fireseverity];

//                 // graphdata_cems[i]=[new Date(data[i][param_time]), data[i][param_cems]];
//                 // graphdata_duff[i]=[new Date(data[i][param_time]), data[i][param_duff]];
//                 // graphdata_firebuildup[i]=[new Date(data[i][param_time]), data[i][param_firebuildup]];
//                 // graphdata_fireweather[i]=[new Date(data[i][param_time]), data[i][param_fireweather]];
//                 // graphdata_fuelmoisture[i]=[new Date(data[i][param_time]), data[i][param_fuelmoisture]];
//                 // graphdata_firespread[i]=[new Date(data[i][param_time]), data[i][param_firespread]];
//                 // graphdata_fireseverity[i]=[new Date(data[i][param_time]), data[i][param_fireseverity]];

//                 graphdata_cems[i] = [];
//                 graphdata_cems[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_cems[i][j+1] = data[i][ensemblelist_cems[j]];
//                 }

//                 graphdata_duff[i] = [];
//                 graphdata_duff[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_duff[i][j+1] = data[i][ensemblelist_duff[j]];
//                 }

//                 graphdata_firebuildup[i] = [];
//                 graphdata_firebuildup[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_firebuildup[i][j+1] = data[i][ensemblelist_firebuildup[j]];
//                 }

//                 graphdata_fireweather[i] = [];
//                 graphdata_fireweather[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_fireweather[i][j+1] = data[i][ensemblelist_fireweather[j]];
//                 }

//                 graphdata_fuelmoisture[i] = [];
//                 graphdata_fuelmoisture[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_fuelmoisture[i][j+1] = data[i][ensemblelist_fuelmoisture[j]];
//                 }

//                 graphdata_firespread[i] = [];
//                 graphdata_firespread[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_firespread[i][j+1] = data[i][ensemblelist_firespread[j]];
//                 }

//                 graphdata_fireseverity[i] = [];
//                 graphdata_fireseverity[i][0] = new Date(data[i][param_time]);
//                 for (j = 0; j <= perturbations; j++) {
//                     graphdata_fireseverity[i][j+1] = data[i][ensemblelist_fireseverity[j]];
//                 }

//             }

//             // console.debug([graphdata_time, graphdata_cems]);
//             // console.debug(graphdata_cems);

//             if (!dateFixed && data.length > 0) {
//                 // Fix the last date of dateslider to timeseries data
//                 var maxDate = new Date(data[data.length - 1][param_time]);
//                 var maxDays = Math.ceil((maxDate - startDate) / 1000 / 60 / 60 / 24);
//                 if (dateslider.value > maxDays) {
//                     dateslider.value = maxDays;
//                     sliderDate = new Date(startDate);
//                     sliderDate.setUTCDate(sliderDate.getUTCDate() + Number(dateslider.value));
//                     dateoutput.innerHTML = sliderDate.toLocaleDateString();
//                     map.timeDimension.setCurrentTime(sliderDate.getTime());
//                 }
//                 dateslider.max = maxDays;
//                 dateFixed = true;
//             }

//             if (graphdata_cems.length > 0) {
//                 g_cems = new Dygraph(
//                     document.getElementById("graph_cems"),
//                     // [graphdata_time, graphdata_cems],
//                     graphdata_cems,
//                     dyGraphOptions_cems
//                 );
//                 document.getElementById("graph_cems").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_cems").innerHTML = "Error loading data";
//             }

//             if (graphdata_duff.length > 0) {
//                 g_duff = new Dygraph(
//                     document.getElementById("graph_duff"),
//                     // [graphdata_time, graphdata_duff],
//                     graphdata_duff,
//                     dyGraphOptions_duff
//                 );
//                 document.getElementById("graph_duff").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_duff").innerHTML = "Error loading data";
//             }

//             if (graphdata_firebuildup.length > 0) {
//                 g_firebuildup = new Dygraph(
//                     document.getElementById("graph_firebuildup"),
//                     // [graphdata_time, graphdata_firebuildup],
//                     graphdata_firebuildup,
//                     dyGraphOptions_firebuildup
//                 );
//                 document.getElementById("graph_firebuildup").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_firebuildup").innerHTML = "Error loading data";
//             }

//             if (graphdata_fireweather.length > 0) {
//                 g_fireweather = new Dygraph(
//                     document.getElementById("graph_fireweather"),
//                     // [graphdata_time, graphdata_fireweather],
//                     graphdata_fireweather,
//                     dyGraphOptions_fireweather
//                 );
//                 document.getElementById("graph_fireweather").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_fireweather").innerHTML = "Error loading data";
//             }

//             if (graphdata_fuelmoisture.length > 0) {
//                 g_fuelmoisture = new Dygraph(
//                     document.getElementById("graph_fuelmoisture"),
//                     // [graphdata_time, graphdata_fuelmoisture],
//                     graphdata_fuelmoisture,
//                     dyGraphOptions_fuelmoisture
//                 );
//                 document.getElementById("graph_fuelmoisture").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_fuelmoisture").innerHTML = "Error loading data";
//             }

//             if (graphdata_firespread.length > 0) {
//                 g_firespread = new Dygraph(
//                     document.getElementById("graph_firespread"),
//                     // [graphdata_time, graphdata_firespread],
//                     graphdata_firespread,
//                     dyGraphOptions_firespread
//                 );
//                 document.getElementById("graph_firespread").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_firespread").innerHTML = "Error loading data";
//             }

//             if (graphdata_fireseverity.length > 0) {
//                 g_fireseverity = new Dygraph(
//                     document.getElementById("graph_fireseverity"),
//                     // [graphdata_time, graphdata_fireseverity],
//                     graphdata_fireseverity,
//                     dyGraphOptions_fireseverity
//                 );
//                 document.getElementById("graph_fireseverity").style = "line-height: 1;";
//             } else {
//                 document.getElementById("graph_fireseverity").innerHTML = "Error loading data";
//             }

//                 // if (typeof gsw !== 'undefined' && typeof gst !== 'undefined' && typeof gsh !== 'undefined') {
//                 //     var sync = Dygraph.synchronize(gsw, gst, gsh, {
//                 //         selection: false,
//                 //         zoom: true,
//                 //         range: false
//                 //     });
//                 //     //gB_ecsf.updateOptions({dateWindow: gB_ecbsf.xAxisExtremes()})
//                 //     gsw.updateOptions({ dateWindow: gsw.xAxisExtremes() })
//                 // }

//             var sync = Dygraph.synchronize(g_cems, g_duff, g_firebuildup, g_fireweather, g_fuelmoisture, g_firespread, g_fireseverity, {
//                 // selection: false,
//                 selection: true,
//                 zoom: true,
//                 range: false
//             });

//             // g_cems.updateOptions({ dateWindow: g_cems.xAxisExtremes() })
//             // g_duff.updateOptions({ dateWindow: g_duff.xAxisExtremes() })
//             // g_firebuildup.updateOptions({ dateWindow: g_firebuildup.xAxisExtremes() })
//             // g_fireweather.updateOptions({ dateWindow: g_fireweather.xAxisExtremes() })
//             // g_fuelmoisture.updateOptions({ dateWindow: g_fuelmoisture.xAxisExtremes() })
//             // g_firespread.updateOptions({ dateWindow: g_firespread.xAxisExtremes() })
//             // g_fireseverity.updateOptions({ dateWindow: g_fireseverity.xAxisExtremes() })



//         });
// }


function inFinland(lat, lon) {

    var finlandArea = false;

    //The Northest Finland
    if (lat > 68.9 && lat <= 70.1 && lon >= 25.6 && lon <= 29.34) {
        finlandArea = true;
    }
    //Käsivarsi
    else if (lat >= 68.47 && lat <= 69.31 && lon >= 20.55 && lon < 22.3) {
        finlandArea = true;
    }
    //North Finland
    else if (lat >= 68.2 && lat <= 68.9 && lon >= 22.3 && lon <= 28.8) {
        finlandArea = true;
    }
    //North-Middle Finland
    else if (lat >= 64.4 && lat < 68.2 && lon >= 23 && lon <= 30.2) {
        finlandArea = true;
    }
    //South-Middle Finland
    else if (lat >= 63.5 && lat < 64.4 && lon >= 21.7 && lon <= 30.56) {
        finlandArea = true;
    }
    //South Finland
    else if (lat >= 60.6 && lat < 63.5 && lon >= 20 && lon <= 31.6) {
        finlandArea = true;
    }
    //The Southest Finland
    else if (lat >= 59.7 && lat < 60.6 && lon >= 19.1 && lon <= 27.9) {
        finlandArea = true;
    }

    return finlandArea;
}