function detectWord(str) {
    var res = '';
    for (let i = 0; i < str.length; i++) {

    if (str[i].toUpperCase() !== str[i]) {
        res += str[i].toLowerCase();
		}
}
    console.log(res);;
}

detectWord('sldALAddsLSklsa')