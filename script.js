```javascript id="p39d6v"
const sections = document.querySelectorAll(".page");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

sections.forEach(section=>{
    section.classList.add("fade");
});

const text = [
    "Java Developer",
    "DSA Learner",
    "AI Enthusiast",
    "Cloud Explorer"
];

let i = 0;

setInterval(()=>{

    document.querySelector(".hero h3").innerText =
    text[i];

    i++;

    if(i === text.length){
        i = 0;
    }

},2000);
```
