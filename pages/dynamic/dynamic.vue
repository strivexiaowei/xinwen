<template>
	<scroll-view style="height: 100vh;" scroll-y="true" @scrolltolower="loaderMore">
		<view class="dyname">
			<uni-swiper-dot :info="info" :current="current" mode="nav" field="content">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<image :src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			<block v-for="(item, index) in dynList" :key="index">
				<view v-if="item.type === 'Dy'" class="bbs-card">
					<image :src="locallPath + '/uploads/images/' + item.imgs[0] + '/view'" mode="widthFix" @tap="previewImage(index)"></image>
					<view class="card-num-view">{{ item.imgs.length }}P</view>
					<view class="card-bottom">
						<view class="title">
							{{ item.content }}
						</view>
						<text class="info-text">黄先伟</text>
						<text class="info-text">63条评论</text>
						<text class="info-text">6天前</text>
						<text class="info-text">收藏</text>
						<text class="info-text">分享</text>
					</view>
				</view>
				<view v-if="item.type === 'Wz'" class="bbs-card">
					<view class="card-bottom">
						<view class="article-cantent">
							<view class="img-pic">
								<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" mode="aspectFill"></image>
							</view>
							<view class="title">你们对fpx夺冠怎么看</view>
						</view>
						<text class="info-text">黄先伟</text>
						<text class="info-text">63条评论</text>
						<text class="info-text">6天前</text>
						<text class="info-text">收藏</text>
						<text class="info-text">分享</text>
					</view>
				</view>
			</block>
			<uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction"
			 @trigger="trigger"></uni-fab>
		</view>
	</scroll-view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			uniSwiperDot,
			uniFab
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				page: 1,
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: "#007AFF"
				},
				content: [{
						iconPath: '/static/xiewenz.png',
						selectedIconPath: '/static/xiewenz.png',
						text: '写文章',
						active: false
					},
					{
						iconPath: '/static/xiangfa.png',
						selectedIconPath: '/static/xiangfa.png',
						text: '发动态',
						active: false
					}
				],
				dynList: []
			}
		},
		computed: {
			...mapState(['locallPath'])
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			trigger(e) {
				console.log(e);
				const {
					index
				} = e;
				if (index === 0) {

				} else {
					uni.navigateTo({
						url: '../new-dynamic/new-dynamic'
					});
				}
			},
			getList() {
				uni.request({
					url: this.locallPath + '/BBS/dynamicList',
					method: 'POST',
					data: {
						pageSize: 10,
						page: this.page
					},
					success: (res) => {
						console.log(res);
						this.dynList = [...this.dynList, ...res.data];
						this.page = this.page + 1;
					}
				})
			},
			previewImage(index) { //预览图片
				uni.previewImage({
					urls: this.dynList[index].imgs.map(item => this.locallPath + '/uploads/images/' + item + '/view')
				});
			},
			loaderMore() {
				this.getList();
				console.log('到底了');
			}
		},
		onLoad() {
			this.getList();
		}
	}
</script>

<style>
	page {
		display: flex;
		background-color: #f4f4f4;
	}

	.swiper-box {
		height: 400upx;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: #eee;
		color: #fff;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
	}

	.bbs-card-wraper {
		display: flex;
	}

	.bbs-card {
		position: relative;
		margin: 20upx;
		background-color: #fff;
		border-radius: 6upx;
		overflow: hidden;
	}

	.bbs-card .card-num-view {
		position: absolute;
		top: 20upx;
		right: 20upx;
		padding: 0 10upx;
		background-color: #4CD964;
		color: #fff;
		font-size: 24upx;
		border-radius: 4upx;
	}

	.bbs-card image {
		width: 100%;
	}

	.card-bottom {
		padding: 10upx;
	}

	.card-bottom .title {
		color: #2C405A;
		font-size: 32upx;
	}

	.card-bottom .info-text {
		margin-right: 10upx;
		color: #999999;
		font-size: 28upx;
	}

	.article-cantent {
		display: flex;
	}

	.article-cantent .img-pic {
		width: 240upx;
		height: 180upx;
	}

	.article-cantent .title {
		flex: 1;
		padding: 10upx;
		color: #2C405A;
		font-size: 32upx;
	}

	.article-cantent .img-pic image {
		width: 100%;
		height: 100%;
	}
</style>
