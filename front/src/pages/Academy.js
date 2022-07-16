import React,{useState} from 'react';
// import InputTest from './components/InputTest';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    CardMedia,
    Avatar,
    RadioGroup,
    Radio,
    Box,
    Autocomplete,
    TextField,
    FormControlLabel,
    Checkbox,
    FormGroup
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Paper } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover';
import {useSelector} from "react-redux";
import {shadow} from "../styles/common/mixins";
import {Accordion, AccordionDetails, AccordionSummary, FormControl, FormLabel} from "@material-ui/core";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

function Academy() {

    const desktopSize = useSelector(state => state.browserSize);

    const filterBoxStyled = {
        borderBottom:'1px solid black'
    }

  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
            <Grid container gap={6} style={{
                minHeight : `calc(100vh - ${desktopSize.size.header})`}}>
                <Grid item xs={2} style={{border: '1px solid black'}}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownSharpIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <Card sx={{ display: 'flex',alignItems:'center',p : '1rem'}}>
                            <Box sx={{}}>
                                <Avatar sx={{ bgcolor: deepOrange[500],width: 80, height: 80 }}>FRONT</Avatar>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        과정명
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        서울특별시 강남구 강남대로94길 20 (역삼동) 삼오빌딩 9층 삼오빌딩 9층
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        02-3486-4600
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        비트캠프 강남학원
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
  );

  
}
export default Academy;
