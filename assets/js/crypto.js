const inputLeft = document.querySelector(".input-left")
const inputRight = document.querySelector(".input-right")
const sendListCrypto = document.querySelectorAll(".send-list-crypto .ui-select-option")
const reciveListCrypto = document.querySelectorAll(".recive-list-crypto .ui-select-option")
const targetSendCoin = document.querySelector(".input-left .target-send-coin")
const sentExchangeTitle = document.querySelector(".send-exchange-title")
const reciveExchangeTitle = document.querySelector(".recive-exchange")
sendListCrypto.forEach(crypto => {
    crypto.addEventListener("click", () => {
        const svgCoin = crypto.children[0].getAttribute("class")
        console.log(crypto.children[1].children[0].textContent);
        inputLeft.children[1].children[0].setAttribute("class", svgCoin)
        const nameCoin = crypto.getAttribute("data-value").toLowerCase()
        inputLeft.setAttribute("id", nameCoin)
        inputLeft.children[1].setAttribute("id", nameCoin)
        inputLeft.children[1].children[1].innerHTML = crypto.getAttribute("data-value")
        sentExchangeTitle.children[1].innerHTML = crypto.children[1].children[0].textContent;
        sentExchangeTitle.setAttribute("id", nameCoin)
    })
})
reciveListCrypto.forEach(crypto => {
    crypto.addEventListener("click", () => {
        const svgCoin = crypto.children[0].getAttribute("class")
        inputRight.children[1].children[0].setAttribute("class", svgCoin)
        const nameCoin = crypto.getAttribute("data-value").toLowerCase()
        inputRight.setAttribute("id", nameCoin)
        inputRight.children[1].children[1].innerHTML = crypto.getAttribute("data-value")
        inputRight.children[1].setAttribute("id", nameCoin)
        reciveExchangeTitle.children[1].innerHTML = crypto.children[1].children[0].textContent;
        reciveExchangeTitle.children[1].setAttribute("id", nameCoin)
    })
})
