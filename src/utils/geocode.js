const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZHJlbm84MDgiLCJhIjoiY2p2cnY5MmI0MnE4YzQ0bWc1ZjBoc255cSJ9.5MWcV-ZjV7e60zzGvlZ3RQ&limit=1'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const latitude = body.features[0].center[1], longitude = body.features[0].center[0], location = body.features[0].place_name
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geocode