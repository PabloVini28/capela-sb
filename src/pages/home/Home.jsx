import React, { useState, useMemo } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  styled, 
  alpha 
} from '@mui/material/styles';
import { 
  Box, 
  AppBar as MuiAppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  InputBase, 
  CssBaseline, 
  Drawer, 
  List, 
  Divider, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Fade
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';   
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import ChurchIcon from '@mui/icons-material/Church';
import EventIcon from '@mui/icons-material/Event';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const drawerWidth = 200;

const SaintCard = styled(Card)(({ theme }) => ({
  width: 280, 
  height: 380,
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  boxShadow: theme.shadows[4],
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: `1px solid ${alpha(theme.palette.common.white, 0.25)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
}));

export default function Home() {
  const [mode, setMode] = useState('dark');
  const [open, setOpen] = useState(false);
  const [activeSaint, setActiveSaint] = useState(0);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#660005' },
      background: {
        default: mode === 'dark' ? '#3B0606' : '#F5F5DC', 
        paper: mode === 'dark' ? '#660005' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#F5F5DC' : '#3B0606',
      }
    },
  }), [mode]);

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const saintsData = [
    {
      name: "São Carlo Acutis",
      img: "/src/assets/carlo-acutis.jpeg",
      desc: "Jovem italiano conhecido por sua fé e pelo uso da tecnologia para evangelização."
    },
    {
      name: "Sta. Teresinha",
      img: "/src/assets/teresinha.jpeg",
      desc: "Ensinou que a santidade está nas pequenas atitudes feitas com grande amor."
    },
    {
      name: "Virgem Maria",
      img: "/src/assets/virgemmaria.jpeg",
      desc: "Mãe de Jesus, modelo de fé, humildade e obediência a Deus."
    },
    {
      name: "São José",
      img: "/src/assets/saojose.jpeg",
      desc: "Pai adotivo de Jesus, homem justo e exemplo de trabalho e fidelidade."
    }
  ];

  const menuItems = [
    { text: 'Início', icon: <HomeIcon /> },
    { text: 'Missas', icon: <ChurchIcon /> },
    { text: 'Eventos', icon: <EventIcon /> },
    { text: 'Doações', icon: <CardGiftcardIcon /> },
  ];

  const secondaryItems = [
    { text: 'Contato', icon: <MailIcon /> },
    { text: 'Sobre', icon: <InfoIcon /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        
        <AppBar position="fixed" open={open} sx={{ bgcolor: mode === 'dark' ? '#660005' : '#F5F5DC', color: mode === 'dark' ? '#F5F5DC' : '#3B0606' }}>
          <Toolbar sx={{display:'flex', justifyContent:'space-between'}}> 
            <Box sx={{display:'flex', alignItems: 'center'}}>
              <IconButton
                  color="inherit"
                  onClick={() => setOpen(true)}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
              <MenuIcon />
              </IconButton>
              
              <Box>
                <Typography variant="h6" noWrap sx={{ fontWeight: 800 }}>
                    CAPELA SÃO SEBASTIÃO
                </Typography>
                 <Typography variant="caption" display="block">
                    Curupira Centro, Ocara, Ceará
                </Typography>
              </Box>
            </Box>

            <Box sx={{display:'flex', alignItems: 'center'}}>
              <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <Search>
                <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                <StyledInputBase placeholder="Pesquisar..." />
              </Search>
              <Avatar sx={{ ml: 2 }} alt="Perfil" src="" />
            </Box>
          </Toolbar>    
        </AppBar>

        <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader sx={{display:'flex', justifyContent:'space-between'}}>
              <Typography sx={{fontWeight:800, ml: 2}}>CAPELA S.B</Typography>
              <IconButton onClick={() => setOpen(false)}>
                  <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {menuItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {secondaryItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
              ))}
            </List>
        </Drawer>

        <Main open={open} sx={{ mt: 8, display:'flex', flexDirection:'column', gap:4, alignItems: 'center'}}>          
          
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="São Sebastião"
              height="200"
              image="/src/assets/sao-sebastiao.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontWeight={700}>São Sebastião</Typography>
              <Typography variant="body2">
               Soldado romano e mártir, símbolo de coragem e resistência.
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                sx={{ color: mode === 'dark' ? '#F5F5DC' : '#660005', fontWeight: 600 }}
              >
                Hino
              </Button>
              <Button 
                size="small" 
                sx={{ color: mode === 'dark' ? '#F5F5DC' : '#660005', fontWeight: 600 }}
              >
                Sobre
              </Button>
            </CardActions>
          </Card>

          <Typography variant="h6" textAlign="center" fontWeight={800} sx={{ mt: 2 }}>
                CONHEÇA OS SANTOS DA IGREJA
          </Typography> 

          {/* ÁREA DO CARROSSEL */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            
            {/* Exibição do Card Ativo com Transição */}
            <Fade in={true} key={activeSaint} timeout={500}>
              <SaintCard>
                <CardMedia
                  component="img"
                  alt={saintsData[activeSaint].name}
                  image={saintsData[activeSaint].img}
                  sx={{ height: 180, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {saintsData[activeSaint].name}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {saintsData[activeSaint].desc}
                  </Typography>
                </CardContent>
              </SaintCard>
            </Fade>

            {/* Radio Group controlando o Carrossel */}
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ textAlign: 'center', mb: 1, color: 'inherit' }}>
                Selecione para ver mais
              </FormLabel>
              <RadioGroup
                row
                value={activeSaint}
                onChange={(e) => setActiveSaint(parseInt(e.target.value))}
                sx={{ justifyContent: 'center' }}
              >
                {saintsData.map((_, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio color="default" sx={{ color: mode === 'dark' ? '#F5F5DC' : '#660005' }} />}
                    label={index + 1}
                    labelPlacement="bottom"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Main>
      </Box>
    </ThemeProvider>
  );
}