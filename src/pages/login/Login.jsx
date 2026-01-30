import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function SimpleContainer() {
  return (
    <Box 
        noValidate
        autoComplete="off"
        component="main"
        sx={{gap:2,backgroundColor: '#3B0606', width:'100%', minHeight:'100vh', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Box>
        <Typography variant="h4" fontWeight={800} sx={{  
            color: '#F5F5DC',
            textAlign:'center', 
            display:'flex'}}>CAPELA<br></br>SÃO SEBASTIÃO
        </Typography>
      </Box>    
      <Box>
          <TextField
          size="small"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black', 
            },

            '& .MuiFilledInput-root': {
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              '&:before': {
                borderBottomColor: 'black',
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'black',
              },
              '&:after': {
                borderBottomColor: 'black',
              },
              '&.Mui-focused': {
                backgroundColor: 'white',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#F5F5DC',
            }
          }}
          variant='filled'
          id="outlined-helperText"
          label="Email/Username"
          defaultValue=""
          helperText="Insira seu Email ou Username"
        />
      </Box>
      <Box>
          <TextField
          size="small"
          variant="filled"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black',
            },

            '& .MuiFilledInput-root': {
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              '&:before': {
                borderBottomColor: 'black',
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: 'black',
              },
              '&:after': {
                borderBottomColor: 'black',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#F5F5DC',
            }
          }}
          label="Senha"
          type='password'
          helperText="Insira sua Senha"
        />
      </Box>
      <Link 
          component={RouterLink}
          to="/register"
          underline="always"
          sx={{
          textDecorationColor: 'black', 
          '&:hover': {
              textDecorationColor: '#F5F5DC', 
          },
          }}
      >
          <Typography 
          variant="caption" 
          sx={{
              color: '#F5F5DC',
              fontWeight: '700',
          }}
          >
          Não possui uma conta? Cadastre-se!
          </Typography>
      </Link>
    </Box>
  );
}