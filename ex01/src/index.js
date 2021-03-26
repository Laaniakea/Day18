let myArr = [];
function* multiplication(x) {
    for (var i = 1; i <= x; i++) {
        yield x;
        x = x * 2;
        myArr.push(x);
    }
}
var num = multiplication(3);
for(var multiplication of num) {
    console.log(num.next().value);
}
module.exports = multiplication;