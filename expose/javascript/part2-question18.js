function time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
time();
setInterval(time, 1000);
