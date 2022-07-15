import createBranchQuery from "./commonQuery/createCustomQuery";

/*
    사용법 useMemberQuery(useQueryClient()).get.members(data,option);
 */

const operationList = {
    'members' :  {'method' : ['get','post','put','delete']}
};
const option = {};
function useMemberQuery(useQueryClient){
    return createBranchQuery(operationList, useQueryClient, option);
}
export default useMemberQuery;