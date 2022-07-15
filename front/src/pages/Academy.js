import React,{useState} from 'react';
// import InputTest from './components/InputTest';
import {AppBar,Toolbar,IconButton,Typography,Container,Grid,Card,CardContent,CardActions,Button,CardMedia,Avatar,RadioGroup,Radio,Box,Autocomplete,TextField,FormControlLabel,Checkbox} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Paper } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover';

function Academy() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
      ];

      const [checked, setChecked] = React.useState([true, false]);

      const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
      };

      const [value, setValue] = React.useState('female');

      const handleChange = (event) => {
        setValue(event.target.value);
      };
    

  return (
    <div>
        <Container maxWidth="xl">
            <Grid container spacing={3} xs={12}>
                <Grid container item md={3} sm={12} sx={{display:'block'}}>
                    <Grid item xs={12} sx={{ display: 'flex', mt : '16px', pb : '16px', borderBottom : "1px solid black"}}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => {console.log(params); return <TextField {...params} label="Movie" />}}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt : '16px', pb : '16px', borderBottom : "1px solid black"}}>
                        {['Parent','Parent'].map((item,index)=><FormControlLabel
                            key = {index}
                            label={<div>{item}</div>}
                            control={
                                <Checkbox
                                checked={checked[0] && checked[1]}
                                indeterminate={checked[0] !== checked[1]}
                                onChange={handleChange1}
                                />
                            }
                        />)}
                    </Grid>
                    <Grid item xs={12} sx={{ mt : '16px', pb : '16px', borderBottom : "1px solid black"}}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                            sx={{justifyContent : "center"}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </Grid>
                    
                </Grid>
                <Grid container item md={9} sm={12}  sx={{}}>
                    {[1,2,3,4,5,6].map((item,index)=><Grid container key={index} item xl={3} lg={4} md={6} sm={6} xs={12} sx={{marginTop : '20px', justifyContent:'center'}}>
                    <Card sx={{ width: 250,height:200,
                                "&:hover" : {backgroundColor : 'red'}}} >
                        <CardContent sx={{display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          justifyContent: 'space-evenly',
                                          height: 'inherit'}}>
                            <Avatar sx={{ bgcolor: deepPurple[500]}}
                                        >FR</Avatar>
                            <Typography variant="body2">
                                 프론트 개발
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                        </Card>
                    </Grid>)}
                </Grid>
            </Grid>
        </Container>
    </div>
  );

  
}
export default Academy;
