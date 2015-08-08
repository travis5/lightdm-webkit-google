function startTime() {
  var todate = new Date();
  var hh = todate.getHours();
  var mm = todate.getMinutes();
  var ss = todate.getSeconds();
  var suffix= "AM";
  if (hh > 12) {
    hh = hh - 12;
    suffix = "PM";
  }
  if (hh < 10) { hh = "0"+hh; }
  if (mm < 10) { mm = "0"+mm; }
  if (ss < 10) { ss = "0"+ss; }
  document.getElementById('clock').innerHTML = hh+":"+mm + " " + suffix;

  t=setTimeout('startTime()', 500)
}
function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i
}
window.onload=startTime;
