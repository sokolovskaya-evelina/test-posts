import React from 'react';
import Header from "../widgets/Header";
import './index.css'
import {withProviders} from "./providers";
import MainPage from "../pages/main-page";

const App = () => {
  return (
    <div>
        <Header title={'Your posts'}/>
        <MainPage/>
    </div>
  );
}

export default withProviders(App);
