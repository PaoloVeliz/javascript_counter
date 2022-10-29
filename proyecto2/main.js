const count = document.getElementById("count");
const increase = document.getElementById("incr");
const substrc = document.getElementById("dcr");
const rst = document.getElementById("reset");

let number = 0;

function change_color(number){
    if (number >= 1){
        count.style.color = "green"
    } else if (number == 0) {
        count.style.color = "white"
    } else {
        count.style.color = "red"
    }
}

increase.addEventListener("click", ()=>{
    number++;
    count.innerHTML = number;
    change_color(number);
});

substrc.addEventListener("click", ()=>{
    number--;
    count.innerHTML = number;
    change_color(number);
});

rst.addEventListener("click", ()=>{
    number = 0;
    count.innerHTML = number;
    change_color(number);
});
