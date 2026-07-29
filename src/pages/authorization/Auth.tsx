import { useContext, useEffect, useState } from 'react';
import './ui/Auth.css';
import SignUp from './ui/sign_up/SignUp';
import UserApi from '../../entities/user/api/UserApi';
import AppContext from '../../features/_context/AppContext';
import Profile from './ui/profile/Profile';
import { rememberUser } from '../../entities/user/lib/UserLib';


const PageModes = {
    signIn: 'signIn',
    signUp: 'signUp',
    profile: 'profile',
    forgotPassword: 'forgotPassword',
} as const;

// оператор keyof берёт все ключи (имена свойств) из этой структуры.
// keyof typeof PageModes превращается в список
type PageModes = (typeof PageModes)[keyof typeof PageModes];

export default function Auth() { 
    const {user} = useContext(AppContext);


    // переключатель 
    const [pageMode, setPageMode] = useState<PageModes>(user ? PageModes.profile : PageModes.signIn);
    return user ? <Profile />:<div className='auth-container'>
        <div className='auth-form'>
            <h2 className='auth-header'>
                {pageMode == PageModes.signIn && "Enter form"}
                {pageMode == PageModes.signUp && "Registration"}
                {pageMode == PageModes.forgotPassword && "Forgot password"}
            </h2>
            <div className=' d-flex justify-content-between mx-3 gap-3'>
                <button className={`flex-1 btn ${pageMode === PageModes.signIn ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPageMode("signIn")}>Enter</button>
                <button className={`flex-1 btn ${pageMode === PageModes.signUp ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPageMode("signUp")}>Registration</button>
            </div>

            {pageMode === PageModes.signIn && <SignIn />}
            {pageMode === PageModes.signUp && <SignUp />}
            {pageMode === PageModes.forgotPassword && <ForgotPassword />}

            <div className='text-center mt-3'>
                <button className='btn btn-link' onClick={() => setPageMode(PageModes.forgotPassword)}>
                    Forgot password ?
                </button>

            </div>
        </div>
    </div>
    
}
function SignIn() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormValid, setFromValid] = useState<boolean>(false);
    const [isRememberMe, setRememberMe] = useState<boolean>(false);
    const {setUser} = useContext(AppContext);
    

    useEffect(() => {
        setFromValid(
            login.length > 2 && 
            password.length > 2
        );
    }, [login, password]);


    // отслеживапем какие-то изменения - хук useEffect(() =>
    useEffect(() => {
        setFromValid(login.length > 2 &&    // валидация формы
            password.length > 2
        );
    }, [login, password]);

     const signInClick = () => {
        setLoading(true);

        console.log("signInClick");
        UserApi.authenticate(login, password)
        .then(u => {
            // if(rememberMe)
            // забезпечуємо збереження даних користувача у постійному сховищі браузера
            console.log("User:", u);
            rememberUser(u);
            setUser(u);
        })
        .catch(err => {
            if(err === 401) {
                alert("У вході відмовлено. Перевірьте введені дані")
            }
        })
        .finally(() => {
            setLoading(false);
        });
    };
    

    return ( <div className='auth-form-content m-3 my-4'>
        <div className="input-group mb-3">
            <span className="input-group-text" 
                  id="login-addon"> 
                      <i className='bi bi-lock'></i>
            </span>
           <input className='form-control'
                type="text" 
                placeholder="Login" 
                value={login} 
                onChange={e => setLogin(e.target.value)}
                aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" 
                  id="password-addon">
                    <i className='bi bi-key'></i>
            </span>
            <input className='form-control'
                type="password" 
                placeholder="*******" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                aria-label="Password" 
                aria-describedby="password-addon" />
        </div>

        <div className='remember-me mb-3'>
            <input 
                className='remember-me-input'
                type="checkbox"
                id='rememberMe'
                checked={isRememberMe}
                onChange={e => setRememberMe(e.target.checked)} 
            />

            <label
                 className='form-check-label ms-2'
                 htmlFor='rememberMe'>
                    Remember me
            </label>
        </div>

        {isLoading && (
            <div className='text-center mb-3'>
                <div className='spinner-border text-success'>
                    <span className='visually-hidden'>
                        Loading...
                    </span>
                </div>
            </div>
        )}

        <button className={`btn ${isFormValid ? 'btn-success' : 'btn-secondary'}`}
                // во время загрузки кнопка блокируется
                disabled={!isFormValid || isLoading}
                onClick={signInClick}>
                {isLoading ? "Loading..." : "Enter"}
        </button>
    </div>
    );
}


function ForgotPassword() {
        const [email, setEmail] = useState("");
        const [birthDate, setBirthDate] = useState("");
        const [isFormValid, setFromValid] = useState(false);

        useEffect(() => {
            setFromValid(
                email.length > 2 && 
                birthDate.length > 0
            );
        }, [email, birthDate]);

         return (
        <div className='auth-form-content m-3 my-4'>
            <div className='input-group mb-3'>
                <input className='form-control' type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className='input-group mb-3'>
                <input className='form-control' type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
            </div>

            <button className={`btn ${isFormValid ? "btn-success" : "btn-secondary"}`}>
                Restore password
            </button>
        </div>
    );
}

   



/*
Работа с формами на примере задач с 'Auth'
Аутенфикация (Sign In, authentication) - задача подтверждения идентичности
(человека, прибора, узла и т.д). Чаще всего с помощью секретных данных(паролей).
В результате успешной аутенфикации видаётся цифровое "удостоверение" (token)

Авторизация (authorization) - процесс проверки токена, который передаётся в состав запроса, и 
принятие решения относительно допуска или недопуска к запрашиваемым данным.

Регистрация (Sign Up, Registration) - запрос на создание нового пользователя путём передачи 
необходимых данных

забыл пароль - задача обновления пароля

*/