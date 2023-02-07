import React, { useState } from 'react';
import s from "../../App.module.scss"
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { fetchProducts } from '../../http/productsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setIsAdmin } from '../../redux/actions/users';
import { setSelectedWriter, setSelectedGenre, setSearchingProduct, setProducts, setTotalCount } from '../../redux/actions/products';

const NavBar = () => {
    const dispatch = useDispatch();

    const { isAdmin, isAuth } = useSelector(({ usersPage }) => usersPage);

    const limit = useSelector(({ productsPage }) => productsPage.limit);
    const search = useSelector(({ productsPage }) => productsPage.searchingProduct);

    const navigate = useNavigate();

    const searchProduct = () => {
        if (search != 0) {
            dispatch(setSelectedWriter({}));
            dispatch(setSelectedGenre({}));
            navigate(SHOP_ROUTE)
            fetchProducts(null, null, 1, limit, search.toLowerCase())
                .then(data => {
                    dispatch(setProducts(data.rows));
                    dispatch(setTotalCount(data.count));
                    if (data.count != 0) {
                        dispatch(setSearchingProduct(""));
                    }
                })
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        dispatch(setIsAuth(!!localStorage.getItem('token')));
        dispatch(setIsAdmin(!!localStorage.getItem('isAdmin')));
        navigate(LOGIN_ROUTE);

    }


    const zeBook = () => {
        dispatch(setSelectedWriter({}));
        dispatch(setSelectedGenre({}));
        dispatch(setSearchingProduct(""));
    }

    return (
        <header className="header">
            <div className="header__indent">

                {isAuth && isAdmin &&
                    <div
                        className="navbar_Link"
                        onClick={() => {
                            navigate(ADMIN_ROUTE)
                        }}>Админ панель</div>
                }
            </div>
            <div className="container">
                <div className="header__inner">
                    <NavLink
                        to={SHOP_ROUTE}
                        className="shop_title"
                        onClick={zeBook}>zeBook</NavLink>

                    <div className="search">
                        <input id="navbar_search"
                            className="search__input"
                            placeholder="Введите название"
                            value={search}
                            onChange={e => dispatch(setSearchingProduct(e.target.value))}
                            autoComplete="off" />

                        <div className="search_btn"
                            onClick={searchProduct}>
                            Поиск
                        </div>
                    </div>

                    {isAuth ?
                        <nav>

                            <div
                                className="navbar_Link"
                                onClick={() => {
                                    navigate(BASKET_ROUTE)
                                }}>Корзина</div>
                            <div
                                className="navbar_Link"
                                onClick={() => {
                                    logout()
                                }}>Выйти</div>
                        </nav>
                        :
                        <button onClick={() => navigate(REGISTRATION_ROUTE)}>Авторизация</button>
                    }

                </div>
            </div>

        </header>
    )
}

export default NavBar