<template>
  <div id="user-list">
    <el-table :data="tableData" max-height="840px">
      <el-table-column label="编号" prop="id"> </el-table-column>

      <el-table-column label="姓名" prop="name"> </el-table-column>

      <el-table-column label="地址" prop="address"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>

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
        id: '20160502',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '20160504',
        name: '王中虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '20160501',
        name: '王大虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '20160503',
        name: '王巨虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
    }
  },
  methods: {
    handleEdit(index, row) {
      this.$alert(`正在编辑 ${row.name}`, '编辑', {
        confirmButtonText: '确定'
      });
    },
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
#user-list {
  width: 100%;
  height: 878px;

  .pagination {
    margin-top: 10px;
    margin-bottom: 12px;
  }
}
</style>