//- 引入封装好的fetch方法
import ajax from '../http.js';

//- 获取部门列表
export const getDepartmentList = (params) => {
  const reqParams = params.queryData ? params.queryData : {};
  delete params.queryData;
  return ajax.get('/department', { ...params, ...reqParams });
};

//- 获取部门详情
export const getDepartmentDetail = (params) =>
  ajax.get(`/department/${params._id}`);
