import  Axios from 'axios';
import { METHODS, SERVICE_ROUTES } from '../reduxConstant/serviceConstant';

export function TodoListService(data){
    return new Promise((resolve, reject) => {
        let config = {
            url:SERVICE_ROUTES.TODO_LIST,
            method:METHODS.GET,
        };
    console.log("configration",config)
      Axios.request(config)
      .then((response)=>{
        return resolve(response);
      })
      .catch((error)=>{
        return reject(error);
      });
    })
}