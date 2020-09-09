<template>
	<div>
		<div class="text-top">
			<el-button type="primary" id="xz" icon="el-icon-circle-plus-outline" @click="show">劳动合同登记</el-button>
		</div>
		<div id="table">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>主题</th>
						<th>所属部门</th>
						<th>被考核人</th>
						<th>自评分</th>
						<th>主管评分</th>
						<th>考核结果</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in page_arrs" :key="index">
						<td width="10%">{{item.date}}</td>
						<td width="7%">{{item.name}}</td>
						<td width="8%">{{item.address}}</td>
						<td width="8%">{{item.cong}}</td>
						<td width="12%">{{item.zwu}}</td>
						<td width="12%">{{item.jg}}</td>
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
						<el-input v-model="newsList.date" placeholder="主题"></el-input>
						<el-input v-model="newsList.name" placeholder="所属部门"></el-input>
						<el-input v-model="newsList.address" placeholder="被考核人"></el-input>
						<el-input v-model="newsList.cong" placeholder="自评分"></el-input>
						<el-input v-model="newsList.zwu" placeholder="主管评分"></el-input>
						<el-input v-model="newsList.jg" placeholder="考核结果"></el-input>
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
						date: '2016年4月绩效考核单-张旭',
						name: '销售部,',
						address: '张旭',
						cong: '92',
						zwu: '0',
						jg: '0'
					},
					{
						date: '2016年4月绩效考核单-张旭2',
						name: '销售部,',
						address: '张旭',
						cong: '88',
						zwu: '007',
						jg: '0'
					},
					{
						date: '2016年4月绩效考核单-张旭3',
						name: '销售部3',
						address: '张旭',
						cong: '100',
						zwu: '5050',
						jg: '0'
					},
					{
						date: '2016年4月绩效考核单-张旭4',
						name: '销售部345',
						address: '张旭',
						cong: '150',
						zwu: '0432',
						jg: '0'
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
