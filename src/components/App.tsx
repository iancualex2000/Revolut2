import React from 'react';
import '../App.css';
import {Container,Box,ThemeProvider,Grid} from "@mui/material";
import theme from "../utils/theme";
import Account from "./Account";
import Header from './Header';
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Box paddingBottom={6}>
          <Header/>
        </Box>
        <Container>
          <Box paddingBottom={4}> 
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Account/>
 
            </Grid>

          </Box>


        </Container>
    </ThemeProvider>
    
    
  );
}

export default App;
