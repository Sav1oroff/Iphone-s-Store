class LocalStorageUtil {   /// Создание класса (Все классы называются с большой буквы!!!)
    constructor() { /// В классе(class) задаются свойства в конструкторе(constructor() )
        /* Мы видели что у элементов есть ключ "products",
        поэтому чтобы не юзать его несколько раз мы выносим его в отдельное свойство(переменную)*/
        this.keyName = 'products';
        /// Название свойства keyName
    }

    getProducts() {   /// Метод позволяющий получить все продукты которые находятся в лок.хранилище
        /// Для того чтобы получить из лок.хранилища нужно вызвать метод getItem у LocalStorage
        const productsLocalStorage = localStorage.getItem(this.keyName);
        ///Создание переменной productsLocalStorage = localStorage.ПолучитьАйтем(КлючПродукта)
        /// Если есть какое-то значение в локальном храналище - вернётся строка,иначе - null.
        if(productsLocalStorage !== null){ 
        /// Если не равно null то распарсим строку которая вернется и переводим ее в массив с помощью JSON.parse.
            return JSON.parse(productsLocalStorage);
        } /// Иначе just empty array)
            return[];
        }
    
    putProducts(id) { /// Метод позволяющий добавить какое-то значение в лок.храналище.
/// Соответственно,если мы хотим добавить значение мы передаем в этот метод(putProducts) айдишник товара который хотим добавить
        let products = this.getProducts();/// Смотрим что же было в локальном хранилище. Теперь в products находится все что находится в лок.хран.
        let pushProduct = false; ///  Переменная для понимания удален продукт или нет. Если false - продукт удален, true - добавлен
        const index = products.indexOf(id); /* Выбираем массив[products] и мы можем через indexOf(id) 
        определить,есть ли у нас совпадение с айдишником который мы передали. */


        if(index === -1) { ///index показывает какую позицию занимает id
            products.push(id); /// Пушим новый айдишник в products который нам передался
            pushProduct = true
        } else {
            products.splice(index, 1); ///Метод splice это метод массива который позволяет удалить элемент
        } 
            /* Указываем в локал.хран. куда мы хотим установить
        (keyName) и т.к мы не можем просто указать products(потому что это массив),поэтому
        делаем обратное преобразование массива в строку с помощью JSON.stringify */
        localStorage.setItem(this.keyName, JSON.stringify(products)); 

        /*В компоненте catalog нам нужно понимать,продукт добавлен в корзину либо он удалён из нее?Для того чтобы подсветить наши кнопки,
        нужно чтобы метод putProducts нам возвращал то что это новый продукт или этот продукт удалён */
        return { pushProduct,products } /// После выполнения метода pushProduct возвращаем 2 значения это сам pushProduct и массив products.
    }
}

const localStorageUtil = new LocalStorageUtil(); /// Создание экземпляра класса
