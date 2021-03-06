import React from 'react';
import { useRef } from 'react';

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

//https://velog.io/@ayoung0073/React-%ED%9E%98%EB%93%A4%EA%B2%8C-%EC%A0%81%EC%9A%A9%ED%95%9C-TOAST-UI-Viewer-Editor
const ToastEditor = () => {
  return (
    <div>
      <Editor
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="300px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        initialValue=" "
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock']
        ]}
      ></Editor>
    </div>
  );
};

export default ToastEditor;