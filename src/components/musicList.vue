<template>
	<div>
		<table class="table">
			<tr style="height: 40px;">
				<th class="th1 t1">音乐标题</th>
				<th class="t2">歌手</th>
				<th class="t3">专辑</th>
				<th class="t4">时长</th>
			</tr>
			<!-- 点击列表 跳转到歌曲播放页面 并播放音乐 -->
			<tr
				v-for="(item, index) in list"
				:key="index"
				@click="goAudioPlay(item.id)"
			>
				<td class="td1 t1">
					<div class="num">{{ index + 1 }}</div>
					<img class="title-img" v-if="item.picUrl" :src="item.picUrl" alt="" />
					<div>{{ item.name }}</div>
				</td>
				<!-- <td class="t2">{{ item.song.artists[0].name }}</td> -->
				<td class="t2">{{ item.song.artists | formatArr }}</td>
				<td class="t3">{{ item.song.album.name }}</td>
				<td class="t4">{{ item.song.duration | formatTime }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import moment from "moment";
export default {
	data() {
		return {
			list: [],
		};
	},
	created() {},
	mounted() {},
	methods: {
		goAudioPlay(id) {
			console.log(id);
		},
	},
	filters: {
		formatArr(arr) {
			return arr
				.map((item) => {
					return item.name;
				})
				.join(" & ");
		},
		formatTime(time) {
			return moment(time).format("mm:ss");
		},
	},
};
</script>

<style></style>
