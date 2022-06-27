import React,{useState} from 'react';
// import InputTest from './components/InputTest';
import {AppBar,Toolbar,IconButton,Typography,Container,Grid,Card,CardContent,CardActions,Button,CardMedia} from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
//https://www.npmjs.com/package/react-material-ui-carousel 캐러셀
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function Main() {
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

var menuList = [{name : '학원정보', img : './img/miocat.png'},
                {name : '후기'    , img : './img/miocat.png'},
                {name : '질문'    , img : './img/miocat.png'},
                {name : '자유'    , img : './img/miocat.png'},
                {name : '로그인'  , img : './img/miocat.png'},
                {name : 'info'    , img : './img/miocat.png'}]

  return (
    <div>
      <Container maxWidth="xl">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <HomeIcon  />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              CodeClear
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Carousel>
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
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
            {
              menuList.map((item,idx) =>  <Grid key={idx} item xs={6} sm={4} md={4}>
                  <Card key={idx} xs={{ maxWidth: 345 }}>
                    <a href="#">
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt="menu"
                        style={{objectFit: 'contain'}}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                      </CardContent>
                    </a>
                  </Card>
                </Grid>)
            }
        </Grid>
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