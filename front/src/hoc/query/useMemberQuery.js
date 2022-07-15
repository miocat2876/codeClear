import createBranchQuery from "./commonQuery/createCustomQuery";
const operationList = {
    'members' :  {'method' : ['get','post','put','delete']}
};
const option = {};
function useMemberQuery(useQueryClient){
    return createBranchQuery(operationList, useQueryClient, option);
}
export default useMemberQuery;