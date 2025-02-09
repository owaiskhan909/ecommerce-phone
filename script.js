var phones = [
  {
    brand: "Samsung",
    model: "Galaxy S21",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 799,
    image:
      "https://images.samsung.com/pk/smartphones/galaxy-s21/buy/s21_ultra_phantomblack_colorselection_720x720_img.jpg",
  },
  {
    brand: "Apple",
    model: "iPhone 13",
    ram: 4,
    rom: 128,
    camera: "12 megapixel",
    price: 799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEvatReGiTMRkqAO1rtghl2w1N_K2QXs9aw&s",
  },
  {
    brand: "OnePlus",
    model: "9",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 729,
    image:
      "https://img.drz.lazcdn.com/g/kf/Sd201907f2ca540dfa36c164259326067D.jpg_720x720q80.jpg",
  },
  {
    brand: "Google",
    model: "Pixel 6",
    ram: 8,
    rom: 128,
    camera: "50 megapixel",
    price: 599,
    image:
      "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/g/o/google_pixel_6-myshop-pk-13_1.jpg",
  },
  {
    brand: "Xiaomi",
    model: "Mi 11",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 749,
    image:
      "https://propakistani.pk/price/wp-content/uploads/2020/07/Xiaomi-Mi-11-price.png",
  },
  {
    brand: "Sony",
    model: "Xperia 1 III",
    ram: 12,
    rom: 256,
    camera: "12 megapixel",
    price: 1299,
    image:
      "https://starcity.pk/wp-content/uploads/2023/10/Sony-Xperia-1-mark-3-1.jpg",
  },
  {
    brand: "Oppo",
    model: "Find X3 Pro",
    ram: 12,
    rom: 256,
    camera: "50 megapixel",
    price: 1149,
    image:
      "https://www.oppo.com/content/dam/oppo/product-asset-library/find-x3-series/weu-find-x3-pro/v2/assets/product-design-phone-blue.png",
  },
  {
    brand: "Vivo",
    model: "X60 Pro",
    ram: 12,
    rom: 256,
    camera: "48 megapixel",
    price: 999,
    image:
      "https://www.whatamobile.com.pk/wp-content/uploads/2024/04/FRONT-MARG.png",
  },
  {
    brand: "Nokia",
    model: "G50",
    ram: 4,
    rom: 128,
    camera: "48 megapixel",
    price: 299,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Nokia/G50/4_zu_3_Nokia_G50.jpg",
  },
  {
    brand: "Motorola",
    model: "Edge 20",
    ram: 8,
    rom: 256,
    camera: "108 megapixel",
    price: 599,
    image:
      "https://usesinurdu.com/wp-content/uploads/2024/10/product-17446.jpg",
  },
  {
    brand: "Realme",
    model: "GT",
    ram: 12,
    rom: 256,
    camera: "64 megapixel",
    price: 499,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPV3qaXuEbnH1PNcCe0hiq1nwltKtJrnETkw&s",
  },
  {
    brand: "Asus",
    model: "ROG Phone 5",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
    image:
      "https://propakistani.pk/price/wp-content/uploads/2021/02/Asus-ROG-Phone-5-price-1.png",
  },
  {
    brand: "HTC",
    model: "Desire 21 Pro",
    ram: 8,
    rom: 128,
    camera: "48 megapixel",
    price: 399,
    image:
      "https://images.priceoye.pk/htc-desire-21-pro-5g-pakistan-priceoye-p7mny-500x500.webp",
  },
  {
    brand: "Huawei",
    model: "P40 Pro",
    ram: 8,
    rom: 256,
    camera: "50 megapixel",
    price: 899,
    image:
      "https://propakistani.pk/price/wp-content/uploads/2020/01/Huawei-P40-Pro-price.png",
  },
  {
    brand: "LG",
    model: "Wing",
    ram: 8,
    rom: 256,
    camera: "64 megapixel",
    price: 999,
    image:
      "https://www.lg.com/us/mobile-phones/wing-5g/assets/images/product/4-medium.jpg",
  },
  {
    brand: "ZTE",
    model: "Axon 20",
    ram: 8,
    rom: 128,
    camera: "64 megapixel",
    price: 399,
    image:
      "https://images.prismic.io/ztemobile/1a7091d5-79d5-42d1-8ff8-c1e5637e76fd_Phone1.png?auto=compress,format",
  },
  {
    brand: "BlackBerry",
    model: "KEY2",
    ram: 6,
    rom: 64,
    camera: "12 megapixel",
    price: 649,
    image: "https://m.media-amazon.com/images/I/718IqEmNwWL.jpg",
  },
  {
    brand: "Lenovo",
    model: "Legion Phone Duel",
    ram: 16,
    rom: 512,
    camera: "64 megapixel",
    price: 999,
    image:
      "https://images.priceoye.pk/lenovo-legion-duel-2-pakistan-priceoye-txerx-500x500.webp",
  },
  {
    brand: "Alcatel",
    model: "3L",
    ram: 4,
    rom: 64,
    camera: "48 megapixel",
    price: 199,
    image: "https://m.media-amazon.com/images/I/713-V2bRCjL.jpg",
  },
  {
    brand: "TCL",
    model: "10 Pro",
    ram: 6,
    rom: 128,
    camera: "64 megapixel",
    price: 449,
    image:
      "https://propakistani.pk/price/wp-content/uploads/2020/06/tcl-10-pro-price-in-pakistan.jpg",
  },
];

var cartItem = JSON.parse(localStorage.getItem("cartItems"));

var cartItems = function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

var div = document.querySelector("#container");

for (var i = 0; i < phones.length; i++) {
  div.innerHTML += `
    <div class="card">
            <div class="card-body">
                <h5 class="card-title">${phones[i].brand}</h5>
                <img src="${phones[i].image}" alt="${phones[i].brand} ${phones[i].model}" />
                <h6 class="card-subtitle">${phones[i].model}</h6>
                <h3>$ ${phones[i].price}</h6>
                <button onclick="addToCart(${i})" class="card-btn">Add to cart</button>
            </div>
        </div>
    `;
}

function addToCart(index) {
  var existingItem = cartItem.find(
    (item) => item.model === phones[index].model
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    let newItem = { ...phones[index], quantity: 1 };
    cartItem.push(newItem);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItem));

  Swal.fire({
    title: "Congratulations!",
    text: "You've successfully added this item to your cart. To check out and complete your purchase, please click the green 'Checkout' button below!",
    icon: "success",
  });
}

function gotocart() {
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
  window.location = "cart.html";
}

document.getElementById("scrollDownBtn").addEventListener("click", function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

document.getElementById("scrollUpBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
