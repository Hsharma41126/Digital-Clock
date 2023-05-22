const hello=()=>{
    let date = new Date();
    console.log(date);
    
    let period = "";
    let hc = date.getHours();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    setTimeout(hello,500);
    h = h>12 ? h-12 : h;

    if(hc>12){
        period = "PM"
    }else{
        period = "AM"
    }

    if (h>0 && h<12) {
        document.getElementById('hour').innerHTML = check(h)+":"+check(m)+":"+check(s)+" "+period;
        document.getElementById('hour').style.color="brown";
    } else{
        document.getElementById('hour').innerHTML = check(h)+":"+check(m)+":"+check(s)+" "+period;
        document.getElementById('hour').style.color="brown";   
    }
}

const check=(i)=>{
    const ab = i < 10 ? "0"+i : i;
    return ab
}


