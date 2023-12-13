import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {FC} from "react";

type Props = {
    title: string
}

const Header: FC<Props> = ({title}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header