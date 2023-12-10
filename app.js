let anchorLinks = document.querySelectorAll('.link');
let crossIcon = document.querySelector('img[alt="cross-icon"]');
let burgerMenuIcon = document.querySelector('img[alt="burger-menu"]');
let mobileLinks = document.querySelector('.mobile-links');
let mobileLinksArray = document.querySelectorAll('.mobile-links .link');
let desktopLinksArray = document.querySelectorAll('.links .link');

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

burgerMenuIcon.addEventListener('click', (event)=>{
    mobileLinks.style.display="flex";
    // console.log(mobileLinks);
})

crossIcon.addEventListener('click', (event)=>{
    mobileLinks.style.display="none";
    // console.log(mobileLinks.className);
})

mobileLinksArray.forEach((elem,index)=>{
    elem.addEventListener('click', (event)=>{
        event.preventDefault();
        mobileLinks.style.display="none";
        let id = elem.getAttribute('href').split('#')[1];
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
    })
});

desktopLinksArray.forEach((elem,index)=>{
    elem.addEventListener('click', (event)=>{
        event.preventDefault();
        let id = elem.getAttribute('href').split('#')[1];
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
    });
});