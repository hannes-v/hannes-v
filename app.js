/*
const rando = (a, e) => {
    let randInt = Math.floor(Math.random() * (e - a));
    return a + randInt;
  };
  MIN_VAL = 90;
  MAX_VAL = 320;
  console.log(rando(1, 60));
  
  const createValues = (e) => {
    const cps = [
      {
        xcp: 300,
        ycp: 300,
        get x() {
          return this.xcp + rando(MIN_VAL, MAX_VAL);
        },
        get y() {
          return this.ycp + rando(MIN_VAL, MAX_VAL);
        },
        get x1() {
          return this.xcp + (this.xcp - this.x);
        },
        get y1() {
          return this.ycp + (this.ycp - this.y);
        }
      },
      {
        xcp: 500,
        ycp: 300,
        get x() {
          return this.xcp + rando(MIN_VAL, MAX_VAL);
        },
        get y() {
          return this.ycp + rando(MIN_VAL, MAX_VAL);
        },
        get x1() {
          return this.xcp + (this.xcp - this.x);
        },
        get y1() {
          return this.ycp + (this.ycp - this.y);
        }
      },
      {
        xcp: 500,
        ycp: 500,
        get x() {
          return this.xcp + rando(MIN_VAL, MAX_VAL);
        },
        get y() {
          return this.ycp + rando(MIN_VAL, MAX_VAL);
        },
        get x1() {
          return this.xcp + (this.xcp - this.x);
        },
        get y1() {
          return this.ycp + (this.ycp - this.y);
        }
      },
      {
        xcp: 300,
        ycp: 500,
        get x() {
          return this.xcp + rando(MIN_VAL, MAX_VAL);
        },
        get y() {
          return this.ycp + rando(MIN_VAL, MAX_VAL);
        },
        get x1() {
          return this.xcp + (this.xcp - this.x);
        },
        get y1() {
          return this.ycp + (this.ycp - this.y);
        }
      }
    ];
    console.log(cps);
  
    return `M 500 500
    C${cps[0].x} ${cps[0].y} ${cps[0].x1} ${cps[0].y1} ${cps[0].xcp} ${cps[0].ycp}
    C${cps[1].x} ${cps[1].y} ${cps[1].x1} ${cps[1].y1} ${cps[1].xcp} ${cps[1].ycp}
    C${cps[2].x} ${cps[2].y} ${cps[2].x1} ${cps[2].y1} ${cps[2].xcp} ${cps[2].ycp}
    C${cps[3].x} ${cps[3].y} ${cps[3].x1} ${cps[3].y1} ${cps[3].xcp} ${cps[3].ycp}
    Z;`;
  };
  
  const createElement = (e) => {
    let el = `<svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_f_101_3)">
  <path id="ampel" d="M334.837 337.232C396.472 172.384 326.298 258.104 135.883 227.687C91.6428 220.62 149.175 157.317 237.065 128.925C288.531 112.3 452.696 105.372 450.423 259.258C448.364 398.688 273.203 502.081 334.837 337.232Z" fill="url(#paint0_linear_101_3)"/>
    <animate href="#ampel"
       attributeName="d" 
       values="`;
    let b = createValues();
    el += b;
    for (let i = 0; i < 25; i++) {
      console.log("new added");
      el += createValues();
    }
    el += b;
    el += `
    "dur="42s" repeatCount="indefinite"/>
  </g>
  <defs>
  <filter id="filter0_f_101_3" x="0.626831" y="0.551987" width="700" height="700" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_101_3"/>
  </filter>
  <linearGradient id="paint0_linear_101_3" x1="128.175" y1="180.713" x2="475.493" y2="358.952" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FAFF00"/>
  <stop offset="1" stop-color="#FF5C00"/>
  </linearGradient>
  </defs>
  </svg>`;
  
    return el;
  };
  
   document.getElementById("demo").innerHTML = createElement();
  


//scroller animation
const scrollers = document.querySelectorAll(".scroller")  
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation()
}

function addAnimation() {
  scrollers.forEach((scroller => {
    scroller.setAttribute("data-animated", true)
  }))
}



*/

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 700
});

tl.add({
  targets: '.animate_title',
  easing: 'easeInOutCubic',
  rotate: [20, 0],
  scale: [0, 1],
  delay: anime.stagger(100, {start: 500}) // delay starts at 500ms then increase by 100ms for each elements.
})
.add({
  targets: '.animate_flow',
  translateX: [-200, 0],
})
.add({
  targets: '.animate_wrapper span',
  scale: [0,1],
  delay: anime.stagger(100, {start: 500}) // delay starts at 500ms then increase by 100ms for each elements.
})
.add({
  targets: '.animate_section_1',
  scale: [0,1],
})
.add({
  targets: '.animate_section',
  scale: [0,1],
})



