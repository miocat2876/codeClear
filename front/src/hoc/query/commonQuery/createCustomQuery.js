import wrapperMutation from "./wrapperMutation";
import wrapperQuery from "./wrapperQuery";
import env from "../../../utils/env";
import queryString from "../../../utils/queryString";

export default function(operationList,useQueryClient,defaultOpntion){
    //if(!useQueryClient) throw Error("useQueryClient는 필수 입니다.");
    const service = {};
    const operationKeys = Object.keys(operationList);
    operationKeys.forEach((queryKey)=>{
        operationList[queryKey].method.forEach((method)=>{
            let operationFn;
            if(['get'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = option['url'] ?? env() + '/' + queryKey + queryString(data);
                    return wrapperQuery(queryKey,url,option,useQueryClient);
                };
            }else if(['post'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = option['url'] ?? env() + '/' + queryKey;
                    return wrapperMutation(method,queryKey,url,data,option,useQueryClient);
                };
            }else if(['put'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = service['url'] ?? env() + '/' + queryKey + queryString(data);
                    return wrapperMutation(method,queryKey,url,data,option,useQueryClient);
                };
            }else if(['delete'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = service['url'] ?? env() + '/' + queryKey + queryString(data);
                    return wrapperMutation(method,queryKey,url,data,option,useQueryClient);
                };
            }
            service[method] = service[method] ?? {};
            service[method][queryKey] = operationFn;
        })
    })

    return service;
}