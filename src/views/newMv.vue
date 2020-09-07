<template>
	<div class="newmv">
		<input
			type="text"
			v-model="inputValue"
			@keyup.enter="search"
			placeholder="请输入要搜索的MV"
		/>
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
			inputValue: "",
		};
	},
	created() {
		axios({
			url: "https://autumnfish.cn/mv/all",
		}).then((res) => {
			// console.log(res);
			let _arr = res.data.data;
			_arr.forEach((item) => {
				item.picUrl = item.cover;
				item.song = {
					artists: item.artists,
					album: {
						name: item.name,
					},
					duration: item.duration,
				};
			});
			this.$refs.musicList.list = _arr;
			this.$refs.musicList.type = "mp4";
		});
	},
	mounted() {},
	methods: {
		search() {
			axios({
				url:
					"https://autumnfish.cn/search?type=1004&keywords=" + this.inputValue,
			}).then((res) => {
				console.log(res.data.result.mvs);
				let _arr = res.data.result.mvs;
				_arr.forEach((item) => {
					item.picUrl = item.cover;
					item.song = {
						artists: item.artists,
						album: {
							name: item.name,
						},
						duration: item.duration,
					};
				});
				this.$refs.musicList.list = _arr;
			});
		},
	},
};
</script>

<style>
.newmv {
	text-align: center;
}
.newmv input {
	width: 320px;
	height: 30px;
	margin-bottom: 20px;
	outline: none;
	padding-left: 20px;
}
</style>
