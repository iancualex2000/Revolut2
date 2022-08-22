import Box from "@mui/material/Box";
import {AppBar,Toolbar,IconButton,Typography,Button,Stack,Container} from "@mui/material";


const Header = () => {
    return (
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static">
                <Container maxWidth="xl">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr:2}}
                    >

                    </IconButton>
                    <Typography variant="h4" noWrap component="div" sx={{flexGrow: 1, display: {xs: "none", sm: "block", position: "absolute", left: "15%"}}}>
                        Revolut 2
                    </Typography>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{position: "absolute", right: "10%"}}  >
                        <Button variant="outlined" color="inherit">Register</Button>
                        <Button variant="outlined" color="inherit">Log In</Button>
                        
                    </Stack>    
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header;