import axios from "axios";
import { useQuery } from "react-query";
import {useCallback} from "react";

export default function(queryKey, url, callData,option, useQueryClient){

    const defaultOpntion = {
        //enabled: productDataSuccess,
        delay : 1000,
        useErrorBoundary: false,
        refetchOnMount: false,
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        onSuccess: data => {
            // 성공시 호출
            console.log(data,'onSuccess');
          },
        isLoading : data =>{



        },
        onError: e => {
            // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
            // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
            console.log(e.message,'onError');
          }
    };
    option =  {...defaultOpntion, ...option};
    return useQuery(queryKey, async () => await axios.get(url),option);
}