// components/time/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        this.setData({
          _index: newVal > 10 ? newVal : `0${ newVal }`
        })
      }
    },
    time: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        if (newVal === '') return
        let arr = newVal.split('-')
        this.setData({
          _year: arr[0],
          _month: this.data.months[Number(arr[1])]
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
    _month: '',
    _year: '',
    _index: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
