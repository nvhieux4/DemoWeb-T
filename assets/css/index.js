
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


/* các sự kiện đăng nhập vs đăng ký */
const displayLogin = $(".hidden-login")
const displaySub =  $(".hidden-sub")
const displayAuthForm = $(".hidden-auth-form")

$(".navbar__list-item:nth-child(3) ").onclick = function () {
    displayLogin.style.display = "none"
    displayAuthForm.style.display = "block"
}

$(".auth-form__sub-btn").onclick = function () {
    displaySub.style.display = "none"
    displayLogin.style.display = "block"
}

$(".auth-form__longIn-btn").onclick = function () {
    displaySub.style.display = "block"
    displayAuthForm.style.display = "block"
}

const exit =  $$(".auth-form__btn-link")
   exit.forEach((item,index) => {
       item.onclick = () => {
          displayAuthForm.style.display = "none"
          displaySub.style.display = "block"
       }
   })
   
$(".navbar__list-item:nth-child(4) ").onclick = function () {
   displayAuthForm.style.display = "block"
   displayLogin.style.display = "block"
   displaySub.style.display = "none"
}

let filters = $$(".home-filter__btn")
    filters.forEach((filter,index)=>{
        filter.onclick = function () {
           $(".home-filter__btn.home-filter__btn--primary").classList.remove("home-filter__btn--primary")
            this.classList.add("home-filter__btn--primary")
        }
    })

let categoryList = $$(".category__item")
    categoryList.forEach((category,index) => {
        category.onclick = function() {
           $(".category__item.category__item--active").classList.remove("category__item--active")
            this.classList.add("category__item--active")
        }
    })

/* chuyển động slider */

let slider = $$(".slide__list-item")
let btn = $$(".navigation__btn")
const prevBtn =$(".control__after")
const nextBtn =$(".control__next")
let currentSlider = 0
const numberOfSlider = slider.length

nextBtn.onclick= function(){
    currentSlider++
    if(currentSlider > (numberOfSlider-1) )
        currentSlider = 0
   $(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
   $(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
    slider[currentSlider].classList.add("slide_list--first")
    btn[currentSlider].classList.add("navigation__btn--active")
}

prevBtn.onclick= function(){
    currentSlider--
    if(currentSlider < 0 )
        currentSlider = numberOfSlider-1
   $(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
   $(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
    slider[currentSlider].classList.add("slide_list--first")
    btn[currentSlider].classList.add("navigation__btn--active")
}

var manualNav = function (manual) {
   $(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
    slider[manual].classList.add("slide_list--first")
}

btn.forEach((control,index)=>{
    control.onclick= function(){
       $(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
        this.classList.add("navigation__btn--active")
        manualNav(index)
    }
})
    
let playSlider
var repeater = () => {
    const activeSlider = document.getElementsByClassName("slide_list--first")
    const activeBtn = document.getElementsByClassName("navigation__btn--active")
    let i = 0;
    playSlider = setInterval(function(){
        $(".slide__list-item.slide_list--first").classList.remove("slide_list--first")
        $(".navigation__btn.navigation__btn--active").classList.remove("navigation__btn--active")
        i++
        if(slider.length==i)
        i=0
        if(i>=slider.length)
        return
        slider[i].classList.add("slide_list--first")
        btn[i].classList.add("navigation__btn--active")
    },3000)
}
repeater()

$(".slide__list").onmouseover= function () {
    clearInterval(playSlider)
}
$(".slide__list").onmouseout= function () {
    repeater()
}


var test = $(".slide__list")
test.onmouseenter = function(){
    $(".control__slide").style.opacity = "1"
}

test.onmouseleave =function(){
    $(".control__slide").style.opacity = "0"
}





