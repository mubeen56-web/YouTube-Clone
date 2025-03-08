import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { API_KEY, value_convertor, } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const PlayVideo = () => {
    const {videoId}= useParams();
    const[apiData,setApiData] = useState();
    const [channelData,setchannelData]=useState();
    const [commentData,setcommentData]=useState([]);
    const fetchVideoData= async ()=>{
        //fetching videos data
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(response=>response.json()).then(data=>setApiData(data.items[0]));
    }
    const fetchOtherData= async () =>{
        //fetching video data
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `;
        await fetch(channelData_url).then(response=>response.json()).then(data=>setchannelData(data.items[0]));
        //fetching comment data
        const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY} `;
        await fetch(comment_url).then(response=>response.json()).then(data=>setcommentData(data.items));
    }
    useEffect(()=>{
        fetchVideoData();
    },[videoId])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])
 
  return (
    <div className="play-video">
        {/*< video src={video1} autoPlay controls muted></>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <h3>{apiData?apiData.snippet.title:'title here'}</h3>
         <div className="play-video-info">
           <p>{apiData?value_convertor(apiData.statistics.viewCount ):'16K'} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
            <div>
            <span><img src={like} alt="" />{apiData?value_convertor(apiData.statistics.viewCount):'155'}</span>
            <span><img src={dislike} alt="" />25</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
         </div>
         </div>
         <hr />
         <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:''}</p>
                <span>{channelData?value_convertor(channelData.statistics.subscriberCount):'1M'} Subscribers</span>
            </div>
            <button>Subscribe</button>
         </div>
         <div className="vid-discription">
            <p>{apiData?apiData.snippet.description.slice(0,200):'description'}</p>
            <hr />
            <h4>{apiData?value_convertor(apiData.statistics.commentCount):102} Comments</h4>
            { commentData.map((item,index)=>{
                    return (
                        <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                    )
                })
            }
         </div>
    </div>
  )
}

export default PlayVideo