import wrapperMutation from "./wrapperMutation";
import wrapperQuery from "./wrapperQuery";
import env from "../../utils/env";
import queryString from "../../utils/queryString";

export default function(operationList,useQueryClient,defaultOpntion){
    const service = {};

    const operationKeys = Object.keys(operationList);
    operationKeys.forEach((key)=>{
        operationList[key].method.forEach((method)=>{
            let operationFn;
            if(['get'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = service['url'] ?? env() + '/' + key + queryString(data);
                    return wrapperQuery(key,url,option,useQueryClient);
                };
            }else if(['post'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = env() + '/' + key;
                    return wrapperMutation(method,key,url,data,option,useQueryClient);
                };
            }else if(['put'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = service['url'] ?? env() + '/' + key + queryString(data);
                    return wrapperMutation(method,key,url,data,option,useQueryClient);
                };
            }else if(['delete'].includes(method)){
                operationFn = (data,option) => {
                    option =  {...defaultOpntion, ...option};
                    const url = service['url'] ?? env() + '/' + key + queryString(data);
                    return wrapperMutation(method,key,url,data,option,useQueryClient);
                };
            }
            service[method] = service[method] ?? {};
            service[method][key] = operationFn;
        })
    })

    return service;
}