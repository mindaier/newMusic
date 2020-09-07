<template>
	<div>
		<el-carousel :interval="4000" type="card" height="186px">
			<el-carousel-item v-for="(item, index) in list" :key="index">
				<img :src="item.imageUrl" alt="" />
			</el-carousel-item>
		</el-carousel>
		<h3>音乐推荐</h3>
		<!-- table组件 -->
		<musicList ref="musicList"></musicList>
	</div>
</template>

<script>
import axios from "axios";
import musicList from "../components/musicList.vue";

export default {
	components: {
		musicList,
	},
	data() {
		return {
			list: [],
		};
	},
	created() {
		// 轮播图
		axios({
			url: "https://autumnfish.cn/banner?113",
		}).then((res) => {
			// console.log(res);
			this.list = res.data.banners;
		});

		// 音乐列表
		axios({
			url: "https://autumnfish.cn/personalized/newsong?222",
		}).then((res) => {
			// console.log(res.data.result);
			this.$refs.musicList.list = res.data.result;
		});
	},
};
</script>

<style></style>
