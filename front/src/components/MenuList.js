import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {center, fx} from "../styles/common/mixins";
import menuBoard from '../assets/image/menuBoard.jpg';
import {useNavigate} from "react-router-dom";
import {Box, InputAdornment, Typography} from "@mui/material";
import MemberJoinModal from "./modal/MemberJoinModal";
import {$CT} from "../styles/common/variables";
import {AccountCircle} from "@material-ui/icons";
import {useState} from "react";

export default function MenuList() {
	const [isModal,setIsModal] = useState(false);
	let navigate = useNavigate();
	function handleClick(item) {
		if(item.isModal){
			setIsModal(true);
		}else{
			navigate(item.link);
		}
	}

	function modalToggle(isModal){
		setIsModal(isModal);
	}

	return (
		<>
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
						onClick={()=>{handleClick(item)}}
	                    key={idx} cols={item.cols || 1} rows={item.rows || 1}>
							{item.img &&
							<img
								src={item.img}
								alt={item.title}
								loading="lazy"
								style={{borderRadius: '2rem'}}
							/>}
							<Box style={{...center({$top : '85%',$left:'70%'}),...fx({$v:$CT}),color:"black",fontSize:'2rem'}}>
								<Typography variant="h5">{item.title}</Typography>
								<ArrowCircleUpIcon sx={{transform: 'rotate(90deg)',fontSize:'1.5rem'}}/>
							</Box>
					</ImageListItem>
				))}
			</ImageList>
			{isModal && <MemberJoinModal modalToggle={modalToggle}/>}
		</>
	);
}

const itemData = [
	{
		//img  : menuBoard,
		title: '학원검색',
		link : '/academy/*',
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
		isModal : true,
		cols: 2,
		rows: 2,
		backgroundColor : 'rgb(222 198 128 / 16%)',
	}
];
