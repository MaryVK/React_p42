export default class Base64 {
    static #textEncoder = new TextEncoder();
    static #textDecoder = new TextDecoder();

    static encode = (str:string) => btoa(String.fromCharCode(...Base64.#textEncoder.encode(str)));
    static decode = (str:string) => Base64.#textDecoder.decode(Uint8Array.from(atob(str), c => c.charCodeAt(0)));


    static encodeUrl = (str:string) => this.encode(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    static decodeUrl = (str:string) => this.decode(str).replace(/\+/g, '-').replace(/\//g, '/');


}

/*
JS/TS  имеют собственные Base64 инструменты, но они работают только для АСКИИ символов. 
При попытре кодировать кириллицу - возникают ошибки.
Коррекция: Юникод-символы декодируем 
*/