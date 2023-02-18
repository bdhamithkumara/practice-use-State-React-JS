import React from 'react'

const Home = () => {

    const [count , setCount] = React.useState(0);

    const [btnname , setBtnname] = React.useState("Click on me!");

    const [isVisible, setIsVisible] = React.useState(false);

    const addCountTo = () => {
       let newCount = count + 1;
       setCount(newCount);
       setBtnname("Add to Count");
       setIsVisible(true);
    };

  return (
    <div style={{
        marginLeft:"auto",
        marginRight : "auto",
        alignContent : "center",
        textAlign : "center",
        fontSize : "40px",
        }}>
            {isVisible && 
                (<p>I've been clicked <span>{count}</span> time(s)!</p>)
            }
            

        <button onClick={addCountTo} style={{padding:"20px",marginTop:"30px",fontSize:"20px"}}>
            {btnname}
        </button>
    </div>
  )
}

export default Home