/**
 * What is Jquery ? Jquery is a Javascript Library that is designed to simplify HTML DOM tree traversal
 * and manipulation as well as event handling, CSS animations and Ajax.
 * 
 * Ajax is a set of web development techniques that uses various web technologies on the client side, to
 * create asynchronous web applications.
 */


// W3Schools Tutorial

/* JQuery syntax */
/**
 * Basic syntax - $(selector).action()
 * $ - sign to define/access jquery
 * (selector) - to query/find the html elements
 * actin() - actions to be taken on the selected element(s)
 */


/* The Document Ready Event */
/**
 * $(documet).ready(function) {}
 * This is to prevent any JQuery code from running before the document is finished loaded.
 * 
 * $(function) {}
 * This is a simpleified way to assure first the content is loadaed
 */

/** JQuery Events
 * What are Events ? All actions that a web page can respond to.
 * 
 * Example of Events
 * i) Mouse Events
 * - click
 * - dbclick
 * - mouseenter
 * - mouseleave
 * 
 * ii) Keyboard Events
 * - keypress
 * - keydown
 * - keyup
 * 
 * iii) Form Events
 * - submit
 * - change
 * - focus
 * - blur
 * 
 * iv) Document/Window Events
 * - load
 * - unload
 * - resize
 * - scroll
 */

/** Jquery Effects
 * The JQuery effects include:
 * - Hide, Show, Toggle, Slide, Fade and Animate
 * 
 * Syntax
 * - $(selector).hide(speed,callback);
 * - $(selector).show(speed,callback);
 * 
 * The optional speed parameter specifies the speed of the hiding/showing and can take the following
 * values: 'fast', 'slow' or milliseconds
 * 
 * Example
 */
$("#hide").click(function () {
    $("p").hide();
});
$("#show").click(function () {
    $("p").show()
})

$("button").click(function () {
    $("p").hide(1000)
})

/**
 * JQuery Toggle
 * hiding and showing an element with the toggle method
 * 
 * syntax:
 * - $(selector).toggle(speed,callback);
 * 
 */
$("button").click(function () {
    $("p").toggle()
})

/** JQuery Fading Methods
 * fadeIn() - This method is used to fade in a hidden element
 * 
 * syntax:
 * $(selector).fadeIn(speed, callback)
 * 
 * the optional speed parameter specifies the duration of the effect
 * callback optional parameter is a function to be executed after the fading completes
 * 
 * 
 */
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    })
})
/**
 * fadeOut() - this method fades out a visible element
 * 
 * syntax:
 * $(selector).fadeOut(speed,callback);
 * 
 * 
 */
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(1000);
    })
})

/** 
 * fadeToggle()
 * This method toggles between fadeIn() and fadeOut()
 * 
 * If the elements are faded out, fadeToggle() will fade them in
 * If the elements are faded in, fadeToggle() will fade them out
 * 
 */
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    })
})

/** 
 * fadeTo()
 * this method allows fading to a given opactiy. (0 - 1)
 * 
 * syntax:
 * $(selector).fadeTo(speed,opacity,callback);
 * 
 * speed (required) - specifies the duration of the effect
 * opacity (required) - specifies fading to a given opacity
 * callback (optional) - function to be executed when after the fading completes
 * 
 * Example
 */
$("button").click(function () {
    $("#div1").fadeTo("slow", 0.1);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7)
})