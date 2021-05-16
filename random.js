function hit(){
    var array = ['red', 'blue', 'green', 'yellow', 'aqua', 'pink']

    var i = Math.floor(Math.random()*6)

    document.body.style.backgroundColor=array[i]
    timer = setTimeout(
        hit, 0
    )
}

function ảoThậtĐấy(){
    clearTimeout(timer)
}