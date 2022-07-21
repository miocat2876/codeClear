import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {InputAdornment, Stack, TextField} from "@mui/material";
import {AccountCircle} from "@material-ui/icons";
import {fx} from "../../styles/common/mixins";
import {$BL, $CT, $FE, $ST} from "../../styles/common/variables";
import { createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function MemberLoginModal({modalToggle}) {
	 const handleClose = () => modalToggle(false);

	return (
		<div>
			<Modal
				keepMounted
				open={true}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				<Box sx={style}>
					<Box
						component="form"
						sx={{
							'& .MuiTextField-root': { m: 1},
							...fx({$h:$CT}),
						}}
						noValidate
						autoComplete="off"
					>
						<div>
							<Typography variant='h6' sx={{mb:'1rem'}}>
								로그인
							</Typography>
							<Box>
								<TextField
									id="input-with-icon-textfield"
									label="아이디"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<AccountCircle />
											</InputAdornment>
										),
									}}
									variant="standard"
								/>
							</Box>
							<Box>
								<TextField
									id="input-with-icon-textfield"
									label="비밀번호"
									type="password"
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<KeyIcon />
											</InputAdornment>
										),
									}}
									variant="standard"
								/>
							</Box>
							<Box>
								<Stack direction="row" spacing={2} sx={{...fx({$h:$CT}),pt:'1rem'}}>
									<Button color="secondary" variant="outlined">로그인</Button>
									<Button color="secondary" variant="outlined" onClick={handleClose}>닫기</Button>
								</Stack>
							</Box>
						</div>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}