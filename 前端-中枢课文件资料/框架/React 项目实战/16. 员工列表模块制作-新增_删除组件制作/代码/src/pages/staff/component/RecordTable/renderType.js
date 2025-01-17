import { Tag } from 'antd';
import { mapData } from 'utils/mapData';
import { formatDate } from 'utils/format';

export const columnData = {
  assessment: [
    {
      title: '员工姓名',
      dataIndex: 'staffName',
      render: (data) => data.userName,
    },
    {
      title: '考核等级',
      dataIndex: 'result',
    },
    {
      title: '调整职级',
      dataIndex: 'currentLevel',
      render: (data) => data.levelName,
    },
    {
      title: '对应职级分数',
      dataIndex: 'standardScore',
    },
    {
      title: '考核得分',
      dataIndex: 'assessmentScore',
    },
  ],
  reward: [
    {
      title: '员工姓名',
      dataIndex: 'staffName',
      render: (data) => data.userName,
    },
    {
      title: '奖惩类型',
      dataIndex: 'type',
      render: (data) => {
        return (
          <Tag color={data > 2 ? '#f50' : '#108ee9'}>
            {mapData.rewardType[data]}
          </Tag>
        );
      },
    },
    {
      title: '时间',
      dataIndex: 'date',
      render: (data) => formatDate(data),
    },
    {
      title: '原因',
      dataIndex: 'reason',
    },
  ],
  salary: [
    {
      title: '员工姓名',
      dataIndex: 'staffName',
      render: (data) => data.userName,
    },
    {
      title: '调整后薪资',
      dataIndex: 'newSalary',
    },
    {
      title: '时间',
      dataIndex: 'startTime',
      render: (data) => formatDate(data),
    },
    {
      title: '调薪原因',
      dataIndex: 'reason',
    },
  ],
};
