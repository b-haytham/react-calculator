import React from 'react'

const Screen = (props) => {
    return <div id='screen'>
            <span id="display">{props.expression}</span>
      </div>
}


export default Screen