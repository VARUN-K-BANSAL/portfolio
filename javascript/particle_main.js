particlesJS("particles-js",
    {
        "particles":
        {
            "number":
            {
                "value": 100,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#ffffff" },
            "shape": {
                "type": "circle",
                "stroke": { "width": 0, "color": "#000000" },
                "polygon": { "nb_sides": 5 },
                "image": { "src": "img/github.svg", "width": 100, "height": 100 }
            },
            "opacity": { "value": 0.6807351940095302, "random": false, "anim": { "enable": false, "speed": 2, "opacity_min": 0.2, "sync": true } },
            "size": {
                "value": 3, "random": true, "anim": {
                    "enable": true, "speed": 3, "size_min": 0.5, "sync": false
                }
            },
            "line_linked": {
                "enable": false, "distance": 10, "color": "#ffffff",
                "opacity": 0.20021623353221477, "width": 3
            }, "move": {
                "enable": true, "speed": 7, "direction": "none", "random": true, "straight": false, "out_mode": "bounce", "bounce": false, "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
            }
        }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    });