class Products {    /// Создание класса Products
    constructor() {
        this.classNameActive = 'products-element__btn_active'; /// Обьявление названия класса
        this.labelAdd = 'Add to cart'; /// Обьявление переменной с добавлением в корзину
        this.labelRemove = 'Delete from cart'; /// Удаление из корзины
    }


    /// Вызов метода который будет находится внутри класса
    handleSetLocationStorage(element, id) {
        const { pushProduct,products } = localStorageUtil.putProducts(id);

        if(pushProduct) {
            element.classList.add(this.classNameActive); /// Добавление активного класса
            element.innerHTML = this.labelRemove; /// И добавляем надпись удалить из корзины
        } else {
            element.classList.remove(this.classNameActive); ///Удаляем активный класс
            element.innerHTML = this.labelAdd; /// Добалвяем надпись добавить в корзину
        }
    /// Добавляем это чтобы количество товаров изменялось динамечски на странице(без релоада)
        headerPage.render(products.length);
    }


    render() {   /// Метод рендер должен имется у каждого нашего элемента,он отображает данные на страницу
/// С помощью localStorageUtil мы используем его метод getProducts() и получаем все данные из файла localStorageUtil
        const productsStore = localStorageUtil.getProducts();
         /// Создаём переменную для того чтобы каждый раз наш цикл добавлял в неё новый контент из файла catalog.js
        let htmlCatalog = '';

            /* Перебираем массив CATALOG с
             помощью forEach,каждый проход по 
            циклу будет возвращать нам: 
             id,name,price,img,(Важно поставить фигурные скобки для диструктуризации),используем стрелочную функцию */
        CATALOG.forEach(({ id, name, price, img }) => { 
            let activeClass = '';  /// Переменная для задания цвета который будет обновляться при нажатии(и стилей)
            let activeText = ''; /// Переменная для задания текста который будет обновляться при нажатии(и стилей)

            /*Когда мы проходимся циклом по всем элементам,у нас так же есть айдишник текущего элементa,
            и мы через indexOf можем сравнить есть ли этот элемент в productsStore,или его нет */
            if(productsStore.indexOf(id) === -1) {/// Если совпаденией не найдено то Добавить в корзину,иначе:
                activeText = this.labelAdd /// Сверху обьявленна переменная и видно что мы записываем в activeText
            } else { /// Удалить из корзины
                activeClass = ' ' + this.classNameActive; /// Тоже самое с activeClass
                activeText = 'Delete from cart';
            }
            /// toLocaleString() метод в JS,позволяющий разделять число из 67999 в 67,999
            /// Навешиваем обработчик события onclick,чтобы мы могли по щелчку изменять локальное храналище
            
            htmlCatalog += `
                    <li class="products-element">
                    <span class="products-element__name">
                        ${name} 
                    </span>
                    <img class="products-element__img" 
                        src="${img}" 
                    />
                    <span class="products-element__price">
                        ${price.toLocaleString()} ₽
                     </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
            });
            /* После прохода по всему циклу у нас уже будет готовая переменная htmlCatalog 
            которую можно отрендерить,но прежде чем это делать,нам нужно еще вместить её в ul */
            /* Создаем переменную html и прописываем ul.products-container(для того чтобы в будущем добавить стили) и 
            добавляем нашу уже готовую переменную htmlCatalog */
            const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
            `;
            /// Рендерим нашу переменную htmlCatalog с классами li,далее рендерим переменную html  которая добавляет класс ul

            ROOT_PRODUCTS.innerHTML = html; /* Всё что мы отрендерели теперь записываем в наш блок -
             - (в .products) с помощью узла-переменной ROOT_PRODUCTS */
        }
    }
    

const productsPage = new Products(); /// Создаём экземпляр-класса