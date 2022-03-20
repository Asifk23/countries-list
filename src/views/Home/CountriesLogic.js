import { GET_API } from "../../Common/Apis/APIS";

export const manageCountries = async (keyword, data, params, path) => {
    if (keyword.includes('get')) {

        let result = GET_API(params, path, data);
        return await result.then((result) => {
            if (result) {
                return result;
            } else {
                return 0;
            }
        });
    }
}