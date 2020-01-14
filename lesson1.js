//Подсмотрел в интернете, не до конца понял, что бы сделать самому

function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}