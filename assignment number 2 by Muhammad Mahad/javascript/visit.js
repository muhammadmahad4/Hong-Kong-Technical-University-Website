document.addEventListener('DOMContentLoaded', function () {
const allinputs = document.querySelectorAll('input'); //selecting all input tags together. they will be stored in an array.
const btn = document.getElementById("button1"); //selecting the check availability button.

//checking if length>0. by looping through the array.
btn.addEventListener('click', function () {
    document.getElementById('error').innerHTML = '';
    for (let i = 0; i < allinputs.length; i++) {
        var str = allinputs[i].value;
        if (str.trim() === '') {
            event.preventDefault(); //making sure page doesnt load.
            document.getElementById('error').innerHTML = 'Data not completed, please re-enter.';
            return; //breaking out of function.
        }
        // if the above the condition passes. then checking if number of visitors valid or not.
        if (allinputs[i] == document.getElementById("no.of-visitors")) {
            var numberValue = parseFloat(str);
            if (numberValue < 1 || numberValue % 1 != 0) {
                event.preventDefault();
                document.getElementById('error').innerHTML = 'Please enter a valid number of people!';
                return;
            }
        }
    }

    //using library.
    if (reserve(allinputs[0].value, document.getElementById('time').value, allinputs[1].value) == true) {
        alert("Your reservation is successful!");
        event.preventDefault();
    }
    else {
        
        alert("Sorry, the reservation is full!");
        event.preventDefault();
    }

});

});

    