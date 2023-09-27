import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

const StyledCard = styled(Card)`
  border-radius: 16px;
  margin: 0 5px;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 16px 32px -16px rgba(0, 0, 0, 0.4);
  }
`;

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;  // Added this line
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={React.cloneElement(icon, { style: { color: '#127C71', fontSize: '2rem' } })}  // Updated this line
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default FeatureCard;
