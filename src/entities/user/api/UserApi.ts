import type IUser from "../model/IUser";

export default class UserApi {
    static authenticate(login:string, password:string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {

            // одним из правил аутенфикации - осознанно заведомо ощутимое время
            // самой процедуры (приблизительно 1сек) с безопасных обдумываний

            setTimeout(() => {
                //  fetch -> JWT 
            }, 1000);

        });


    }
}

/* 
JWT 
header.payload.signature
для фронтенда интересен только payload :
sub (subject) - кому выданный токен (login)
exp (Expiration Time)
iat (Issued at)
name
email

header: {
    "alg": "HS256",
    "typ": "JWT"
} = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

payload = {
    sub: "user",
    iat: 1783440019571,
    exp: 1784649662000,
    name: "Experinced User",
    email: "user@i.ua"
} => 
{}
*/