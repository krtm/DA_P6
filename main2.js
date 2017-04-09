 /* 
 Get Monthly-Averaged Flight Delay Data
 */
function getAverageDelay(data, typeofdealy, airportname) {
  arrv_delay_array =[];

  for(var j=1; j<=12; j++) {
    var arrv_array =[];
    var arrv_delay = -1;
    var sum_ad = 0;
    var cnt = 0;
    for(var i=0; i<data.length;i++) {
      if(data[i].airport_name === airportname 
      || airportname === "All Ariport") {
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

/* 
Get airport list
*/
function getAirportList(data) {
  airport_list = [];
  airportname_list = [];
  for(var i=0; i<data.length;i++) {
    var existing_flg = 0;
    for(var j=0; j<airport_list.length; j++) {
      if(data[i].airport === airport_list[j]) {
        existing_flg = 1;
        break;
      }
    }
    if(!existing_flg) {
      airport_list.push(String(data[i].airport));
      airportname_list.push(String(data[i].airport_name))
    }
  }
  /*return airport_list.sort();  not easy to understand name*/ 
  return airportname_list.sort();
}

