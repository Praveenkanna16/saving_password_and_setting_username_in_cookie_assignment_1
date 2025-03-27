document.addEventListener('DOMContentLoaded', function() {
    function getCookie(name) {
        let cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            let [key, value] = cookie.split('=');
            if (key === name) {
                return value;
            }
        }
        return null;
    }
  
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }
  
    function updateCounter() {
        let count = getCookie("visitCount");
        count = count ? parseInt(count) + 1 : 1;
        setCookie("visitCount", count, 365);
        document.getElementById("count").innerText = count;
    }
  
    updateCounter();
  });