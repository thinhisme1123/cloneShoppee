const $ = document.querySelector.bind(document)

// open / close Modal login and Signup 
//OPEN 
const loginBtn = $('.login-button')
const signBtn = $('.signup-button')
const modal_login = $('.modal-login')
const modal_signup = $('.modal-signup')
loginBtn.onclick = function () {
    modal_login.classList.add('open')
}
signBtn.onclick = function () {
    modal_signup.classList.add('open')
}
//CLOSE 
const overPlay = $('.modal__overlay')
const overPlaySignup = $('.modal__overlay--signup')
overPlay.onclick = function () {
    modal_login.classList.remove('open')
}
overPlaySignup.onclick = function () {
    modal_signup.classList.remove('open')
}
const closeBtn = $('.modal-close-btn')
const clostBtnSignup = $('.modal-close-btn--signup')
closeBtn.onclick = function () {
    modal_login.classList.remove('open')
}
clostBtnSignup.onclick = function () {
    modal_signup.classList.remove('open')
    
}
//transfer form login to signup and contrast
const footerLogin = $('.modal-footer-signup-btn')
footerLogin.onclick = function () {
    modal_login.classList.remove('open')
    modal_signup.classList.add('open')
}
const footerSignup = $('.modal-footer-login-btn')
footerSignup.onclick = function () {
    modal_signup.classList.remove('open')
    modal_login.classList.add('open')

}
//load more item
var listItem = [
    {
        pathImg:'./assets/img/sanpham1.jpg',
        name:"Sản phẩm trang điểm thế hệ mới nhất quả đất",
    },
    {
        pathImg:'./assets/img/sanpham2.jpg',
        name:"Ai mà bán được cái sản phẩm này trời",
    },
    {
        pathImg:'./assets/img/sanpham3.jpg',
        name:"Đựng ai mua cái sản phẩm này hết nghen",
    },
    {
        pathImg:'./assets/img/sanpham4.jpg',
        name:"Mấy này để chơi cho vui thôi chứ không có bán đâu",
    },
    {
        pathImg:'./assets/img/sanpham5.jpg',
        name:"Đựng có lựa chi mắc công không có bán đâu trưng thôi",
    },
]
const gridRow = $('.grid_row-item')
for(var i = 0; i < 4; i++) {
    gridRow.innerHTML += `
    <div class="col l-2-4 m-4 c-6">
        <a class="home-product-item" href="#">
            <div class="home-product-item_img" style="background-image: url(./assets/img/chup-anh-san-pham-shynh2019-4.jpg);"></div>
            <h4 class="home-product-item_name">Bộ đồ chơi trẻ em thế hệ mới nhất</h4>
            <div class="home-product-item_price">
                <span class="home-product-item_old-price">1.200.000đ</span>
                <span class="home-product-item_current-price">900.000đ</span>
            </div>
            <div class="home-product-item_action">
                <span class="home-product-item_like">
                    <i class="home-product-item_like-icon far fa-heart"></i>
                    <i class="home-product-item_liked-icon fas fa-heart"></i>
                </span>
                <div class="home-product-item_rating">
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <span class="home-product-item_sold">88 đã bán</span>
            </div>
            <div class="home-product-item_origin">
                <span class="home-product-item_brand">Whoo</span>
                <span class="home-product-item_coutnry">Nhật bản</span>
            </div>
            <div class="home-product-item_favourite">
                <i class="fa-solid fa-check"></i>
                Yêu thích
            </div>
            <div class="home-product-item_sale-off">
                <span class="home-product-item_sale-off-percent">10%</span>
                <span class="home-product-item_sale-off-label">Giảm</span>
            </div>
        </a>
    </div>
    `
}
const htmlListitem = listItem.map((item) => {
    return `
    <div class="col l-2-4 m-4 c-6">
        <a class="home-product-item" href="#">
            <div class="home-product-item_img" style="background-image: url(${item.pathImg});"></div>
            <h4 class="home-product-item_name">${item.name}</h4>
            <div class="home-product-item_price">
                <span class="home-product-item_old-price">1.200.000đ</span>
                <span class="home-product-item_current-price">900.000đ</span>
            </div>
            <div class="home-product-item_action">
                <span class="home-product-item_like">
                    <i class="home-product-item_like-icon far fa-heart"></i>
                    <i class="home-product-item_liked-icon fas fa-heart"></i>
                </span>
                <div class="home-product-item_rating">
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="home-product-item_rating--star-gold fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <span class="home-product-item_sold">88 đã bán</span>
            </div>
            <div class="home-product-item_origin">
                <span class="home-product-item_brand">Whoo</span>
                <span class="home-product-item_coutnry">Nhật bản</span>
            </div>
            <div class="home-product-item_favourite">
                <i class="fa-solid fa-check"></i>
                Yêu thích
            </div>
            <div class="home-product-item_sale-off">
                <span class="home-product-item_sale-off-percent">10%</span>
                <span class="home-product-item_sale-off-label">Giảm</span>
            </div>
        </a>
    </div>
    `
})
gridRow.innerHTML += htmlListitem.join('')
// Mobile Click to Search
const searchBtn = $('.header__mobile-search')
const searchWrap = $('.header__search')
searchBtn.onclick = () => {
    searchWrap.classList.toggle('open');
}
