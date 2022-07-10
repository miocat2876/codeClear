import commonMutation from "./commonMutation";
import commonQuery from "./commonQuery";

export default function(method,key,callData,option,useQueryClient){
    if(['post','put','delete'].indexOf(method) > -1){
        return commonMutation(key,callData,option,method,useQueryClient);
    }else if(['get'].indexOf(method) > -1){
        commonQuery(key,callData,option);
    }else{
        throw new Error('정의되지 않은 메소드입니다');
    }
}