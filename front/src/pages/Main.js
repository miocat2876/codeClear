import React,{useState} from 'react';
import {AppBar,Toolbar,IconButton,Typography,Container,Grid,Card,CardContent,CardActions,Button,CardMedia} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import AcademyList from '../components/AcademyList';
import { useLocation, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {colorDark} from "../store/colorTheme";

function Main() {

    const productId = useParams().productId;
    const location = useLocation();

    const todos = useSelector(state => state.colorTheme);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(colorDark('dark'));

    console.log(todos);

    console.log(location);

    const carouselStyled ={
        IndicatorIcon : <span>─</span>,
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

  return (
    <div>
        <div onClick={onCreate}>{todos.value}클릭</div>
      <Container maxWidth="xl">
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