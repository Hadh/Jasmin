function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h==0){
        h = 12;
    }
    if(m < 10){
        m = '0'+m;
    }
    if(s < 10){
        s = '0'+s;
    }
    var time = h + ":" + m + ":" + s;
    document.getElementById('clock').innerHTML = time;
    var msg ='';
    if(h<11){
        msg = 'Good Morning!';
    }else {
        msg='Good Evening!';
    }
    document.getElementById('msg').innerHTML = msg;
    setTimeout(showTime,1000);
}

showTime();
