import R from 'ramda';
// import ThingProvider from  '../Thing/ThingProvider'

// API Gateway
export const getDataFactory = ({providerFactory}) => () => async (dispatch, getState) => {
    const requisitor = providerFactory();

    dispatch(thingStarted())
    try {
        const result = await requisitor.request()

        if (result.success) {
            dispatch(thingSuccess(result.data))
        } else {
            throw Error('error');
        }
    } catch (e) {
        dispatch(thingError(e))
    }

}

// State Mutators
export const thingStarted = () => ({
    type: 'THING_STARTED',
    value: {}
})
export const thingSuccess = (data) => ({
    type: 'THING_SUCCESS',
    value: {
        data
    }
})
export const thingError = (err) => ({
    type: 'THING_ERROR',
    value: {
        err
    }
})

// State Extractor
export const extractData = state => state.data