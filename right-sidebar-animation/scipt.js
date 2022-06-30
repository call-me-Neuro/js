function funcClick() { 
    let nav_op = nav.style.right;
    if (nav_op == '0px') {
        nav.style.right = '-100px'
    }
    else {
        nav.style.right = '0px';
    }
    strong = !strong
}

function funcMouseover() { 
    if (!reversed){
        funcAnim();
    }

}

function funcMouseout() { 
    if (!strong) {
        funcAnim()
    }
}



let button = document.querySelector('#c-button');
let nav = document.querySelector('#test'); 
let nav2 = document.querySelector('#test2')
let strong = false;
let animActiv = false;
let reversed = false;

function funcAnim() {
    if (!animActiv) {
        animActiv = true
        let start = Date.now();
        let start_num;
        let mnozhitel;
        if (reversed) {start_num = 0} else {start_num = -200}

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            if (reversed) { mnozhitel = -1} else { mnozhitel = 1}

            nav.style.right = (start_num + timePassed / 1) * mnozhitel + 'px'

            if (timePassed > 200 ) {
                clearInterval(timer);
                animActiv = false;
                reversed = !reversed;
            }

            }, 20); } }

button.addEventListener("click",  function() {
    funcAnim();
    strong = !strong
});

nav2.addEventListener("mouseenter", funcMouseover);
nav.addEventListener("mouseleave", funcMouseout); 
