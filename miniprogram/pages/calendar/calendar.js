const db = wx.cloud.database()
Page({
  data: {
    year: 0,
    month: 0,
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,
    isClicked:false,
    isMe_index:null,
    who:"yyy",
    members:null,
    birth_data:[]
  },
  get_birthday_from_cloud:function(){
    let that = this;
    db.collection('members').get({
      success(res) {
        console.log("=====success=====")
        console.log(res.data);
        let local_data = res.data
        that.setData({
          members: local_data
        })
        
        let k =0;
        for (let i = 0; i < that.data.members.length; i++) {
          
          // let now_date = that.data.dateArr[i].dateNum;
          // console.log(now_date);
          let month = new Date(that.data.members[i].birthday).getMonth();
          let date = new Date(that.data.members[i].birthday).getDate();
          console.log(date);
          that.data.birth_data.push(date);
         
        }
        console.log(that.data.birth_data.indexOf(0));
      },
      fail(res) {
        console.log(res)
      }
    });
  }
  ,
  onLoad: function() {
    let that =this;
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    that.dateInit();
    that.setData({
      year: year,
      month: month,
      isToday: '' + year + month + now.getDate()
    })
  },
  onShow:function(){
      let that = this;
      that.get_birthday_from_cloud();
  },
  dateInit: function(setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let dateArr = []; //需要遍历的日历数组数据
    let arrLen = 0; //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date(); //如果传入了参数，就按传入的设置日期，没有的话就直接获取当前的日期
    let year = setYear || now.getFullYear();//如果setYear有值，就是setYear没有的话就从当前日期中获取
    let nextYear = 0;
    let month = setMonth || now.getMonth(); //没有+1方便后面计算当月总天数
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay(); //目标月1号对应的星期
    let dayNums = new Date(year, nextMonth, 0).getDate(); //获取目标月有多少天
    let obj = {};
    let num = 0;
    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;
    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  /**
   * 上月切换
   */
  lastMonth: function() {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  /**
   * 下月切换
   */
  nextMonth: function() {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  isClicked:function(r){
    let that = this;
    console.log(r);

    that.setData({
      isClicked:true,
      isMe_index: r.currentTarget.dataset.index
    })
  }
})