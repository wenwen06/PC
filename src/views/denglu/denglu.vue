<template>
	<div class="bj">
		<div class="top">
		  <van-icon name="arrow-left" @click="fanhui" />
		</div>
		<div class="kk">
			<h2>人力资源管理系统</h2>
			<el-input class="input" v-model="name" placeholder="wenwen"></el-input>
			<el-input class="input2" v-model="password" placeholder="5050"></el-input>
			<el-row>
				<el-button type="primary" class="ann" @click="submit()">登录</el-button>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'denglu',
		data() {
			return {
				name: '',
				password: '',
				input2: '',
				password2: ''
			}
		},
		methods: {
			submit() {
				let that = this;
				if (that.name == '') {
					this.$notify.error({
						title: '账号为空'
					});
				} else if (that.password == '') {
					this.$notify.error({
						title: '密码为空'
					});
				} else {
					if (that.name == that.input2) {
						if (that.password == that.password2) {
							this.$notify({
								title: '登录成功',
								type: 'success'
							}); 
							sessionStorage.setItem("user", that.name);
							this.$router.push({
								path: '/shouye'
							});
						} else {
							this.$notify.error({
								title: '密码错误',

							});
						}

					} else {
						this.$notify.error({
							title: '账号不存在',

						});
					}
				}
			},
			fanhui() {
			  this.$router.push("/shouye");
			}
		},
		created() {
			this.$axios({
				url: "https://www.fastmock.site/mock/633c91c9a881718728fa54d32715b99f/login/login",
				method: "get",
			}).then(res => {
				console.log(res)
				this.input2 = res.data.data.name
				this.password2 = res.data.data.password
				console.log(this.input2)
			})

		},
		chuan() {
			this.$store.state.show = true;
		}
	}
</script>

<style>
	.ann {
		width: 300px;
		margin-top: 40px;
		margin-left: 60px;
	}

	.input2 {
		width: 300px;
		float: left;
		margin-left: 60px;
		margin-top: -40px;
	}

	.input {
		width: 300px;
		padding: 60px;
	}

	.kk h2 {
		font-weight: bold;
		text-align: center;
		margin-top: 60px;
	}

	* {
		margin: 0px;
		padding: 0px;
	}

	.kk {
		width: 420px;
		height: 450px;
		background: white;
		float: left;
		margin-left: 550px;
		margin-top: 140px;
	}

	.bj {
		background: #0b5475;
		width: 100%;
		height: 720px;
	}
</style>
