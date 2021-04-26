function logIn(){
    if(document.getElementById('input').value=='example@gmail.com'){
        if(document.getElementById('password').value=='123'){
            document.getElementById('loginSection').style="display:none"
            document.getElementById('h1').innerHTML='LOGGED IN'
            // document.getElementById('h1').style='display:block'
        }
        else{
            document.getElementById('insertPW').innerHTML='Invalid password'
        }
    }
    else{
        document.getElementById('insertMail').innerHTML='Invalid mail'
    }
}