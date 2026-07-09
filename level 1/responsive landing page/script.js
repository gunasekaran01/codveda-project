const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(50px)";

section.style.transition="all 0.8s";

observer.observe(section);

});