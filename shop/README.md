Task5
Продолжите модифицировать Ваш проект по продаже чего угодно (книги, машины, продукты,...)

Реализуйте:
1. Список товаров (по аналогии TaskFeature Area)
2. Карточку товара. Отображение отзывов о товаре в отдельном вспомогательном router-outlet
3. Добавление в корзину (по аналогии UserFeature Area)
4. Удаление из корзины
5. Формирование заказа 
6. Админку (добавление/редактирование товара, количества, цены, ..., просмотр заказов). 
   Админку защитить. Подгружать динамически, если у пользователя есть право работать как админ.
7. Любую дополнительную интересную для Вас функциональность. (опишите, что Вы реализуете в changelog).
8. Организуйте работу с localstorage/json files.

Task6
1. реализуйте бекэнд для вашего проекта, используя, например, json-server
2. создайте сервис для работы с HttpClient.
3. реализуйте часть методов по схеме Promise, а часть по схеме Observable.
4. реализуйте TimingInterceptor, который в консоль выводит длительность запросов. 
   Добавьте фильтр, чтобы время подсчитыалось только для конкретных запросов.
5. Реализуйте сервис AppSettings, который должен загружать настройки приложения из локал сторедж используя сервис LocalStorageService, разработанный ранее. Если в локал сторедж ничего нет, то загружать из файла assets/app-settings.json и при удачной загрузке записывать эти данные в локал сторедж, используя сервис LocalStorageService. Если файла нет, то устанавливать значения настроек поумолчанию.


# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
