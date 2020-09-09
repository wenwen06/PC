<template>
	<div>
		<div class="tou">
			<img src="../../../public/img/zmian.png" />
			<h2>招聘和配置</h2>
		</div>
		<div class="tanx">
			<div class="tanx2">
				<a>分类</a>
			</div>
			<div class="diul">
				<ul>
					<router-link to="/shouye/peizhi/zhaop" tag="li"><i class="el-icon-folder hot_item active"></i><span>招聘管理</span></router-link>
					<router-link to="/shouye/peizhi/shiyong" tag="li"><i class="el-icon-folder hot_item active"></i><span>入职管理</span></router-link>
					<router-link to="/shouye/peizhi/linshi" tag="li"><i class="el-icon-folder hot_item active"></i><span>转正管理</span></router-link>
					<router-link to="/shouye/peizhi/tuixiu" tag="li"><i class="el-icon-folder hot_item active"></i><span>岗位调动管理</span></router-link>
					<router-link to="/shouye/peizhi/lizhi" tag="li"><i class="el-icon-folder hot_item active"></i><span>离职管理</span></router-link>
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
	.diul .hot_item.router-link-active{
		color: #1E9FFF;
	}
	.diul ul li{
		list-style: none;
		margin-top: 15px;
		cursor: pointer;
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