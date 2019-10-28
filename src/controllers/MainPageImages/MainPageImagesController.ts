import { handledResponse } from '@/errors/errors';
import { validationJSON} from '@/validators/validator';

export default class MainPageImagesController {
    public static async getImagesList(url: string, username: string, token: string) {
        try {
            //console.log('MainPageImagesController:getImages:', url, username, token);
            const header: any = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Basic ${btoa(`${username}:${token}`)}`,
                }
            }
            return await fetch(url, header)
                .then (handledResponse)
                .then (validationJSON);
        } catch (err) {
            console.log(err);
        }
    }
}
