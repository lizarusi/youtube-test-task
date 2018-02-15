let axios = require('axios');

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const SERVER_URL = 'http://localhost:3027/history';
const API_KEY = 'AIzaSyC7tUuPlSjzRya94qqPRTc5x9HF26ZMeRw';
const MAX_RESULTS = 5;
const PART = 'snippet';

export default class ApiService {

    static search(query) {
        if (query) {
           return axios({
               method:'get',
               url:  API_URL,
               responseType:'stream',
               params: {
                   key: API_KEY,
                   maxResults: MAX_RESULTS,
                   part: PART,
                   q: query,
                   type: 'video'
               }
           }).then((result) => {
              return result.data.items.map((item) => {
                return  {
                    id: item.id.videoId,
                    name: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high ,
                    uniqId: item.id.videoId + Date.now().toString()
                }
              })
           }).catch((err) => {
               return [];
           });
        }
        return Promise.resolve([]);
    }

    static addToQueue(video) {
        return axios({
            method:'post',
            url:  `${SERVER_URL}/add` ,
            responseType:'stream',
            headers: {'Access-Control-Allow-Origin': '*'},
            data: video
        });

    }

    static deleteFromQueue(id) {
        return axios({
            method:'delete',
            url:  `${SERVER_URL}/delete` ,
            responseType:'stream',
            params: { id }
        });

    }

    static getQueue() {
        return axios({
            method:'get',
            url:  `${SERVER_URL}` ,
            responseType:'stream',
        }).then((res) => {
            return res.data.reverse();
        })
    }
}