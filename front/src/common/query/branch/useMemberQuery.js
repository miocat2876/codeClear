import commonBranchQuery from "../commonBranchQuery";
import queryKeys from "../queryKeys";

const key = queryKeys.MEMBER;

const callPathList = [
    'members'
];

function serviceRender(){
    const callService = {};
    callPathList.forEach((callPath)=>{
        callService[[callPath]] = (method,data,option,useQueryClient) => {
            return commonBranchQuery(method,[key,callPath],data,option,useQueryClient);
        };
    });
    return callService;
}

export default serviceRender();