

class App {

    constructor() {
        this._initialize();
        this._render();
        
    }

    _initialize() {
        this._setInitialStates();
        this._createLenis();
        this._createIntro();
        this._changeColor();
        

    }

    _setInitialStates(){
        gsap.set('.intro__whole h1, header', {
            opacity: 0,
        })

        
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1,
        })
    }

    _createIntro() {
        gsap.registerPlugin(TextPlugin)

        let tl = gsap.timeline();

        tl.fromTo(".intro__first ", { 
            x: -300,

        }, {
            opacity: 1,
            duration: 0.8,
            x: 5,
            ease: "elastic.out(1.2,0.2)",
        }).fromTo(".intro__second", { 
            y: 200,
            
        }, {
            opacity: 1,
            duration: 0.8,
            y: 2,
            ease: "elastic.out(1,0.3)",
        }).fromTo("header",{
            y:-5,
            
        }, {
            y: 0,
            opacity: 1,
            ease: "expo.out",
            duration:1,
        });
    }


    _changeColor() {
        gsap.registerPlugin(ScrollTrigger) 
        gsap.to(".orange, .white",  {
            scrollTrigger: {
              trigger: ".b",
              start: "top center",
              end: "90% 50%",
            //   markers: true,
              toggleActions: "play reverse play reverse"
            },
            duration: 0.5,
            backgroundColor: "#FFA441"
        })
        
    }

    

    _render(time) {
        this.lenis.raf(time);
        requestAnimationFrame(this._render.bind(this));
    }


}

new App()
