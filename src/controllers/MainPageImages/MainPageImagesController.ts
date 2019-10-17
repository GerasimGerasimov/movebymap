import { handledResponse } from '@/errors/errors';
import { validationJSON} from '@/validators/validator';

export default class MainPageImagesController {
    public static async getImages(url: string, username: string, token: string) {
        try {
            console.log('MainPageImagesController:getImages:', url, username, token);
            const header: any = {
                method: 'GET',
                // mode: 'cors',
                // credentials: 'include',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    //'Authorization': `Basic ${btoa(`${username}:${token}`)}`,
                    //'Host': 'http://62.109.25.189',
                    //'Accept': '*/*',
                    //'Access-Control-Allow-Origin': 'http://localhost:8081',
                    //'Access-Control-Allow-Credentials': 'true',
                    //'Connection': 'keep-alive',
                    //'cache': 'no-cache',
                    //"Accept-Encoding": "gzip, deflate"
                }
            }
            let response: any = await fetch(url, header);
            let data: any = await response.text(); // json();
            return data;
            //const data: any = await fetch(url, header);
            //console.log(data);
            //return await fetch(url, header)
            //.then (handledResponse)
            //.then (validationJSON)
        } catch (err) {
            console.log(err);
        }
    }
}
