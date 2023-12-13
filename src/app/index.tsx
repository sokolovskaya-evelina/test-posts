import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../widgets/Header";
import './index.css'
import {withProviders} from "./providers";

const App = () => {
  return (
    <div>
        <Header title={'Your posts'}/>
        <Outlet/>
    </div>
  );
}

export default withProviders(App);
