const headerLink = document.querySelector('.menu');
const headerLinks = document.querySelectorAll('.header-link');

const menuTrigger = document.querySelector('.fa-list');

console.log(menuTrigger, headerLink);

let menuIsTriggered = false;
menuTrigger.addEventListener('click', e => {

    console.log("clicked!");
    menuIsTriggered = !menuIsTriggered;
    console.log(menuIsTriggered);
    if(menuIsTriggered) {
        // headerLink.classList.toggle('.header-links-off');
        headerLink.style.display = 'block';
        headerLink.classList.toggle('.header-links');
    } else {
        headerLink.classList.toggle('.header-links');
        headerLink.style.display = 'none';
    }
    
})

headerLinks.forEach(headerLink => {
        let toggleLinks = false;
        const sublinks = headerLink.children[1];
        const chevronIconElement = headerLink.children[0].firstChild;
        headerLink.addEventListener('click', e => {
            toggleLinks = !toggleLinks;
            if(toggleLinks) {
                sublinks.style.display = 'block'
                chevronIconElement.classList.add('fa-chevron-up');
                chevronIconElement.classList.remove('fa-chevron-down')
            } else {
                sublinks.style.display = 'none';
                chevronIconElement.classList.remove('fa-chevron-up');
                chevronIconElement.classList.add('fa-chevron-down')
            }
    })
})