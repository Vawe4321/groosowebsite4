import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        component="img"
        src="/images/GroosoLogo1.png" // Update this path to match your logo file
        alt="Grooso Logo"
        sx={{ width: 80, height: 80, }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        Grooso
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
