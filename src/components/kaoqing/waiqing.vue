<template>
	<div>
		<div class="text-top">
			<el-button type="primary" id="xz" icon="el-icon-circle-plus-outline" @click="show">外勤定位</el-button>
		</div>
		<div id="table">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>时间</th>
						<th>姓名</th>
						<th>定位地点</th>
						<th>地图</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in page_arrs" :key="index">
						<td width="10%">{{item.date}}</td>
						<td width="7%">{{item.name}}</td>
						<td width="8%">{{item.address}}</td>
						<td width="12%">{{item.cong}}</td>
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
						<el-input v-model="newsList.date" placeholder="时间"></el-input>
						<el-input v-model="newsList.name" placeholder="姓名"></el-input>
						<el-input v-model="newsList.address" placeholder="定位地点"></el-input>
						<el-input v-model="newsList.cong" placeholder="地图"></el-input>
						  <el-button type="primary" plain @click="add">提交</el-button>
						  <el-button plain @click="cancel">取消</el-button>
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
						date: '2017/8/24 16:02',
						name: '王萍',
						address: '江苏省南京市鼓楼区上海路28号',
						cong: '无'
					},
					{
						date: '2017/8/24 16:02',
						name: '王萍',
						address: '江苏省南京市鼓楼区上海路28号',
						cong: '无'
					},
					{
						date: '2017/8/24 16:023',
						name: '王萍',
						address: '江苏省南京市鼓楼区上海路28号',
						cong: '无'
					},
					{
						date: '2017/8/24 16:025',
						name: '王萍',
						address: '江苏省南京市鼓楼区上海路28号',
						cong: '无'
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
		width: 400px;
		text-align: center;
		height: 500px;
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
