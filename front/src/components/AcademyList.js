import React from 'react';
import {AppBar,Toolbar,IconButton,Typography,Container,Grid,Card,CardContent,CardActions,Button,CardMedia} from '@material-ui/core';
const AcademyList = () => {

    
var menuList = [{name : '학원정보', img : './img/miocat.png'},
                {name : '후기'    , img : './img/miocat.png'},
                {name : '질문'    , img : './img/miocat.png'},
                {name : '자유'    , img : './img/miocat.png'},
                {name : '로그인'  , img : './img/miocat.png'},
                {name : 'info'    , img : './img/miocat.png'}]
    return (
        <>
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
        </>
    );
};

export default AcademyList;