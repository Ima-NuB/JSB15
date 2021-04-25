function logIn(){
    if(document.getElementById('input')=='example@gmail.com'){
        if(document.getElementById('password')=='123'){
            document.body.style="display='none'"
        }
        else{
            document.getElementById('insertPW').innerHTML='Invalid password'
        }
    }
    else{
        document.getElementById('insertMail').innerHTML='Invalid mail'
    }
}