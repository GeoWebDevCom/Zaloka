function openMenu() {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var slideIndex = 1;
setInterval(function () { showSlides(slideIndex); slideIndex++; }, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}






function DangKi1() {
    $.ajax({
        method: "POST",
        url: "/Home/ThemUser",
        data: {
            Name: $("#name1").val(),
            Phone: $("#phone1").val(),
            Email: $("#email1").val(),
            utm_sourse: getParameterByName('utm_source'),
            utm_medium: getParameterByName('utm_medium'),
            utm_campaign: getParameterByName('utm_campaign'),
            utm_content: getParameterByName('utm_content'),
        }
    }).done(function (data) {
        if (data == "ok") {
            window.location = "Home/ThankYou";
        } else {
            console.log("fail1");
        }
    })
}

function DangKi2() {
    $.ajax({
        method: "POST",
        url: "/Home/ThemUser",
        data: {
            Name: $("#name2").val(),
            Phone: $("#phone2").val(),
            Email: $("#email2").val(),
            utm_sourse: getParameterByName('utm_source'),
            utm_medium: getParameterByName('utm_medium'),
            utm_campaign: getParameterByName('utm_campaign'),
            utm_content: getParameterByName('utm_content'),
        }
    }).done(function (data) {
        if (data == "ok") {
            window.location = "Home/ThankYou";
        } else {
            console.log("fail2");
        }
    })
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$(document).ready(function () {
    $("#dangky1").click(function (e) {
       
        $("#phone1").removeClass("missing-field");
        if ((!$("#phone1").val())) {
            $("#phone1").addClass("missing-field");
        }
        else
            DangKi1();
    });

    $("#dangky2").click(function (e) {
        
       
        $("#phone2").removeClass("missing-field");
        if ((!$("#phone2").val())) {
            $("#phone2").addClass("missing-field");
        }
        else
            DangKi2();
    });

    
});