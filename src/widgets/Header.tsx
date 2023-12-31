import { AppBar, Toolbar, Typography } from '@mui/material'
import { type FC } from 'react'

interface Props {
  title: string
}

const Header: FC<Props> = ({ title }) => {
  return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
  )
}

export default Header
