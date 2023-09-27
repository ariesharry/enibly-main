import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  logoSrc?: string;  // Prop for logo source URL
}

const Logo: FC<Props> = ({ onClick, variant, logoSrc }) => {
  return (
    <Box onClick={onClick} sx={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={logoSrc} 
        alt="Logo" 
        style={{ 
          marginRight: '8px', 
          width: '30px',  // Set width
          height: '30px'  // Set height
        }} 
      />  {/* Logo image */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        enibly<span>.</span>
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  variant: 'primary',
  logoSrc: 'logo.png',  // Default logo source URL
};

export default Logo;
