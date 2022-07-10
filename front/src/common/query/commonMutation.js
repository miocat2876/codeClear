import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import env from "../env";

// async function callFunction(data){
//   return await axios[method](`${env()}/${(key[1] || '')}`,data)
// }

export default function(key = [],callData = {},option = {},method,useQueryClient){
    const defaultOpntion = {
        //enabled: productDataSuccess,
        useErrorBoundary: false,
        refetchOnMount: false,
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        onMutate: (data) => {
          const queryClient = useQueryClient;
            queryClient.invalidateQueries('todos')
            // 'todos'로 시작하는 모든 쿼리들을 invalidate한다.
            // queryClient.invalidateQueries('todos');
            // const previousValue = queryClient.getQueryData('users');//이전데이터
            // console.log('previousValue', data);
            // queryClient.setQueryData('users', (old) => {//데이터 교체
            //   console.log('old', old);
            //   return [...old, data];
            // });
            console.log(data,'aasda');
            return null;
            // return previousValue;
          },
          onSuccess: (result, variables, context) => {
            // console.log('성공 메시지:', result);
            // console.log('변수', variables);
            // console.log('onMutate에서 넘어온 값', context);
            // setUserId(userId + 1);
          },
          onError: e => {
            // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
            // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
            console.log(e.message,'onError');
            return null;
          }
    };
    option =  {...defaultOpntion, ...option};
    return useMutation(async (data) => await axios[method](`${env()}/${(key[1] || '')}`,data), option); 
}