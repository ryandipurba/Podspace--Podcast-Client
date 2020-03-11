import React, { Component } from 'react';
import { Link } from "@reach/router";
import { css } from 'emotion';
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

class Podcast extends Component {
    render() {
        const { podcast } = this.props
        const podcastList = podcast.length ? (
            podcast.map(pod => {
                return (
                    <div className={row} key={pod.id}>
                        <div className={left}>
                            <img src={pod.id === 1 ? 'https://ceritanyadeveloper.com/static/images/logo-2020.png' : pod.thumbnail} alt={pod.title} width="50%" />
                        </div>
                        <div className={right}>
                            <h3>{pod.title}</h3>
                            <a href={pod.url}>{pod.url}</a><br />
                            <Link to={"podcast/" + pod.id} className="btn btn-success">Lihat >></Link>
                        </div>
                    </div>
                )
            })
        ) : (
                <div>No Podcast to Show</div>
            )
        return (
            <div>
                {podcastList}
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        podcast: state.podcast
    }
}


export default connect(mapStateToProps)(Podcast);