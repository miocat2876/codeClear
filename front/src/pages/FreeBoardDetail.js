import React from 'react';
import {Box, Button, Chip, Grid, Link, Paper, Stack, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {fx} from "../styles/common/mixins";
import { $CT } from '../styles/common/variables';

const FreeBoardDetail = () => {


	return (
		<>
			<Box sx={{margin:'auto',width:'1000px',p:'1rem'}}>
				<Box  sx={{...fx({$v:'cennter',$h:'right',gap:'10'})}}>
					<Chip label="수정" variant="outlined" color="info" size="small" deleteIcon={<BorderColorIcon />} onDelete={()=>{}}
					sx={{mx:'0.25rem',cursor:'pointer','&:hover':{
							border : '0px',
							p : '1px'
						}}}/>
					<Chip label="삭제" variant="outlined" color="error" size="small" deleteIcon={<BorderColorIcon />} onDelete={()=>{}}
					      sx={{mx:'0.25rem',cursor:'pointer','&:hover':{
							      border : '0px',
							      p : '1px'
						      }}}/>
				</Box>
				<Box sx={{textAlign:'left',py:'2rem'}}>
					<Typography variant="h4">
						제목
					</Typography>
				</Box>
				<Box sx={{textAlign:'left'}}>
					<Chip icon={<AccountCircleIcon/>} label="미오캣" />
				</Box>
				<Box sx={{textAlign:'left',py:'2.5rem',minHeight:'500px'}}>
						asd
				</Box>
			</Box>
			<Box>
				<Stack direction="row" spacing={2} sx={{...fx({$h:$CT}),pt:'1rem'}}>
					<Button color="primary" variant="outlined" onClick={()=>{}}>확인</Button>
				</Stack>
			</Box>
		</>
	);
};

export default FreeBoardDetail;