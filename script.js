const events = document.querySelectorAll(".event");


events.forEach(event => {
    let desc;
    let head;
    event.addEventListener("mouseover", (task) => {
        const parent = task.currentTarget.parentElement;
        const children = task.currentTarget.childNodes;
        
        children.forEach(child => {
            if (child.className == "event-desc") {
                desc = child
            }
            if (child.className == "event-head") {
                head = child
            }
        })
        head.style.color = "#a3e635"
        desc.style.opacity = 1
        
        const parentClass = parent.className;
        if (parentClass == "left") {
            event.style.transform = "scale(1.7) translate(200px) rotate(4deg)";
            
        
        } else if (parentClass == "middle") {
            console.log("hi")
            event.style.transform = "scale(1.7)";
           
        } else if (parentClass == "right") {
            event.style.transform = "scale(1.7) translate(-200px) rotate(-4deg)";
            
        }
    })
    
    event.addEventListener("mouseout", (task) => {
        const parent = task.currentTarget.parentElement;
        const parentClass = parent.className;
        desc.style.opacity = 0
        head.style.color = "#fde047"
        head.style.fontSize = "20px"
        if (parentClass == "left") {
            event.style.transform = "scale(1) ";
        } else if (parentClass == "middle") {
            event.style.transform = "scale(1)";   
        } else if (parentClass == "right") {
            event.style.transform = "scale(1)";
        }
    })
})

window.addEventListener('scroll', function() {
    const navbar = document.querySelector(".nav-bar")
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})