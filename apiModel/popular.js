import { 
    HTTP 
} from '../util/http.js'

// let parms = {}

class apiPopularModel extends HTTP {
    getLatest () { // 获取最新一期
        // parms.url = 
        return this.request('/classic/latest')
    }

    caching () {
        
    }
}

export {
    apiPopularModel
}