const ROOT_PRODUCTS = document.getElementById('products'); /// Здесь создаются 3 переменные для выборки 3-х узлов
const ROOT_HEADER = document.getElementById('header');
const ROOT_CART = document.getElementById('cart');
const ROOT_SPINNER = document.getElementById('spinner');
const ROOT_ERROR = document.getElementById('error');


/* Тоесть,для того чтобы нам отрендерить весь тот js код с каталогом товаров(products.js), нам 
для начала нужно забрать наш класс products из HTML-кода, если логически подумать куда мы впихнем весь этот
контент с каталогом наших айфонов? Правильно,мы создадим рут-узел связывающий наш HTML-код и JS-код,как я и 
сказал ранее свяжем их вместе и весь отрендеренный контент из файла products.js мы впихнём в products и 
уже весь наш массив CATALOG(с товарами) будет виден на странице. */