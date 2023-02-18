import React from 'react'

const Home = () => {

    const [count , setCount] = React.useState(0);

    const addCountTo = () => {
       let newCount = count + 1;
       setCount(newCount);
    };

  return (
    <div style={{
        marginLeft:"auto",
        marginRight : "auto",
        alignContent : "center",
        textAlign : "center",
        fontSize : "40px",
        }}>

            <p>I've been clicked <span>{count}</span> time(s)!</p>

        <button onClick={addCountTo} style={{padding:"20px",marginTop:"30px",fontSize:"20px"}}>Add to count</button>
    </div>
  )
}

export default Home