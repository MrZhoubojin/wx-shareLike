// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number,
    isLike: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImage: 'image/like.png',
    noLikeImage: 'image/noLike.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onIsLike (event) {
      console.log(event)
    }
  }
})
