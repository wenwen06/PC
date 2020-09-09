<template>
	<div>
		<div class="text-top">
			<el-button type="primary" id="xz" icon="el-icon-circle-plus-outline" @click="show">入职申请</el-button>
		</div>
		<div id="table">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>主题</th>
						<th>入职人</th>
						<th>入职日期</th>
						<th>入职部门</th>
						<th>入职岗位</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in page_arrs" :key="index">
						<td width="10%">{{item.date}}</td>
						<td width="7%">{{item.name}}</td>
						<td width="8%">{{item.address}}</td>
						<td width="8%">{{item.cong}}</td>
						<td width="8%">{{item.zwu}}</td>
					</tr>
				</tbody>
			</table>
			<div id="mask" v-show="is_show">
				<div class="mask">
					<div class="title">
						新增
						<span @click="editlist2=false">x</span>
					</div>
					<div class="content">
						<input type="text" v-model="newsList.date" name="title" value="" placeholder="主题" />
						<input type="text" v-model="newsList.name" name="user" value="" placeholder="入职人" />
						<input type="text" v-model="newsList.address" name="date" value="" placeholder="入职日期" />
						<input type="text" v-model="newsList.cong" name="date" value="" placeholder="入职部门" />
						<input type="text" v-model="newsList.zwu" name="date" value="" placeholder="入职岗位" />
						<button @click="add">新增</button>
						<button @click="cancel">取消</button>
					</div>
				</div>
			</div>
		</div>
		<div class="anniu">
			<el-button-group>
				<el-button type="primary" icon="el-icon-arrow-left" @click="prePage">上一页</el-button>
				<button class="btn btn-default" type="submit" id="fenye">{{current_page}}/{{Math.ceil(newsList.length/pagesize)}}</button>
				<el-button type="primary" @click="nextPage">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
			</el-button-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				is_show: false,
				newsList: [{
						date: '入职申请-陈莹-1000179',
						name: '江圣俊',
						address: '2016-12-01',
						cong: '技术部',
						zwu: '高级工程师'
					},
					{
						date: '入职申请-陈莹-10002221792',
						name: '江圣俊',
						address: '2016-12-01',
						cong: '技术部',
						zwu: '高级工程师'
					},
					{
						date: '入职申请-陈莹-01793',
						name: '江圣俊',
						address: '2016-12-01',
						cong: '技术部',
						zwu: '高级工程师'
					},
					{
						date: '入职申请-陈莹-100794',
						name: '江圣俊',
						address: '2016-12-01',
						cong: '技术部',
						zwu: '高级工程师'
					}
				],
				currentPage: 1, //当前页号
				pagesize: 2 //每页大小
			}
		},
		methods: {
			show() {
				this.is_show = true;
			},
			cancel() {
				this.is_show = false;
			},
			prePage() {
				if (this.currentPage == 1) {
					return
				}
				this.currentPage = this.currentPage - 1
			},
			nextPage() {
				if (this.currentPage == Math.ceil(this.newsList.length / this.pagesize)) {
					return
				}
				this.currentPage = this.currentPage + 1
			},
			add() {
				var item = {
					date: this.newsList.date,
					name: this.newsList.name,
					address: this.newsList.address,
					cong: this.newsList.cong,
					zwu: this.newsList.zwu,
					ruzhi: this.newsList.ruzhi,
				};
				this.newsList.push(item);
				this.is_show = false;
			},
		},
		computed: {
			page_arrs() {
				let {
					currentPage,
					pagesize
				} = this
				return this.newsList.slice((currentPage - 1) * pagesize, currentPage * pagesize)
			},
			current_page() {
				return this.currentPage
			}
		},
	}
</script>

<style>
	#fenye{
		background: #1E9FFF;
		border: #1E9FFF;
		padding: 12px 20px;
		color: white;
		margin-left: 30px;
	}
	.anniu {
		position: absolute;
		left: 600px;
		top: 320px;
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
		width: 300px;
		height: 300px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 47;
		border-radius: 5px;
	}

	#xz {
		position: absolute;
		right: 50px;
		top: 50px;
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
</style>
