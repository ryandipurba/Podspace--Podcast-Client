import React from 'react';
import { Link } from "@reach/router";
import { css } from "emotion";



const row = css({
    display: "flex",
    flexWrap: "wrap",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    margin: "10px 0px",
    padding: "10px"

})
const left = css({
    flex: "30%",

})

const right = css({
    flex: "70%",

})

const DetailPodcasts = (props) => {


    const podcast = props.podcast.filter(function (podcast) {
        return podcast.id === parseInt(props.id);
    });

    return (
        <>
            {podcast.length === 1 && (
                <div className={row} >

                    <div className={left}>
                        <img src={parseInt(props.id) === 1 ? 'https://ceritanyadeveloper.com/static/images/logo-2020.png' : podcast[0]["thumbnail"]} alt="asd" width="50%" />
                    </div>
                    <div className={right}>
                        <h3>{podcast[0]["title"]}</h3>
                        <p>{podcast[0]["url"]}</p>
                        {podcast[0]["epidodes"] && (
                            <p>Episodes</p>
                        )}


                        {podcast[0]["episodes"] && (
                            podcast[0]["episodes"].map((episodes, index) =>


                                <li style={{ listStyle: "none" }} className="list-group mt-1">
                                    <audio controls>
                                        <source src={episodes.audio} type="audio/mpeg" />
                                    </audio>
                                </li>

                            )

                        )}

                        <Link to={"/"} className="btn btn-success mt-1" > Kembali</Link>
                    </div>


                </div >
            )}
        </>


    );
};

export default DetailPodcasts;