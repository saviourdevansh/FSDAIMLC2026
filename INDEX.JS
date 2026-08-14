//let num1 = 5;
//let num2 = 10;

//let sum = num1 + num2;

//console.log(sum); // Output: 15



function login(msg, error) {
    if (error) {
        console.log("Error is " + error);
    } else {
        console.log("Welcome " + msg);
    }
}

function loginverification(username, password, clbk) {
    if (username == "ptomer40" && password == "123456") {
        clbk("success", null);
    } else {
        clbk(null, "Username or password is incorrect");
    }
}

loginverification("ptomer", "123456", login);