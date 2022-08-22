import {Grid,Paper,Typography,Box,Stack,Button,TextField} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../hooks";
import { decrement, increment } from "../features/counter/counterSlice";
import React, { useDeferredValue } from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from "react";
const Account = () => {

    const {value} = useAppSelector((state) => state.counter)
    const dispatch = useAppDispatch()
    const [amount, setAmount] = useState("");

    function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name,value} = event.target
        setAmount(value);
    }


    return(
        <div>
            <Grid item xs={12}>
                <Paper elevation={4} sx={{width: "300px", height: "250px"}}>
                    <Box padding={1}>
                        <Typography variant="h5" textAlign="center">
                            Amount
                        </Typography>
                        <Typography variant="h6" textAlign="center">
                            {value}
                             <AttachMoneyIcon fontSize='medium'/>
                             
                        </Typography>
                    </Box>
                    <Box padding={1} paddingLeft={12} paddingRight={12} justifyContent="center" alignItems="center">
                        <TextField id="outlined-number" label="Amount" type='number' InputLabelProps={{shrink: true}} value={amount} onChange={handleAmountChange}/>
                    </Box>
                    <Box padding={2}>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <Button color="inherit" variant="outlined" onClick={() => {dispatch(increment(Number(amount)))}}>Add Money</Button>
                            <Button color="inherit" variant="outlined" onClick={() => {dispatch(decrement(Number(amount)))}}>Withdraw</Button>
                        </Stack>

                    </Box>
                    
                </Paper>
            </Grid>
        </div>
        
    )
}

export default Account;