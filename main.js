
function validate() {
    var name =  document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var area = document.getElementById("area").value;
    var error =  document.getElementById("error");
    var text = "";



    if(name.length <5) {
        text = "please type real name"
        error.innerHTML = text ;
        return false ;
    }

    else if(email.indexOf("@") == -1) {
            text = "please type another email"
            error.innerHTML = text ;
            return false ; 
    }

    else if(phone.length != 11) {
        text = "please type another phone"
        error.innerHTML = text ;
        return false;
    }
    else if(area.length < 20) {
        text = "please type  your message"
        error.innerHTML = text ;
        return false ;
    }
    else {
       alert ("your message send");
    }

   
}