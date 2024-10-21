var now = new Date();

var startYear = now.getUTCFullYear();
var startMonth = now.getUTCMonth() + 1;
var startDay = now.getUTCDate();
// var startDay = now.getUTCDate() + 1;
if (startMonth < 10) {
    startMonth = '0' + startMonth;
}
if (startDay < 10) {
    startDay = '0' + startDay;
}

// var startMonth2 = now.getUTCMonth();
// var startMonth2 = now.getUTCMonth() - 1;
var startMonth2 = now.getUTCMonth() - 2;

// if (startMonth2 < 10) {
//     startMonth2 = '0' + startMonth2;
// }

// var startDate = new Date(Date.UTC(startYear, startMonth-1, startDay));

if (now.getUTCDate() < 15) {
    var startDate = new Date(Date.UTC(startYear, startMonth2 - 1, 2));
}
else {
    var startDate = new Date(Date.UTC(startYear, startMonth2, 2));
}

var currentDate = new Date(Date.UTC(startYear, startMonth-1, startDay));

var startDateYear = startDate.getUTCFullYear();
var startDateMonth = startDate.getUTCMonth() + 1;
// var startDateMonth = startDate.getUTCMonth();

if (startDateMonth < 10) {
    startDateMonth = '0' + startDateMonth;
}
var dateString = startDateYear + '-' + startDateMonth + '-02/P7M';

// var dateString = startYear + '-' + startMonth + '-' + startDay + 'T00:00:00Z/P7M';
// var dateString = startYear + '-' + startMonth + '-' + startDay + '/P7M';
// var dateString = startYear + '-' + startMonth2 + '-02/P7M';

var dateString_origintime = startYear.toString() + startMonth + startDay + '0000';

var dateString_timeseries = startDateYear + startDateMonth + '020000';


// // smartmetDay = now.getUTCDate() + 10;
// let smartmetDate = new Date(Date.UTC(startYear, startMonth - 1, now.getUTCDate() + 10));

// var smartmetYear = smartmetDate.getUTCFullYear();
// var smartmetMonth = smartmetDate.getUTCMonth() + 1;
// var smartmetDay = smartmetDate.getUTCDate();
// if (smartmetMonth < 10) {
//     smartmetMonth = '0' + smartmetMonth;
// }
// if (smartmetDay < 10) {
//     smartmetDay = '0' + smartmetDay;
// }

// var dateString_smartmet = smartmetYear.toString() + smartmetMonth + smartmetDay + '0000';


// // let ndviDate, ndviEndDate;
// let swiDate, swiEndDate;

// let edteDate, edteDate2, edteStartDate, edteEndDate;

// // Initial estimate
// let swiEndDay = now.getUTCDate() - 4;
// swiEndDate = new Date(Date.UTC(startYear, startMonth-1, swiEndDay));

// let edteStartDay = now.getUTCDate() - 1;
// edteEndDate = new Date(Date.UTC(startYear, startMonth-1, swiEndDay));

// let edteEndDay = now.getUTCDate() + 2;
// edteEndDate = new Date(Date.UTC(startYear, startMonth-1, swiEndDay));

// // console.debug(swiEndDate)


// $.get('https://desm.harvesterseasons.com/wms?&service=WMS&request=GetCapabilities', function (data) {

//     let layerlist = data.getElementsByTagName("Layer");

//     let swiDateList;
//     for (i = 0; i < layerlist.length; i++) {
//         if (layerlist[i].childNodes[1].firstChild.nodeValue === 'harvester:swi:SWI2-0TO1') {
//         // if (layerlist[i].childNodes[1].firstChild.nodeValue === 'gui:isobands:SWI_SWI2') {
//             // console.debug(layerlist[i].childNodes)
//             // console.debug(layerlist[i].childNodes[1].firstChild.nodeValue)
//             // console.debug(layerlist[i].childNodes[41].firstChild)
//             // console.debug(layerlist[i].childNodes[41].firstChild.nodeValue)
//             swiDateList = layerlist[i].childNodes[41].firstChild.nodeValue.split(",");
//             // swiDateList = layerlist[i].childNodes[29].firstChild.nodeValue.split(",");
//             break;
//         }
//     }
//     // ndviDate = new Date('2022-05-10');   
//     swiDate = new Date(swiDateList[swiDateList.length-1]);

//     // console.debug(swiDateList[swiDateList.length-1])
//     // console.debug(swiDate)

//     swiEndDate = new Date(Date.UTC(swiDate.getUTCFullYear(), swiDate.getUTCMonth(), swiDate.getUTCDate()));

//     // console.debug(swiEndDate)

//     let edteDateList;
//     for (i = 0; i < layerlist.length; i++) {
//         if (layerlist[i].childNodes[1].firstChild.nodeValue === 'harvester:edte') {
//             // console.debug(layerlist[i].childNodes)
//             // console.debug(layerlist[i].childNodes[1].firstChild.nodeValue)
//             // console.debug(layerlist[i].childNodes[37].firstChild)
//             // console.debug(layerlist[i].childNodes[37].firstChild.nodeValue)
//             edteDateList = layerlist[i].childNodes[37].firstChild.nodeValue.split(",");
//             break;
//         }
//     }

//     edteDate = new Date(edteDateList[0]);

//     // console.debug(edteDateList[0])
//     // console.debug(edteDate)

//     // edteDate2 = new Date(edteDateList[edteDateList.length-1]);
//     edteDate2 = new Date(edteDateList[edteDateList.length-2]);

//     // console.debug(edteDateList[edteDateList.length-1])
//     // console.debug(edteDate2)

//     edteStartDate = new Date(Date.UTC(edteDate.getUTCFullYear(), edteDate.getUTCMonth(), edteDate.getUTCDate()));
//     edteEndDate = new Date(Date.UTC(edteDate2.getUTCFullYear(), edteDate2.getUTCMonth(), edteDate2.getUTCDate()));

//     // console.debug(edteStartDate)
//     // console.debug(edteEndDate)

// })


var mappos = L.Permalink.getMapLocation();

var map = L.map('map', {
    // zoom: 6,
    minZoom: 1,
    maxZoom: 16,
    fullscreenControl: false,
    //center: [64.0, 27.0],
    timeDimension: true,
    timeDimensionControl: true,
    //timeDimensionControl: false,
    timeDimensionOptions: {
        timeInterval: dateString,
        period: "P1D",
    },
    timeDimensionControlOptions: {
        //timeZones: "Local Time",
        backwardButton: false,
        forwardButton: false,
        playButton: false,
        timeSlider: false,
        speedSlider: false,        
    },
    center: mappos.center,
    zoom: mappos.zoom
/*    timeDimensionControlOptions: {
        //timeZones: ["Local"],
        playerOptions: {
            transitionTime: 250,
        }
    }*/
});

L.Permalink.setup(map);

// load a tile layer
var thunderforest = L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=e60422e636f34988a79015402724757b',
    {
        attribution: 'Tiles by <a href="https://www.thunderforest.com/">Thunderforest</a> Data by <a href="https://www.fmi.fi/">Finnish Meteorological Institute</a>',
        maxZoom: 22,
        minZoom: 0,
        // zIndex: 10,
    }).addTo(map);

// load a tile layer
var maastokartta = L.tileLayer('https://avoin-karttakuva.maanmittauslaitos.fi/avoin/wmts/1.0.0/maastokartta/default/WGS84_Pseudo-Mercator/{z}/{y}/{x}.png?api-key=45deef08-fd2f-42ae-9953-5550fff43b17',
{
    attribution: 'Tiles by <a href="https://www.maanmittauslaitos.fi/">Maanmittauslaitos</a> Data by <a href="https://www.fmi.fi/">Finnish Meteorological Institute</a>',
    maxZoom: 16,
    minZoom: 0,
    // zIndex: 10,
})//.addTo(map);


// load a tile layer
var taustakartta = L.tileLayer('https://avoin-karttakuva.maanmittauslaitos.fi/avoin/wmts/1.0.0/taustakartta/default/WGS84_Pseudo-Mercator/{z}/{y}/{x}.png?api-key=45deef08-fd2f-42ae-9953-5550fff43b17',
{
    attribution: 'Tiles by <a href="https://www.maanmittauslaitos.fi/">Maanmittauslaitos</a> Data by <a href="https://www.fmi.fi/">Finnish Meteorological Institute</a>',
    maxZoom: 16,
    minZoom: 0,
    // zIndex: 10,
})//.addTo(map);

// load a tile layer
L.tileLayer('https://avoin-karttakuva.maanmittauslaitos.fi/avoin/wmts/1.0.0/kiinteistojaotus/default/WGS84_Pseudo-Mercator/{z}/{y}/{x}.png?api-key=45deef08-fd2f-42ae-9953-5550fff43b17',
    {
        maxZoom: 16,
        minZoom: 13,
        zIndex: 20,
    }).addTo(map);

var baseMaps = {
    "Thunderforest": thunderforest,
    "Maastokartta": maastokartta,
    "Taustakartta": taustakartta,
};


// create scale control and add to map
L.control.scale({imperial: false, maxWidth: 200, position: 'bottomright'}).addTo(map);

// create location control and add to map
var lc = L.control.locate({
    showCompass: false,
    //drawCircle: false,
    //drawMarker: false,
    //timeout: 100,
    //initialZoomLevel: 13,
    locateOptions: {
        //maxZoom: 15
        maxZoom: 14
    },
    strings: {
        title: "Show location"
    },
}).addTo(map);


if (mappos.center[0] == 64 && mappos.center[1] == 27) {
    // request location update and set location
    lc.start();
} 

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// GeoTIFF-layer time management

// var titleB = document.getElementById("titleB");

var dateslider = document.getElementById("date-range");
var dateoutput = document.getElementById("date-value");
// var harvDynamic = document.getElementById("dynamic-checkbox");
//var test = document.getElementById("test");
//console.debug(test.classList)

var sliderDate = new Date(startDate);
//console.debug(sliderDate)

// dateslider.value = 0;

dateslider.value = (currentDate-startDate)/(24*60*60*1000);
// dateslider.value = currentDate - startDate;
// console.debug(currentDate - startDate)

sliderDate.setUTCDate(sliderDate.getUTCDate() + Number(dateslider.value));
dateoutput.innerHTML = sliderDate.toLocaleDateString(); // Display the default slider value
//dateoutput.innerHTML = sliderDate.toDateString().substring(4); 

map.timeDimension.setCurrentTime(sliderDate.getTime());

//console.debug(sliderDate)

let ndmiMaxDate;

if (now.getUTCDate() < 20) {
    ndmiMaxDate = new Date(Date.UTC(startYear, startMonth - 2, 15));
}
else {
    ndmiMaxDate = new Date(Date.UTC(startYear, startMonth - 1, 15));
}

let ndmiMaxYear = ndmiMaxDate.getUTCFullYear();
let ndmiMaxMonth1 = ndmiMaxDate.getUTCMonth();
let ndmiMaxMonth2 = ndmiMaxDate.getUTCMonth() + 1;

if (ndmiMaxMonth1 < 10) {
    ndmiMaxMonth1 = '0' + ndmiMaxMonth1;
}
if (ndmiMaxMonth2 < 10) {
    ndmiMaxMonth2 = '0' + ndmiMaxMonth2;
}


let ndmiPlotDateStr;
let ndmiDateStr1, ndmiDateStr2;

plotgeotiff();


var repeatId = 0;
var dateforwardRepeatId = 0;
var datebackRepeatId = 0;

dateslider.oninput = function () {
    clearInterval(playButtonRepeatId);
    //playButton.value = "Play";
    sliderDate = new Date(startDate);
    sliderDate.setUTCDate(sliderDate.getUTCDate() + Number(this.value));
    dateoutput.innerHTML = sliderDate.toLocaleDateString();
    //dateoutput.innerHTML = sliderDate.toDateString().substring(4);
    //map.timeDimension.setCurrentTime(sliderDate.getTime());
    /*
    if (typeof gB !== 'undefined') { gB.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof gsh !== 'undefined') {gsh.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof gsw !== 'undefined') {gsw.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof gst !== 'undefined') {gst.updateOptions({underlayCallback: timeseriedateline}) };
    
    gB.updateOptions({underlayCallback: timeseriedateline})
    g.updateOptions({underlayCallback: timeseriedateline})
    gsw.updateOptions({underlayCallback: timeseriedateline})
    gst.updateOptions({underlayCallback: timeseriedateline})
    */
}

dateslider.onchange = function () {
    // if (harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
    //      plotgeotiff();
    // }

    if (map.hasLayer(ndmiStaticLayer)) {
        ndmiDateFunction()
        if (ndmiDateStr2 !== ndmiPlotDateStr) {
            // map.removeLayer(ndmiStaticLayer);
            plotgeotiff();
        }
    }

    map.timeDimension.setCurrentTime(sliderDate.getTime());
    if (playButton.value == "Stop" ) {
        clearInterval(playButtonRepeatId);
        playButtonRepeatId = setInterval(playButtonIntervalFunc, 500);
        //console.debug('timeload')
    }
    if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

    // plotndvi();
    // plotsoilwetness();
    // plotsoiltemperature();
}

function dateback() {
    clearInterval(playButtonRepeatId);
    playButton.value = "Play";
    if (Number(dateslider.value) > Number(dateslider.min)) {
        dateslider.value = Number(dateslider.value) - 1;
        sliderDate.setUTCDate(sliderDate.getUTCDate() - 1);
        dateoutput.innerHTML = sliderDate.toLocaleDateString();
        //dateoutput.innerHTML = sliderDate.toDateString().substring(4);

        // if (harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
        //     plotgeotiff();
        // }

        if (map.hasLayer(ndmiStaticLayer)) {
            ndmiDateFunction()
            if (ndmiDateStr2 !== ndmiPlotDateStr) {
                // map.removeLayer(ndmiStaticLayer);
                plotgeotiff();
            }
        }
    
        map.timeDimension.setCurrentTime(sliderDate.getTime());

    if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

        // plotndvi();
        // plotsoilwetness();
        // plotsoiltemperature();
    }
}

function datebackscrollIntervalFunc() {
    if (Number(dateslider.value) > Number(dateslider.min)) {
        dateslider.value = Number(dateslider.value) - 1;
        sliderDate.setUTCDate(sliderDate.getUTCDate() - 1);
        dateoutput.innerHTML = sliderDate.toLocaleDateString();
        //dateoutput.innerHTML = sliderDate.toDateString().substring(4);  

        // if (harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
        //     plotgeotiff();
        // }

        if (map.hasLayer(ndmiStaticLayer)) {
            ndmiDateFunction()
            if (ndmiDateStr2 !== ndmiPlotDateStr) {
                // map.removeLayer(ndmiStaticLayer);
                plotgeotiff();
            }
        }
    
        map.timeDimension.setCurrentTime(sliderDate.getTime());

        if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

        // plotndvi();
        // plotsoilwetness();
        // plotsoiltemperature();
    }
}

function datebackscroll() {
    clearInterval(playButtonRepeatId);
    playButton.value = "Play";
    datebackRepeatId = setInterval(datebackscrollIntervalFunc, 500);
}

function datebackscrollfast() {
    clearInterval(playButtonRepeatId);
    //playButton.value = "Play";
    repeatId = setInterval(function () {
        if (Number(dateslider.value) > Number(dateslider.min)) {
            dateslider.value = Number(dateslider.value) - 1;
            sliderDate.setUTCDate(sliderDate.getUTCDate() - 1);
            dateoutput.innerHTML = sliderDate.toLocaleDateString();
            //dateoutput.innerHTML = sliderDate.toDateString().substring(4);
            /*
            if (harvDynamic.checked && georastercache) {
                plotgeotiff();
            }
            map.timeDimension.setCurrentTime(sliderDate.getTime());
            */
        }
    }, 60);
}

function dateforward() {
    clearInterval(playButtonRepeatId);
    playButton.value = "Play";
    if (Number(dateslider.value) < Number(dateslider.max)) {
        dateslider.value = Number(dateslider.value) + 1;
        sliderDate.setUTCDate(sliderDate.getUTCDate() + 1);
        dateoutput.innerHTML = sliderDate.toLocaleDateString();
        //dateoutput.innerHTML = sliderDate.toDateString().substring(4);
        //console.debug(harvDynamic._map)

        // if (harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
        //     plotgeotiff();
        // }

        if (map.hasLayer(ndmiStaticLayer)) {
            ndmiDateFunction()
            if (ndmiDateStr2 !== ndmiPlotDateStr) {
                // map.removeLayer(ndmiStaticLayer);
                plotgeotiff();
            }
        }
    
        map.timeDimension.setCurrentTime(sliderDate.getTime());

    if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

        // plotndvi();
        // plotsoilwetness();
        // plotsoiltemperature();
    }
}

function dateforwardscrollIntervalFunc() {
    if (Number(dateslider.value) < Number(dateslider.max)) {
        dateslider.value = Number(dateslider.value) + 1;
        sliderDate.setUTCDate(sliderDate.getUTCDate() + 1);
        dateoutput.innerHTML = sliderDate.toLocaleDateString();
        //dateoutput.innerHTML = sliderDate.toDateString().substring(4);

        // if (harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
        //     plotgeotiff();
        // }

        if (map.hasLayer(ndmiStaticLayer)) {
            ndmiDateFunction()
            if (ndmiDateStr2 !== ndmiPlotDateStr) {
                // map.removeLayer(ndmiStaticLayer);
                plotgeotiff();
            }
        }
    
        map.timeDimension.setCurrentTime(sliderDate.getTime());

        if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
        if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

        // plotndvi();
        // plotsoilwetness();
        // plotsoiltemperature();
    }
}

function dateforwardscroll() {
    clearInterval(playButtonRepeatId);
    playButton.value = "Play";
    dateforwardRepeatId = setInterval(dateforwardscrollIntervalFunc, 500);
}

function dateforwardscrollfast() {
    clearInterval(playButtonRepeatId);
    //playButton.value = "Play";
    //console.debug(Number(dateslider.value))
    //console.debug(Number(dateslider.max))

    repeatId = setInterval(function () {
        if (Number(dateslider.value) < Number(dateslider.max)) {
            dateslider.value = Number(dateslider.value) + 1;
            sliderDate.setUTCDate(sliderDate.getUTCDate() + 1);
            dateoutput.innerHTML = sliderDate.toLocaleDateString();
            //dateoutput.innerHTML = sliderDate.toDateString().substring(4);
            /*
            if (harvDynamic.checked && georastercache) {
                plotgeotiff();
            }
            map.timeDimension.setCurrentTime(sliderDate.getTime());
            */
        }
    }, 60);
}

function datestop() {
    clearInterval(dateforwardRepeatId);
    dateforwardRepeatId = 0;
    clearInterval(datebackRepeatId);
    datebackRepeatId = 0;
  }

function datestopscrollfast() {
    // if (repeatId > 0 && harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
    //     plotgeotiff();
    //     //console.debug(repeatId)
    // }

    if (map.hasLayer(ndmiStaticLayer)) {
        ndmiDateFunction()
        if (ndmiDateStr2 !== ndmiPlotDateStr) {
            // map.removeLayer(ndmiStaticLayer);
            plotgeotiff();
        }
    }

    clearInterval(repeatId);
    repeatId = 0;
    map.timeDimension.setCurrentTime(sliderDate.getTime());

    if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

    // plotndvi();
    // plotsoilwetness();
    // plotsoiltemperature();

    /*if (playButton.value == "Stop" ) {
        clearInterval(playButtonRepeatId);
        playButtonRepeatId = setInterval(playButtonIntervalFunc, 500);
        //console.debug('timeload')
    }*/
  }


var playButton = document.getElementById("playbutton");
//console.debug(playButton.value)
var playButtonRepeatId;

function playButtonIntervalFunc() {
    if (Number(dateslider.value) < Number(dateslider.max)) {
        dateslider.value = Number(dateslider.value) + 1;
        sliderDate.setUTCDate(sliderDate.getUTCDate() + 1);
        dateoutput.innerHTML = sliderDate.toLocaleDateString();
        //dateoutput.innerHTML = sliderDate.toDateString().substring(4);

        // if (harvDynamic.checked && georastercache && map.hasLayer(ndmiLayer)) {
        //     plotgeotiff();
        // }

        if (map.hasLayer(ndmiStaticLayer)) {
            ndmiDateFunction()
            if (ndmiDateStr2 !== ndmiPlotDateStr) {
                // map.removeLayer(ndmiStaticLayer);
                plotgeotiff();
            }
        }
    
        map.timeDimension.setCurrentTime(sliderDate.getTime());

    if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

        // plotndvi();
        // plotsoilwetness();
        // plotsoiltemperature();
    } else {
        clearInterval(playButtonRepeatId);
        playButton.value = "Play";
    }
}

function playbuttonfunc() {
    //console.debug(playButton.clicked)

    if (playButton.value == "Play") {
        playButton.value = "Stop";
        //playButton.style.color = "red";
        playButtonRepeatId = setInterval(playButtonIntervalFunc, 500);
    } else {
        clearInterval(playButtonRepeatId);
        playButton.value = "Play";
        //playButton.style.color = "initial";
    }
}

map.timeDimension.on('timeloading', function(e) {
    if (playButton.value == "Stop") {
        clearInterval(playButtonRepeatId);
        //console.debug('timeloading')
    }
    if (dateforwardRepeatId > 0) {
        clearInterval(dateforwardRepeatId);
    }
    if (datebackRepeatId > 0) {
        clearInterval(datebackRepeatId);
    }
});

map.timeDimension.on('timeload', function(e) {
    if (playButton.value == "Stop"  && repeatId == 0) {
            clearInterval(playButtonRepeatId);
            playButtonRepeatId = setInterval(playButtonIntervalFunc, 500);
            //console.debug('timeload')
    }
    if (dateforwardRepeatId > 0) {
        clearInterval(dateforwardRepeatId);
        dateforwardRepeatId = setInterval(dateforwardscrollIntervalFunc, 500);
    }
    if (datebackRepeatId > 0) {
        clearInterval(datebackRepeatId);
        datebackRepeatId = setInterval(datebackscrollIntervalFunc, 500);
    }
});

playButton.disabled = false;

// const param1="utctime";

// const param2="HARVIDX{0.55;SWI2-0TO1:ECXSF:5062:1:0:0:0-50}";

// const param3="HARVIDX{273;TSOIL-K:ECBSF:::7:3:1-50;TSOIL-K:ECBSF:::7:1:0}";

// const param4="ensover{0.4;0.9;HSNOW-M:ECBSF::1:0:3:1-50;HSNOW-M:ECBSF::1:0:1:0}";

// // const param5 = "HARVIDX{0.55;SWI2-0TO1:SWI}";
// const param5 = "HARVIDX{0.55;SWI2-0TO1:EDTE:5068}";

// // const param6 = "HARVIDX{-0.7;TG-K:SMARTMET}";
// // const param6 = "HARVIDX{273.05;TSOIL-K:EDTE}";

// const param7 = "ensover{0.4;0.9;HSNOW-M:SMARTMET:5027}";
// const param8 = "ensover{0.4;0.9;HSNOW-M:SMARTOBS:13:4}";

// var harvLayer, ndmiStaticLayer;
var ndmiStaticLayer;


// var startDate_smartobs = new Date();

// startDate_smartobs.setDate(startDate_smartobs.getUTCDate() - 30);

// var startMonth_smartobs = startDate_smartobs.getUTCMonth() + 1;
// if (startMonth_smartobs < 10) {
//     startMonth_smartobs = '0' + startMonth_smartobs;
// }
// var startDay_smartobs = startDate_smartobs.getUTCDate();
// if (startDay_smartobs < 10) {
//     startDay_smartobs = '0' + startDay_smartobs;
// }
// var dateString_smartobs = startDate_smartobs.getUTCFullYear().toString() + startMonth_smartobs + startDay_smartobs;


// var perturbations = 50;

// var SWensemblelist = ["SWI2-0TO1:ECXSF:5062:1:0:0:0"];
// for (i = 1; i <= perturbations; i = i + 1) {
//     SWensemblelist[i] = "SWI2-0TO1:ECXSF:5062:1:0:0:" + i;
// }

// var SHensemblelist = ["HSNOW-M:ECBSF::1:0:1:0"];
// var SHensemble2 = "DIFF{HSNOW-M:ECBSF::1:0:1:0;HSNOW-M:SMARTOBS:13:4}";
// var SHensemble2list = ["DIFF{HSNOW-M:ECBSF::1:0:1:0;HSNOW-M:SMARTOBS:13:4}"];
// for (i = 1; i <= perturbations; i = i + 1) {
//     SHensemblelist[i] = "HSNOW-M:ECBSF::1:0:3:" + i ;
//     SHensemble2 += ",DIFF{HSNOW-M:ECBSF::1:0:3:" + i + ";HSNOW-M:SMARTOBS:13:4}";
//     SHensemble2list[i] = "DIFF{HSNOW-M:ECBSF::1:0:3:" + i + ";HSNOW-M:SMARTOBS:13:4}";
// }


var colorMap1 = [];

// for (i = 0; i <= 201; i++) {
//     colorMap1[i] = [0, i, i];
// }

// -1.0 = rgb(0, 0, 0) = NoData
colorMap1[0] = [0, 0, 0];

// -0.8 = rgb(128, 0, 0)
for (i = 1; i <= 21; i++) {
    colorMap1[i] = [128*(i-1)/20, 0, 0];
}

// -0.24 = rgb(255, 0, 0)
for (i = 22; i <= 77; i++) {
    colorMap1[i] = [128+127*(i-21)/56, 0, 0];
}

// -0.032 = rgb(255, 255, 0)
for (i = 78; i <= 98; i++) {
    colorMap1[i] = [255, 255*(i-77)/21, 0];
}

// 0.032 = rgb(0, 255, 255)
for (i = 99; i <= 104; i++) {
    colorMap1[i] = [255-255*(i-98)/6, 255, 255*(i-98)/6];
}

// 0.24 = rgb(0, 0, 255)
for (i = 104; i <= 125; i++) {
    colorMap1[i] = [0, 255-255*(i-103)/22, 255];
}

// 0.8 = rgb(0, 0, 128)
for (i = 126; i <= 181; i++) {
    colorMap1[i] = [0, 0, 255-127*(i-125)/56];
}

// 1.0 = rgb(0, 0, 0)
for (i = 182; i <= 201; i++) {
    colorMap1[i] = [0, 0, 128-128*(i-181)/20];
}


// var idxSummer, idxWinter, idx2;

// var idx = -100;

// var opacity = 70;

var slider = document.getElementById("opacity-range");
var output = document.getElementById("opacity-value");
slider.value = 70;
output.innerHTML = slider.value + " %"; // Display the default slider value
var opacity = slider.value;

// function plotgeotiff() {
// }

// function plotgeotiffstatic() {
// }

// var smartmetserver = 'https://desm.harvesterseasons.com/';

// const smartmetserver = 'http://firedanger.nsdc.fmi.fi:8080/';
const smartmetserver = 'https://firedanger.nsdc.fmi.fi/';

const smartWMS = smartmetserver + 'wms?';
const smarttimeseries = smartmetserver + 'timeseries?';


const cemsLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_DRTCODE',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
    // zIndex: 2,
};
var cemsLayer = L.tileLayer.wms(smartWMS, cemsLayerOptions);
//var temperatureTimeLayer = L.timeDimension.layer.wms(temperatureLayer, {cache: 100, updateTimeDimension: true});
// let cemsTimeLayer = L.timeDimension.layer.wms(cemsLayer, {cache: 100, zIndex: 20});
var cemsTimeLayer = L.timeDimension.layer.wms(cemsLayer, {cache: 100});


var duffLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_DUFMCODE',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
};
var duffLayer = L.tileLayer.wms(smartWMS, duffLayerOptions);
var duffTimeLayer = L.timeDimension.layer.wms(duffLayer, {cache: 100});


var firebuildupLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_FBUPINX',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
};
var firebuildupLayer = L.tileLayer.wms(smartWMS, firebuildupLayerOptions);
var firebuildupTimeLayer = L.timeDimension.layer.wms(firebuildupLayer, {cache: 100});

var fireweatherLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_FWINX',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
};
var fireweatherLayer = L.tileLayer.wms(smartWMS, fireweatherLayerOptions);
var fireweatherTimeLayer = L.timeDimension.layer.wms(fireweatherLayer, {cache: 100});

var fuelmoistureLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_FFMCODE',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
};
var fuelmoistureLayer = L.tileLayer.wms(smartWMS, fuelmoistureLayerOptions);
var fuelmoistureTimeLayer = L.timeDimension.layer.wms(fuelmoistureLayer, {cache: 100});

var firespreadLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_INFSINX',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
};
var firespreadLayer = L.tileLayer.wms(smartWMS, firespreadLayerOptions);
var firespreadTimeLayer = L.timeDimension.layer.wms(firespreadLayer, {cache: 100});

var fireseverityLayerOptions = {
    // crs: L.CRS.EPSG4326,
    version: '1.3.0',
    layers: 'gui:isobands:CEMS_FDSRTE',
    format: 'image/png',
    transparent: 'true',
    styles: 'default',
    //source: 'grid',
    opacity: 0.7,
    // maxZoom: 9,
    zIndex: 20,
};
var fireseverityLayer = L.tileLayer.wms(smartWMS, fireseverityLayerOptions);
var fireseverityTimeLayer = L.timeDimension.layer.wms(fireweatherLayer, {cache: 100});

// var copernicusWMS = 'https://image.discomap.eea.europa.eu/arcgis/services/GioLandPublic/HRL_TreeCoverDensity_2018/ImageServer/WMSServer?';

// var treecoverLayerOptions = {
//     crs: L.CRS.EPSG4326,
//     version: '1.3.0',
//     layers: 'HRL_TreeCoverDensity_2018:TCD_MosaicSymbology',
//     format: 'image/png',
//     transparent: 'true',
//     styles: 'default',
//     //source: 'grid',
//     opacity: 0.7,
//     //maxZoom: 9,
//     zIndex: 20,
// };
// var treecoverLayer = L.tileLayer.wms(copernicusWMS, treecoverLayerOptions);
// //var temperatureTimeLayer = L.timeDimension.layer.wms(temperatureLayer, {cache: 100, updateTimeDimension: true});
// //var temperatureTimeLayer = L.timeDimension.layer.wms(temperatureLayer, {cache: 100});


var cemsLegend = L.control({
    position: 'bottomright'
});

var duffLegend = L.control({
    position: 'bottomright'
});

var firebuildupLegend = L.control({
    position: 'bottomright'
});

var fireweatherLegend = L.control({
    position: 'bottomright'
});

var fuelmoistureLegend = L.control({
    position: 'bottomright'
});

var firespreadLegend = L.control({
    position: 'bottomright'
});

var fireseverityLegend = L.control({
    position: 'bottomright'
});

var ndmiLegend = L.control({
    position: 'bottomright'
});

// var ndviLegend = L.control({
//     position: 'bottomright'
// });

const legendURL = smartWMS;

cemsLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_DRTCODE&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    // div.style.width = '48px';
    // if (screen.width < 425) {
    //     //div.style.width = '48px';
    //     //div.style.height = '345px';
    //     // div.style.height = '325px';
    //     div.style.height = '285px';
    // } else {
    //     //div.style.height = '380px';
    //     //div.style.height = '360px';
    //     div.style.height = '320px';
    // }
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

duffLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_DUFMCODE&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

firebuildupLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_FBUPINX&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

fireweatherLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_FWINX&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

fuelmoistureLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_FFMCODE&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

firespreadLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_INFSINX&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

fireseverityLegend.onAdd = function (map) {
    var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_FDSRTE&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '160px';
    div.style.height = '100px';
    div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};

ndmiLegend.onAdd = function (map) {
    // var src = legendURL + 'REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYER=gui:isobands:CEMS_FDSRTE&sld_version=1.1.0&style=&format=image/png';
    var div = L.DomUtil.create('div', 'info legend');
    div.style.width = '40px';
    div.style.height = '280px';
    // div.style['background-image'] = 'url(' + src + ')';
    // div.style['background-size'] = 'contain';
    div.style['background'] = 'linear-gradient(to top, rgb(128, 0, 0) 0%, rgb(255, 0, 0) 35%, rgb(255, 255, 0) 48%, rgb(0, 255, 255) 52%, rgb(0, 0, 255) 65%, rgb(0, 0, 128) 100%)';
    // var content = document.createTextNode("80%");
    // div.appendChild(content);    

    var span = document.createElement('span');
    span.style = 'color: white; margin-left: -1px; margin-top: -5px';
    // span.style = 'vertical-align: top; color: white; margin-left: -1px';
    // span.style = 'vertical-align: top; color: white;';
    span.appendChild(document.createTextNode("0.8"));
    div.appendChild(span);

    var span = document.createElement('span');
    span.style = 'margin-left: -1px; margin-top: 105px';
    // span.style = 'vertical-align: middle; color: white; margin-left: -1px';
    // span.style = 'vertical-align: top; color: white;';
    span.appendChild(document.createTextNode("0"));
    div.appendChild(span);

    var span = document.createElement('span');
    span.style = 'color: white; margin-left: -1px; margin-top: 105px';
    // span.style = 'vertical-align: bottom; color: white; margin-left: -1px';
    // span.style = 'vertical-align: top; color: white;';
    span.appendChild(document.createTextNode("-0.8"));
    div.appendChild(span);

    div.style['background-size'] = 'cover';
    div.style['background-repeat'] = 'no-repeat';
    return div;
};


// ndviLegend.onAdd = function (map) {
//     var src = 'https://desm.harvesterseasons.com/wms?service=WMS&request=GetLegendGraphic&version=1.3.0&sld_version=1.1.0&style=default&format=image%2Fpng&layer=harvester%3As3sy%3ANDVI&width=85&height=185';
//     var div = L.DomUtil.create('div', 'info legend');
//     div.style.width = '85px';
//     div.style.height = '185px';
//     div.style['background-image'] = 'url(' + src + ')';
//     // div.style['background-size'] = 'contain';
//     div.style['background-size'] = 'cover';
//     div.style['background-repeat'] = 'no-repeat';
//     return div;
// };

var ndmiLayer = L.tileLayer('');
// var ndmiStaticLayer = L.tileLayer('');

var overlayMaps = {
    "CEMS Drought Code": cemsTimeLayer, //.addTo(map),
    "Duff Moisture Code": duffTimeLayer,
    "Fire Build-Up Index": firebuildupTimeLayer,
    "Fire Weather Index": fireweatherTimeLayer,
    "Fine Fuel Moisture Code": fuelmoistureTimeLayer,
    "Initial Fire Spread Index": firespreadTimeLayer,
    "Fire Daily Severity Rating": fireseverityTimeLayer,
    "NDMI": ndmiLayer.addTo(map),
};

ndmiLegend.addTo(map);

// if (screen.width < 425) {
//     var lcontrol = L.control.layers(baseMaps, overlayMaps).addTo(map);
// } else {
//     var lcontrol = L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
// }

// var lcontrol = L.control.layers(baseMaps, overlayMaps).addTo(map);
// var lcontrol = L.control.layers(baseMaps,'',{ collapsed: false } ).addTo(map);
var lcontrol2 = L.control.layers(overlayMaps,'',{ collapsed: false } ).addTo(map);

map.on('baselayerchange', function (e) {
    switch (e.name) {
        case "CEMS Drought Code": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            // map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            cemsLegend.addTo(this);

            break;
        }
        case "Duff Moisture Code": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            map.removeControl(cemsLegend);
            // map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            duffLegend.addTo(this);

            break;
        }
        case "Fire Build-Up Index": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            // map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            firebuildupLegend.addTo(this);
            break;
        }
        case "Fire Weather Index": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            // map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            fireweatherLegend.addTo(this);

            break;
        }
        case "Fine Fuel Moisture Code": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            // map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            fuelmoistureLegend.addTo(this);

            break;
        }
        case "Initial Fire Spread Index": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            // map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            firespreadLegend.addTo(this);

            break;
        }
        case "Fire Daily Severity Rating": {
            map.removeLayer(ndmiLayer);
            map.removeLayer(ndmiStaticLayer);

            map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            // map.removeControl(fireseverityLegend);
            map.removeControl(ndmiLegend);

            fireseverityLegend.addTo(this);

            break;
        }
        case "NDMI": {
            // console.debug("NDMI overlayadd");

            map.removeControl(cemsLegend);
            map.removeControl(duffLegend);
            map.removeControl(firebuildupLegend);
            map.removeControl(fireweatherLegend);
            map.removeControl(fuelmoistureLegend);
            map.removeControl(firespreadLegend);
            map.removeControl(fireseverityLegend);
            // map.removeControl(ndmiLegend);

            ndmiLegend.addTo(this);

            plotgeotiff();
            
            break;
        }
    }
});

//var forecast = 0; // soilwetness
var forecast = 1; // soil temperature


slider.oninput = function () {
    if (cemsTimeLayer) {
        opacity = this.value;
        cemsTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
    if (duffTimeLayer) {
        opacity = this.value;
        duffTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
    if (firebuildupTimeLayer) {
        opacity = this.value;
        firebuildupTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
    if (fireweatherTimeLayer) {
        opacity = this.value;
        fireweatherTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
    if (fuelmoistureTimeLayer) {
        opacity = this.value;
        fuelmoistureTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
    if (firespreadTimeLayer) {
        opacity = this.value;
        firespreadTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
    if (fireseverityTimeLayer) {
        opacity = this.value;
        fireseverityTimeLayer.setOpacity(this.value / 100);
        output.innerHTML = this.value + " %";
    }
}

slider.onchange = function () {
    // if (georastercache && harvLayer !== undefined &&  map.hasLayer(harvLayer)) {
    //     idx = -1;
    //     plotgeotiff();
    // }

    // if (georastercache && map.hasLayer(ndmiStaticLayer)) { 
    //     map.removeLayer(ndmiStaticLayer);
    //     plotgeotiffstatic();
    // }

    if (map.hasLayer(ndmiStaticLayer)) { 
        plotgeotiff();
    }
}

//var latlonPoint = 'Kajaani';
var latlonPoint;

/* Dygraph.prototype.doZoomX_ = function(lowX, highX) {
    return;
}; */

var dyGraphOptions_cems = {
    legend: "always",
    ylabel: "CEMS Drought Code",
    labels: ["date", "CEMS Drought Code"],
    series: {'CEMS Drought Code': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_cems",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

var dyGraphOptions_duff = {
    legend: "always",
    ylabel: "Duff Moisture Code",
    labels: ["date", "Duff Moisture Code"],
    series: {'Duff Moisture Code': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_duff",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

var dyGraphOptions_firebuildup = {
    legend: "always",
    ylabel: "Fire Build-Up Index",
    labels: ["date", "Fire Build-Up Index"],
    series: {'Fire Build-Up Index': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_firebuildup",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

var dyGraphOptions_fireweather = {
    legend: "always",
    ylabel: "Fire Weather Index",
    labels: ["date", "Fire Weather Index"],
    series: {'Fire Weather Index': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_fireweather",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

var dyGraphOptions_fuelmoisture = {
    legend: "always",
    ylabel: "Fine Fuel Moisture Code",
    labels: ["date", "Fine Fuel Moisture Code"],
    series: {'Fine Fuel Moisture Code': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_fuelmoisture",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

var dyGraphOptions_firespread = {
    legend: "always",
    ylabel: "Initial Fire Spread Index",
    labels: ["date", "Initial Fire Spread Index"],
    series: {'Initial Fire Spread Index': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_firespread",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

var dyGraphOptions_fireseverity = {
    legend: "always",
    ylabel: "Fire Daily Severity Rating",
    labels: ["date", "Fire Daily Severity Rating"],
    series: {'Fire Daily Severity Rating': { fillGraph: false, strokeWidth: 3 }},
    // labelsDiv: "labels",
    labelsDiv: "labels_fireseverity",
    // axes: {
    //     y: { valueRange: [-0.0, 1.01] },
    // },
    underlayCallback: timeseriedateline,
    clickCallback: timeserieclick,
    animatedZooms: true,
}

// var dyGraphBOptions = {
//     //title: latlonPoint,
//     //titleHeight: 28,
//     drawAxesAtZero: false,
//     legend: 'always',
//     ylabel: "Trafficability",
//     // labels: ["date", "Summer Forecast", "Winter Forecast", "Summer Observation", "Winter Observation"],
//     labels: ["date", "Summer Index", "Winter Index", "Summer 10 days", "Winter 10 days"],

//     //labels: ["date", "Summer Index", "Winter Index"],

//     //labels: ["date", "Harvestability Index"],
//     //labels: ["date", "Harvestability Index SW", "Harvestability Index ST", "Harvestability Index HS"],
//     labelsDiv: "labelsB",
//     connectSeparatedPoints: true,
//     series: {
//         //"Harvestability Index": { fillGraph: true },
// /*         "Summer Index": { fillGraph: true },
//         "Winter Index": { fillGraph: true }, */
// /*         "Summer Forecast": { fillGraph: true, color: 'green' },
//         "Winter Forecast": { fillGraph: true, color: 'rgb(0,0,150)' },
//         "Summer Observation": { fillGraph: true, strokeWidth: 3, color: 'rgb(75,75,75)' },
//         "Winter Observation": { fillGraph: true, strokeWidth: 3, color: 'rgb(150,0,0)' }, */
//         "Summer Index": { fillGraph: true, color: 'green' },
//         "Winter Index": { fillGraph: true, color: 'rgb(0,0,150)' },
//         "Summer 10 days": { fillGraph: true, strokeWidth: 3, color: 'rgb(75,75,75)' },
//         "Winter 10 days": { fillGraph: true, strokeWidth: 3, color: 'rgb(150,0,0)' },
//     },
//     axes: {
//         y: { 
//             valueRange: [-0.1, 2.1], 
//             pixelsPerLabel: 20,
//             axisLabelFormatter: function(y) {
//                 if (y == 0) { return 'Bad'; }
//                 if (y == 2) { return 'Good'; }
//             }
//         }
//     },
//     //interactionModel:{'click': timeserieclick},
//     underlayCallback: timeseriedateline,
//     clickCallback: timeserieclick,
//     zoomCallback: function() {
//         this.resetZoom();
//       },
// }

// var SWensemble = "";
// var label = ["date", "SWI-0"];
// var labelstxt = {'SWI-0': { fillGraph: false }};
// for (i = 0; i <= perturbations; i = i + 1) {
//     label[i+1] = 'SWI-' + i ;
//     labelstxt[label[i+1]]= { fillGraph: false };
//     SWensemble += ",SWI2-0TO1:ECXSF:5062:1:0:0:" + i;
// }
// label[perturbations+2] = 'SW-FMI';
// label[perturbations+3] = 'SWI-EDTE';
// label[perturbations+4] = 'SWI2';
// labelstxt[label[perturbations+2]]= { fillGraph: false, strokeWidth: 3, color: 'black' };
// labelstxt[label[perturbations+3]]= { fillGraph: false, strokeWidth: 3, color: 'red' };
// labelstxt[label[perturbations+4]]= { fillGraph: false, strokeWidth: 3, color: 'blue' };


// var dyGraphSWOptions = {
//     legend: "always",
//     ylabel: "Soil Water Index",
//     // ylabel: "Soil Wetness (m\u00B3/m\u00B3)",
//     // ylabel: "Snow Density (kg/m\u00B3)",
//     labels: label,
//     series: labelstxt,
//     labelsDiv: "labels",
//     axes: {
//         y: { valueRange: [-0.0, 1.01] },
//     },
//     underlayCallback: timeseriedateline,
//     //clickCallback: timeserieclick,
//     animatedZooms: true,
// }

// var label = ["date", "ST-0"];
// var labelstxt = {'ST-0': { fillGraph: false }};
// //var label = ["date", "ST-FMI", "ST-0"];
// //var labelstxt = {'ST-FMI': { fillGraph: false, strokeWidth: 3, color: 'rgb(75,75,75)' },
// //                'ST-0': { fillGraph: false }};
// var TGKensemble = "";
// for (i = 1; i <= perturbations; i = i + 1) {
//     label[i+1] = 'ST-' + i ;
//     labelstxt[label[i+1]]= { fillGraph: false };
//     //label[i+2] = 'ST-' + i ;
//     //labelstxt[label[i+2]]= { fillGraph: false };
//     // TGKensemble = TGKensemble + ",K2C{TSOIL-K:ECBSF::9:7:3:" + i + "}";
//     TGKensemble = TGKensemble + ",K2C{TSOIL-K:ECBSF:::7:3:" + i + "}";
// }
// // label[perturbations+2] = 'ST-FMI';
// // labelstxt[label[perturbations+2]]= { fillGraph: false, strokeWidth: 3, color: 'red' };

// var dyGraphSTOptions = {
//     legend: 'always',
//     ylabel: "Soil Temperature (°C)",
//     labels: label,
//     series: labelstxt,
//     labelsDiv: "labels",
//     axes: {
//         y: { valueRange: [-30, 31] },
//     },
//     underlayCallback: timeseriedateline,
//     //clickCallback: timeserieclick,
//     animatedZooms: true,
// }

// // var SHensemble = "";
// var SHensemble = "HSNOW-M:ECBSF::1:0:1:0";
// var label = ["date", "SH-0"];
// var labelstxt = {'SH-0': { fillGraph: false }};
// for (i = 1; i <= perturbations; i = i + 1) {
//     label[i+1] = 'SH-' + i ;
//     labelstxt[label[i+1]]= { fillGraph: false };
//     SHensemble += ",HSNOW-M:ECBSF::1:0:3:" + i ;
// }
// label[perturbations+2] = 'SH-FMI';
// labelstxt[label[perturbations+2]]= { fillGraph: false, strokeWidth: 3, color: 'red' };


// var dyGraphSHOptions = {
//     drawAxesAtZero: true,
//     axisLineWidth: 0.5,
//     legend: 'always',
//     //ylabel: "Snow",
//     //labels: ["date", "Snow Height", "Snowfall Accumulation"],
//     ylabel: "Snow Height (m)",
//     labels: label,
//     series: labelstxt,
//     connectSeparatedPoints: true,
//     labelsDiv: "labels",
//     /*series: {
//         "Snow Height": { fillGraph: true },
//         "Snowfall Accumulation": { fillGraph: true },
//     },*/
//     includeZero: true,
//     //digitsAfterDecimal: 3,
//     axes: {
//         y: { valueRange: [-0.0, 1.51] },
//     },
//     underlayCallback: timeseriedateline,
//     //clickCallback: timeserieclick,
//     animatedZooms: true,
// }

//var popup = L.popup();
var marker = L.marker(null, {
    interactive: false,
    zIndexOffset: 30,
});

var circle = L.circle(null, {
    color: 'blue',
    fillColor: '#fff',
    fillOpacity: 0,
    radius: 2500,
    interactive: false,
    zIndexOffset: 30,
});

/*
var center = L.circle(null, {
    color: 'white',
    fillColor: 'blue',
    fillOpacity: 1,
    radius: 20,
    interactive: false,
    zIndexOffset: 30,
});
*/

var endDate = new Date();

if (endDate.getUTCDate() < 15) {
    endDate.setMonth(endDate.getUTCMonth() + 5);
} else {
    endDate.setMonth(endDate.getUTCMonth() + 5);
}

var endMonth = endDate.getUTCMonth() + 1;
if (endMonth < 10) {
    endMonth = '0' + endMonth;
}
var dateString_ecbsf = endDate.getUTCFullYear().toString() + endMonth + '040000';
// console.debug(dateString_ecbsf)

// var startDate_timeseries = new Date();

// if (startDate_timeseries.getUTCDate() < 15) {
//     startDate_timeseries.setMonth(startDate_timeseries.getUTCMonth() - 1);
// } 

// var startMonth_timeseries = startDate_timeseries.getUTCMonth() + 1;
// if (startMonth_timeseries < 10) {
//     startMonth_timeseries = '0' + startMonth_timeseries;
// }
// var dateString_timeseries = startDate_timeseries.getUTCFullYear().toString() + startMonth_timeseries + '020000';




var dateFixed = false;

var graphLoad, graphTimer;
var graphLoad2, graphLoad3, graphLoad4, graphLoad5, graphLoad6, graphLoad7;


function onMapClick(e) {

    //console.debug('click')

    if (graphLoad) { graphLoad.abort(); }
    if (graphLoad2) { graphLoad2.abort(); }
    if (graphLoad3) { graphLoad3.abort(); }
    if (graphLoad4) { graphLoad4.abort(); }
    if (graphLoad5) { graphLoad5.abort(); }
    if (graphLoad6) { graphLoad6.abort(); }
    if (graphLoad7) { graphLoad7.abort(); }

    if (graphTimer) { clearTimeout(graphTimer); }

    lat = e.latlng.lat.toFixed(2);
    lon = e.latlng.lng.toFixed(2);

    latlonTitle = lat + ", " + lon;

    latlon = e.latlng.toString();
    latlonPoint = latlon.replace(" ", "").substring(7, latlon.length - 2);
    titleB.innerHTML = latlonTitle;

    // document.getElementById("graphB").innerHTML = "Loading...";
    // document.getElementById("graphB").style = "line-height: 120px;";
    // document.getElementById("graphsw").innerHTML = "Loading...";
    // document.getElementById("graphsw").style = "line-height: 240px;";
    // document.getElementById("graphsh").innerHTML = "";
    // document.getElementById("graphsh").style = "line-height: 1;";
    // document.getElementById("graphst").innerHTML = "";
    // document.getElementById("graphst").style = "line-height: 1;";

    document.getElementById("graph_cems").innerHTML = "Loading...";
    document.getElementById("graph_cems").style = "line-height: 240px;";
    document.getElementById("graph_duff").innerHTML = "";
    document.getElementById("graph_duff").style = "line-height: 1;";
    document.getElementById("graph_firebuildup").innerHTML = "";
    document.getElementById("graph_firebuildup").style = "line-height: 1;";
    document.getElementById("graph_fireweather").innerHTML = "";
    document.getElementById("graph_fireweather").style = "line-height: 1;";
    document.getElementById("graph_fuelmoisture").innerHTML = "";
    document.getElementById("graph_fuelmoisture").style = "line-height: 1;";
    document.getElementById("graph_firespread").innerHTML = "";
    document.getElementById("graph_firespread").style = "line-height: 1;";
    document.getElementById("graph_fireseverity").innerHTML = "";
    document.getElementById("graph_fireseverity").style = "line-height: 1;";

    graphTimer = setTimeout(function () {
        drawtimeseries();
    }, 2000);


    marker.setLatLng(e.latlng).addTo(map);
    circle.setLatLng(e.latlng).addTo(map);

    //    if (map.getZoom() < 13) { map.zoomIn(2) }
    //    else if (map.getZoom() == 13) { map.zoomIn(1) }

    //if (map.getZoom() < 12) { map.setView(e.latlng, map.getZoom() + 2) }
    //else if (map.getZoom() == 12) { map.setView(e.latlng, map.getZoom() + 1) }

    if (map.getZoom() < 11) { map.setView(e.latlng, map.getZoom() + 3) }
    else if (map.getZoom() == 11) { map.setView(e.latlng, map.getZoom() + 2) }
    else if (map.getZoom() == 12) { map.setView(e.latlng, map.getZoom() + 1) }
    else { map.setView(e.latlng) }

    maastokarttaAreaFunction(lat,lon);

}

function maastokarttaAreaFunction(lat,lon) {
    if (!inFinland(lat,lon)) { 
        thunderforest.addTo(map); 
        maastokartta.remove(); 
        taustakartta.remove(); 
        //console.debug(lat,lon, maastokarttaArea)
    }
}

function onLocationFound(e) {

    map.setView(e.latlng,14);

    if (graphLoad) { graphLoad.abort(); }
    if (graphLoad2) { graphLoad2.abort(); }
    if (graphLoad3) { graphLoad3.abort(); }
    if (graphLoad4) { graphLoad4.abort(); }
    if (graphLoad5) { graphLoad5.abort(); }
    if (graphLoad6) { graphLoad6.abort(); }
    if (graphLoad7) { graphLoad7.abort(); }

    if (graphTimer) { clearTimeout(graphTimer); }

    // harvDynamic.checked = true;
    // harvDynamic.disabled = false;
    // document.getElementById("dynamic").style.color = "initial";
    playButton.disabled = false;

    lc.stop();

    lat = e.latlng.lat.toFixed(2);
    lon = e.latlng.lng.toFixed(2);
    latlonTitle = lat + ", " + lon;

    latlon = e.latlng.toString();
    latlonPoint = latlon.replace(" ", "").substring(7, latlon.length - 2);
    titleB.innerHTML = latlonTitle;

    perturbations = 50;
    //if (latlonPoint == "Kajaani") { latlonPoint = "64.22728,27.72846"; }

    // document.getElementById("graphB").innerHTML = "Loading...";
    // document.getElementById("graphB").style = "line-height: 120px;";
    // document.getElementById("graphsw").innerHTML = "Loading...";
    // document.getElementById("graphsw").style = "line-height: 240px;";
    // document.getElementById("graphsh").innerHTML = "";
    // document.getElementById("graphsh").style = "line-height: 1;";
    // document.getElementById("graphst").innerHTML = "";
    // document.getElementById("graphst").style = "line-height: 1;";

    document.getElementById("graph_cems").innerHTML = "Loading...";
    document.getElementById("graph_cems").style = "line-height: 240px;";
    document.getElementById("graph_duff").innerHTML = "";
    document.getElementById("graph_duff").style = "line-height: 1;";
    document.getElementById("graph_firebuildup").innerHTML = "";
    document.getElementById("graph_firebuildup").style = "line-height: 1;";
    document.getElementById("graph_fireweather").innerHTML = "";
    document.getElementById("graph_fireweather").style = "line-height: 1;";
    document.getElementById("graph_fuelmoisture").innerHTML = "";
    document.getElementById("graph_fuelmoisture").style = "line-height: 1;";
    document.getElementById("graph_firespread").innerHTML = "";
    document.getElementById("graph_firespread").style = "line-height: 1;";
    document.getElementById("graph_fireseverity").innerHTML = "";
    document.getElementById("graph_fireseverity").style = "line-height: 1;";


    drawtimeseries();

    marker.setLatLng(e.latlng).addTo(map);
    circle.setLatLng(e.latlng).addTo(map);

    maastokarttaAreaFunction(lat,lon);

}

function onLocationError(e) {
    //console.debug('Not found');

    lat = map.getCenter().lat.toFixed(2);
    lon = map.getCenter().lng.toFixed(2);
    latlonTitle = lat + ", " + lon;

    latlon = map.getCenter().toString();
    //latlonTitle = latlon.substring(7, latlon.length - 1);
    latlonPoint = latlon.replace(" ", "").substring(7, latlon.length - 2);

    //dyGraphBOptions.title = latlonTitle;
    titleB.innerHTML = latlonTitle;

    perturbations = 50;
    //if (latlonPoint == "Kajaani") { latlonPoint = "64.22728,27.72846"; }

    // document.getElementById("graphB").innerHTML = "Loading...";
    // document.getElementById("graphB").style = "line-height: 120px;";
    // document.getElementById("graphsw").innerHTML = "Loading...";
    // document.getElementById("graphsw").style = "line-height: 240px;";
    // document.getElementById("graphsh").innerHTML = "";
    // document.getElementById("graphsh").style = "line-height: 1;";
    // document.getElementById("graphst").innerHTML = "";
    // document.getElementById("graphst").style = "line-height: 1;";

    document.getElementById("graph_cems").innerHTML = "Loading...";
    document.getElementById("graph_cems").style = "line-height: 240px;";
    document.getElementById("graph_duff").innerHTML = "";
    document.getElementById("graph_duff").style = "line-height: 1;";
    document.getElementById("graph_firebuildup").innerHTML = "";
    document.getElementById("graph_firebuildup").style = "line-height: 1;";
    document.getElementById("graph_fireweather").innerHTML = "";
    document.getElementById("graph_fireweather").style = "line-height: 1;";
    document.getElementById("graph_fuelmoisture").innerHTML = "";
    document.getElementById("graph_fuelmoisture").style = "line-height: 1;";
    document.getElementById("graph_firespread").innerHTML = "";
    document.getElementById("graph_firespread").style = "line-height: 1;";
    document.getElementById("graph_fireseverity").innerHTML = "";
    document.getElementById("graph_fireseverity").style = "line-height: 1;";

    drawtimeseries();

    marker.setLatLng(map.getCenter()).addTo(map);
    circle.setLatLng(map.getCenter()).addTo(map);

    maastokarttaAreaFunction(lat,lon);

}

function onPermalink() {

    if (graphLoad) { graphLoad.abort(); }
    if (graphLoad2) { graphLoad2.abort(); }
    if (graphLoad3) { graphLoad3.abort(); }
    if (graphLoad4) { graphLoad4.abort(); }
    if (graphLoad5) { graphLoad5.abort(); }
    if (graphLoad6) { graphLoad6.abort(); }
    if (graphLoad7) { graphLoad7.abort(); }

    if (graphTimer) { clearTimeout(graphTimer); }

    lat = mappos.center.lat.toFixed(2);
    lon = mappos.center.lng.toFixed(2);

    latlonTitle = lat + ", " + lon;

    latlonPoint = mappos.center.lat + "," + mappos.center.lng;

    titleB.innerHTML = latlonTitle;

    // document.getElementById("graphB").innerHTML = "Loading...";
    // document.getElementById("graphB").style = "line-height: 120px;";
    // document.getElementById("graphsw").innerHTML = "Loading...";
    // document.getElementById("graphsw").style = "line-height: 240px;";
    // document.getElementById("graphsh").innerHTML = "";
    // document.getElementById("graphsh").style = "line-height: 1;";
    // document.getElementById("graphst").innerHTML = "";
    // document.getElementById("graphst").style = "line-height: 1;";

    document.getElementById("graph_cems").innerHTML = "Loading...";
    document.getElementById("graph_cems").style = "line-height: 240px;";
    document.getElementById("graph_duff").innerHTML = "";
    document.getElementById("graph_duff").style = "line-height: 1;";
    document.getElementById("graph_firebuildup").innerHTML = "";
    document.getElementById("graph_firebuildup").style = "line-height: 1;";
    document.getElementById("graph_fireweather").innerHTML = "";
    document.getElementById("graph_fireweather").style = "line-height: 1;";
    document.getElementById("graph_fuelmoisture").innerHTML = "";
    document.getElementById("graph_fuelmoisture").style = "line-height: 1;";
    document.getElementById("graph_firespread").innerHTML = "";
    document.getElementById("graph_firespread").style = "line-height: 1;";
    document.getElementById("graph_fireseverity").innerHTML = "";
    document.getElementById("graph_fireseverity").style = "line-height: 1;";

    drawtimeseries();

    marker.setLatLng(mappos.center).addTo(map);
    circle.setLatLng(mappos.center).addTo(map);

    maastokarttaAreaFunction(lat,lon);
}

map.on('click', onMapClick);

if (mappos.center[0] != 64 || mappos.center[1] != 27) {
    onPermalink();
    map.fire('zoomend');
}

function timeseriedateline(canvas, area, g) {
    var userTimezoneOffset = sliderDate.getTimezoneOffset() * 60000;
    var line = sliderDate.getTime() + userTimezoneOffset;
    var canvasx = g.toDomXCoord(line);
    //var range = g.yAxisRange();

    canvas.fillStyle = 'black';
    canvas.fillRect(canvasx, area.y, 2, area.h);
    //(left, area.y, right - left, area.h);
}

function timeserieclick(e, x, points) {
    xDays = Math.round(x/(24*60*60*1000));
    sliderDate = new Date(xDays*24*60*60*1000);
    if (sliderDate < startDate) { sliderDate = startDate; }

    dateoutput.innerHTML = sliderDate.toLocaleDateString();
    // if (harvDynamic.checked && georastercache) {
    //     plotgeotiff();
    // }

    if (map.hasLayer(ndmiStaticLayer)) {
        ndmiDateFunction()
        if (ndmiDateStr2 !== ndmiPlotDateStr) {
            // map.removeLayer(ndmiStaticLayer);
            plotgeotiff();
        }
    }

    map.timeDimension.setCurrentTime(sliderDate.getTime());

    dateslider.value = (sliderDate-startDate)/(24*60*60*1000);

    if (typeof g_cems !== 'undefined') { g_cems.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_duff !== 'undefined') {g_duff.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firebuildup !== 'undefined') {g_firebuildup.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireweather !== 'undefined') {g_fireweather.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fuelmoisture !== 'undefined') {g_fuelmoisture.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_firespread !== 'undefined') {g_firespread.updateOptions({underlayCallback: timeseriedateline}) };
    if (typeof g_fireseverity !== 'undefined') {g_fireseverity.updateOptions({underlayCallback: timeseriedateline}) };

    // if (typeof gB !== 'undefined') { gB.updateOptions({ underlayCallback: timeseriedateline }) };
    // if (typeof gsh !== 'undefined') { gsh.updateOptions({ underlayCallback: timeseriedateline }) };
    // if (typeof gsw !== 'undefined') { gsw.updateOptions({ underlayCallback: timeseriedateline }) };
    // if (typeof gst !== 'undefined') { gst.updateOptions({ underlayCallback: timeseriedateline }) };
    // plotndvi();
    // plotsoilwetness();
    // plotsoiltemperature();
}

// function altcolors() {
//     urlpos=L.Permalink.getMapLocation();
//     // location.href = "index_smartmet_era5l_altcolors.html";
//     if (isNaN(urlpos.center.lat)) {urlpos.center.lat = 64}
//     if (isNaN(urlpos.center.lng)) {urlpos.center.lng = 27}
//     // location.href = "https://harvesterseasons.com/altcolors/#" + urlpos.center.lat + "," + urlpos.center.lng + "," + urlpos.zoom + "z";
//     location.href = "../altcolors/#" + urlpos.center.lat + "," + urlpos.center.lng + "," + urlpos.zoom + "z";
// }