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
					<img class="title-img" :src="item.picUrl" alt="" />
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
			// console.log(id);
			this.$router.push("/audioPlay?id=" + id);
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
