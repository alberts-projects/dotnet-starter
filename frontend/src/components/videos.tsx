import { useEffect, useState } from 'react'
import axios from 'axios';

const Videos = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=> {
      axios.get('http://localhost:5066/Videos/videos_list')
      .then(resp => {
        console.log(resp)
        setVideos(resp.data)
      })

    }, [])

    return (
    <div>
        videos
    </div>
        )
}

export default Videos;