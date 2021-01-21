function star1() {
    let one = "";
    let i, j;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            one += "*&nbsp;&nbsp;";
        }
        one += "<br>";
    }
    document.getElementById("one").innerHTML = one;
}

function star2() {
    let two = "";
    let i, j;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            two += "*&nbsp;&nbsp;";
        }
        two += "<br>";
    }
    document.getElementById("two").innerHTML = two;
}

function star3() {
    let three = "";
    let i, j, k;
    for (i = 0; i <= 4; i++) {
        for (j = 0; j <= 4 - i; j++) {
            three += "&nbsp;&nbsp;";
        }
        for (k = 0; k < i + 1; k++) {
            three += "*&nbsp;&nbsp;";
        }
        three += "<br>";
    }
    document.getElementById("three").innerHTML = three;
}

function star4() {
    let four = "";
    let i, j;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            if (i == 1 || i == 5) {
                four += "*&nbsp;&nbsp;";
            }
            else if (j == 1 || j == 5) {
                four += "*&nbsp;&nbsp;";
            } else {
                four += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        four += "<br>";
    }
    document.getElementById("four").innerHTML = four;
}
function star5() {
    let five = "";
    let i, j, k;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            if (i == 5) {
                five += "*&nbsp;";
            }
            else if (j == 1 || j == i) {
                five += "*&nbsp;";
            } else {
                five += "&nbsp;&nbsp;&nbsp;";
            }
        }
        five += "<br>";
    }
    document.getElementById("five").innerHTML = five;
}