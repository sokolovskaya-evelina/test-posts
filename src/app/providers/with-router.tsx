import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {LinearProgress} from "@mui/material";

export const withRouter = (component: () => React.ReactNode) => () => {
    return (
        <BrowserRouter>
            <Suspense
                fallback={<LinearProgress/>}
            >
                {component()}
            </Suspense>
        </BrowserRouter>
    )
}