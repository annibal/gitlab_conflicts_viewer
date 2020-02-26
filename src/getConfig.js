

export default function getConfig() {

    return {
        'api': 'http://example.io/api',
        'token': '123abc',
        'path': {
            'projects': () => '/projects',
            'mergeRequests': (projectId) => `/projects/${projectId}/mergeRequests`
        }
    }
}