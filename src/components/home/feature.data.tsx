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
    title: 'Simple Setup',
    description: 'Connecting your data sources is a straightforward process. With easy setup options.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Web or Files',
    description: ' Whether it’s data from the web, files on your computer, or repositories on GitHub, Enibly Bot can handle it all.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Real-Time Access',
    description: 'Get real-time access to your data whenever you need it.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Secure',
    description: 'Your data’s security is our priority, secure and private.',
    icon: <ContactSupportIcon />,
  },
]

export const data2: Data[] = [
  {
    title: 'Tailor-Made',
    description: 'Customize prompts to fit your style and preferences.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Easy Setup',
    description: 'With just a few simple clicks, you can set up personalized prompts.',
    icon: <AttachMoneyIcon />,
  },
]
