<template>
  <div>
    <el-table :data="tableData" max-height="840px">
      <el-table-column label="编号" prop="id"> </el-table-column>

      <el-table-column label="制作商" prop="producer"> </el-table-column>

      <el-table-column label="商品总额" prop="total_amount"> </el-table-column>

      <el-table-column label="应付总额" prop="payment_amount">
      </el-table-column>

      <el-table-column label="订购时间" prop="date"> </el-table-column>

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
        id: 'EH115565478657',
        producer: '一曲',
        total_amount: '58.00',
        payment_amount: '58.00',
        date: '2021/4/18 16:22:01',
        status: '交易成功'
      }, {
        id: 'EH115565478657',
        producer: '一曲',
        total_amount: '58.00',
        payment_amount: '58.00',
        date: '2021/4/18 16:22:01',
        status: '交易成功'
      }, {
        id: 'EH115565478657',
        producer: '一曲',
        total_amount: '58.00',
        payment_amount: '58.00',
        date: '2021/4/18 16:22:01',
        status: '交易成功'
      }, {
        id: 'EH115565478657',
        producer: '一曲',
        total_amount: '58.00',
        payment_amount: '58.00',
        date: '2021/4/18 16:22:01',
        status: '交易成功'
      }, {
        id: 'EH115565478657',
        producer: '一曲',
        total_amount: '58.00',
        payment_amount: '58.00',
        date: '2021/4/18 16:22:01',
        status: '交易成功'
      }, {
        id: 'EH115565478657',
        producer: '一曲',
        total_amount: '58.00',
        payment_amount: '58.00',
        date: '2021/4/18 16:22:01',
        status: '交易成功'
      },],
    }
  },

  methods: {
    handleDelete(index, row) {
      this.$alert(`删除 “${row.id}” ？`, '确认删除', {
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