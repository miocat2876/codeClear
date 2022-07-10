import React,{useState} from 'react';
// import InputTest from './components/InputTest';
import {AppBar,Toolbar,IconButton,Typography,Container,Grid,Card,CardContent,CardActions,Button,CardMedia} from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
//https://www.npmjs.com/package/react-material-ui-carousel 캐러셀
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Header from '../layout/Header';
import AcademyList from '../components/AcademyList';
import { useLocation, useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import useMemberQuery from '../common/query/branch/useMemberQuery';

// display: flex;
//     position: absolute;
//     top: 50%;
//     flex-direction: column;
//     left: 0;
//     align-items: baseline;

function Main() {

    const productId = useParams().productId;
    const location = useLocation();

    console.log(location);

    const carouselStyled ={
        IndicatorIcon : <HomeIcon/>,
        indicatorContainerProps : {
            style: {
                display: "flex",
                position: "absolute",
                top: "50%",
                flexDirection: "column",
                left: 0,
                alignItems: "baseline",
            }
        }
    }

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

const a = useMemberQuery.members('post','','',useQueryClient());

const {id,setId} = useState('1');

const onClick = ()=>{

    a.mutate({id});
}


  return (
    <div>
      <p onClick={onClick}>123123123123123123123</p>
      <Container maxWidth="xl">
        <Header/>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Carousel {...carouselStyled}>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" color="inherit" component="div">
              {/* 개발자가 되는길,
              CodeClear가
              도와드리겠습니다! */}
            </Typography>
          </Grid>
        </Grid>
        <AcademyList/>
      </Container>
    </div>
  );
}

function Item()
{
    return (
        <Paper>
            <img src="./img/miocat.png" alt="" />
        </Paper>
    )
}

export default Main;