let omaga = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
let i=0;

let hello =() =>{
    if(i<omaga.length){
        document.getElementById("demo").src=omaga[i];
        i++
    }
    else{
        i=0;
    }


}
setInterval(hello,2000)