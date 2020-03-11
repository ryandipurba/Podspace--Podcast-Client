import React from 'react';
import { Link } from "@reach/router";
import { css } from "emotion";
import { connect } from 'react-redux';

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
    const pod = props.pod ? (
        <>
            <div className={left}>
                <img src={parseInt(props.podcast_id) === 1 ? 'https://ceritanyadeveloper.com/static/images/logo-2020.png' : props.pod.thumbnail} alt="asd" width="50%" />
            </div>
            <div className={right}>
                <h3>{props.pod.title}</h3>

                <a href={props.pod.url}>{props.pod.url}</a>
                {props.pod.episodes && (
                    <p>Episodes</p>
                )}

                <ul>
                    {props.pod.episodes && (
                        props.pod.episodes.map((episodes, index) =>
                            <li style={{ listStyle: "none" }} className="list-group mt-1" key={episodes.id}>
                                <audio controls>
                                    <source src={episodes.audio} type="audio/mpeg" />
                                </audio>
                            </li>

                        )

                    )}
                </ul>
                <Link to={"/"} className="btn btn-success mt-1" > Kembali</Link>
            </div>
        </>
    ) : (
            <div>>no podcast</div>
        )
    return (
        <div className={row} >
            {pod}
        </div >
    );
};

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.podcast_id;
    return {
        pod: state.podcast.find(pod => pod.id === id)
    }
}

export default connect(mapStateToProps)(DetailPodcasts);