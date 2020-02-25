import R from 'ramda'
// import DependencyReducer from '../Dependency/DependencyReducer.js'

export const getXxxDefaultState = () => {
}

const XxxReducer = (state = getXxxDefaultState, action) => {
    switch (action.type) {
        case "XXX_VALUE":
            return {
                ...state
            }
        default:
            return state
    }
}
export default XxxReducer