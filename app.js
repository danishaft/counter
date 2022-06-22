//grab th count element

/*let countEl = document.getElementById("count-dl");
let count = 0;


function increment() {
  count += 1
  countEl.textContent = count
}

function decrement() {
  count -= 1
  countEl.textContent = count
}

function reset() {
  count = 0
  countEl.textContent = count
}

if (countEl < 0){
  countEl.style.color = "red"
} else if (count > 0) {
  countEl.style.color = "green"
} else {
  countEl.style.color = "black"
}*/

//second solution

let count = 0

let btns = document.querySelectorAll(".btn")


let value = document.querySelector("#count-dl")

btns.forEach(btn => {
  console.log(btn)
  btn.addEventListener('click', (e) => {
    const btnClass = e.target.classList;

    if(btnClass.contains('increase')){
      count ++;
    } else if(btnClass.contains('decrease')) {
      count --;
    }else {
      count = 0
    }

    value.textContent = count

    if(value.textContent > 0) {
      value.style.color = "green"
    }else if (value.textContent < 0) {
      value.style.color = "red"
    } else {
      value.style.color = "black"
    }
  });
})

