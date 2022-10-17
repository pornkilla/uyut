function serveHeaderNavigation() {
    let navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(function (el) {
        el.addEventListener('click', function() {
          
            let dropDownMenu = document.getElementById('header-menu');
    
            el.classList.toggle('active');
            dropDownMenu.classList.toggle('active');
        });
    });
}

function displayCurrentYear() {
    let currentYear = new Date().getFullYear();
    let content = document.querySelector("#currentyear").insertAdjacentHTML('afterbegin', currentYear);
    return content;
}

document.addEventListener('DOMContentLoaded', function() {
    serveHeaderNavigation();
    displayCurrentYear();
    
}, false);