function menu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


var ua = navigator.userAgent.toLowerCase();
function changeLanguage(lang) {
  if ((navigator.userAgent.indexOf('Mac OS') > 0 && navigator.userAgent.indexOf('Safari') <= 0) || ((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('wv)') > 0))) {
    if (ua.match('android') != null) {
      window.open("googlechrome://navigate?url=lifecount.neylify.app/" + lang.value + "/index.html"); //android
    } else if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1 || ua.indexOf("ipod") > -1) {
      window.location.href = "https://lifecount.netlify.app/" + lang.value + "/index.html";
    } else {
      window.location.href = "https://lifecount.netlify.app/" + lang.value + "/index.html";
    }
  } else {
    window.location.href = "https://lifecount.netlify.app/" + lang.value + "/index.html";
  }
}
