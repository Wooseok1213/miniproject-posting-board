$(document).ready(function () {
    $("#login").click(async function () {
        let userID = $("userID").val();
        let password = $("userPassword").val();

        window.location.href = "./dashboard.html";
    })
    $("#button").click(async function () {
    
        window.location.href = "./singUp_1-1.html";
})
});