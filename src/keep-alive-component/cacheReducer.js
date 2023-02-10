import * as cacheTypes from './cache-types'
function cacheReducer(cacheStates, action) {
    let payload = action.payload
    let cacheId = payload.cacheId
    switch (action.type) {
        case cacheTypes.CREATE:
            return {
                ...cacheStates,
                [cacheId]: {
                    cacheId: cacheId,
                    reactElement: payload.reactElement,
                    doms:undefined,
                    status: cacheTypes.CREATE,
                    scrolls: {}
                }
            }
        case cacheTypes.CREATED:
            return {
                ...cacheStates,
                [cacheId]: {
                    ...cacheStates[cacheId],
                    doms: payload.doms,
                    status: cacheTypes.CREATED
                }                
            }
        case cacheTypes.DESTORY: 
            return {
                ...cacheStates,
                [cacheId]: {
                    ...cacheStates[cacheId],
                    status: cacheTypes.DESTORY
                }                 
            }
        default:
            return cacheStates;
    }
}
export default cacheReducer