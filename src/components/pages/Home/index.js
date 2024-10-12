import React, {useCallback, useEffect, useRef, useState} from 'react';
import Menu from "../../common/Menu";
import Slider from "../../common/Slider";
import {ReactComponent as PlayerIcon} from "../../../assets/icons/play_icon.svg";
import {useDispatch, useSelector} from "react-redux";
import Utils from "../../../helpers/Utils";
import {changeFeaturedData, getTendingNow} from "../../../store/actions/moves";
import Loader from "../../common/Loader";
import useWindowSize from "../../../helpers/hooks/useWindowSize";


const Index = () => {
  const intervalRef = useRef()
  const dispatch = useDispatch();
  const { featured, tendingNow } = useSelector(state => state.moves);
  const [loading, setLoading] = useState(true);
  const [videoPlay, setVideoPlay] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();
  console.log(windowWidth);
  useEffect(() => {
    //added timeout here just to imitate backend api call latency
    (async () => {
      await dispatch(getTendingNow())

      setLoading(false);
    })()
  }, []);

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setVideoPlay(true);
      }, 2000)
    }
  }, [featured])

  const endedVideo = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = null

    setVideoPlay(false)
  }, [intervalRef.current])

  const onChangeFeaturedInfo = (singleData) => {
    dispatch(changeFeaturedData(singleData))
  }

  return (
    loading
      ? <Loader/>
      : (<div className='home_wrapper'>
        <Menu/>

        <div className='home_left'>
          <div className="home_left_title_wrapper">
            <div className="home_left_title"
                 style={{ backgroundImage: videoPlay ? 'unset' : `url(/images/${featured.CoverImage})` }}>

              {videoPlay && (
                <div className="background-video">
                  <video autoPlay muted loop={false} onEnded={endedVideo} width={windowWidth - 115} height={windowHeight - 10}>
                    <source src={'/videos/video.mp4'} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="home_left_title_info_wrapper">
                <h2>MOVIE</h2>
                {/* we have both Title and TitleImage in the json object,
                  I only founf TitleImage in the design that is why not used title in any place,
                   but we can add it if needed.
                   */}
                {/*<h1>{featured.Title}</h1>*/}
                <img src={`/images/${featured.TitleImage}`} alt="Movie Logo" className="movie-logo"/>

                <div className="home_left_title_info">
                  <p>{featured.Category}</p>

                  <p>{featured.ReleaseYear}</p>

                  <p>{featured.MpaRating}</p>

                  <p>{Utils.secToHours(featured.Duration)}</p>
                </div>

                <p>{featured.Description}</p>

                <div className="buttons">
                  <button onClick={() => {
                    console.log('play click');
                  }}>
                    <PlayerIcon/>
                    <span>Play</span>
                  </button>

                  <button onClick={() => {
                    console.log('mor info click');
                  }}>More Info
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='home_left_slider_wrapper'>
            <h2>Trending Now</h2>

            <Slider list={tendingNow} onClick={onChangeFeaturedInfo}/>
          </div>
        </div>
      </div>)
  )
};

export default Index;
