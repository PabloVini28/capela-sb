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
        <Typography variant="h5" fontWeight={800} sx={{  
            color: '#F5F5DC',
            textAlign:'center', 
            display:'flex'}}>CAPELA<br></br>SÃO SEBASTIÃO
        </Typography>
      </Box>
        <Box>
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
                      label="Nome Completo"
                      defaultValue=""
                      helperText="Insira seu Nome Completo"
                    />
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
                      label="Username"
                      defaultValue=""
                      helperText="Insira seu Username"
                    />
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
                      label="Email"
                      defaultValue=""
                      helperText="Insira seu Email"
                    />
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
                      label="Senha"
                      type='password'
                      defaultValue=""
                      helperText="Insira sua senha"
                    />
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
                      label="Confirme sua Senha"
                      defaultValue=""
                      helperText="Insira Novamente sua Senha"
                    />
            </Box>
            <Link 
                component={RouterLink}
                to="/login"
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
                Já possui uma conta? Clique Aqui
                </Typography>
            </Link>
        </Box>
    </Box>
  );
}