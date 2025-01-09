
var cartData = JSON.parse(localStorage.getItem('cart'));
if (cartData != null) {
    var cart = cartData
} else {
    var cart = [];
}

var button = document.querySelectorAll('.add-to-cart');
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
        var btnEvent = e.target;
        var name = btnEvent.parentElement.querySelector('.product-name').textContent;
        var price = btnEvent.parentElement.querySelector('.product-price').textContent;
        var image = btnEvent.parentElement.querySelector('img').src;
        var qty = 1;

        var product = {
            "name": name,
            "price": price,
            "image": image,
            "qty": qty
        };

        cart.push(product);

        // lưu vào trình duyệt local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        // lấy ra từ local storage
        var cartData = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('#cart-total').innerHTML = cartData.length;

        addCart(name, price, image, qty);

    });
}

function addCart(name, price, image, qty) {
    var cart_table = document.querySelector('.cart-table');
    var addtr = document.createElement('tr');
    var cart_item = `
            <tr>
                <td scope="row"><img src="${image}" alt="" height="100px"></td>
                <td>${name}</td>
                <td>${price}</td>
                <td><input type="number" value="${qty}"></td>
                <td>
                    <button onClick="deleteCart(event)">Xóa</button>
                </td>
            </tr>  
    `;
    addtr.innerHTML = cart_item;
    cart_table.append(addtr);
}

function deleteCart(e) {
    var btnEvent = e.target;
    btnEvent.parentElement.parentElement.remove();
}

function loadCart() {
    // load cart table
    var cartData = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cartData.length; i++) {
        addCart(cartData[i].name, cartData[i].price, cartData[i].image, cartData[i].qty);
    }
    // load cart total
    document.querySelector('#cart-total').innerHTML = cartData.length;
}





