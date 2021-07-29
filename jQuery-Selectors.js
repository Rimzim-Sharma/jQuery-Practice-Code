
-jQuery is the library of JavaScript which is lightweight and follow write less do more approach.
-jQuery has simplify JavaScript code.
-It simplifies ajax call and Dom manipulation

-It has two versions available
    -Production version
    -Development version

-jQuery is used for
    -HTML and Dom manipulation
    -CSS manipulation
    -Ajax
    -HTML Event handling
    -Effects and animation

-We can use jQuery by two ways
    -Download jQuery library from jquery.com
    -Use cdn files

With jQuery we select (query) HTML elements and perform "actions" on them.
Basic syntax is: $(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)

Example:-
$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".

jQuery selectors allow you to select and manipulate HTML element(s).
All selectors in jQuery start with the dollar sign and parentheses: $().








<html>
    <head>
        <title>jQuery</title>
        <script src="jquery.js"></script>
        <script>
/*            function fun1(){
            //    $(".class1").fadeToggle();               
            //    $("#txt1,.class1").fadeToggle();               
            //    $("div p").fadeToggle();
            }
*/


        </script>
    </head>

    <body>
<!--
        <div class="a">
            <p>This is the Paragraph 1</p>
        </div>
        <div class="a">
            <p>This is the Paragraph 2</p>
            <p>This is the Paragraph 2a</p>
        </div>
        <div class="a">
            <p>This is the Paragraph 3</p>
        </div>
        <div>
            <p id="txt1">Rimzim Sharma</p>
            <p class="class1">A</p>
            <div>Div in a div</div>
            <p class="class1">B</p>
        </div>    
        <button onclick="fun1()">Click Me</button>
-->
    </body>
</html>


