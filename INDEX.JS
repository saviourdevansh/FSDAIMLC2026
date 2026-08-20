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