import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Chip, Pagination, Stack, Typography} from "@mui/material";
import {fx} from "../styles/common/mixins";
import MemberJoinModal from "../components/modal/MemberJoinModal";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread1', 356, 16.0, 49, 3.9),
	createData('Gingerbread2', 356, 16.0, 49, 3.9),
	createData('Gingerbread3', 356, 16.0, 49, 3.9),
	createData('Gingerbread4', 356, 16.0, 49, 3.9),
];

export default function FreeBoardList() {
	return (
		<>
			<Box sx={{ width: 1200,py:'2rem',mx : 'auto'}} >
			<Typography variant={'h5'} sx={{py:'1rem',...fx({$h:'left'})}}>자유게시판</Typography>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell> 번호</TableCell>
								<TableCell align="center"> 제목</TableCell>
								<TableCell align="center"> 작성자</TableCell>
								<TableCell align="center"> 작성일자</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row" sx={{width:200}}>
										{row.name}
									</TableCell>
									<TableCell align="center">{row.calories}</TableCell>
									<TableCell align="center">{row.fat}</TableCell>
									<TableCell align="center">{row.carbs}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<Box spacing={2} sx={{
				display:'flex',
				justifyContent:'center',
				py:'2rem',
			}}>
				<Pagination count={10} variant="outlined" shape="rounded" />
			</Box>
		</>
	);
}