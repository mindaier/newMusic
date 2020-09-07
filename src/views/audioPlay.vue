<template>
	<div class="musicPlay" v-if="musicInfo != ''">
		<h3>{{ musicInfo.al.name }}</h3>
		<p>{{ musicInfo.ar | formatArr }}</p>
		<img :src="musicInfo.al.picUrl" alt="" />
		<audio :src="musicUrl" controls autoplay></audio>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			musicUrl: "",
			musicInfo: "",
		};
	},
	created() {
		axios({
			url:
				"https://autumnfish.cn/song/url?id=" +
				this.$route.query.id +
				"&abc=22111",
		}).then((res) => {
			// console.log(res);
			// 图片
			this.musicUrl = res.data.data[0].url;
		});
		axios({
			url:
				"https://autumnfish.cn/song/detail?ids=" +
				this.$route.query.id +
				"&abc=22111",
		}).then((res) => {
			// console.log(res);
			// 详情
			this.musicInfo = res.data.songs[0];
		});
	},
	filters: {
		formatArr(arr) {
			let _arr = arr.map((item) => {
				return item.name;
			});
			_arr.join(" & ");
		},
	},
	mounted() {},
	methods: {},
};
</script>

<style scoped>
.musicPlay {
	width: 600px;
	margin: 0 auto;
	text-align: center;
}
.musicPlay img {
	width: 100%;
}
.musicPlay p {
	margin: 20px 0;
}
.musicPlay audio {
	width: 100%;
	margin-top: 20px;
	outline: none;
}
</style>
