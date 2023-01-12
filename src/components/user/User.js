import React, { useEffect, useState } from "react";

const RANDOM_USER_API = "https://randomuser.me/api"

function User(props){

    //set states
    const [name, setName] = useState("sample name")
    const [email, setEmail] = useState("sample email")
    const [count, setCount] = useState(0)

    //function to implement count increase
    function updateCount(currentCount){
        setCount(currentCount + 1)
    }

    //useEffect code

        function logger(){
        fetch(RANDOM_USER_API)
            .then((response)=>response .json())
            .then((data) => {
                const results = data.results
                const user = results[0]
                const userName = `${user.name.title} ${user.name.first} ${user.name.last}`
                const userEmail = user.email

                setName(userName)
                setEmail(userEmail)
            })
            
    }
      
        useEffect(logger, [count])
    //you can add other values that you need to randomise

    // useEffect(() => {
    //     fetch(RANDOM_USER_API)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const results = data.results
    //             const user = results[0]
    //             const userName = `${user.name.title} ${user.name.first} ${user.name.last}`
    //             const userEmail = user.email

    //             setName(userName)
    //             setEmail(userEmail)
    //         })
    // },[count])


    return(
        <div>
            <center>
                <h2>NAME: {name}</h2>
                <h5>EMAIL: {email}</h5>
                <button onClick={() => updateCount(count)}>RANDOMIZE</button>
            </center>
        </div>
    )

}

export default User