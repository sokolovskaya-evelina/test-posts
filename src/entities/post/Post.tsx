import {Button, Card, CardActions, CardContent, Typography} from '@mui/material';
import React from 'react';
import {IPost} from "../../shared/api/model";

const Post = ({title, id, body}: IPost) => {
    return (
        <Card variant="outlined" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Post #{id}</Typography>
                <Typography variant="h5" component="div">{title}</Typography>
                <Typography variant="body2">
                    {`${body.length >= 20 ? body.substring(0, 50).trim() + '...' : body}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Post;