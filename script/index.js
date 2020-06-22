const headerLinks = document.querySelectorAll('.header-link');
console.log(headerLinks);

headerLinks.forEach(headerLink => {
        let toggleLinks = false;
        headerLink.addEventListener('click', e => {
            toggleLinks = !toggleLinks;
            toggleLinks ? headerLink.children[1].style.display = 'block' : headerLink.children[1].style.display = 'none';
    })
})