import {Route, Routes } from 'react-router-dom'

// components
import DisplayHomePage from '../Components/DisplayHomePage/DisplayHomePage';
import DisplayTest from '../Components/DisplayTest/DisplayTest';
import Layout from '../Layout/Layout';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<DisplayHomePage />}></Route>
                    <Route path='/Home' element={<DisplayHomePage />}></Route>
                    <Route path='/test/:time/:difficulty' element={<DisplayTest />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default AppRoutes;
