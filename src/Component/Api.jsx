import React, { useState, useEffect } from 'react';
import './Api.css';

const Api = () => {
    const [user, setUser] = useState([])
    const getuser = async () => {
        const response = await fetch("https://api.github.com/users")
        setUser(await response.json());
    };
    console.log(user)

    useEffect(() => {
        getuser()

    }, []);

    return (
        <>
            <div>
                <h2 className="heading">List of GitHub Users</h2>
                <div className="container-fluid mt-5">
                    <div className="row text-center">

                        {
                            user.map((Ele) => {
                                const { login, id, avatar_url, type } = Ele;
                                return (

                                    <div className="col-10 col-md-4 mt-5" key={id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"><img src={avatar_url} className="rounded" width="155" /> </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                                                    <span className="text-left">{type}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })

                        }

                    </div>
                </div>
            </div>
        </>

    )
}
export default Api;