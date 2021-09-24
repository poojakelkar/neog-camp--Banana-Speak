var myUppercase = function upperCase() {
    var ret = "hello I am pooja";
    for (i = 0; i < str.length; i++) {
        ret += String.fromCharCode(str.charCodeAt(i) & 223);
    }
    return ret;
};
