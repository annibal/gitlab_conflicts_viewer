import getConfig from '../../getConfig';
import { buildProvider } from '../../Provider'

export const providerFactory = () => {

    

    const config = getConfig();
    const params = extendQueryParams({
        'state': 'opened'
    })
    const headers = extendHeaders()
    const url = buildUrl({
        pathname: config.path.projects(),
        search: params
    });

    return {
        request: fetch(url, {
            method: 'GET',
            headers
        }).then(r => r.json())
    }
}