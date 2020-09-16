import React from 'react'



export default props => (
    <div style={{
        width: '500px',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px'
    }}> 
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type='text' onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)



// function car() {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = () => {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = () => (
// <div>
//     This is car component
//     <strong>test</strong>
// </div>
// )
// export default car