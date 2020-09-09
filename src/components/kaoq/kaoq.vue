<template>
	<div>
		<div class="tou">
			<img src="../../../public/img/zmian.png" />
			<h2>考勤管理</h2>
		</div>
		<div class="tanx">
			<div class="tanx2">
				<a>分类</a>
			</div>
			<div class="diul">
				<ul>
					<router-link to="/shouye/kaoq/chuc" tag="li"><i class="el-icon-folder"></i><span>出差申请</span></router-link>
					<router-link to="/shouye/kaoq/waichu" tag="li"><i class="el-icon-folder"></i><span>外出申请</span></router-link>
					<router-link to="/shouye/kaoq/jiaban" tag="li"><i class="el-icon-folder"></i><span>加班申请</span></router-link>
					<router-link to="/shouye/kaoq/qingxiu" tag="li"><i class="el-icon-folder"></i><span>请休假申请</span></router-link>
					<router-link to="/shouye/kaoq/tiaoxiu" tag="li"><i class="el-icon-folder"></i><span>调休申请</span></router-link>
					<router-link to="/shouye/kaoq/waiqing" tag="li"><i class="el-icon-folder"></i><span>外勤定位</span></router-link>
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
		name:"peizhi"
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