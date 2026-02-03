import React, { useState, useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  alpha,
} from "@mui/material/styles";
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
  Fade,
  Avatar,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import ChurchIcon from "@mui/icons-material/Church";
import EventIcon from "@mui/icons-material/Event";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 200;

const SaintCard = styled(Card)(({ theme, height }) => ({
  width: "100%",
  height,
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s ease-in-out",
  "&:hover": { transform: "scale(1.02)" },
  backgroundColor: theme.palette.background.paper,
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "overlay",
})(({ theme, open, overlay }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  ...(overlay
    ? {}
    : {
        marginLeft: `-${drawerWidth}px`,
        transition: theme.transitions.create("margin", {
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          transition: theme.transitions.create("margin", {
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }),
      }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "overlay",
})(({ theme, open, overlay }) => ({
  ...(overlay
    ? {}
    : {
        transition: theme.transitions.create(["margin", "width"], {
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(["margin", "width"], {
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: theme.spacing(2),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
}));

export default function Home() {
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#660005" },
          background: {
            default: mode === "dark" ? "#3B0606" : "#F5F5DC",
            paper: mode === "dark" ? "#660005" : "#FFFFFF",
          },
          text: { primary: mode === "dark" ? "#F5F5DC" : "#3B0606" },
        },
      }),
    [mode],
  );

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const allSaints = [
    {
      name: "São Carlo Acutis",
      img: "/src/assets/saintsImages/carlo-acutis.jpeg",
      desc: "Ciberapóstolo da Eucaristia; exemplo de fé para a juventude moderna.",
    },
    {
      name: "Sta. Teresinha",
      img: "/src/assets/saintsImages/teresinha.jpeg",
      desc: "Mestra da 'Pequena Via'; santidade no amor às pequenas coisas.",
    },
    {
      name: "Virgem Maria",
      img: "/src/assets/saintsImages/virgemmaria.jpeg",
      desc: "Mãe de Deus e nossa; modelo supremo de fé e humildade.",
    },
    {
      name: "São José",
      img: "/src/assets/saintsImages/saojose.jpeg",
      desc: "Protetor da família; exemplo de justiça, silêncio e trabalho.",
    },
    {
      name: "S. Pe. Pio",
      img: "/src/assets/saintsImages/padre-pio.jpeg",
      desc: "Humilde frade dos estigmas; mestre da oração e da misericórdia.",
    },
    {
      name: "Sta. Dulce",
      img: "/src/assets/saintsImages/santa-dulce.jpeg",
      desc: "'Anjo Bom da Bahia'; modelo de caridade e serviço aos pobres.",
    },
    {
      name: "S. Francisco",
      img: "/src/assets/saintsImages/sao-francisco.jpeg",
      desc: "Apóstolo da paz e natureza; exemplo de pobreza e alegria.",
    },
    {
      name: "Sta. Rita",
      img: "/src/assets/saintsImages/santa-rita.jpeg",
      desc: "Padroeira do impossível; exemplo de perdão e paciência.",
    },
    {
      name: "S. Antônio",
      img: "/src/assets/saintsImages/santo-antonio.jpeg",
      desc: "Padroeiro dos pobres e famílias; o 'Martelo dos Hereges'.",
    },
    {
      name: "S. Judas Tadeu",
      img: "/src/assets/saintsImages/sao-judas-tadeu.jpeg",
      desc: "Apóstolo fiel; patrono das causas desesperadas e aflitas.",
    },
    {
      name: "Sta. Bernadette",
      img: "/src/assets/saintsImages/santa-bernadette.jpeg",
      desc: "Mensageira de Lourdes; exemplo de humildade e pureza.",
    },
    {
      name: "S. João Paulo II",
      img: "/src/assets/saintsImages/sjpii.jpeg",
      desc: "Papa da juventude; apóstolo da paz e dignidade humana.",
    },
    {
      name: "Sta. Faustina",
      img: "/src/assets/saintsImages/santa-faustina.jpeg",
      desc: "Secretária da Misericórdia; propagadora do amor divino.",
    },
    {
      name: "S. Bento",
      img: "/src/assets/saintsImages/sao-bento.jpeg",
      desc: "Protetor contra o mal; mestre da oração e do trabalho.",
    },
    {
      name: "Sta. Clara",
      img: "/src/assets/saintsImages/santa-clara.jpeg",
      desc: "Luz da Eucaristia; exemplo de pobreza e adoração profunda.",
    },
    {
      name: "S. Agostinho",
      img: "/src/assets/saintsImages/santo-agostinho.jpeg",
      desc: "Doutor da Graça; modelo de busca pela verdade e conversão.",
    },
  ];

  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(allSaints.length / itemsPerPage);
  const currentSaints = allSaints.slice(
    activePage * itemsPerPage,
    (activePage + 1) * itemsPerPage,
  );

  const next = () => {
    setActivePage((i) => Math.min(i + 1, totalPages));
  };

  const prev = () => {
    setActivePage((i) => Math.max(i - 1, 0));
  };

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          open={open}
          overlay={isMobile}
          sx={{
            bgcolor: mode === "dark" ? "#660005" : "#F5F5DC",
            color: mode === "dark" ? "#F5F5DC" : "#3B0606",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  CAPELA SÃO SEBASTIÃO
                </Typography>
                <Typography variant="caption" display="block">
                  Com o testemunho de São Sebastião, partilhamos o amor de
                  Cristo
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <Search>
                <Box
                  sx={{
                    p: "16px",
                    height: "100%",
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SearchIcon />
                </Box>
                <StyledInputBase placeholder="Pesquisar..." />
              </Search>
              <Avatar sx={{ ml: 2 }} alt="Perfil" src="" />
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
          variant={isMobile ? "temporary" : "persistent"}
          // variant="persistent"
          anchor="left"
          open={open}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 800, flexGrow: 1, ml: 1 }}>
              CAPELA S.B
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {["Início", "Missas", "Santos", "Eventos", "Doações"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 && <HomeIcon />}
                      {index === 1 && <ChurchIcon />}
                      {index === 2 && <EmojiObjectsIcon />}
                      {index === 3 && <EventIcon />}
                      {index === 4 && <CardGiftcardIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ),
            )}
          </List>
          <Divider />
          <List>
            {["Contato", "Sobre"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <MailIcon /> : <InfoIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Main
          open={open}
          overlay={isMobile}
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Card sx={{ maxWidth: 500, width: "100%" }}>
            <CardMedia
              component="img"
              height="240"
              image="/src/assets/saintsImages/sao-sebastiao.png"
              alt="São Sebastião"
            />
            <CardContent>
              <Typography variant="h5" fontWeight={800} gutterBottom>
                São Sebastião
              </Typography>
              <Typography variant="body2">
                São Sebastião foi um capitão da guarda romana e mártir cristão
                do século III. Conhecido por sua fé inabalável, ele sobreviveu
                ao suplício das flechas, mas deu a vida por Cristo pouco depois
                ao enfrentar o imperador Diocleciano. É invocado como protetor
                contra as pestes, padroeiro dos soldados e um símbolo universal
                de coragem e resistência na Igreja Católica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: mode === "dark" ? "#F5F5DC" : "#660005",
                  fontWeight: 700,
                }}
              >
                Hino
              </Button>
              <Button
                size="small"
                sx={{
                  color: mode === "dark" ? "#F5F5DC" : "#660005",
                  fontWeight: 700,
                }}
              >
                Sobre
              </Button>
            </CardActions>
          </Card>

          <Typography variant="h6" fontWeight={800} sx={{ mt: 3 }}>
            CONHEÇA MAIS SOBRE OS SANTOS DA IGREJA CATÓLICA
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Fade in={true} key={activePage} timeout={600}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
                  gap: 2,
                  width: "100%",
                  mt: 2,
                }}
              >
                {isMobile ? (
                  <SaintCard key={0} elevation={4} height={450}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={currentSaints[0].img}
                      alt={currentSaints[0].name}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                      <Typography variant="subtitle2" fontWeight={700}>
                        {currentSaints[0].name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          opacity: 0.8,
                          lineHeight: 1.1,
                          display: "block",
                          mt: 0.5,
                        }}
                      >
                        {currentSaints[0].desc}
                      </Typography>
                    </CardContent>
                  </SaintCard>
                ) : (
                  currentSaints.map((saint, index) => (
                    <SaintCard key={index} elevation={4} height={310}>
                      <CardMedia
                        component="img"
                        height="210"
                        image={saint.img}
                        alt={saint.name}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                        <Typography variant="subtitle2" fontWeight={700}>
                          {saint.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            opacity: 0.8,
                            lineHeight: 1.1,
                            display: "block",
                            mt: 0.5,
                          }}
                        >
                          {saint.desc}
                        </Typography>
                      </CardContent>
                    </SaintCard>
                  ))
                )}
              </Box>
            </Fade>
            {isMobile ? (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <IconButton onClick={prev} disabled={activePage === 0}>
                    <ArrowBack />
                  </IconButton>

                  <IconButton
                    onClick={next}
                    disabled={activePage === totalPages - 1}
                  >
                    <ArrowForward />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
                  Páginas de Santos
                </Typography>
                <RadioGroup
                  row
                  value={activePage}
                  onChange={(e) => setActivePage(parseInt(e.target.value))}
                  sx={{ gap: 1 }}
                >
                  {[...Array(totalPages)].map((_, i) => (
                    <Radio
                      key={i}
                      value={i}
                      sx={{
                        color: mode === "dark" ? "#F5F5DC" : "#660005",
                        "&.Mui-checked": {
                          color: mode === "dark" ? "#F5F5DC" : "#660005",
                        },
                        padding: "4px",
                      }}
                    />
                  ))}
                </RadioGroup>
              </Box>
            )}
          </Box>

          <Box
            component="footer"
            sx={{
              width: "100%",
              mt: 8,
              py: 6,
              px: 4,
              backgroundColor: mode === "dark" ? "#660005" : "#E8E8D0",
              color: mode === "dark" ? "#F5F5DC" : "#3B0606",
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              justifyContent="space-around"
              alignItems="flex-start"
              sx={{ mb: 4, textAlign: "left" }}
            >
              <Box sx={{ maxWidth: 300 }}>
                <Typography variant="h6" fontWeight={800} gutterBottom>
                  CAPELA SÃO SEBASTIÃO
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Um lugar de fé, esperança e caridade no coração do Curupira.
                  Unidos em Cristo e sob a intercessão de nosso padroeiro.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  MISSAS
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Domingos: 19:00h
                  <br />
                  Quintas-feiras: 19:00h (Adoração)
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  LOCALIZAÇÃO
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Rua Principal, S/N - Curupira Centro
                  <br />
                  Ocara - CE | CEP: 62755-000
                </Typography>
              </Box>
            </Stack>
            <Divider
              sx={{
                borderColor: alpha(
                  mode === "dark" ? "#F5F5DC" : "#3B0606",
                  0.1,
                ),
              }}
            />
            <Typography variant="caption" sx={{ opacity: 0.5 }}>
              © {new Date().getFullYear()} Capela São Sebastião - Todos os
              direitos reservados.
            </Typography>
          </Box>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
