let text = () => {
    let eng = document.getElementById("text").value
    let letters = new Array('A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
        'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'X', 'Y', 'W', 'Z', 'I', 'O')
    let num = new Array(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
        , 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35);
    let number;
    for (number in letters) {
        number = document.getElementById("birth").innerHTML = eng + '=' + (num[letters.indexOf(eng, 0)]);
    }
}