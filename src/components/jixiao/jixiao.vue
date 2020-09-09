<template>
	<div>
		<div class="tou">
			<img src="../../../public/img/zmian.png" />
			<h2>绩效管理</h2>
		</div>
		<div class="tanx">
			<div class="tanx2">
				<a>分类</a>
			</div>
			<div class="diul">
				<ul>
					<router-link to="/shouye/jixiao/yuedi" tag="li"><i class="el-icon-folder"></i><span>月底绩效考核</span></router-link>
					<router-link to="/shouye/jixiao/jidu" tag="li"><i class="el-icon-folder"></i><span>季度绩效考核</span></router-link>
					<router-link to="/shouye/jixiao/niandu" tag="li"><i class="el-icon-folder"></i><span>年度绩效考核</span></router-link>
					<router-link to="/shouye/jixiao/yuangong" tag="li"><i class="el-icon-folder"></i><span>奖励与处罚</span></router-link>
					<router-link to="/shouye/jixiao/xinzeng" tag="li"><i class="el-icon-folder"></i><span>新增</span></router-link>
				</ul>
			</div>
		</div>
		<div class="zhaoping">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name:"jixiao"
	}
</script>

<style>
	.diul ul li{
		list-style: none;
		margin-top: 15px;
	}
	.diul ul{
		margin-left: 10px;
	}
	.diul ul li span{
		margin-left: 10px;
	}
	.tanx2 a {
		float: left;
		margin-top: 10px;
		margin-left: 30px;
		font-weight: bold;
	}
	.tanx {
		width: 260px;
		height: 680px;
		border: 1px solid #DDDDDD;
		margin-top: 30px;
	}
	.tanx2 {
		width: 260px;
		height: 40px;
		border-bottom: 1px solid #DDDDDD;
		background-color: rgba(245, 245, 245, 1);
	}
	.tou img {
		margin-top: 40px;
	}
	
	.tou h2 {
		margin-left: 30px;
		margin-top: -34px;
	}
</style>