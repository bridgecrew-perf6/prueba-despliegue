import React, { useEffect, useState } from 'react';

const Users=()=>{
    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            console.log(response);
            if(response.ok){
                return response.json();
            }else
                throw response;
        })
        .then(data=>{
            setData(data);
        })
        .catch(err=>{
            console.log(err);
            setError("No fetching data...");
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);
    if(isLoading){
        return(
            <div>
                <h2>Loading data...</h2>
            </div>
        )
    }
    if(error){
        return(
            <div>
                <h2>Error: {error}</h2>
            </div>
        )
    }
    const User=(props)=>{
        return (
            <div className='div_user'>
                <p>Name: {props.user.name}</p>
                <p>Username: {props.user.username}</p>
                <p>Email: {props.user.email}</p>
                <p>Phone: {props.user.phone}</p>
            </div>
        )
    }
    const ListUsers=()=>{
        if(data.length){
            return data.map((user,id)=>{
                return <User key={id} user={user} />
            });
        }else{
            return (
                <div>
                    <h3>No hay datos...</h3>
                </div>
            )
        }
    }
    return(
        <div className='container'>
            <ListUsers />
        </div>
    )
}
export default Users;