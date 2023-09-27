import React, { FC, useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';  // Import Button from MUI

const HomeNewsLetter: FC = () => {
  const form = useRef<HTMLFormElement>(null);  // Updated this line
  const [email, setEmail] = useState('');  // Added this line
  const [submitted, setSubmitted] = useState(false);  // Added this line

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {  // Updated this line
    e.preventDefault();

    if (form.current) {  // Updated this line
      emailjs.sendForm('service_z5vzsbf', 'template_hlwlw5t', form.current, 'EMFzzp9u04woxW648')
        .then((result) => {
            console.log(result.text);
            setEmail('');  // Added this line
            setSubmitted(true);  // Added this line
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <Box id='newsletter' sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Register for Beta Tester Now!
          </Typography>
          <Typography sx={{ mb: 6 }}>Be Among the First to Experience Enibly Bot</Typography>

          <form ref={form} onSubmit={sendEmail}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                width: { xs: '100%', md: 560 },
                mx: 'auto',
              }}
            >
              <InputBase
                name="user_email"  // Added name attribute
                value={email}  // Added this line
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: { xs: 2, md: 0 },
                }}
                placeholder="Enter your Email Address"
              />
              <Box>
                <Button
                  type="submit"
                  size="large"
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '10px',
                    height: '48px',  // Set height to match the entry form
                    padding: '0 30px',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    '&:active': {
                      backgroundColor: 'primary.darker',
                    },
                    transition: 'background-color 0.3s',
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
          {submitted && (
            
            <Typography sx={{ color: 'primary.main' }}>
              <br /><b>Congratulations!</b> <br /><br /> You have registered as a Beta Tester for Enibly Bot. We will notify you by email when we are launching the Beta Tester Version.
            </Typography>
            
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeNewsLetter;
