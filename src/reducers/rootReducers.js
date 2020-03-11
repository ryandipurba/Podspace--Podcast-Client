const initialState = {
    podcast: [{
        "id": 1,
        "title": "Ceritanya Developer",
        "thumbnail": "https://ceritanyadeveloper.com/static/logo-4812675ff58817b980037eb6a5fa7bab.png",
        "url": "https://ceritanyadeveloper.com/",
        "episodes": [
            {
                "audio": "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-9-7/26999555-44100-2-665eae9fbbeaa.m4a",
                "id": 14
            },
            {
                "audio": "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-7-29/21986822-44100-2-4f394afd3c14f.m4a",
                "id": 13
            },
            {
                "audio": "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-6-31/19909812-44100-2-31955e89796af.m4a",
                "id": 12
            }
        ]
    },
    {
        "id": 2,
        "title": "Ngobrolin Startup dan Teknologi",
        "thumbnail": "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1428780/1428780-1569855022815-0e347b2a10c15.jpg",
        "url": "https://open.spotify.com/show/3cA81ivwFR2gDMF570j06X?si=AH_1jd89RcSBMyG7GBrJqw",
        "episodes": [
            {
                "id": 1,
                "audio": "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-8-15/23738054-44100-2-29408e8ed4de1.m4a"
            },
            {
                "id": 2,
                "audio": "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2019-8-15/23738456-44100-2-e5d00161ffc53.m4a"
            }
        ]
    },
    {
        "id": 3,
        "title": "Filosofi Kode",
        "thumbnail": "https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1688059/1688059-1555899854725-f9b27854d8795.jpg",
        "url": "https://open.spotify.com/show/0yfRuGim7MFCV2TuasOdmm?si=ZDppDCR5Rye7hiKHZOxnfA"
    }]
}

const rootReducers = (state = initialState, action) => {
    return state
};

export default rootReducers;