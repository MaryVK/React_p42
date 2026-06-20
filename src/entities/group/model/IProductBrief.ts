export default interface IProductBrief {
    id: string,
    name: string,
    description?: string,
    slug?: string,
    imageUrl?: string,
    price: number,
    actionPrice?: number,
    stock?: number,   // Наявна кількість (на складі)
}

/*
Д.З. Наповнення контентом.
Створити масив за інтерфейсом IProductBrief
з ~10 обєктами, що відповідають товарам з групи
яка збігається з вашим номером у групі.
Реалізувати комбінації "пропусків" необовязкових полів.
Картинки витримувати у пропорціях як для груп.
Ідентифікація: номер групи - тире - номер товару
*/