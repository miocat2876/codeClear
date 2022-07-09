import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import env from "../common/env";
// https://kdinner.tistory.com/113
// https://kyounghwan01.github.io/blog/React/react-query/basic/#usemutation
// https://maxkim-j.github.io/posts/react-query-preview

// 캐시가 있는 모든 쿼리들을 invalidate한다.
// queryClient.invalidateQueries()

// // 'todos'로 시작하는 모든 쿼리들을 invalidate한다.
// queryClient.invalidateQueries('todos')

// queryClient.invalidateQueries({
//    predicate: query =>
//      query.queryKey[0] === 'todos' && query.queryKey[1]?.version >= 10,
//  })

// const members = () => {
//     const { isLoading, isError, data, error } = 
  
//     if (isLoading) {
//       return <span>Loading...</span>;
//     }
  
//     if (isError) {
//       return <span>Error: {error.message}</span>;
//     }
  
//     return (
//       <ul>
//         {data.map(todo => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     );
//   };
export function memberUpdate(data){
    console.log(data,1231);
    return (useMutation((data) => axios.post('http://localhost:8000/user', data), {
        onMutate: (data) => {
            const queryClient = useQueryClient();
            // 'todos'로 시작하는 모든 쿼리들을 invalidate한다.
            queryClient.invalidateQueries('todos');
            const previousValue = queryClient.getQueryData('users');//이전데이터
            console.log('previousValue', data);
            queryClient.setQueryData('users', (old) => {//데이터 교체
              console.log('old', old);
              return [...old, data];
            });
      
            return previousValue;
          },
          onSuccess: (result, variables, context) => {
            console.log('성공 메시지:', result);
            console.log('변수', variables);
            console.log('onMutate에서 넘어온 값', context);
            // setUserId(userId + 1);
          },
      }))(data);

    //   const handleSubmit = useCallback(
    //     (data) => {
    //       mutation.mutate(data);
    //     },
    //     [mutation],
    //   )
    //   if (isError) return <div>에러</div>;
    //   return (
    //     <ul>
    //       {
    //         !isLoading && (
    //           data.map((i) => (
    //             <li key={i.id}>{i.name}</li>
    //           ))
    //         )
    //       }
    //       <button onClick={() => handleSubmit({id: userId, name: `test${userId}`})}>유저 추가</button>
    //     </ul>
    //   );
  }

  export default function(){
    useQuery(["members",1], () => axios.get(`${env()}/board/members/`), {
        refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
        retry: 0, // 실패시 재호출 몇번 할지
        onSuccess: data => {
          // 성공시 호출
          console.log(data);
        },
        onError: e => {
          // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
          // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
          console.log(e.message);
        }
      })
  }