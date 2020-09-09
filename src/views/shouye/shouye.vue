<template>
	<div class="bj">
		<div class="left">
			<div class="ren">
				<div class="ren2">
					</div>
				<h4>人力资源管理系统</h4>
				<img src="../../../public/img/toux.png" />
				<img src="../../../public/img/gou.png" />
				<input disabled="disabled" :value="value" :key="menuKey" id="wenwen"/>
				<p>探索协同运营管理之道</p>
			</div>
			<div class="heng">
			</div>
			<div class="left-one">
				<div class="hot_swtich">
					<router-link tag="div" to="/shouye/zmian" class="hot_item active">我的桌面</router-link>
					<router-link tag="div" to="/shouye/rshi" class="hot_item active">我的人事</router-link>
					<router-link tag="div" to="/shouye/guanli" class="hot_item active">员工管理</router-link>
					<router-link tag="div" to="/shouye/peizhi" class="hot_item active">招聘和配置</router-link>
					<router-link tag="div" to="/shouye/kaoq" class="hot_item active">考勤管理</router-link>
					<router-link tag="div" to="/shouye/guanh" class="hot_item active">福利和关怀</router-link>
					<router-link tag="div" to="/shouye/jixiao" class="hot_item active">绩效考核</router-link>
					<router-link @click.native='tui()' tag="div" to="/denglu/denglu"  class="hot_item active">安全退出</router-link>
				</div>
			</div>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
	    name: "shouye",
	    data() {
	        return {
	          menuKey: 1,
	          value: false,
	        };
	      },
	      watch: {
	        value() {
	          ++this.menuKey;
	        },
	      },
			methods:{
				tui(){
					sessionStorage.removeItem("user");
					this.$router.push({
						path:"/denglu"
					})
				}
			},
	      created() {
	        this.value = window.sessionStorage.getItem("user");
			console.log( this.value)
	      },
	};
</script>

<style>
	#wenwen{
		position: absolute;
		width: 50px;
		background: #0b5475;
		color: white;
		border: none;
		top: 88px;
		left: 150px;
	}
	.left-one .hot_swtich{
		height: 100%;
		line-height: 45px;
	}
	.left-one .hot_item{
		cursor: pointer;
		font-size: 15px;
		color: white;
		width: 31%;
		padding: 0px 89px;
		font-weight: 700;
	}
	.left-one .hot_item.router-link-active{
		cursor: pointer;
		background: #06394b;
	}
	.heng{
		width: 100%;
		height: 10px;
		background: #09435e;
		margin-top: 50px;
	}
	.ren p{
		color: white;
		font-size: 12px;
		float: left;
		margin-left: 110px;
		margin-top: -25px;
	}
	.ren2 h5{
		color: white;
		position: absolute;
		left: 140px;
		top: 86px;
	}
	.ren img:nth-of-type(2){
		position: relative;
		top: -30px;
		left: 10px;
	}
	.ren img:nth-of-type(1){
		margin-left: 30px;
		margin-top: 10px;
	}
	.ren h4{
		color: white;
		text-align: center;
		margin-top: 30px;
		margin-left:40px;
	}
	.bj{
		display: flex;
	}
	.left{
		width: 17%;
		height: 720px;
		background: #0b5475;
		position: fixed;
		z-index: 999;
	}
	.right{
		width: 80%;
		height: 100%;
		background: white;
		margin-left: 260px;
	}
	*{
		margin: 0px;
		padding: 0px;
	}
</style>
