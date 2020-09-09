<template>
	<div>
		<div class="tou">
			<img src="../../../public/img/zmian.png" />
			<h2>员工管理</h2>
		</div>
		<div class="text-top">
			<el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
			<el-button type="primary" icon="el-icon-search" class="ss">查找</el-button>
			<el-button type="primary" icon="el-icon-circle-plus-outline" @click="show">新增员工</el-button>
		</div>
		<div id="table">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>姓名</th>
						<th>性别</th>
						<th>工号</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in newsList" :key="index">
						<td width="14%">{{item.id}}</td>
						<td width="14%">{{item.professionalName}}</td>
						<td width="14%">{{item.professionalDesc}}</td>
						<td width="15%">
							<i @click="edit(item,$event,index)" class="el-icon-edit"></i>
							<i @click="deletelist(item.id)" class="el-icon-delete"></i>
						</td>
					</tr>
				</tbody>
			</table>
			<div id="mask" v-if="editlist">
				<div class="mask">
					<div class="title">
						编辑
						<span @click="editlist=false">x</span>
					</div>
					<div class="content">
						<input type="text" v-model="newsList.id" name="title" value="" placeholder="姓名" />
						<input type="text" v-model="newsList.professionalName" name="user" value="" placeholder="性别" />
						<input type="text" v-model="newsList.professionalDesc" name="date" value="" placeholder="工号" />
						
						<button @click="update(newsList.id)">更新</button>
						<button @click="editlist=false">取消</button>
					</div>
				</div>
			</div>
			<div id="mask" v-show="is_show">
				<div class="mask">
					<div class="title">
						新增
						<span @click="editlist2=false">x</span>
					</div>
					<div class="content">
						<el-input v-model="newsList.id" placeholder="姓名"></el-input>
						<el-input v-model="newsList.professionalName" placeholder="性别"></el-input>
						<el-input v-model="newsList.professionalDesc" placeholder="工号"></el-input>
						<el-button type="primary" plain @click="add">提交</el-button>
						<el-button plain @click="cancel">取消</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="../../../public/vue.js"></script>
<script>
	export default {
		data() {
			return {
				is_show: false,
				input: '',
				editlist: false,
				editlist2: false,
				editDetail: {},
				addDetail: {},
				newsList: [],
				editid: '',
				data: [{
						id: 1,
						label: '显示所有'
					}, {
						id: 2,
						label: '集团',
						children: [{
								id: 5,
								label: '总经办'
							}, {
								id: 6,
								label: '人事部'
							},
							{
								id: 7,
								label: '财务部'
							}
						]
					}, {
						id: 3,
						label: '科技公司'
					},
					{
						id: 4,
						label: '工程公司'
					},
					{
						id: 5,
						label: '现代事务所',
						children: [{
								id: 8,
								label: '北京机构'
							}, {
								id: 9,
								label: '杭州机构'
							},
							{
								id: 10,
								label: '上海机构'
							},
							{
								id: 11,
								label: '深圳机构'
							}
						]
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			show() {
				this.is_show = true;
			},
			cancel() {
				this.is_show = false;
			},
			addlist: function(item) {
				this.editlist2 = true
			},
			add() {
				this.$axios.post("http://139.9.169.87:8081/examsystem/addProfessional?professional.id="+this.newsList.professionalName+"&professionalName="+this.newsList.professionalDesc,{
					
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
				this.is_show = false;
			},
			edit(item, event, index) {
				this.editlist = true;
				this.newsList.id = item.id;
				this.newsList.professionalName = item.professionalName;
				this.newsList.professionalDesc = item.professionalDesc;
			},
			update(id) {
				this.$axios.post("http://139.9.169.87:8081/examsystem/updateProfessional?id="+id+"&professionalName="+this.newsList.professionalName+"&professionalDesc="+this.newsList.professionalDesc+"",{
					
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
				this.editlist = false;
			},
			deletelist(id) {
				this.$axios.get("http://139.9.169.87:8081/examsystem/deleteProfessional?id="+id)
			},
			handleDragStart(node, ev) {
				console.log('drag start', node);
			},
			handleDragEnter(draggingNode, dropNode, ev) {
				console.log('tree drag enter: ', dropNode.label);
			},
			handleDragLeave(draggingNode, dropNode, ev) {
				console.log('tree drag leave: ', dropNode.label);
			},
			handleDragOver(draggingNode, dropNode, ev) {
				console.log('tree drag over: ', dropNode.label);
			},
			handleDragEnd(draggingNode, dropNode, dropType, ev) {
				console.log('tree drag end: ', dropNode && dropNode.label, dropType);
			},
			handleDrop(draggingNode, dropNode, dropType, ev) {
				console.log('tree drop: ', dropNode.label, dropType);
			},
			allowDrop(draggingNode, dropNode, type) {
				if (dropNode.data.label === '二级 3-1') {
					return type !== 'inner';
				} else {
					return true;
				}
			},
			allowDrag(draggingNode) {
				return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
			}
		},
		created() {
				this.$axios.get("http://139.9.169.87:8081/examsystem/getProfessionalNoPage").then((res) => {
					this.newsList = res.data.data
				})
		},
	};
</script>

<style>
	.el-icon-edit {
		margin-left: 20px;
	}

	.el-icon-delete {
		margin-left: 50px;
	}

	#mask {
		background: rgba(0, 0, 0, .5);
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 4;
		top: 0;
		left: 0;
	}

	.mask {
		background: rgba(255, 255, 255, 1);
		width: 400px;
		height: 500px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 47;
		border-radius: 5px;
		text-align: center;
	}

	.title {
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.title span {
		float: right;
		cursor: pointer;
	}

	.content {
		padding: 10px;
	}

	.content input {
		width: 270px;
		margin-bottom: 15px;
	}

	#table table {
		width: 100%;
		font-size: 14px;
		border: 1px solid #eee;
		position: relative;
		left: 280px;
		top: -680px;
	}

	#table {
		padding: 0 10px;
	}

	#table thead th {
		background: #f5f5f5;
		padding: 10px;
		text-align: left;
	}

	#table tbody td {
		padding: 10px;
		text-align: left;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
	}

	#table tbody td span {
		padding: 0 10px;
		cursor: pointer;
	}

	.diul ul li {
		list-style: none;
		margin-top: 15px;
	}

	.diul ul li span {
		margin-left: 10px;
	}

	.tanx2 a {
		float: left;
		margin-top: 10px;
		margin-left: 30px;
	}

	.biaoge {
		margin-left: 300px;
		margin-top: -680px;
	}

	.duoji {
		margin: 20px;
	}

	.text-top {
		position: absolute;
		right: 200px;
		top: 20px;
	}

	.ss {
		background: white;
		color: #9A9A9A;
		margin-left: 20px;
	}

	.zx {
		background: white;
		color: #9A9A9A;
	}

	.input {
		width: 420px;
		height: 35px;
		margin-left: 500px;
	}

	.tou img {
		margin-top: 40px;
	}

	.tou h2 {
		margin-left: 30px;
		margin-top: -34px;
	}

	.tanx {
		width: 260px;
		height: 680px;
		border: 1px solid #DDDDDD;
		margin-top: 30px;
	}

	.zhong {
		width: 260px;
		height: 60px;
		border: 1px solid #DDDDDD;
		margin-left: -20px;
		margin-top: 20px;
	}

	.zhong a {
		font-size: 12px;
		float: left;
		margin-top: 20px;
		margin-left: 15px;
	}

	.tanx2 {
		width: 260px;
		height: 40px;
		border-bottom: 1px solid #DDDDDD;
		background-color: rgba(245, 245, 245, 1);
	}
</style>
