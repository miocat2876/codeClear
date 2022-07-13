import createBranchQuery from "./commonQuery/createBranchQuery";
const operationList = {
    'members' :  {'method' : ['get','post','put','delete']}
};
const option = {};
function useMemberQuery(useQueryClient){
    return createBranchQuery(operationList, useQueryClient, option);
}
export default useMemberQuery;