let palibtn = document.getElementById("palindromebtn");
palibtn.addEventListener("click", function() {
    let input_value = document.getElementById("inp").value.split('');
    console.log(input_value);
    let n = input_value.length;
    for (let i = 0; i < n / 2; i++) {
        if ((input_value[i]) != (input_value[n - i - 1])) {
            document.querySelector(".no").style.display = "block";
            document.querySelector(".yes").style.display = "none";
            return;
        }

    }
    document.querySelector(".yes").style.display = "block";
    document.querySelector(".no").style.display = "none";
});