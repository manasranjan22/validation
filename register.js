                function regist(){
                var username=document.getElementById("username").value;
                var password=document.getElementById("password").value;
                var confirmpassword=document.getElementById("confirmpassword").value;
                var mobile=document.getElementById("mobile").value;
                var email=document.getElementById("email").value;
                
                    if(username == ""){
                    document.getElementById("user").innerHTML=" * Please fill the username field";
                     
                }
                if((username.length <= 2) || (username.length >20) ){
                    document.getElementById("user").innerHTML=" *  The username length must be between 2 and 20 characters";
                     
                }
                if(!isNaN(username)){
                    document.getElementById("user").innerHTML=" *username must not be number";
                     
                }
                if(password == ""){
                    document.getElementById("pass").innerHTML=" * Please fill the password field";
                     
                }
                if((password.length >= 7) || (password.length <=20)){
                    document.getElementById("pass").innerHTML=" * Please fill the password field";
                     
                }
                if(password!=confirmpassword){
                    document.getElementById("pass").innerHTML=" * passwords are not matching";
                     
                }
                if(confirmpassword == ""){
                    document.getElementById("confirm").innerHTML=" * Please fill the confirm password field";
                     
                }
                if(mobile == ""){
                    document.getElementById("mob").innerHTML=" * Please fill the mobile number field";
                     
                }
                if(isNaN(mobile)){
                    document.getElementById("mob").innerHTML=" * Please must write digit";
                }
                if(mobile.length!=10){
                    document.getElementById("mob").innerHTML=" * mobile number must be 10 digit";
                }
                if(email == ""){
                    document.getElementById("gmail").innerHTML=" * Please fill the email field";
                     
                }   
                if(email.indexOf("@") <= 0){
                    document.getElementById("gmail").innerHTML=" * @ invalid position";
                }
                if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
                    document.getElementById("gmail").innerHTML=" * . invalid position";
                }
            

                var registerData={
                    userId:generateUserId(),
                     username:username,
                     password:password,
                     confirmpassword:confirmpassword,
                     mobile:mobile,
                     email:email

                }
                if(localStorage.getItem("registrations")==null){
                    localStorage.setItem("registrations",JSON.stringify([]));
                    var allRegisters=JSON.parse(localStorage.getItem("registrations"));
                    allRegisters.push(registerData);
                    localStorage.setItem("registrations",JSON.stringify(allRegisters));
                }
                else{
                    var registers=JSON.parse(localStorage.getItem("registrations"));
                    registers.push(registerData);
                    localStorage.setItem("registrations",JSON.stringify(registers));
                }
                function generateUserId() {
                    if (localStorage.getItem("counter") == null) {
                    localStorage.setItem("counter", 0);
                    counter = parseInt(localStorage.getItem("counter")) + 1;
                    localStorage.setItem("counter", counter);
                    return counter;
                    } else {
                       let counter = parseInt(localStorage.getItem("counter")) + 1;
                         localStorage.setItem("counter", counter);
                          return counter;
                           }
                         }
                 

            }
            function loginPage(){
                event.preventDefault();
                var email = document.getElementById("Email").value;
                var password = document.getElementById("passw").value;
                var storeData=JSON.parse(localStorage.getItem("registrations"));
                for(var i=0;i < storeData.length;i++){
                    
                    
                    if((storeData[i].email==email) && (storeData[i].password==password )){
                        document.getElementById("log").innerHTML="Login Successfully";
                    }
                    else{
                        document.getElementById("log").innerHTML="<i>"+"You have entered incorrect email or password"+"</i>";
                    }
                }
                localStorage.setItem("registrations",JSON.stringify(storeData));
                
            }
           
        