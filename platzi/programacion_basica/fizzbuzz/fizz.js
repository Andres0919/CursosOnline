var numero = 100;
var divisible = false;

for (var i = 1; i < 100; i++) {
    var divisible = false;
    if (i % 3 == 0) {

        document.write("Fizz");
        var divisible = true;
    }
    if (i % 5 == 0) {

        document.write("Buzz");
        var divisible = true;
    }
    if (!divisible) {

        document.write(i);
    }

    document.write("<br />");
}
