import type IAlertButton from "./IAlertButton";

export default interface IAlertData {
    title?: string,
    message: string,
    buttons?: IAlertButton[],
    isCancelable?: boolean,  // можно ли закрыть сообщение кликом позади него (Esc)
    onCancel?: () => void,
}