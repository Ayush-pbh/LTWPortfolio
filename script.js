
// Triggers

function toggleTrigger(){
    document.getElementById('navt').classList.toggle('close');
    document.getElementById('navt').classList.toggle('open');
    
}
let overlayVisible = false,finit = true;
let tl = gsap.timeline();
function toggleNavpane(){
    
    if(overlayVisible){
        //hide it
        overlayVisible = false
        tl.reverse()
        console.log("Reversed")   
    }   
    else{
        overlayVisible = true
        if(finit){
            tl.to('.pagechange', {left:'0',  duration: 1, opacity:1, ease:'expo'})
            .to('.nav', {top:'0', opacity:'1', duration:0})
            .to('.pagechange', {left:'100%',opacity:0, duration:1, ease:'expo'})
            .from('.anim1',{opacity:0,x:50,duration:0.3,stagger:0.1}, '<')
            finit = false
        }
        else{
            tl.play()
        }
    }

}


// Events...
document.getElementById('togglenav-trigger').addEventListener('click',()=>{
    toggleTrigger()
    toggleNavpane()
})


// Particle JS

particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 118,
      "density": {
        "enable": true,
        "value_area": 1262.6362266116362
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.19240944730386272,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 0,
        "rotateY": 0
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

// var totalImages = 5;
// function changeNavImg(n){
//   // n -> is the number which is the index of hovered 
//   if(n>totalImages){console.log('Passed '+n+' <- N | is greater than totalImages -> '+totalImages);return '';}
//   let itm = document.getElementsByClassName('link-image')[0];
//   for(let i=0;i<totalImages;i++){document.getElementsByClassName('link-image')[i].style.opacity = '0';}
//   if(n<0){
//     // This means that there has to be no image to be displayed.
//     gsap.to('.link-image', {opacity:'0', duration:1.5, ease: 'ease'});
//     // itm.style.backgroundImage = '';
//     return '';
//   }
//   // gsap.to('.link-image', {opacity:'0', duration:1.5, ease: 'ease'});
//   // itm.style.backgroundImage = "url('images/nav"+n+".jpg')";
//   gsap.to('.link-image', {opacity:'1', duration:2, ease: 'ease'});

// }
// // 4200
// let t = '<div class="link-image"></div>';
// // creating divisions
// // for(let i=0;i<=totalImages;i++){
// //   t += '<div class="link-image"></div>';
// // }
// // document.getElementsByClassName('links')[0].innerHTML += t;

// // for(let i=0;i<totalImages;i++){
// //   document.getElementsByClassName('link-image')[i].style.backgroundImage = "url('images/nav"+i+".jpg')";
// // }

// // for(let i=0;i<=totalImages;i++){
// //   document.getElementsByClassName('anim1')[i].addEventListener('mouseover',()=>{changeNavImg(i+1)})
// //   document.getElementsByClassName('anim1')[i].addEventListener('mouseleave',()=>{changeNavImg(-1)})
// // }



var count_particles, stats, update;
// Chiping...
let tl2 = gsap.timeline();
function initChip() {
  let chip = document.getElementsByClassName('bg-chip');
  for(let i=0;i<chip.length;i++){
    console.log(chip[i]);
    // chip[i].style.backgroundImage='url("images/'+chip[i].dataset.bgImage+'");';
    chip[i].style.backgroundImage="url('images/"+chip[i].dataset.bgImage+"') ";
  }
  tl2.to('.loadanim', {top:'-120%', duration:1, ease: 'sine'})
  .from('.intro-text', { opacity: 0, duration: .5, ease:'ease'})
  .from('.side-text', { opacity: 0, duration: .5, ease:'ease'})
  .from('.loader', {transform:'translateX(-100%)', opacity:0, duration:0.5, stagger:0.4, ease:'ease'})
  .from('.frame',{opacity:0,duration:0.5, ease:'ease'})
  .from('.framed',{height:0, duration:0.75, ease:'expo'})
  // .from('.chip', {transform:'scale(0.5)', duration: 1, stagger:.4, ease:'ease'});
}
let loadanim = gsap.timeline({ repeat:-1, yoyo:true })
    .to('.loadanim .back' , {height:100,width:160, left: 'calc(50% - 80px)',top: 'calc(50% - 50px)', duration: .8, ease:'cric'})
    .to('.loadanim .back' , {height:160,width:100, left: 'calc(50% - 50px)',top: 'calc(50% - 80px)', duration: .8, ease:'cric'})

window.onload = ()=>{
  // setTimeout(() => {
    initChip();
    loadanim.kill();  
  // }, 2000);
}
