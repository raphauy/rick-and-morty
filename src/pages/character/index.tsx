import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
import { Box, Button, Chip, CircularProgress, Container, CssBaseline, Divider, Grid, Typography } from "@mui/material";

export const CharacterPage: React.FC = () => {
  const { id } = useParams();
  let navigate= useNavigate()

  const [loading, setLoading]= React.useState<boolean>(true)
  const [character, setCharacter]= React.useState<ICharacter | null>(null)

  console.log("id: " + id);
  React.useEffect(() => {
    characters
        .getById({ id })
        .then( (r) => {
            setCharacter(r.data)
            setLoading(false)
        })
        .catch( (error) => console.error(error))
  }, []);

  const handleHomeButton= () => {
    navigate("/")
  }

  return (
    <>
        <Box >
            <Container >
            <CssBaseline />
                {
                    loading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Box>
                            <Grid container columnSpacing={2} 
                                sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                                <Grid item>
                                    <Typography variant="h1" width="300px" fontSize="50px">{character!.name}</Typography>
                                    <Divider/>
                                    <Typography variant="h6">{character!.origin.name}</Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Chip color="primary" variant="outlined" label={character!.status} sx={{ mb: 2 }}/>
                                    </Box>
                                </Grid>
                                <Grid item width="300px">
                                    <img src={character!.image} style={{ width: "100%", borderRadius: "0.5em" }} />
                                </Grid>
                            </Grid>
                            <Button variant="contained" 
                                    onClick={handleHomeButton} 
                                    sx={{ mt:8 }} >
                                    Home
                            </Button>
                        </Box>
                    )
                }
            </Container>
            
        </Box>
    </>
  )
};
