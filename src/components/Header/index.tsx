import { Box, Divider, Grid, Typography } from "@mui/material"

type HeaderProps= {
    title: string
    description: string
    element?: React.ReactNode | null
}

export const HeaderComponent: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <>
        <Box sx={{ width: "100%", height: "510px"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                <Grid item xs={12}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <Grid item><Typography variant="h1">{title}</Typography></Grid>
                        <Grid item sx={{ mt: 2 }}><Typography>{description}</Typography></Grid>
                        { element !== undefined && <Grid sx={{ mt: 4, width: "100%" }} item>{element}</Grid> }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Divider/>
        </>
    )
}
