import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{props.alert.message}</strong>
    </div>
  )
}

export default Alert