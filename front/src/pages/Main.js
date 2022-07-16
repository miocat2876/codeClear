import React,{useState} from 'react';
import {Typography, Grid, IconButton, ImageList} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import {Box, ImageListItem, ImageListItemBar, Paper} from '@mui/material'
import { useLocation, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import mainSlide1 from "../assets/image/mainSlide1.jpg";
import {center} from "../styles/common/mixins";
import MenuList from "../components/MenuList";
import useMemberQuery from "../hoc/query/useMemberQuery";
import {useQueryClient} from "react-query";
import CropDinIcon from '@mui/icons-material/CropDin';

 function Main() {

    useMemberQuery(useQueryClient()).get.members();
    const productId = useParams().productId;
    const location = useLocation();

    const colorTheme = useSelector(state => state.colorTheme);

    const carouselOption ={
        IndicatorIcon : <span style={{marginLeft : '1rem'}}><CropDinIcon/></span>,
        indicatorContainerProps : {
            style: {
                display: "flex",
                position: "absolute",
                top: "50%",
                flexDirection: "column",
                left: 0,
                alignItems: "baseline",
                transform: 'translate(0,-50%)',
            }
        },
        interval : 60000,
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
    <div style={{marginBottom : '6rem'}}>
      <Box>
        <Carousel {...carouselOption}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </Box>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '90%',
                ...center({$position:'relative',$top : '85%',$left : '50%'}),
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 128,
                },
            }}
        >
            <Paper elevation={3} >
                <Typography variant="h5" color="inherit" component="div" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    국비 학원정보가 필요하신가요? CodeClear가 도와드리겠습니다.
                </Typography>
            </Paper>
        </Box>
        <Box>
            <MenuList/>
        </Box>
    </div>
  );
}

function Item()
{
    return (
        <Box sx={{height:500}}>
            <img src={mainSlide1} alt="" style={{width:'100%'}}/>
        </Box>
    )
}

export default Main;