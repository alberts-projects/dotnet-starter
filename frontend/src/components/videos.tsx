import { useEffect, useState } from 'react'
import axios from 'axios';

const Videos = () => {

    const [videos, setVideos] = useState([]);
    const [firstVideoName, setFirstVideoName] = useState('');

    useEffect(()=> {
      axios.get('http://localhost:5066/Videos/videos_list')
      .then(resp => {
        console.log(resp)
        setVideos(resp.data)

        if (resp.data[0]) setFirstVideoName(resp.data[0].name)
      })
    }, [])

    return (
    <div>
        videos {firstVideoName}
    </div>
        )
}

export default Videos;