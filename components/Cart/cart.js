class Cart {
    handleClear(){
        ROOT_CART.innerHTML = '';
    }

    render() {
        /// Получили productsStore
        const productsStore = localStorageUtil.getProducts();
        /// Соаздем переменную htmlCatalog
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price}) => {
            if(productsStore.indexOf(id) !== - 1) {
                htmlCatalog += `
                    <tr>
                        <td class="cart-element__name">💰 ${name}   </td>
                        <td class="cart-element__price">${price.toLocaleString()} ₽  </td>
                    </tr>
                `;
                sumCatalog += price;
            }

        });



        const html = `
            <div class="cart-container">
                <div class="cart__close" onclick="cartPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="cart-element__name">💳 Сумма: </td>
                        <td class="cart-element__price">${sumCatalog.toLocaleString()} ₽  </td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_CART.innerHTML = html;
    }
}



const cartPage = new Cart();