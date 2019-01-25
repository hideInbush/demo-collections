module.exports = {
  "extends": "airbnb",
  "rules": {
      //关闭额外的分号检查
      //0:关闭，1:警告，2:异常
      "semi": 2,
      //字符串必须使用单引号
      "quotes": [
          "error",
          "single"
      ],
      "react/prop-types" : 0,
  },
  "env": {
      "browser": true,
      "node": true
  }
};