import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => {
        const isExternalRoute = destination.startsWith('/')

        const commonStyles = {
          color: label === 'About Us' ? 'text.primary' : 'text.disabled',
          textDecoration: 'none',
          cursor: 'pointer',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 0, md: 3 },
          mb: { xs: 3, md: 0 },
          fontSize: { xs: '1.2rem', md: 'inherit' },
          '&:hover': {
            color: 'primary.main',
          },
        }

        return isExternalRoute ? (
          <Box key={destination} sx={commonStyles}>
            <Link href={destination} passHref >
              <a style={{ textDecoration: 'none', color: label === 'About Us' ? 'inherit' : undefined }}>
                {label}
              </a>
            </Link>
          </Box>
        ) : (
          <Box
            component={ScrollLink}
            key={destination}
            activeClass="current"
            to={destination}
            spy={true}
            smooth={true}
            duration={350}
            sx={{
              ...commonStyles,
              position: 'relative',
              '& > div': { display: 'none' },
              '&.current>div': { display: 'block' },
              '&:hover': {
                color: 'primary.main',
                '&>div': {
                  display: 'block',
                },
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                transform: 'rotate(3deg)',
                '& img': { width: 44, height: 'auto' },
              }}
            >
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
            {label}
          </Box>
        )
      })}
    </Box>
  )
}

export default Navigation
