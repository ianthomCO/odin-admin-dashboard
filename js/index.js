const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

menuBtn.addEventListener("click",e=>{
    sidebar.classList.toggle("open");
    e.stopPropagation();
})

closeBtn.addEventListener("click",e=>{
    sidebar.classList.toggle("open")
})

// stop event from bubbling up to the body
sidebar.addEventListener("click", e => {
    e.stopPropagation();
 });

document.body.addEventListener("click",e=>{
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
})

const darkmode = document.querySelector(".dark-mode");
document.documentElement.setAttribute('data-theme', 'light');
darkmode.addEventListener("click",e=>{
    
    if (document.documentElement.getAttribute('data-theme')==='light') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    } 
})
