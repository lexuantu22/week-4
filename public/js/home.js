window.addEventListener("load", function () {
  getCategories();
});
const showCategory = document.querySelector(".category_title");
const category = document.querySelector(".category-list");
var mobiLeScreen = window.matchMedia("(max-width : 1000px");
if (mobiLeScreen.matches) {
  category.classList.add("toggle");
}
showCategory.addEventListener("click", function () {
  category.classList.toggle("toggle");
});

const btnfilters = document.querySelectorAll(".btn-toggle");

btnfilters.forEach((btnfilter) =>
  btnfilter.addEventListener("click", function () {
    btnfilters.forEach((el) => el.classList.remove("btn-bgr"));
    btnfilter.classList.add("btn-bgr");
  })
);

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup_img span");
closePopup.addEventListener("click", function () {
  popup.style.display = "none";
});

function getCategories() {
  let url = "https://shopee.p.rapidapi.com/shopee.co.id/list-all-categories";
  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "shopee.p.rapidapi.com",
      "x-rapidapi-key": "a82f3fade7mshfb6d9fbb9e4625ep138c73jsna5dede87c51a",
    },
  })
    .then((response) => response.json())

    .then((product) => {
      let string = "";
      let string1 = "";
      product.data.categories.forEach(function (value) {
        //   console.log(value);
        string += `<li class="category-item item-next">
        <a href="${value.main.category_image}" class="category-item__link">${value.main.category_name}</a>
         </li>`;

        string1 += `<div class="col-6 col-sm-4 col-md-4 col-lg-2">
         <a class="home-product-item product_item">
           <div class="home-product-item_img" style="background-image: url(${value.main.category_image});"></div>
           <h4 class="home-product-item_name">${value.main.category_name}</h4>
           <div class="home-product-item_price">
               <span class="home-product-item_price-old">26.999.000đ</span>
               <span class="home-product-item_price-curent">${value.main.category_id}</span>

           </div>
           <div class="home-product-item_action">
               <span class="home-product-item_like">
                 <i class="far fa-heart"></i>
                 <!-- <i class="fas fa-heart"></i> -->
               </span>
               <div class="home-product-item_rating">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="home-product-item_no_ratring fas fa-star"></i>
               </div>
               <span class="home-product-item_sold">10 Đã bán<nav></nav></span>
           </div>
           <div class="home-product-item_origin">
               <span class="home-product-item_brand">Apple</span>
               <span class="home-product-item_origin-name">Việt Nam</span>
           </div>
           <div class="home-product-item_favourit">
             <i class="fas fa-check"></i>
             Yêu thích
           </div>
           <div class="home-product-item_sale-off">
               <span class="home-product-item_sale-off-percent">10%</span>
               <div class="home-product-item_sale-off-label">GIẢM</div>
           </div>

       </a>  
       </div>`;
        //  console.log( value);
      });
      document.getElementById("list").innerHTML = string;
      //   document.getElementById('product').innerHTML = string1
      document.querySelector(".js-list").innerHTML = string1;
      //   console.log(data.data.categories);
    });
}

