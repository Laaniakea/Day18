

    yield function* insideGenerator1() {
        for (var i = 1; i <= 5; i++) {
            yield x;
        }
    }
    yield function* insideGenerator2() {
        for (var i = 10; i <= 15; i++) {
            yield x;
        }
    }
    yield function* insideGenerator3() {
        for (var i = 6; i <= 9; i++) {
            yield x;
        }
    }
    function* myGenerator() {
        yield* insideGenerator1;
        yield* insideGenerator2;
        yield* insideGenerator3;
    }

    let fifteenArray = [];
    var iterator = myGenerator();
    for (i=1; i<=3; i++) {
        console.log(iterator.next().join("#, "));

 }
    module.exports = { fifteenArray, myGenerator};
