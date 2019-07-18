$.fn.extend({
    tankuang: function () {
        $(this).html("<button id='btn'>登陆</button><div class='container'><div class='mosk'></div><div class='login'><div class='header'><span>登陆</span><span id='close'>X</span></div><div class='content'><h1>登陆</h1></div></div></div>")
        $("#btn").click(function () {
            $(".container").css("display", "block")
        })
        $("#close").click(function () {
            $(".container").css("display", "none")
        })
    }
})