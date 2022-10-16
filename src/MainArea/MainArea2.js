import React from 'react';
import './MainArea.css';
import {MdHistory, MdHome, MdPlaylistAdd, MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md';
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from 'react-icons/fa';
import {BsFillCollectionPlayFill} from 'react-icons/bs';
import {GiGamepad} from 'react-icons/gi';
import ReactPlayer from 'react-player';

function MainArea2(){
    const videoList = [
        {
            url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
            title: 'Relaxing Music',
            views: '2.3M views',
            timestamp: '3 days ago',
        },

        {
            url: 'https://www.youtube.com/watch?v=NVXgPsK_eTw&t=2s',
            title: 'Relaxing Music',
            views: '2M views',
            timestamp: '13 days ago',
        },

        {
            url: 'https://www.youtube.com/watch?v=-ObdvMkCKws',
            title: 'Relaxing Music',
            views: '25.3M views',
            timestamp: '30 days ago',
        },


        {
            url: 'https://www.youtube.com/watch?v=8Z_N9-6mPN4',
            title: 'Relaxing Music',
            views: '28.3M views',
            timestamp: '3 years ago',
        },


        {
            url: 'https://www.youtube.com/watch?v=jt7RxWMwYnI',
            title: 'Relaxing Music',
            views: '2.3M views',
            timestamp: '3 days ago',
        },

        {
            url: 'https://www.youtube.com/watch?v=2w9onLy4w50',
            title: 'Relaxing Music',
            views: '2.3M views',
            timestamp: '3 days ago',
        },

        {
            url: 'https://www.youtube.com/watch?v=hDJZRfLkdrY',
            title: 'Relaxing Music',
            views: '2.3M views',
            timestamp: '3 days ago',
        },

        {
            url: 'https://www.youtube.com/watch?v=0fRKEe86ldA',
            title: 'Relaxing Music',
            views: '2.3M views',
            timestamp: '3 days ago',
        },

        {
            url: 'https://www.youtube.com/watch?v=lt7nA2qyg9M',
            title: 'Relaxing Music',
            views: '2.3M views',
            timestamp: '3 days ago',
        },

    ]

    return(
        <div className="MainArea">

        <div className="sideBarWrapper">
            <div className="Sidebar">
                <div className="Home" >
                    <div className="Quick_Icon">
                        <MdHome color = "red" fontSize = "3rem"/>
                        <div>Home</div>
                    </div>
            
                     <div className="Quick_Icon">
                        <FaGripfire color = "red" fontSize = "3rem"/>
                        <div>Trending </div>
                    </div>

                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color = "red" fontSize = "3rem"/>
                        <div>Subscriptions</div>
                    </div>


                    <div className="Quick_Icon">
                        <MdHome color = "red" fontSize = "3rem"/>
                        <div>Home</div>
                    </div>
  
                    <div className="Library"></div>
                    <div className="Quick_Icon">
                        <MdHome color = "red" fontSize = "3rem"/>
                        <div>Home</div>
                    </div>

                    <div className="Quick_Icon">
                        <MdVideoLibrary color = "red" fontSize = "3rem"/>
                        <div>Video Library</div>
                    </div>

                    <div className="Quick_Icon">
                        <MdHistory color = "red" fontSize = "3rem"/>
                        <div>History</div>
                    </div>

                    <div className="Quick_Icon">
                        <MdWatchLater color = "red" fontSize = "3rem"/>
                        <div>Watch Later</div>
                    </div>

                    <div className="Quick_Icon">
                        <MdPlaylistPlay color = "red" fontSize = "3rem"/>
                        <div>Favourites</div>
                    </div>
                    
                    <div className="More_From_Youtube"></div>
                    <div className="Quick_Icon">
                        <GiGamepad color = "grey" fontSize = "3rem"/>
                        <div>Gaming</div>
                    </div>


                    <div className="Quick_Icon">
                        <MdRssFeed color = "red" fontSize = "3rem"/>
                        <div>Live</div>
                    </div>

                    <div className="Quick_Icon">
                        <FaFutbol color = "red" fontSize = "3rem"/>
                        <div>Sports</div>
                    </div>


                    <div className="Quick_Icon">
                        <FaMusic color = "red" fontSize = "3rem"/>
                        <div>Music</div>
                    </div>


                    <div className="Quick_Icon">
                        <FaNewspaper color = "red" fontSize = "3rem"/>
                        <div>News</div>
                    </div>

                </div>
                </div>
         </div>
                
                <div className="Main">
                  <div className="Videos">
                    {videoList.map((video) => (
                        <div className="Video">
                       <ReactPlayer width="100%" height="20rem"  url={video.url} controls/>
                       <br></br>
                          
            
                   <div className="Logo">
                    <img src='../images/waterfall.jpg' alt = "waterfall" style={{height:"35px", width:"35px", borderRadius:"50%"} }/>
                   <div>{video.title}</div>
                   <div>{video.timestamp}</div>
                   <div><small>{video.views}</small></div>
                   
                    </div>
                 </div>
                ))}

                 </div> 
        
                </div>



                






                </div>
                
    )
}


export default MainArea2;