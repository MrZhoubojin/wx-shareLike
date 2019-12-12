// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: '/components/nav/image/triangle.dis@left.png',
    leftSrc: '/components/nav/image/triangle@left.png',
    disRightSrc: '/components/nav/image/triangle.dis@right.png',
    rightSrc: '/components/nav/image/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft (event) {
      if (this.properties.latest) return
      this.triggerEvent('left', {}, {})
    },
    onRight (event) {
      if (this.properties.first) return
      this.triggerEvent('right', {}, {})
    }
  }
})
