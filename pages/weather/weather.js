Page({

  /**
   * 页面的初始数据
   */
  data: {
	wendu: null,
	ganmao: null,
	forecast: [],
	yesterday: null,
	city: null,
	quality: null,
	shidu: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var _this = this
	  wx.request({
		  url: 'http://www.sojson.com/open/api/weather/json.shtml?city=' + options.city , 
		  data: {
			  x: '',
			  y: ''
		  },
		  success: function (res) {
			_this.setData(
				{
					city: res.data.city,
					wendu: res.data.data.wendu,
					shidu: res.data.data.shidu,
					quality: res.data.data.quality,
					ganmao: res.data.data.ganmao,
					forecast: res.data.data.forecast
				}
			)			  
		  }
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
	
  }
})