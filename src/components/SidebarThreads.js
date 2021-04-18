import { Avatar } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setThread } from '../features/threadSlice'
import db from '../firebase'
import './SidebarThreads.css'

const SidebarThreads = ({id, threadName} ) => {
    const dispatch = useDispatch()
    const [threadInfo, setThreadInfo] = useState([])

    useEffect(() => {
        db.collection('threads')
          .doc(id)
          .collection('messages')
          .orderBy('timestamp', 'desc')
          .onSnapshot((snpashot) => {
              setThreadInfo(snpashot.docs.map((doc) => doc.data()))
          })
    }, [id]);

    return (
         <div
         className="sidebarThread"
         onClick={() => {
             dispatch(
                 setThread({
                     threadId: id,
                     threadName: threadName
                 })
             )
         }}
         >
          <Avatar/>
          <div className="sidebarThread__details">
              <h3>{threadName}</h3>
              <p>{threadInfo[0]?.message}</p>
              <small className="sidebarThread__timestamp">
                  {new Date(threadInfo[0]?.timestamp?.toDate()).toLocaleString()}
              </small>
           </div>   
         </div>
    )
}

export default SidebarThreads
