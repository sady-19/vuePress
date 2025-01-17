//- 引入封装好的fetch方法
import ajax from '../http.js';

//- 获取员工列表
export const getStaffList = (params) => ajax.post('/getStaff', params);

//- 获取员工详情
export const getStaffDetail = ({ _id }) => ajax.get(`/staffDetail/${_id}`);

//- 新增员工=员工注册
export const createStaff = (params) => ajax.post('/createStaff', params);

//- 修改员工信息
export const updateStaff = (params) => ajax.put('/updateStaff', params);

//- 删除员工信息
export const deleteStaffs = (params) => ajax.post('/destroyStaff', params);

//- 检测员工用户名或者是手机号码是否已经存在
export const checkIsExists = (params) => ajax.post('/checkIsExists', params);
