import { getRequest, postRequest } from '@/server/require'

export const xhApi = function () {
    return getRequest('/xh')
        .then((res: any) =>  res.data, (err: any) => console.log(err))
}
