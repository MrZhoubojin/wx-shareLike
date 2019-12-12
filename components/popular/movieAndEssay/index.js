// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: String,
    title: String,
    bgImg: String,
    type: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    tagMovieImg: '/components/popular/movieAndEssay/image/movie@tag.png',
    tagEssayImg: '/components/popular/movieAndEssay/image/essay@tag.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
