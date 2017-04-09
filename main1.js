/* 
 Get Year-Average Delay
 */
function getAverageDelay(data, typeofdealy) {
  arrv_delay_array =[];

  for(var j=1; j<=12; j++) {
    var arrv_array =[];
    var arrv_delay = -1;
    var sum_ad = 0;
    var cnt = 0;
    for(var i=0; i<data.length;i++) {
      if(data[i].month==j) {
        if(typeofdealy == "weather_delay") {
          sum_ad = sum_ad + Number(data[i].weather_delay);
          cnt += 1;
        } else if(typeofdealy == "security_delay") {
          sum_ad = sum_ad + Number(data[i].security_delay);
          cnt += 1;
        } else if(typeofdealy == "nas_delay") {
          sum_ad = sum_ad + Number(data[i].nas_delay);
          cnt += 1;
        } else if(typeofdealy == "late_aircraft_delay") {
          sum_ad = sum_ad + Number(data[i].late_aircraft_delay);
          cnt += 1;
        } else if(typeofdealy == "carrier_delay") {
          sum_ad = sum_ad + Number(data[i].carrier_delay);
          cnt += 1;
        } else {
          break;
        }
      }
    }
    arrv_delay = sum_ad / cnt;
    arrv_array["month"] = String(j);
    arrv_array["delay_type"] = String(typeofdealy);
    arrv_array["arrival_delay"] = String(arrv_delay);
    arrv_delay_array.push(arrv_array);
    /*debugger;*/
  }
  return arrv_delay_array;
}
