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
    FormGroup,
    Stack,
    Pagination,
    Chip,
    InputLabel,
    InputAdornment, AccordionSummary, Accordion, AccordionDetails, FormControl, Input
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Paper } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover';
import {useSelector} from "react-redux";
import {shadow} from "../styles/common/mixins";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import SearchIcon from '@mui/icons-material/Search';

function Academy() {

    const desktopSize = useSelector(state => state.browserSize);

    const filterBoxStyled = {
        borderBottom:'1px solid black'
    }

    const tempData = [{
        'title'   : '샘플과정1',
        'address' : '강남구 머시기 학원1' 
    },
    {
        'title'   : '샘플과정2',
        'address' : '강남구 머시기 학원2' 
    },
    {
        'title'   : '샘플과정3',
        'address' : '강남구 머시기 학원3' 
    },
    {
        'title'   : '샘플과정3',
        'address' : '강남구 머시기 학원3' 
    },
    {
        'title'   : '샘플과정3',
        'address' : '강남구 머시기 학원3' 
    }]

    //

    /*

        훈련지역
        카테고리
        훈련일자
        학원명
    */

  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={3} style={{
                // minHeight : `calc(100vh - ${desktopSize.size.header})`
                }}>
                <Grid item xs={2} style={{}}>
                    <Paper>
                        <Typography sx={{py:'1rem'}}>학원찾기</Typography>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<KeyboardArrowDownSharpIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>훈련지역</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="서울" />
                                    <FormControlLabel control={<Checkbox />} label="경기" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<KeyboardArrowDownSharpIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>카테고리</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="프론트엔드" />
                                    <FormControlLabel control={<Checkbox />} label="백엔드" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded="true">
                            <AccordionSummary
                                expandIcon={<KeyboardArrowDownSharpIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>훈련일자</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="서울" />
                                    <FormControlLabel control={<Checkbox />} label="경기" />
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Box sx={{p:'1rem',textAlign:'left'}}>
                            <FormControl variant="standard">
                                <Input
                                id="input-with-icon-adornment"
                                placeholder='학원검색'
                                startAdornment={
                                    <InputAdornment position="start">
                                    <SearchIcon />
                                    </InputAdornment>
                                }
                                />
                            </FormControl>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h5" sx={{my : 2,textAlign:'left'}}>
                        학원목록
                    </Typography>
                    <Grid container xs={12} spacing={3}>
                        {
                            tempData.map((data,idx)=>
                                <Grid item xs={4} key={idx}>
                                    <Card sx={{ display: 'flex',justifyContent:'center',alignItems:'center',p : '1rem', mb:2}}>
                                        <Box sx={{}}>
                                            <Avatar sx={{ bgcolor: deepOrange[500],width: 80, height: 80 }}>FRONT</Avatar>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {data.title}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {data.address}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    02-3486-4600
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    비트캠프 강남학원
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                <Stack direction="row" spacing={1} sx={{display:'flex',alignItems:'end'}}>
                                                    <Chip label="primary" color="primary" variant="outlined" />
                                                    <Chip label="success" color="success" variant="outlined" />
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            )}
                    </Grid>
                    <Box spacing={2} sx={{
                        display:'flex',
                        justifyContent:'center',
                        py:'2rem',
                        }}>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
  );

  
}
export default Academy;
