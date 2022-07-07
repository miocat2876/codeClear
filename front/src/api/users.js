import axios from "axios";

const dev_url = 'https://cc.miocat.synology.me';
const local_url = 'http://localhost:8080';

export default () =>axios.get(`${dev_url}/board/members/`)
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });