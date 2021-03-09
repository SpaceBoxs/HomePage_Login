function fn_signin(){
    console.log("file js");
    var email = document.forms['form_signin']['inputEmail'].value;
    var pswd = document.forms['form_signin']['inputPassword'].value;
    console.log(email);
    console.log(pswd);
    c = email + "," + pswd
    fetch('http://192.168.0.30:5000/api/v1/resources/login?crd='+ c, {
        method: 'GET',
    }).then(console.log)
}