const foodData = [
    {
        title: 'breakfast',
        _id: 'breakfast',
        images_list: [{
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/x1ee-listing.jpg',
            name: 'chicken & rice',
            price: 2.6
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/w7jh-listing.jpg',
            name: 'pork & rice',
            price: 2.6
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/l5ad-listing.jpg',
            name: 'Kouyteav tuk',
            price: 4
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/wpx9-listing.jpg',
            name: 'khmer noodle / noum banhchouk',
            price: 4.2
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/lmax-listing.jpg',
            name: 'babakrueng',
            price: 3.5
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/ai2u-listing.jpg',
            name: 'banhhay',
            price: 4
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQpRmFtG8jh1YSofo8fLvYjwHi8HPbRHp-w&s',
            name: "b'nhchev",
            price: 4
        }
        ]
    },
    {
        title: 'launch',
        _id: 'launch',
        images_list: [{
            image: 'https://ecoapp.asia/image/cache/catalog/Seller_446/Food/2-20230316151005-238x238.jpg',
            name: 'brahok khteah',
            price: 5
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6VQA9cvhtr4FpjFvCSrQ_JrWsVjXavNsNw&s',
            name: 'grilled fish',
            price: 3.2
        },
        {
            image: 'https://3.bp.blogspot.com/-e77lerIYBjs/XeCX0k0-ikI/AAAAAAAATA0/eM9gWTBD3uYWGeK1KGiRAcpHVdnCNqllACLcBGAsYHQ/s1600/XD50.jpg',
            name: 'mchou krueng',
            price: 3.5
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/fvay-listing.jpg',
            name: 'mchou bralit',
            price: 3
        },
        {
            image: 'https://i.pinimg.com/474x/ab/00/15/ab00153a2dfa0be44de1b37844fa7865.jpg',
            name: 'sachko ang tukbrahok',
            price: 12
        },
        {
            image: 'https://1.bp.blogspot.com/-sBG0CPjsK_E/Xy4pnYasPDI/AAAAAAAAcCs/GiNToqbnppE9i-B-gVCDF8ncGaTlAbf5QCLcBGAsYHQ/d/PP44547812475124%2B%25286%2529.jpg',
            name: 'k kau',
            price: 4.3
        },
        {
            image: 'https://domnor.com/admin/images/product/2024-08-22-13-43-11_1188_1.jpg?v=1',
            name: 'lauk lak',
            price: 6.5
        }
        ]
    },
    {
        title: 'dinner',
        _id: 'dinner',
        images_list: [{
            image: 'https://instalacarte.com/media/cache/mobile_image/product/4086/68890/2c2f694c0ba10a084a3f0948cf834ef1.jpg',
            name: 'cha kdaw',
            price: 7.8
        },
        {
            image: 'https://sokkhak-river.com/wp-content/uploads/2024/11/7.jpg',
            name: 'chicken',
            price: 6.5
        },
        {
            image: 'https://images.deliveryhero.io/image/fd-kh/LH/ex37-listing.jpg',
            name: 'brahok kteah',
            price: 7
        },
        {
            image: 'https://i.pinimg.com/736x/97/32/35/973235b5f5eac13abb1cfba44e45f8bb.jpg',
            name: 'tukkrueng',
            price: 6.43
        },
        {
            image: 'https://jongphov.com/wp-content/uploads/2021/08/%E1%9E%9F%E1%9F%92%E1%9E%84%E1%9F%84%E1%9E%9A%E1%9E%87%E1%9F%92%E1%9E%9A%E1%9E%80%E1%9F%8B%E1%9E%9F%E1%9E%B6%E1%9E%85%E1%9F%8B%E1%9E%98%E1%9E%B6%E1%9E%93%E1%9F%8B.jpg',
            name: 'sngao chrok',
            price: 5
        },
        {
            image: 'https://img.freepik.com/premium-photo/cambodian-fish-amok_508526-98.jpg?semt=ais_hybrid&w=740&q=80',
            name: 'amok',
            price: 10.44
        },
        {
            image: 'https://domnor.com/admin/images/product/2024-08-18-13-54-16_1188_1.jpg?v=1',
            name: 'cha chou em',
            price: 8.64
        }
        ]
    },
    {
        title: 'drinks',
        _id: 'drinks',
        images_list: [{
            image: 'https://i.pinimg.com/1200x/a6/2a/de/a62ade20ade2010e4fe53f3cef6dc419.jpg',
            name: 'passion soda',
            price: 4.35
        },
        {
            image: 'https://tiimg.tistatic.com/fp/1/009/222/sweet-sugarcane-juice-868.jpg',
            name: 'sugar cane juice',
            price: 4.35
        },
        {
            image: 'https://d1w7312wesee68.cloudfront.net/QXvar3mRjyINnIp_zy-A9RuJqPQdM323cGoCiV0hQy4/resize:fit:720:720/plain/s3://toasttab/restaurants/restaurant-187883000000000000/menu/items/3/item-1100000000033691063_1743530577.png',
            name: 'coca cola',
            price: 4.35
        },
        {
            image: 'https://i.pinimg.com/736x/a4/57/85/a457855061ffeeb5e59f6355b63fc211.jpg',
            name: 'strawbarry milk cream',
            price: 4.35
        },
        {
            image: 'https://static.vecteezy.com/system/resources/previews/027/610/033/large_2x/fresh-orange-juice-free-photo.jpg',
            name: 'fresh orang juice',
            price: 4.35

        },
        {
            image: 'https://glasslageret.no/bilder_nettbutikk/8d8881e5bb6642d56355f888b77a6b9f-image.jpeg',
            name: 'pepsi',
            price: 4.35
        },
        {
            image: 'https://i.pinimg.com/736x/f7/eb/b1/f7ebb197c164d4ffe82446d8c4cbba3f.jpg',
            name: 'kiwi soda',
            price: 4.35
        }
        ]
    },
    {
        title: 'party',
        _id: 'party',
        images_list: [{
            image: 'https://i.pinimg.com/736x/39/cc/95/39cc95639bcbbb697c6ccd28458eb8a8.jpg',
            name: 'barbecue',
            price: 39.35
        },
        {
            image: 'https://i.pinimg.com/736x/23/11/64/2311649acb7be2eaaee621546b5d4b01.jpg',
            name: 'stak',
            price: 54.35
        },
        {
            image: 'https://natashaskitchen.com/wp-content/uploads/2017/01/Lobster-Tails-9.jpg',
            name: 'grilled lobster',
            price: 76.35
        },
        {
            image: 'https://i.pinimg.com/1200x/17/3d/db/173ddb800a5eb030f1957a86256c7cdf.jpg',
            name: 'grilled squid',
            price: 37.35
        },
        {
            image: 'https://i.pinimg.com/1200x/4a/3c/0f/4a3c0f4f3d394fa40baab598fb109ab9.jpg',
            name: 'grilled garlic',
            price: 46.35
        },
        {
            image: 'https://i.pinimg.com/1200x/30/73/b0/3073b0c8f73a8bdac8c621e49dd58a87.jpg',
            name: 'oyster',
            price: 44.35
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZT3R3nL8nTDvsEP6wb-c7557hEheQWleRg&s',
            name: 'grilled chicken',
            price: 25.35
        }
        ]
    },
];

let _listfood = document.getElementById('food-section');

foodData.forEach(element => {

    let menuTable = "";
    element.images_list.forEach(item => {
        menuTable += `
            <div class="cards d-flex flex-column position-relative">
                <div class="image-section">
                    <img class="mb-3" src="${item.image}" id="image" alt="">
                </div>
                <button type="submit" class="add-btn position-absolute bg-white  border-secondary rounded-pill top-50" id="add-btn">
                    <i class="fa-solid fa-plus fw-normal" type=""btn></i>
                </button>
                <div class="sub-text">
                    <p class="price" id=""price>$${item.price}</p>
                    <p class="name text-secondary" id="name">${item.name}</p>
                </div>

            </div>
        `
    })

    _listfood.innerHTML += `
         <li id="${element._id}" class="lists d-flex flex-column gap-2 position-relative px-4">
            <h3 class="px-5">${element.title}</h3>
            <div class="food-list breakfast gap-4 d-grid">
               ${menuTable}
            </div>
        </li>
    `;
});

let purchased = JSON.parse(localStorage.getItem("myData")) || [];


_listfood.addEventListener('click', (e) => {
    e.preventDefault();
    const btn = e.target.closest('.add-btn');
    // if (!btn) return;

    const card = btn.closest('.cards')

    let purchasing = {
        s_image: card.querySelector('#image').src,
        s_name: card.querySelector('.name').textContent,
        s_price: card.querySelector('.price').textContent
    }

    purchased.push(purchasing);
    localStorage.setItem("myData", JSON.stringify(purchased))

    loadData();
})


let savingProduct = document.querySelector('.offcanvas-body');
let finalPrice = document.getElementById('total-price')
function loadData() {
    savingProduct.innerHTML = "";

    let total = 0
    purchased.forEach((element, index) => {

        let price = parseFloat(element.s_price.replace('$',''))
        total  += price;

        savingProduct.innerHTML +=
            `
            <div class="cart w-100 bg-white d-flex justify-content-between py-3 px-2 gap-2 rounded-2 ">
            <div class="image-product w-25 p-2">
            <img class="w-100 h-100 rounded-2" src="${element.s_image}" alt="">
            </div>
            <div class="product-name w-50 d-flex justify-content-center">
                <p>${element.s_name}</p>
            </div>
            <div class="w-25 text-end gap-1 px-1">
            <p class="px-3 text-secondary">${element.s_price}</p>
            <div
            class="product-amount d-flex justify-content-center gap-4 bg-body-secondary rounded-1 h-50">
            <i class="fa-regular fa-trash-can" type="button" onclick="Delete(${index})"></i>
            </div>
                    </div>
                    </div>
                    `
    })

    finalPrice.innerHTML = `<p>$${total.toFixed(2)}</p>`


}
loadData()

function Delete(index) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
    });

    if (swalWithBootstrapButtons) {
        purchased.splice(index, 1)
        loadData()
    };
}

