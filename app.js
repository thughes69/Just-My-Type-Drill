let $playButton = $("#play-button");
let $content = $("#target");
let $highlight = $("#yellow-block");
let $highlightPosition = 0;
let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");
let $sentences = ['This just my type drill is a challenge', 'This just my type drill is a challenge', 'This just my type drill is a challenge', 'This just my type drill is a challenge', 'This just my type drill is a challenge'];
let $sentenceNumber = 0;
let $sentence = $sentences[$sentenceNumber];



//load page with button
$($playButton).click(function () {
    $($content).css("display", "block");
    $("#menu").css("display", "none");

    //read for keydown
    $(document).keydown(function (e1) {
        //if pressed key == shift
        if (e1.which === 16) {
            //show uppercase keyboard
            $($keyUpper).css("display", "block");
            $($keyLower).css("display", "none");
            //read for keyup
            $(document).keyup(function (e2) {
                //if released key == shift
                if (e2.which === 16) {
                    //show lowercase keyboard
                    $($keyUpper).css("display", "none");
                    $($keyLower).css("display", "block");
                }
            });
        }
    });
//read for keypress
$(document).keypress(function (e) {
    //highlight pressed key
    let $key = $("#" + e.which);
    $($key).css("background-color", "yellow");
    //read for keyup
    $(document).keyup(function (e) {
        //unhighlight released key
        $($key).css("background-color", "#f5f5f5");
    });
});

//show current sentence on screen
$("#sentence").text($sentence);
//show target letter on screen
$("#target-letter").text($letter);
//read for keypress
$(document).keypress(function (e) {
    //set start time
    if ($isTimeCounting === false) {
        $startDate = new Date();
        $startTime = $startDate.getTime();
        $isTimeCounting = true;
    }




