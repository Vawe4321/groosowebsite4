import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'Simple and minimalistic user interface for easy access to all features',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Grooso provides you with the best Deals and the best pricing',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Fast Delivery',
    description: 'With our fast delivery system, you can get your products in no time',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Support 24/7',
    description: 'Our support team is available 24/7 to help you with any questions or concerns',
    icon: <ContactSupportIcon />,
  },
]
