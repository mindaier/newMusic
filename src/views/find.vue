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
// import axios from "axios";
// import moment from "moment";
import musicList from "../components/musicList.vue";

export default {
	components: {
		musicList,
	},
	data() {
		return {
			list: [],
			musicList: [],
		};
	},
	created() {
		// 轮播图
		this.$axios({
			url: "banner?113",
		}).then((res) => {
			// console.log(res);
			this.list = res.data.banners;
		});

		// 音乐列表
		this.$axios({
			url: "personalized/newsong?222",
		}).then((res) => {
			// console.log(res.data.result);
			this.$refs.musicList.list = res.data.result;
		});
	},
	filters: {
		// formatTime(time) {
		// 	return moment(time).format("mm:ss");
		// },
		// formatArr(arr) {
		// 	let _arr = arr.map((item) => {
		// 		return item.name;
		// 	});
		// 	return _arr.join(" & ");
		// },
	},
	methods: {
		goAudioPlay(id) {
			// 点击跳转到音乐播放页(传递参数 id和name)
			this.$router.push("/audioPlay?id=" + id);
		},
	},
};
</script>

<style>
.table {
	width: 100%;
}

tr {
	width: 100%;
	height: 73px;
	line-height: 40px;
	text-align: left;
	display: flex;
}
td {
	display: flex;
}
td .title-img {
	width: 70px;
	height: 70px;
	margin-right: 20px;
	margin-left: 20px;
}
.th1 {
	padding-left: 120px;
}
th.t1,
td.t1 {
	width: 40%;
}
th.t2,
td.t2 {
	width: 25%;
}
th.t3,
td.t3 {
	width: 25%;
}
th.t4,
td.t4 {
	width: 10%;
}
</style>
