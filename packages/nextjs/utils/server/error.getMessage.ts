const getErrorMessage = (e: any) => {
  let message: string = 'Database connection failed'
  if (
    typeof e === 'object' &&
    e &&
    'message' in e &&
    typeof e.message === 'string'
  ) {
    if (process.env.NODE_ENV !== 'production') console.log(e)
    message = e.message
  }
  return message
}

export { getErrorMessage }
