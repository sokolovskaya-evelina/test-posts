import { type FC, useEffect, useState } from 'react'
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { type SerializedError } from '@reduxjs/toolkit'
import { Alert } from '@mui/material'

interface Props {
  error: FetchBaseQueryError | SerializedError | undefined
}

const ErrorMessage: FC<Props> = ({ error }) => {
  const [errorIsOpen, setErrorIsOpen] = useState(false)

  useEffect(() => {
    error && setErrorIsOpen(true)
    setTimeout(() => { setErrorIsOpen(false) }, 5000)
  }, [error])

  const getErrorMessage = () => {
    if (error) {
      if ('status' in error) {
        return 'error' in error ? error.error : JSON.stringify(error.data)
      } else {
        return error.message
      }
    }
  }

  return (
    errorIsOpen ? <Alert sx={{ m: 2, maxWidth: '300px' }} severity='error'>{getErrorMessage()}</Alert> : null
  )
}

export default ErrorMessage
