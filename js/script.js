function konversiSuhu() {
            var inputCelsius = parseFloat(document.getElementById("inputCelsius").value);
            var fahrenheit = (inputCelsius * 9/5) + 32;
            document.getElementById("result").innerHTML = + fahrenheit.toFixed(2) + " Fahrenheit";
            document.getElementById("explanation").innerHTML = "Penjelasan: (" + inputCelsius + " x 9/5) + 32 = " + fahrenheit.toFixed(2) + " Fahrenheit";
        }

        function reset() {
            document.getElementById("inputCelsius").value = "";
            document.getElementById("result").innerHTML = "Fahrenheit ";
            document.getElementById("explanation").innerHTML = "Penjelasan";
        }

        function reverse() {
            var inputCelsius = parseFloat(document.getElementById("inputCelsius").value);
            var fahrenheit = (inputCelsius * 9/5) + 32;
            document.getElementById("inputCelsius").value = fahrenheit.toFixed(2);
            document.getElementById("result").innerHTML = + inputCelsius.toFixed(2) + " Celsius";
            document.getElementById("explanation").innerHTML = "Penjelasan: (" + inputCelsius + " - 32) x 5/9 = " + fahrenheit.toFixed(2) + " Celsius";
        }