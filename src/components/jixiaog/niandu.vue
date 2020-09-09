<template>
	<div class="jiankang">

		<div class="jf-content">
			<div class="jf-content-nav">
				<div>
					<!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
				</div>
				<div>
					<el-row>
						<el-button type="primary" size="small"
						style="background: red;border: 1px solid #BDBDFF;width: 20%;margin-left: -50px;"
						@click="dialogFormVisible = true">新增</el-button>
					</el-row>
				</div>
			</div>
			<div class="table">
				<el-table :data="fangwu.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
				 :header-cell-style="{background:'red',color:'white'}">
					<el-table-column prop="id" label="ID" width="250" align="center"></el-table-column>
					<el-table-column prop="professionalName" label="老师" width="250" align="center"></el-table-column>
					<el-table-column prop="teacherDesc" label="NULL" width="240" align="center"></el-table-column>
					<el-table-column prop="teacherPosition" label="职位" width="240" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" width="240" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="color: #0000FF;" @click.native.prevent="updateRow(scope.row.id)">修改</el-button>
							<el-button type="text" size="small" style="color: red;" @click.native.prevent="deleteRow(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
		
		
		<el-dialog title="修该" :visible.sync="dialogFormVisible" style="width: 70%;margin: 0 auto;">
			<el-form :model="form">
				<el-form-item label="老师" :label-width="formLabelWidth">
					<el-input v-model="form.haom" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="职位" :label-width="formLabelWidth">
					<el-input v-model="form.zhuanye" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="add()">确 定</el-button>
			</div>
		</el-dialog>
		
		
		<!-- 发布小贴士 -->
		<el-dialog title="新增" :visible.sync="dialogFormVisible" style="width: 70%;margin: 0 auto;">
			<el-form :model="form">
				<el-form-item label="老师" :label-width="formLabelWidth">
					<el-input v-model="form.haom" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="职位" :label-width="formLabelWidth">
					<el-input v-model="form.zhuanye" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="add()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: "",
				currentPage: 1, //初始页
				pagesize: 10, //每页显示的数据,
				dialogFormVisible: false,
				form: {
					haom: '',
					zhuanye: ''
				},
				formLabelWidth: '120px',
				fangwu:[]
			}
		},
		methods: {
			add(){
				this.$axios.post("http://139.9.169.87:8081/examsystem/addProfessional?professional.id="+this.form.haom+"&professionalName="+this.form.zhuanye,{
					
				}, {
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/x-www-form-urlencoded"
					}
				})
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
				this.dialogFormVisible = false
			},
			deleteRow(id){
				this.$axios.get("http://139.9.169.87:8081/examsystem/deleteProfessional?id="+id)
				this.$router.go(0)
			},
			updateRow(id){
				this.$axios.post("http://139.9.169.87:8081/examsystem/updateProfessional?id="+id+"&professionalName=刘教员",{
					
				}, {
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/x-www-form-urlencoded"
					}
				})
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
			},
			select(){
				this.$axios.get("http://139.9.169.87:8081/examsystem/getAllTeacherNoPage?teacherName="+this.input)
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
			}
		},
		created() {
			this.$axios.get("http://139.9.169.87:8081/examsystem/getProfessionalNoPage").then((res) => {
				this.fangwu = res.data.data
			})
		}
	}
</script>

<style scoped>
	.jiankang {
		width: 98%;
		margin: 0 auto;
		background: white;
		margin-left: 280px;
		margin-top: -750px;
	}


	.jf-content-nav {
		width: 100%;
		height: 70px;
		line-height: 70px;
		display: flex;
	}

	.jf-content-nav>div:first-child {
		width: 60%;
		text-align: left;
	}

	.jf-content-nav>div {
		width: 40%;
		flex-direction: column;
		margin: 0 2%;
		text-align: right;
	}

	.table {
		width: 98%;
		margin: 0 auto;
	}

	.fyxg {
		float: right;
		margin: 0.8% 1%;
	}
</style>
