import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardProps= {
  id: number
  image: string
  name: string
  specie: string
  status: string
}

export const CardComponent: React.FC<CardProps> = ({ id, image, name, specie, status }) => {
  let navigate= useNavigate()

  const handleSeeMore= () => {
    navigate(`/character/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <CardMedia
        component="img"
        image= {image}
        alt={name}
        onClick={handleSeeMore}
        sx={{ cursor: 'pointer', '&:hover': { cursor: 'pointer' }}}
      />
      <CardContent>
        <Typography sx={{ mb:1.5 }} fontSize={25}>{name}</Typography>
        <Divider/>
        <Typography sx={{ mt:1.5 }}>Specie: {specie}</Typography>
        <Typography sx={{ mt:1.5 }}>Status: {status}</Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto", width: "100%" }}>
          <Button fullWidth variant="contained" size="small" onClick={() => navigate(`/character/${id}`)}>
            See More
          </Button>
        </CardActions>
    </Card>
  );
};
