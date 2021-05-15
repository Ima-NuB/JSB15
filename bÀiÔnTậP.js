function calculate(){    
    var g = document.getElementById('gender').value
    var a = document.getElementById('a').value
    var h = document.getElementById('h').value
    var m = document.getElementById('m').value
    
    if(g=='Male'){
        //Harris Benedict(kết quả hợp lí hơn=))
        var bmr = 66 + (13 * m) + (5 * h) - (6.76 * a) 
        //Mifflin-St Jeor(sai hay sao í ạ):(9.99 + m)  + (6.25 * h) - (4.92 * a) + 5
        document.getElementById('h3').style='display:block'
        document.getElementById('span').innerHTML=bmr
    }
    else if (g=='Female'){
        var bmr = 655 + (13.7 * m) + (1.8 * h) - (4.7 * a)
        //(9.99 + m)  + (6.25 * h) - (4.92 * a) - 161
        document.getElementById('h3').style='display:block'
        document.getElementById('span').innerHTML=bmr
    }
}

var array = ['1', '2', '3', '4']
document.getElementById('array').innerHTML=array
function push(){
    array.push(document.getElementById('push').value)
    document.getElementById('array').innerHTML=array
}