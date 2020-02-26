import getConfig from './getConfig'
import axios from 'axios'

const getInstance = () => axios.create({
  baseURL: getConfig().api,
  timeout: 0,
});

// How are you gonna do this


export const extendQueryParams = (headers={}) => new URLSearchParams({
	'per_page': 100,
	'state': 'opened',
	'private_token': getConfig().token,
	...headers
}).toString();

export const extendHeaders = (params={}) => ({
	Authorization: `Bearer ${getConfig().token}`,
	...params
});

export const buildUrl = ({
	origin = getConfig().api,
	pathname,
	port,
	search
}) => `${origin}${pathname && `/${pathname}`}${port && `:${port}`}${search && `?${search}`}`

// "GET /bolota"
export const parseProviderCodeStr = providerCodeStr => {
	const parts = providerCodeStr.split(" /");
	return {
		method: parts[0],
		pathname: parts[1]
	}
}

export const buildProvider = providerCodeStr => 