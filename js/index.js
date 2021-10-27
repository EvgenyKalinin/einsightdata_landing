
const body = document.querySelector("body")

// Slider Input Progress
const sliderProgress = document.querySelector(".progress");
const slider = document.querySelector(".slider input");
slider.value = 50;
dailyTraffic = 0
$('#dailyTraffic').html(slider.value * 8)
slider.oninput = function () {
    sliderProgress.style.width = this.value + "%";
    $('#dailyTraffic').html(this.value * 8);
};




// Toggle The Messaging Component

const message_icon = document.querySelector(".message-icon img");
const messagin_component = document.querySelector(".message-component");
const close_messaging_component = document.querySelectorAll(".message-component-close")[0].querySelector("svg");
const start_chat = document.querySelector(".message-component form");
const message_box = document.querySelector(".messaging-box");
const close_message_box = document.querySelectorAll(".message-component-close")[1].querySelector("svg");

message_icon.addEventListener("click", () =>{
    messagin_component.style.display = "block"
})
close_messaging_component.addEventListener("click", () =>{
    messagin_component.style.display = "none"
})
close_message_box.addEventListener("click", () =>{
    message_box.style.display = "none"
})
start_chat.addEventListener("submit", (e) =>{
    e.preventDefault()
    messagin_component.style.display = "none"
    message_box.style.display = "block"
})
// Toggle The Get Price

const get_price = document.querySelector(".download-form form");
const download = document.querySelector(".download-form-clicked");
const price_table = document.querySelector(".download-form-calculation");
const currency_select = document.querySelector(".currency-select");
const file_format = document.querySelector(".file-format");
const total_price = document.querySelector(".total-price");
const notice = document.querySelector(".notice");


get_price.addEventListener("submit", (e) =>{
    e.preventDefault()
    $(".download-calculation-table")[0].innerHTML += "<div class='download-calculation-table-values'>\
                                                            <div class='column followers-value'>\
                                                                <p class='column-value'>" + $("#twitterHandle")[0].value + "</p>\
                                                            </div>\
                                                            <div class='column of-followers-value'>\
                                                                <p class='column-value center-value'>5</p>\
                                                            </div>\
                                                            <div class='column time-to-value'>\
                                                                <p class='column-value center-value'>15 min</p>\
                                                            </div>\
                                                            <div class='column price-value'>\
                                                                <p class='column-value center-value'>$ 5</p>\
                                                            </div>\
                                                        </div>"
    download.style.height = "auto"
    const form_opened = document.querySelector(".form-opened")
    form_opened.style.display = "block"
    download.classList.add("download-active-animation")
    price_table.classList.add("download-element-appear")
    currency_select.classList.add("download-element-appear")
    file_format.classList.add("download-element-appear")
    total_price.classList.add("download-element-appear")
    notice.classList.add("download-element-appear")
})


$("#options-btn-1").on('click',function(){
    download.style.height = "360px";
    $("#twitterHandle")[0].value = ''
    const form_opened = document.querySelector(".form-opened");
    form_opened.style.display = "none";
    download.classList.remove("download-active-animation");
  })




// Animate The Tab Change

const tabs = document.querySelectorAll(".tab-container")

tabs.forEach((tab,index) =>{
    tab.addEventListener("click", () =>{
        tab.setAttribute("class", "tab-container tab-active");
        switch(index) {
            case 0:
                tabs[1].classList.remove("tab-active")
                tabs[2].classList.remove("tab-active")
                break
            case 1:
                tabs[0].classList.remove("tab-active")
                tabs[2].classList.remove("tab-active")
                break
            case 2:
                tabs[0].classList.remove("tab-active")
                tabs[1].classList.remove("tab-active")
                break
        }
    })
})

