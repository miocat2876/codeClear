import axios from "axios";

export default () =>axios.get('http://cc.miocat.synology.me/board/members/')
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });