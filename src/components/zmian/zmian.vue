<template>
	<div>
		<div class="tou">
			<img src="../../../public/img/zmian.png" />
			<h2>我的桌面</h2>
		</div>
		<div class="pai">
			<div class="diyi">
				<div class="diyi2">
					<a>员工在职状态分布</a>
				</div>
				
					<img src="../../../public/img/tubiao.png" id="img"/>
			</div>
			<div class="diyi">
				<div class="diyi2">
					<a>员工学历分布</a>
				</div>
				<img src="../../../public/img/tubiao2.png" id="img"/>
				<!-- <div id="myChart" :style="{width: '300px', height: '200px'}"></div> -->
			</div>
			<div class="diyi">
				<div class="diyi2">
					<a>员工年龄分布</a>
				</div>
				<img src="../../../public/img/tubiao3.png" id="img"/>
				<!-- <div id="myChart" :style="{width: '300px', height: '200px'}"></div> -->
			</div>
		</div>
		<div class="pai2">
			<div class="diyi">
				<div class="diyi2">
					<a>规章制度</a>
				</div>
				<ul class="ul">
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
					<li><a>资产管理制度（2016.3修订版</a><span>5/7</span></li>
				</ul>
			</div>
			<div class="diyi">
				<div class="diyi2">
					<a>信息公告</a>
				</div>
				<ul class="ul2">
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
					<li><a>BPM系统管理员岗位职责都有哪些？</a><span>5/7</span></li>
				</ul>
			</div>
			<div class="diyi">
				<div class="diyi2">
					<a>我关注的知识</a>
				</div>
				<ul class="ul3">
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
					<li><a>Colloa签约倍科电器，助力世界500强</a><span>5/7</span></li>
				</ul>
			</div>
		</div>
		<div class="pai3">
			<div class="diyi3">
				<div class="diyi2">
					<a>规章制度</a>
				</div>
				<ul class="ul">
					<li><a>优职坊官网</a></li>
					<li><a>优职坊官网</a></li>
					<li><a>优职坊官网</a></li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"zmian",
		
// 		methods:{
// 			drawLine(){
// 				let myChart = this.$echarts.init(document.getElementById('myChart'));
// 				myChart.option = {
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [820, 932, 901, 934, 1290, 1330, 1320],
//         type: 'line',
//         areaStyle: {}
//     }]
// };

			
	}
</script>

<style>
	#img{
		transform: scale(0.8);
		margin-top: -30px;
	}
	.ul li{
		list-style: none;
		margin-top: 10px;
		color: #1e9fff;
		margin-left: 10px;
	}
	.ul li span{
		color: black;
		margin-left: 180px;
	}
	.ul2 li{
		list-style: none;
		margin-top: 10px;
		color: #1e9fff;
		margin-left: 10px;
	}
	.ul2 li span{
		color: black;
		margin-left: 140px;
	}
	.ul3 li{
		list-style: none;
		margin-top: 10px;
		color: #1e9fff;
		margin-left: 10px;
	}
	.ul3 li span{
		color: black;
		margin-left: 120px;
	}
	.pai{
		display: flex;
	}
	.pai2{
		display: flex;
	}
	.diyi2 a{
		font-weight: bold;
		float: left;
		margin-left: 20px;
		margin-top: 10px;
		
	}
	.diyi2{
		width: 433px;
		height: 40px;
		background: #f5f5f5;
		border-bottom: 1px solid #dfdfdf;
	}
	.diyi:nth-of-type(2){
		margin-left: 30px;
	}
	.diyi:nth-of-type(3){
		margin-left: 30px;
	}
	.diyi{
		width: 433px;
		height: 342px;
		border: 1px solid #dfdfdf;
		margin-top: 30px;
	}
	.diyi3{
		width: 433px;
		height: 132px;
		border: 1px solid #dfdfdf;
		margin-top: 30px;
	}
	.tou img{
		margin-top: 40px;
	}
	.tou h2{
		margin-left: 30px;
		margin-top: -34px;
	}
</style>
