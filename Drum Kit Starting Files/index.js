document.querySelector(".w").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

document.querySelector(".a").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

document.querySelector(".s").addEventListener("click", function() {     
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

document.querySelector(".d").addEventListener("click", function() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

document.querySelector(".j").addEventListener("click", function() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

document.querySelector(".k").addEventListener("click", function() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

document.querySelector(".l").addEventListener("click", function() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, 100);
});

// Keyboard event listeners
document.addEventListener("keydown", function(event) {
    switch(event.key.toLowerCase()) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelector(".w").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".w").classList.remove("pressed");
            }, 100);
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelector(".a").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".a").classList.remove("pressed");
            }, 100);
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelector(".s").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".s").classList.remove("pressed");
            }, 100);
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelector(".d").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".d").classList.remove("pressed");
            }, 100);
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".j").classList.remove("pressed");
            }, 100);
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelector(".k").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".k").classList.remove("pressed");
            }, 100);
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelector(".l").classList.add("pressed");
            setTimeout(() => {
                document.querySelector(".l").classList.remove("pressed");
            }, 100);
            break;
    }
});



