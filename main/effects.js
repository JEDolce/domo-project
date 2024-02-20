// Fade In Section on Scroll
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var envelopeb = $(".right-b");
    var envelopec = $(".right-c");
    var enveloped = $(".right-d");

    if ($(window).height() < 800) {
        if (pageBottom > 1000) {
            $(envelopeb).addClass("showEnvelope");
        } else { }

        if (pageBottom > 1600) {
            $(envelopec).addClass("showEnvelope");
        } else { }

        if (pageBottom > 2200) {
            $(enveloped).addClass("showEnvelope");
        } else { }
    } else {
        if (pageBottom > 1400) {
            $(envelopeb).addClass("showEnvelope");
        } else { }

        if (pageBottom > 2400) {
            $(envelopec).addClass("showEnvelope");
        } else { }

        if (pageBottom > 3000) {
            $(enveloped).addClass("showEnvelope");
        } else { }
    }
});

