import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Paper} from "@material-ui/core";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {center} from "../styles/common/mixins";
import menuBoard from '../assets/image/menuBoard.jpg';
import {useNavigate} from "react-router-dom";

export default function MenuList() {
	let navigate = useNavigate();
	function handleClick(link) {
		console.log(link)
		navigate(link);
	}
	return (
		<ImageList
			sx={{ width: 'calc(100% - 12rem)', height: '100%',margin : '0 6rem'}}
			variant="quilted"
			cols={4}
			rowHeight={121}
			gap={16}
		>
			{itemData.map((item,idx) => (
				<ImageListItem sx={{
					borderRadius: '2rem',
					backgroundColor : item.backgroundColor,
					cursor : 'pointer',
					}}
					onClick={()=>{handleClick(item.link)}}
                    key={idx} cols={item.cols || 1} rows={item.rows || 1}>
					{item.img && <img
						src={item.img}
						alt={item.title}
						loading="lazy"
						style={{borderRadius: '2rem'}}
					/>}
					<Box style={{...center({$top : '85%',$left:'70%'}),color:"black",fontSize:'2rem'}}>
						{item.title}
						<ArrowCircleUpIcon sx={{transform: 'rotate(90deg)',fontSize:'1.5rem'}}/>
					</Box>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		//img  : menuBoard,
		title: '학원검색',
		link : '/product/*',
		rows: 4,
		cols: 2,
		backgroundColor : 'rgb(203 189 155 / 14%)',
	},
	{
		title: '게시판',
		cols: 2,
		rows: 2,
		backgroundColor : 'rgb(186 208 234 / 31%)',
	},
	{
		title: '가입하기',
		cols: 2,
		rows: 2,
		backgroundColor : 'rgb(222 198 128 / 16%)',
	}
];
