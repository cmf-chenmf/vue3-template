/**
 *
 * @param status 状态码
 * 统一状态码文件
 * @returns
 */
export const showMessage = (status: string | number): string => {
  let message: string;
  switch (status) {
    case 400:
      message = '参数有误，请确认参数是否填写正确';
      break;
    case 401:
      message = '未授权，请重新登录';
      break;
    case 500:
      message = '服务器内部错误，请联系管理员';
      break;
    case 404:
      message = '访问接口不存在';
      break;
    default:
      message = '服务器内部错误，请联系管理员';
  }
  return message;
}
