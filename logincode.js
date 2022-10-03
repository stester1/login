function checkCreds(){

    var Login = document.getElementById("Login").value;
    var badgeNum = document.getElementById("badgeNum").value;

    if (Login.length > 20 || Login.length < 1) {

        document.getElementById("loginStatus").innerHTML = "User Name has invalid number of characters!";
    }

    else if (badgeNum > 999 || badgeNum < 100){
        document.getElementById("loginStatus").innerHTML = "USER BADGE NUMBER INVALID";
    }

    else {alert ("Access Granted, Welcome" + Login + "!")};
    location.replace("uatBlastOff.html")
}
