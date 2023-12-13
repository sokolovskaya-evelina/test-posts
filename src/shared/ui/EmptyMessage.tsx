import React, {FC} from 'react';
import {Typography} from "@mui/material";

type Props = {
    isLoading: boolean
}

const EmptyMessage: FC<Props> = ({isLoading}) => {
    return (
        <Typography m={2} align={'center'}>{isLoading ? 'Loading your posts 😊' : 'Post(s) not found 😟'}</Typography>
    );
};

export default EmptyMessage;