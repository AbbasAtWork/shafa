
var xhr = new XMLHttpRequest();
xhr.open('GET', 'header.html');  // Assuming both files are in the same folder
xhr.onload = function() {
    if (xhr.status === 200) {
        var includedHTML = xhr.responseText;
        document.getElementById('HeaderincludedContent').innerHTML = includedHTML;
    }
};
xhr.send();

var xhs = new XMLHttpRequest();
xhs.open('GET', 'footer.html');  // Assuming both files are in the same folder
xhs.onload = function() {
    if (xhs.status === 200) {
        var includedHTMLL = xhs.responseText;
        document.getElementById('FooterincludedContent').innerHTML = includedHTMLL;
    }
};
xhs.send();



$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
            $('.go-top').show().addClass('animated bounceIn'); 
    } else {
            $('.go-top').hide().removeClass('animated bounceIn'); 
    }
});
$(function() {
    $(".onReportnews").on("click", function() {
        if (clickDistance = true) {
            $(".news-actions").show();
        } else {
            return false;
        }
    });
});
$(document).mouseup(function(e) {
    if (e.target.id != "div" && !$(".news-actions").find(e.target).length) {
        $(".news-actions").hide();
        $(".news-actions").removeClass("active-me");
        $(".news-actions").removeClass("active-me");
    }
});
$(function() {
    $(".onClosepersonalnews").on("click", function() {
        if (clickDistance = true) {
            $(".personalize-news-section").hide();

            $(".star-movements").addClass("animated headShake");
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onPersonalizenewsmobile").on("click", function() {
        if (clickDistance = true) {
            $(".personalize-news-section").show();
            $(".star-movements").removeClass("animated headShake");
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onPersonalizenews").on("click", function() {
        if (clickDistance = true) {
            $(".personalize-news-section").show();
            $(".star-movements").removeClass("animated headShake");
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onUncheck").on("click", function() {
        if (clickDistance = true) {
            $(".onAddpersonalizenews").show();
            $(".onUncheck").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onAddpersonalizenews").on("click", function() {
        if (clickDistance = true) {
            $(".onAddpersonalizenews").hide();
            $(".onUncheck").show();
        } else {
            return false;
        }
    });
});
$(document).scroll(function() { 
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance < 0) {
        $('.top-nav').hide();
    } else {
        $('.top-nav').show();
    }
});
$(document).scroll(function() { 
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 50) {
        $('.share-it-mobile').show();
    } else {
        $('.share-it-mobile').hide();
        return true;
    }
});
$(function() {
    $(".onClosenursedetails").on("click", function() {
        if (clickDistance = true) {
            $(".nurse-details-masoud").hide();
            $(".nurse-details-almgren").hide();
            $(".nurse-details-lena").hide();

            $(".nurse-stuff-col").show();

            $(".staffname-masoud").hide();
            $(".staffname-almgren").hide();
            $(".staffname-lena").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onNursestufflena").on("click", function() {
        if (clickDistance = true) {
            $(".nurse-details-masoud").hide();
            $(".nurse-details-almgren").hide();
            $(".nurse-details-lena").show();

            $(".nurse-stuff-col").hide();


            $(".staffname-masoud").hide();
            $(".staffname-almgren").hide();
            $(".staffname-lena").show();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onNursestuffalmgren").on("click", function() {
        if (clickDistance = true) {
            $(".nurse-details-masoud").hide();
            $(".nurse-details-almgren").show();
            $(".nurse-details-lena").hide();

            $(".nurse-stuff-col").hide();

            $(".staffname-masoud").hide();
            $(".staffname-almgren").show();
            $(".staffname-lena").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onNursestuffmasoud").on("click", function() {
        if (clickDistance = true) {
            $(".nurse-details-masoud").show();
            $(".nurse-details-almgren").hide();
            $(".nurse-details-lena").hide();

            $(".nurse-stuff-col").hide();

            $(".staffname-masoud").show();
            $(".staffname-almgren").hide();
            $(".staffname-lena").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onShowhareit").on("click", function() {
        if (clickDistance = true) {
            $(".share-it").show();
            $(".onShowhareit").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onHideshareit").on("click", function() {
        if (clickDistance = true) {
            $(".share-it").hide();
            $(".onShowhareit").show();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onMenumobile").on("click", function() {
        if (clickDistance = true) {
            $(".display-close").show();
            $(".display-list").hide();
            $(".collapse").show().addClass("collapse");
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onMenuclose").on("click", function() {
        if (clickDistance = true) {
            $(".display-close").hide();
            $(".display-list").show();

            $(".collapse").hide().addClass("collapse");
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onSlide1").on("click", function() {
        if (clickDistance = true) {
            $(".imgslide1").hide().addClass("animated fadeIn");
            $(".imgslide2").show().addClass("animated fadeIn");
            $(".imgslide3").hide().addClass("animated fadeIn");
            $(".imgslide4").hide().addClass("animated fadeIn");

            $(".onSlide1").hide();
            $(".onSlide2").show();
            $(".onSlide3").hide();
            $(".onSlide4").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onSlide2").on("click", function() {
        if (clickDistance = true) {
            $(".imgslide1").hide().addClass("animated fadeIn");
            $(".imgslide2").hide().addClass("animated fadeIn");
            $(".imgslide3").show().addClass("animated fadeIn");
            $(".imgslide4").hide().addClass("animated fadeIn");

            $(".onSlide1").hide();
            $(".onSlide2").hide();
            $(".onSlide3").show();
            $(".onSlide4").hide();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onSlide3").on("click", function() {
        if (clickDistance = true) {
            $(".imgslide1").hide().addClass("animated fadeIn");
            $(".imgslide2").hide().addClass("animated fadeIn");
            $(".imgslide3").hide().addClass("animated fadeIn");
            $(".imgslide4").show().addClass("animated fadeIn");

            $(".onSlide1").hide();
            $(".onSlide2").hide();
            $(".onSlide3").hide();
            $(".onSlide4").show();
        } else {
            return false;
        }
    });
});
$(function() {
    $(".onSlide4").on("click", function() {
        if (clickDistance = true) {
            $(".imgslide1").show().addClass("animated fadeIn");
            $(".imgslide2").hide().addClass("animated fadeIn");
            $(".imgslide3").hide().addClass("animated fadeIn");
            $(".imgslide4").hide().addClass("animated fadeIn");

            $(".onSlide1").show();
            $(".onSlide2").hide();
            $(".onSlide3").hide();
            $(".onSlide4").hide();
        } else {
            return false;
        }
    });
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const offcanvasElementList = document.querySelectorAll(".offcanvas");
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl));
var myCarousel = document.querySelector("#carouselMobileCaptions")
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true,
        dispose: true,
        cycle: true,
});
var myCarousel = document.querySelector("#carouselOurpartnersmobile")
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1000,
        wrap: true,
        dispose: true,
        cycle: true,
});
var myCarousel = document.querySelector("#carouselHomeFade")
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true,
        dispose: true,
        cycle: true
});