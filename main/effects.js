// Fade In Section on Scroll
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var envelopeb = $(".right-b");
    var envelopec = $(".right-c");
    var enveloped = $(".right-d");

    if (pageBottom > 1000) {
        $(envelopeb).addClass("showEnvelope");
    } else { }

    if (pageBottom > 1800) {
        $(envelopec).addClass("showEnvelope");
    } else { }

    if (pageBottom > 2400) {
        $(enveloped).addClass("showEnvelope");
    } else { }
});

