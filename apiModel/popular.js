import { 
    HTTP 
} from '../util/http.js'


class ApiPopularModel extends HTTP {
    getLatest () { // 获取最新一期
        return this.request({
            url: '/classic/latest'
        })
    }

    getLatestNextAndPrevious (index, nextOrPrevious) { // 获取当前一期的上一期 && 获取当前一期的下一期
        return this.request({
            url: `/classic/${ index }/${ nextOrPrevious }`
        })
    }
 
    upDataedLike (isLike, artID, category) { // 进行点赞 && 取消点赞
        let url = isLike ? '/like' : '/like/cancel'
        return this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: artID,
                type: category
            }
        })
    }
    _setLatestIndex (index) {
        wx.setStorageSync('latest', index)
    }

    _getLatestIndex () {
        return wx.getStorageSync('latest')
    }

    _setKey(index) {
        const key = 'popular-' + index
        return key
    }

    isFirst(index) {
        return index == 1 ? true : false
    }
    
    isLatest(index) {
        let latestIndex = this._getLatestIndex()
        return latestIndex == index ? true : false
    }
}

export {
    ApiPopularModel
}