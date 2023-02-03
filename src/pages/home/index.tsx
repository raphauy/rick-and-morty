import { Box, Button, CircularProgress, Container, CssBaseline, Grid, Pagination, Stack, useTheme } from "@mui/material";
import React from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC = () => {
  const [page, setPage]= React.useState(1)
  const [count, setCount]= React.useState(1)
  const [loading, setLoading]= React.useState<boolean>(true)
  const [allCharacters, setAllCharacters]= React.useState<TypeCharacter[] | null>(null);
  const { getSuccess }= useNotification()

  const handleHeroButton = () => {
    getSuccess("You have clicked the Hero Button :-)")
  };


  React.useEffect(() => {
    setLoading(true)
    characters
      .getAll({ page })
      .then((r) => {
        console.log(r.data.results);
        setCount(r.data.info.pages)
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);

  const handleChange= (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const theme = useTheme();
  const isSmallScreen = theme.breakpoints.down('sm');

  return (
    <Container sx={{ mt: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <HeaderComponent        
        title="Rick and Morty"
        description="This is a small Frontend application that uses the Rick and Morty API to test some of the beautiful Material UI components with React and TypeScript :-)"
        element={
          <Button variant="contained" onClick={handleHeroButton} className="hide-on-small-screen" >
            Hero Button
          </Button>
        }        
      />
      {
        loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress/>
          </Box>
        ) : (
          <>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
            <Pagination count={count} page={page} onChange={handleChange} variant="outlined" color="primary" sx={{ mb: 3, mt: 5 }} size="large"></Pagination>
          </Box>
            <div>
            {allCharacters ? (
              allCharacters.length !== 0 ? (
                <Grid container spacing={2} direction="row" display="flex">
                  {allCharacters.map((character) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={character.id} display="flex">
                      <CardComponent id={character.id} image={character.image} name={character.name} specie={character.species} status={character.status} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                "No se encontraron personajes"
              )
            ) : (
              "Cargando..."
            )}
          </div>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
            <Pagination count={count} page={page} onChange={handleChange} variant="outlined" color="primary" sx={{ mb: 3, mt: 5 }} size="large"></Pagination>
          </Box>
        </>
        )
      }

    </Container>
  );
};
