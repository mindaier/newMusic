<template>
	<el-container class="wrapper">
		<el-header class="header" height="80px">黑云音乐</el-header>
		<el-container class="content">
			<el-aside width="200px">
				<!-- 侧边导航 -->
				<!-- :default-active="$route.path"当前默认路由 刷新不会跳转别的页面 -->
				<el-menu :default-active="$route.path" :router="true">
					<el-menu-item index="/find">
						<i class="el-icon-search"></i>
						<span slot="title">发现音乐</span>
					</el-menu-item>
					<el-menu-item index="/newMusic">
						<i class="el-icon-tickets"></i>
						<span slot="title">最新音乐</span>
					</el-menu-item>
					<el-menu-item index="/newMv">
						<i class="el-icon-video-camera"></i>
						<span slot="title">最新MV</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main class="main">
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: "App",
	components: {},
	data() {
		return {
			list: [],
		};
	},
	created() {},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.wrapper {
	width: 100%;
	height: 100%;
	background-color: #ccc;
}
.header {
	line-height: 80px;
	background-color: #eee;
	text-align: center;
}
.content {
	height: 800px;
}
.main {
	background-color: #fff;
}
.main img {
	width: 100%;
}
.header {
	height: 50px;
	line-height: 50px;
	font-size: 26px;
	font-weight: 500;
	color: #666;
	text-align: center;
}
</style>
