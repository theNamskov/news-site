const headerLinks = document.querySelectorAll('.header-link');
console.log(headerLinks);

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