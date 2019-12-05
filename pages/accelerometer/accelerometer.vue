<template>
	<view>
		<button @tap="startAccelerometer" type="primary">开始</button>
		<button type="primary">结束</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allXYZ: 0
			}
		},
		methods: {
			startAccelerometer() {
				const that = this;
				uni.startAccelerometer();
				uni.onAccelerometerChange(function (res) {
						const X = parseInt(res.x);
						const Y = parseInt(res.y);
						const Z = parseInt(res.z);
						that.allXYZ = Math.abs(X) + Math.abs(Y) + Math.abs(Z);
						console.log(that.allXYZ);
				});
			}
		}
	}
</script>

<style>

</style>
