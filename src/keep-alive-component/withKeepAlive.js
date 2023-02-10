import {useRef, useContext, useEffect} from 'react'
import CacheContext from './CacheContext'
import * as cacheTypes from './cache-types'
import { v4 } from "uuid";
function withKeepAlive(OldComponent, {cacheId = v4(), scroll}) {
    return function (props) {
        let {cacheStates, mount, handleScroll, dispatch} = useContext(CacheContext)
        let divRef = useRef(null)
        useEffect(() => {
            if(scroll) {
                divRef.current.addEventListener('scroll', handleScroll.bind(null, cacheId), true)
            }
        }, [handleScroll])
        useEffect(() => {
            let cacheState = cacheStates[cacheId]
            if(cacheState && cacheState.doms && cacheState.status !== cacheTypes.DESTORY) {
                let doms = cacheState.doms
                doms.forEach(dom => {
                    divRef.current.appendChild(dom)
                    if(scroll) {
                        // dom.addEventListener('scroll', handleScroll.bind(null, cacheId), true)
                    }
                })
                if(scroll) {
                    doms.forEach(dom => {
                        if(cacheState.scrolls[dom]) {
                            dom.scrollTop = cacheState.scrolls[dom]
                        }
                    })
                }
            } else {
                mount({
                    cacheId,
                    reactElement: <OldComponent {...props} dispatch={dispatch}/>
                })
            }
        }, [cacheStates, mount, props])
        return <div id={`keepalive_${cacheId}`} ref={divRef}></div>
    }
}
export default withKeepAlive