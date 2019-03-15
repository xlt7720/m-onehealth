export default {
  all: [
    {name: "login", method: "post", url: "/login", prefix: ""}, // 登录
    {name: "getActivityCountList", method: "post", url: "/getActivityCountList", prefix: ""}, // 获取后台活动统计
    {name: "setDonatedAmountSection", method: "post", url: "/setDonatedAmountSection", prefix: ""}, // 置捐款区间
    {name: "getDonatedAmountSection", method: "post", url: "/getDonatedAmountSection", prefix: ""} // 获取捐款区间
  ]
};