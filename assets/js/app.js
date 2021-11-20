const getElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element
    throw Error(
        `please double check your class name on the element, there is no ${selector} class`
    )
}

const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

// action to do when toggle button clicked

navBtnDOM.addEventListener('click', () => {
    // apabila button toggle di klik maka selector '.show-links' dipanggil
    links.classList.toggle('show-links')
    
})

// footer date
let date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
