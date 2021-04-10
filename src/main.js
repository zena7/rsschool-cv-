import "../node_modules/normalize.css",
import "./styles/comon.css"
import "./style.css"

var naavy = $(".navyy li");

naavy.click(function() {
    naavy.removeClass("highlight");
    $(this).addClass('highlight');
});
