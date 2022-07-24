import React from 'react';
import ToastEditor from '../components/ToastEditor';
import { Box } from '@mui/system';
import { Button, Stack } from '@mui/material';
import { fx } from '../styles/common/mixins';
import { $CT } from '../styles/common/variables';

//https://velog.io/@ayoung0073/React-%ED%9E%98%EB%93%A4%EA%B2%8C-%EC%A0%81%EC%9A%A9%ED%95%9C-TOAST-UI-Viewer-Editor
const FreeBoardWrite = () => {
  return (
    <>
      <Box sx={{p:'2rem'}}>
        <Box sx={{mb:'1rem'}}>
          <h3>게시글 작성</h3>
        </Box>
        <ToastEditor/>
      </Box>
      <Box>
        <Stack direction="row" spacing={2} sx={{...fx({$h:$CT}),pt:'1rem'}}>
          <Button color="primary" variant="outlined">등록</Button>
          <Button color="primary" variant="outlined" onClick={()=>{}}>취소</Button>
        </Stack>
      </Box>
    </>
  );
};

export default FreeBoardWrite;