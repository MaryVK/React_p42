/*
Централизация задач отправки запросов, кеширование результатов
*/

interface ICacheItem {
    responseBody: object,
    expires: number,
}

const cache:Record<string, ICacheItem> = { };
export default class Request {
    static getCached(url:string, conf?:object, fallback?:object): Promise<object> {
        return new Promise((resolve, reject) => {
             // url - адрес запроса (со всеми параметрами)
        // выступает в роли для кэша

        // перед запросом проверяем есть ли сохранённый кэш
        if(typeof cache[url] != 'undefined') {
            if(cache[url].expires > new Date().getTime()) {
                console.log(url, "Cache used");
                resolve(cache[url].responseBody);
                return;

            }
        }
        // в реальном проекте запускаем fetch
        // в имитации бекенда перпедаём fallback, который 
        // будут формировать API для задач тестирования

        setTimeout(() => {
            try {
                const data = fallback!;
                // сохраняем полученные данные в кэш

                cache[url] = {
                    responseBody: data,
                    expires: new Date().getTime() + 100000
                };
                resolve(cache[url].responseBody);
            }
            catch {
                reject(404);
            }
        }, 1500);
    });

    }
}