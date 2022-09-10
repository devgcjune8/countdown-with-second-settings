const NUMBERS = document.querySelector('.numbers').children;
let NUM_SPAN_CONTAINER = document.querySelector('.numbers')
const COUNTER = document.querySelector('.counter');
const END_COUNTDOWN = document.querySelector('.end-countdown h1');
const RUN_BTN = document.querySelector('.run');
const DEC_BTN = document.querySelector('.dec');
const INC_BTN = document.querySelector('.inc');
const SECOND = document.querySelector('.second');

const SET_DIV = document.querySelector('.set-timer')
const ADJUST_TEXT = document.querySelector('.end-countdown h2')

let secondSet = 3;
SECOND.innerHTML = secondSet;

DEC_BTN.addEventListener('click', () => {
    secondSet --;
    if ( secondSet <= 3) {
        secondSet = 3;
    } 

    SECOND.innerHTML = secondSet
    
    if ( NUM_SPAN_CONTAINER.childElementCount >= 5) {
        NUM_SPAN_CONTAINER.removeChild(NUM_SPAN_CONTAINER.firstElementChild)
    }
   
    NUM_SPAN_CONTAINER.firstElementChild.classList.add('visible')
    console.log(NUM_SPAN_CONTAINER.childElementCount)
})

INC_BTN.addEventListener('click', () => {
    secondSet++
    if ( secondSet == 61) {
        secondSet = 60;
    }

    SECOND.innerHTML = secondSet
    if (NUM_SPAN_CONTAINER.childElementCount <= 60) {
        const NUM_SPAN = document.createElement('span');
        NUM_SPAN.classList.add('nums')
        NUM_SPAN.innerText = secondSet
        
        NUM_SPAN_CONTAINER.prepend(NUM_SPAN)
        NUM_SPAN_CONTAINER.firstElementChild.classList.add('visible')
        NUM_SPAN_CONTAINER.children[1].classList.remove('visible')
    }
})

NUM_SPAN_CONTAINER.innerHTML = 
        `<span class="visible nums">3</span><span class="nums">2</span><span class="nums">1</span><span class="nums">0</span>`

function startingPage() {
    COUNTER.classList.add('hidden');
    END_COUNTDOWN.classList.add('shown');
    // if (secondSet == 3) {
    //     NUM_SPAN_CONTAINER.innerHTML = 
    //     `<span class="visible nums">3</span><span class="nums">2</span><span class="nums">1</span><span class="nums">0</span>`
    // }
    
}

countingDownAnimation()


RUN_BTN.addEventListener('click', () => {
    
    runItBack()
    
    countingDownAnimation()
    
    reloadCSS()

    RUN_BTN.classList.add('hide')

})

function reloadCSS() {
    const links = document.getElementsByTagName('link');
    
    Array.from(links)
      .filter(link => link.rel.toLowerCase() === 'stylesheet' && link.href)
      .forEach(link => {
        const url = new URL(link.href, location.href);
        url.searchParams.set('forceReload', Date.now());
        link.href = url.href;
      });
  }

function reloadCss() {
    const links = document.getElementsByTagName("link");
    for (const link of links) {
      if (link.rel === "stylesheet") {
        link.href += "";
      }
    }
  };
console.log(NUMBERS)

function runItBack() {
    COUNTER.classList.remove('hidden');
    END_COUNTDOWN.classList.remove('shown');

   
    ADJUST_TEXT.classList.add('hide');
    SET_DIV.classList.add('hide');

    for ( let i = 0; i < NUMBERS.length; i++ ) {
        let nums = NUMBERS[i];
        nums.classList = 'nums'
    } 
    NUM_SPAN_CONTAINER.firstElementChild.classList.add('visible')   

}


function countingDownAnimation() {
  let PENULTIMATE = NUMBERS.length - 1;
    for ( let i = 0; i < NUMBERS.length; i++ ) {
        let nums = NUMBERS[i];
        nums.addEventListener('animationend', (event) => {
            if (event.animationName == 'slideIn' && i !== PENULTIMATE) {
                nums.classList.remove('visible');
                nums.classList.add('invisible');
            } else if (event.animationName == 'slideOut' && nums.nextElementSibling) 
            {
                nums.nextElementSibling.classList.add('visible') 
            } else {
               COUNTER.classList.add('hidden')
               END_COUNTDOWN.classList.add('shown');
               }
               
        }
            )
 
    }
}


window.addEventListener('click', () =>{
        if (END_COUNTDOWN.classList.contains('shown')) {
            ADJUST_TEXT.classList.remove('hide');
            SET_DIV.classList.remove('hide');
            RUN_BTN.classList.remove('hide')
        }
       })

    