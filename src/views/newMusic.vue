<template>
	<div class="newMusic">
		<input type="text" v-model="inputValue" />
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
		// 音乐列表
		axios({
			url: "https://autumnfish.cn/personalized/newsong?222",
		}).then((res) => {
			// console.log(res.data.result);
			// 给子组件musicList 的list数组赋值
			this.$refs.musicList.list = res.data.result;
		});
	},

	mounted() {},
	methods: {},
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
}
</style>
