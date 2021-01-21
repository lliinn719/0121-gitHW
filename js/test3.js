let convertToMorse = () => {
    let eng = new Array('A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z')
    let num = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..',
        '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
    let id = document.getElementById("input").value;
    let morse = id.split(" ");
    let result = "";
    let i;
    for (i = 0; i < morse.length; i++) {
        if (num.indexOf(morse[i]) != 1) {
            result = result + eng[num.indexOf(morse[i])];
        } else {
            result = "非摩斯密碼，請輸入.或-組合"
        }
    }
    document.getElementById("output").innerHTML = result;
}