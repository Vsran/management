import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '对象',
    dataIndex: 'age',
  },
  {
    title: '地点',
    dataIndex: 'address',
  },
  {
    title: '客户',
    dataIndex: 'address',
  },
  {
    title: '状态',
    dataIndex: 'address',
  },
  {
    title: '数量',
    dataIndex: 'address',
  },
  {
    title: '交期',
    dataIndex: 'address',
  },
  {
    title: '延期',
    dataIndex: 'address',
  },
  {
    title: '已计划量',
    dataIndex: 'address',
  },
  {
    title: '计划短缺量',
    dataIndex: 'address',
  },
  {
    title: '交货日期',
    dataIndex: 'address',
  },
  {
    title: '优先级',
    dataIndex: 'address',
  },
  {
    title: '上次修改的时间',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class Orders extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}
