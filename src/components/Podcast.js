import React from 'react';
import { Link } from "@reach/router";
import { css } from 'emotion';

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())


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

const Podcast = (props) => {

    return (
        <div>
            {!props.loading ? (
                <p>loading.....</p>
            ) :
                (props.podcast
                    .filter(isSearched(props.searchInput))
                    .map((podcast) =>
                        <div className={row} key={podcast.id}>
                            <div className={left}>
                                <img src={podcast.id === 1 ? 'https://ceritanyadeveloper.com/static/images/logo-2020.png' : podcast.thumbnail} alt={podcast.title} width="50%" />
                            </div>
                            <div className={right}>
                                <h3>{podcast.title}</h3>
                                <p>{podcast.url}</p>
                                <Link to={"podcast/" + podcast.id} className="btn btn-success">Lihat >></Link>
                            </div>
                        </div>

                    )
                )
            }
        </div>
    );
};

export default Podcast;