import React, {FC, ReactNode} from 'react';
import {Typography} from "@mui/material";

type Props = {
    isLoading: boolean
    text: string,
    children?: ReactNode
}

const EmptyMessage: FC<Props> = ({isLoading, text, children}) => {
    return (
        <>
            <Typography m={2} align={'center'}>{isLoading ? 'Loading your posts 😊' : `${text} 😟`}</Typography>
            {children}
        </>

    );
};

export default EmptyMessage;