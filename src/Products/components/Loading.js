import React from 'react'
import { Loader } from 'react-bulma-components'

const Loading = () =>{
    return ( 
        <div  className='columns is-centered' style={{width: '100%', margin: '0px'}}>
            <Loader style={{width: 100, height: 100}} />

        </div>
    )
}
export default Loading