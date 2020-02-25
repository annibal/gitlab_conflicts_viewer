import getConfig from '../../getConfig';

export const providerFactory = () => {

    const config = getConfig();
    const params = new URLSearchParams({
        'per_page': 100,
        'state': 'opened',
        'private_token': config.token
    }).toString();
    const url = `${config.api}${config.path.projects()}?${params}`;

    return {
        request: fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${config.token}`,
            }
        }).then(r => r.json())
    }
}