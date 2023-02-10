import React from 'react'
const Home = props => {
    return (
        <div>
            <button
                onClick={() => {
                    props.dispatch({
                        type: 'DESTORY',
                        payload: {cacheId: 'UserAdd'}
                    })
                }}
            >
                重置UserADD
            </button>
            <button
                onClick={() => {
                    props.dispatch({
                        type: 'DESTORY',
                        payload: {cacheId: 'UserList'}
                    })                   
                }}
            >
                重置UserList
            </button>
        </div>
    )
}
export default Home