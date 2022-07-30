import React, { useState, useEffect, Children } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const GithubContext = React.createContext()


const ContextProvider = ({ children }) => {
    const [guest,setGuest]=useState(false)
    const [user, setUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    const [loading, setLoading] = useState(false)
    const [request, setRequests] = useState(0)
    const [error, setError] = useState({
        show: false, msg: ""
    })
    const toggleErr = (show, msg) => {
        setError({ show, msg })

    }
    const searchUser = async (user) => {
        toggleErr(false, "")
        setLoading(true)
        console.log(user);
        const response = await axios(`${rootUrl}/users/${user}`).catch(err => { console.log(err); })
        if (response) {
            setUser(response.data)
            const { login, followers_url } = response.data
            console.log(login, followers_url);
           
            setLoading(false)
            await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${followers_url}?per_page=100`)])
            .then(res=>{
                setRepos(res[0].value.data)
                setFollowers(res[1].value.data)
            })

        }
        else {
            toggleErr(true, "there is no user with that user name")
            setLoading(false)
        }
        checkRequest()
    }

    const checkRequest = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate: { remaining } } = data;

            setRequests(remaining)
            if (remaining === 0) {
                toggleErr(true, "You run out of Requests please wait an hour to come back")
            }
        }).catch(err => console.log(err))
    }




    useEffect(
        checkRequest
        , [])
    return <GithubContext.Provider value={{ user, repos, followers, request, error, searchUser, loading ,guest,setGuest}}>
        {children}

    </GithubContext.Provider>


}
export const useGlobalContext = () => {

    return React.useContext(GithubContext)
}
export { GithubContext, ContextProvider }