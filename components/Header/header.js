class Header { /// Создаем класс в котором будет храниться кол-во наших товаров


    handlerOpenCartPage() {
        cartPage.render();
    }

    render(count){ /* Отображаем данные на экран с помощью render(), Так же рендер 
        принимает число продуктов переданное методово getProducts  */
        /// Делаем 2 блока,header-container и header-counter
        /// header-counter передаем значение count 
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenCartPage();">
                    💰${count}

                </div>
            </div>
        
        `;

        ROOT_HEADER.innerHTML = html ///Отображаем блок которыый мы сделали выше, с помощью рутов
    }
}

const headerPage = new Header(); /// Создание экземпляра-класса