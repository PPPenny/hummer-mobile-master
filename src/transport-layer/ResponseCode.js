/**
 * 服务器返回的错误码，对于的提示信息
 */
/**
 * 服务器的错误代码对应的中文含意
 */
 class ResponseCode {
    codes = {
        "0": "请求响应成功", //示例代码，可以删除
        "-1": "登录过期",   //示例代码，可以删除
        "9999": "服务器出错"//示例代码，可以删除
    }
    /**
     * 根据返回码，显示对应的信息
     * @param {*返回码} code 
     */
    showMsg(code) {
        if(code==='-1')return;
        return this.codes[code.toString()];
    }
}

export default new  ResponseCode();