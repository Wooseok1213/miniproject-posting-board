$(document).ready(function () {
    $("#login").click(async function () {
        let userID = $("userID").val();
        let password = $("userPassword").val();

        window.location.href = "./mainLogIn.html";
    })
    $("#signUpBtn").click(async function () {
        window.location.href = "./signUp02.html";
})
});