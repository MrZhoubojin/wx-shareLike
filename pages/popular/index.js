// pages/popular/index.js

import {
  ApiPopularModel
} from '../../apiModel/popular.js'

const  popularModel = new ApiPopularModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    popularData: Object,
    latest: true,
    first: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    popularModel.getLatest()
      .then(res => {
        popularModel._setLatestIndex(res.data.index)
        let key = popularModel._setKey(res.data.index)
        wx.setStorageSync(key, res.data)
        this.setData({
          popularData: res.data
        })
      })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onLike (event) {
    let isLike = event.detail.isLike
    popularModel.upDataedLike(isLike, this.data.popularData.id, this.data.popularData.type)
  },
  
  onNext (event) {
    this.upDataNextAndPrevious(this.data.popularData.index, 'next')
  },

  onPrevious (event) {
    this.upDataNextAndPrevious(this.data.popularData.index, 'previous')
  },

  upDataNextAndPrevious (index, nextOrPrevious) {
    let key = nextOrPrevious === 'next' ? popularModel._setKey(index + 1) : popularModel._setKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (classic) {
      this.setData({
        popularData: classic,
        latest: popularModel.isLatest(classic.index),
        first: popularModel.isFirst(classic.index)
      })
    }
    else {
      popularModel.getLatestNextAndPrevious(index, nextOrPrevious)
        .then(res => {
          wx.setStorageSync(popularModel._setKey(res.data.index), res.data)
          this.setData({
            popularData: res.data,
            latest: popularModel.isLatest(res.data.index),
            first: popularModel.isFirst(res.data.index)
          })
        })
    }
  }

  
})