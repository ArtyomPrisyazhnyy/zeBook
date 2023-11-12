import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../routes';
import { MAIN_ROUTE } from '../../utils/consts';
import s from '../../App.module.scss'
import { useSelector } from 'react-redux';


const AppRouter = (props) => {
    const isAuth = useSelector(({ usersPage }) => usersPage.isAdmin);

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component className={s.component} />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
        </Routes>

    )
}

export default AppRouter;
