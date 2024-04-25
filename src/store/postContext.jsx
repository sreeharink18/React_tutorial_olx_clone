import {createContext, useState} from 'react';

export const PostContext = createContext(null)

export default function Post({children}){
    const [postDetail, setPostDetail] = useState('');
    return(
        <PostContext.Provider value={{postDetail,setPostDetail}}>
            {children}
        </PostContext.Provider>
    )
}