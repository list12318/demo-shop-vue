<template>
  <div>
    <el-table :data="tableData" max-height="840px">
      <el-table-column label="商品编号" prop="id"> </el-table-column>

      <el-table-column label="名称" prop="name"> </el-table-column>

      <el-table-column label="定价" prop="price"> </el-table-column>

      <el-table-column label="现价" prop="present_price"> </el-table-column>

      <el-table-column label="库存" prop="inventory"> </el-table-column>

      <el-table-column label="销量" prop="sales"> </el-table-column>

      <el-table-column label="订单状态" prop="status"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="50"
      :page-size="12"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '10001',
        name: '一加OnePlus 9Pro系列手机',
        price: '3799.00',
        present_price: '3799.00',
        inventory: 9988,
        sales: 11,
        status: '正常'
      }, {
        id: '10001',
        name: '一加OnePlus 9Pro系列手机',
        price: '3799.00',
        present_price: '3799.00',
        inventory: 9988,
        sales: 11,
        status: '正常'
      }, {
        id: '10001',
        name: '一加OnePlus 9Pro系列手机',
        price: '3799.00',
        present_price: '3799.00',
        inventory: 9988,
        sales: 11,
        status: '正常'
      }, {
        id: '10001',
        name: '一加OnePlus 9Pro系列手机',
        price: '3799.00',
        present_price: '3799.00',
        inventory: 9988,
        sales: 11,
        status: '正常'
      }, {
        id: '10001',
        name: '一加OnePlus 9Pro系列手机',
        price: '3799.00',
        present_price: '3799.00',
        inventory: 9988,
        sales: 11,
        status: '正常'
      }, {
        id: '10001',
        name: '一加OnePlus 9Pro系列手机',
        price: '3799.00',
        present_price: '3799.00',
        inventory: 9988,
        sales: 11,
        status: '正常'
      },]
    }
  },

  methods: {
    handleDelete(index, row) {
      this.$alert(`删除 “${row.id} ${row.name}” ？`, '确认删除', {
        confirmButtonText: '确定',
        callback: action => {
          if (action === 'cancel') {
            this.$message.info('操作取消');
          }
        }
      });
    }
  },
}
</script>

<style lang="less" scoped>
.pagination {
  margin-top: 10px;
  margin-bottom: 12px;
}
</style>