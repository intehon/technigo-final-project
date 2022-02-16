import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Placeholder = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      {/* <Paper variant="outlined" /> */}
      <Paper elevation={3} />
    </Box>
  )
}

export default Placeholder