import createCustomQuery from "./commonQuery/createCustomQuery";

/*
    사용법 useMemberQuery(useQueryClient()).get.members(data,option);
 */

const operationList = {
    'members' :  {'method' : ['get','post','put','delete']},
    //통신할 주소 : 통신할 방식
    'hrdapi'  : {method : ['get'],url : 'https://www.hrd.go.kr/jsp/HRDP/HRDPO00/HRDPOA60/HRDPOA60_1.jsp'}
    
};
const option = {};
function useMemberQuery(useQueryClient){
    return createCustomQuery(operationList, useQueryClient, option);
}
export default useMemberQuery;