import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { login, registration } from '../../http/userAPI';
import { useDispatch } from 'react-redux';
import { setIsAdmin, setIsAuth, setUser } from '../../redux/actions/users';

const Auth = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
                console.log(data);
                if (data.roles[0].value === "ADMIN") {
                    localStorage.setItem('isAdmin', true)
                }

            } else {
                data = await registration(email, password);
                console.log(data);
                setIsAdmin(true);
            }
            dispatch(setUser(data));
            dispatch(setIsAdmin(!!localStorage.getItem('isAdmin')));
            dispatch(setIsAuth(true));
            navigate(MAIN_ROUTE)
        } catch (e) {
            console.log(e.response.data.message);
        }


    }

    return (
        <div className="auth">
            <div className="container">
                <h1>{isLogin ? "Авторизация" : "Регистрация"}</h1>
                <form className="form">
                    <input
                        type="email"
                        placeholder='Введите ваш e-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </form>

                <div className="login">
                    <button onClick={click} >
                        {isLogin ? "Войти" : "Зарегистрироваться"}
                    </button>
                    {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Auth;
