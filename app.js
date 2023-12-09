let anchorLinks = document.querySelectorAll('.link');

anchorLinks.forEach((elem,index) => {
    elem.addEventListener('mouseover', (event)=>{
        elem.nextElementSibling.classList.toggle('border-bottom-hover');
    })
})
anchorLinks.forEach((elem,index) => {
    elem.addEventListener('mouseout', (event)=>{
        elem.nextElementSibling.classList.toggle('border-bottom-hover');
    })
})