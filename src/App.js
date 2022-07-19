import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/UserLayout/MainPage";
import MainContent from "./components/UserLayout/MainContent";
import MainPageAdmin from "./components/AdminLayout/MainPageAdmin";
import ContentArea from "./components/AdminLayout/ContentArea/ContentArea";

export default function App(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<MainPage />} >
                    <Route index element={<MainContent />}/>
                </Route>
                <Route path={"/admin"} element={<MainPageAdmin />} >
                    <Route index element={<ContentArea />}/>
                </Route>
            </Routes>
        </div>
    )
}
