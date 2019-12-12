import { config } from '../config'

class HTTP {
    request ({url, data = {}, method = 'GET'}) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        }).catch(err => {})
    }

    _request (url, resolve, reject, data = {}, method = 'GET') {
        wx.request({
            url: `${ config.api_base_url }${ url }`,
            data: data,
            method: method,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: res => {
                let code = res.statusCode.toString()
                if (code.startsWith('2')) {
                    resolve(res)
                }
                else {
                    reject()
                    this._showMsg(res.data.error_code, res.data.msg)
                }
            },
            fail: err => {
                reject()
                this._showMsg(5000, err.errMsg)
            }
        })
    }

    _showMsg (code, msg) {
        wx.showToast({
            title: `${ code } : ${ msg }`,
            icon: 'none',
            duration: 2000
        })
    }
}


export {
    HTTP
}