// Menu Mobile
const menuMobile = document.querySelector(".menuMobile")
const menubBar = document.querySelector(".humberger-close")
const bodyDark = document.querySelector(".bodyDark")
const menuCheckbox = document.querySelector("#menu_checkbox")
const sliderFlags = document.querySelector(".sliderFlags")
const flagsBar = document.querySelector(".flagsBar")
// 

const dropdownFlag = document.querySelector(".dropdown-flag")
const submenuFlags = document.querySelector(".submenu-dropdown-flag")
// console.log(menuMobile);
menubBar.addEventListener("click", () => {
    menuMobile.classList.toggle("showMenu")
    bodyDark.classList.toggle("zIndex-dark")
})
bodyDark.addEventListener("click", () => {
    menuMobile.classList.remove("showMenu")
    bodyDark.classList.remove("zIndex-dark")
    menuCheckbox.checked = false
    sliderFlags.classList.remove("showFlags")
})
flagsBar.addEventListener("click", () => {
    sliderFlags.classList.toggle("showFlags")
    bodyDark.classList.toggle("zIndex-dark")
})
//
// dropdownFlag.addEventListener("click", () => {
//     submenuFlags.classList.toggle("none-item")
// })


// Form

const forgetPassBtn = document.querySelector(".forget-pass a")
// console.log(forgetPassBtn);
const tabPanes = document.querySelectorAll(".form-state .tab-pane")
// console.log(tabPanes);
const formForgetPass = document.querySelector(".form-forget-pass")
// console.log(formForgetPass);
const backOfPass = document.querySelector(".back-of-pass")
const tabNavBtn = document.querySelectorAll(".form-state .nav-item button")
const btnSignup = document.querySelector("#btn-signup")
const btnSignin = document.querySelector("#btn-signin")
forgetPassBtn.addEventListener("click", () => {
    tabPanes.forEach(tab => {
        tab.style.display = "none"
    })
    formForgetPass.style.display = "block"
})
backOfPass.addEventListener("click", () => {
    formForgetPass.style.display = "none"
    tabPanes[0].style.display = "block"
    tabNavBtn[0].classList.add("active")
    tabNavBtn[1].classList.remove("active")
})
tabNavBtn[1].addEventListener("click", () => {
    tabPanes[0].style.display = "none"
    formForgetPass.style.display = "none"
    tabPanes[1].style.display = "block"
})
tabNavBtn[0].addEventListener("click", () => {
    tabPanes[1].style.display = "none"
    formForgetPass.style.display = "none"
    tabPanes[0].style.display = "block"
})
btnSignup.addEventListener("click", () => {
    tabPanes[0].style.display = "none"
    tabPanes[1].style.display = "flex"
    tabNavBtn[1].classList.add("active")
    tabPanes[1].classList.add("active")
    tabPanes[1].classList.add("show")
    tabNavBtn[0].classList.remove("active")
})
btnSignin.addEventListener("click", () => {
    tabPanes[1].style.display = "none"
    tabPanes[0].style.display = "flex"
    tabNavBtn[0].classList.add("active")
    tabPanes[0].classList.add("active")
    tabPanes[0].classList.add("show")
    tabNavBtn[1].classList.remove("active")
})