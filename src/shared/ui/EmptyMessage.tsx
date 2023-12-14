import { type FC, type ReactNode } from 'react'
import { Typography } from '@mui/material'

interface Props {
  isLoading: boolean
  text: string
  children?: ReactNode
}

const EmptyMessage: FC<Props> = ({ isLoading, text, children }) => {
  return (
        <>
            <Typography m={2} align={'center'}>{isLoading ? 'Loading your posts 😊' : `${text} 😟`}</Typography>
            {children}
        </>

  )
}

export default EmptyMessage
