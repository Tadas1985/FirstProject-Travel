function validateText() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var box = document.getElementsByClassName("box");
    if(name.value =="" && email.value=="" && password.value ==""){
        alert("You have not provided any details, please fill the form")
    }
    else if (name.value =="") {
    alert("Please provide a name");
    }   
    else if(email.value ==""){
        alert("Please provide your email");
    }
    else if(password.value ==""){
        alert("Please provide your password");
    }
    else{
        
        //box.style.display = "block";
        $(document).ready(function(){
            $(".box").css("display","block") // Makes box class visible by changing css display property
                
            
        });
    }
    
}