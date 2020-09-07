<template>
	<div class="mvplay" v-if="info != ''">
		<h3>{{ info.name }}</h3>
		<p>演唱者: {{ info.artists | formatArr }}</p>
		<video class="video" :src="videoSrc" controls autoplay></video>
	</div>
</template>

<script>
// import axios from "axios";
export default {
	data() {
		return {
			videoSrc: "",
			info: "",
		};
	},
	created() {
		// 获取mv播放地址
		this.$axios({
			url: "mv/url?id=" + this.$route.query.id,
		}).then((res) => {
			// console.log(res);
			this.videoSrc = res.data.data.url;
		});
		// 获取mv详情
		this.$axios({
			url: "mv/detail?mvid=" + this.$route.query.id,
		}).then((res) => {
			// console.log(res);
			this.info = res.data.data;
		});
	},
	filters: {
		formatArr(arr) {
			// console.log(arr);
			let _arr = arr.map((item) => {
				return item.name;
			});
			return _arr.join(" & ");
		},
	},
	mounted() {},
	methods: {},
};
</script>

<style>
.mvplay {
	text-align: center;
}
.mvplay video {
	width: 800px;
	height: 500px;
}
.mvplay p,
.mvplay h3 {
	margin-bottom: 20px;
}
</style>
