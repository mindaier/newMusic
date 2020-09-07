<template>
	<div class="newMusic">
		<input
			type="text"
			v-model="inputValue"
			@keyup.enter="search"
			placeholder="请输入要搜索的歌曲"
		/>
		<musicList ref="musicList"></musicList>
	</div>
</template>

<script>
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
		// 音乐列表
		this.$axios({
			url: "personalized/newsong?222",
		}).then((res) => {
			// console.log(res.data.result);
			// 给子组件musicList 的list数组赋值
			this.$refs.musicList.list = res.data.result;
		});
	},

	mounted() {},
	methods: {
		search() {
			// console.log(333);
			this.$axios({
				url: "search?keywords=" + this.inputValue,
			}).then((res) => {
				let _temp = res.data.result.songs;
				// console.log(_temp);
				_temp.forEach((item) => {
					item.song = {
						artists: item.artists,
						album: item.album,
						duration: item.duration,
					};
				});
				// console.log(_temp);
				this.$refs.musicList.list = _temp;
			});
		},
	},
};
</script>

<style>
.newMusic {
	text-align: center;
}
.newMusic input {
	width: 320px;
	height: 30px;
	margin-bottom: 20px;
	outline: none;
	padding-left: 20px;
}
</style>
