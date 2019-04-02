import fetch from '../config/fetch';

export const listDecorationLWorkOrder = data => fetch('workOrderManagementJson/listDecorationLWorkOrder.json', data, 'POST', 'saleUrl'); // 数据目录查询基础数据列表信息