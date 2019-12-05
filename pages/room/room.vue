<script>
	import chatInput from '../../components/chatinput.vue';
	import messageShow from '../../components/messageshow.vue';
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				messages: [],
				socketOpen: false
			}
		},
		components: {
			chatInput,
			messageShow
		},
		created: function() {
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
			this.getMsgList();
			this.getsocketTask();
		},
		computed: mapState(['locallPath', 'userInfo', 'wsPath']),
		methods: {
			getInputMessage: function(message) { //获取子组件的输入数据
				// console.log(message);
				this.toRobot(message.content);
			},
			addMessage: function(user, content, userInfo) {
				var that = this;
				that.messages.push({
					user: user,
					info: content,
					userInfo: userInfo
				});
			},
			getMsgList: function() {
				const that = this;
				uni.request({
					url: this.locallPath + '/BBS/getMsgList',
					method: 'POST',
					success: (res) => {
						console.log(res);
						const {
							data
						} = res;
						this.messages = data.map(item => {
							const openId = item.userInfo.openId;
							return {
								...item,
								user: openId === that.userInfo.openId ? 'customer' : 'home'
							};
						});
						setTimeout(()=> {
							that.scrollToBottom();
						}, 30);
					}
				})
			},
			scrollToBottom: function() {
				var that = this;
				var query = uni.createSelectorQuery();
				query.selectAll('.m-item').boundingClientRect();
				query.select('#scrollview').boundingClientRect();
				query.exec(function(res) {
					that.style.mitemHeight = 0;
					res[0].forEach(function(rect) {
						// console.info(rect.height);
						that.style.mitemHeight = that.style.mitemHeight + rect.height + 40;
					});

					if (that.style.mitemHeight > that.style.contentViewHeight) {
						that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight;
						console.log(that.scrollTop);
					}
				});
			},
			toRobot: function(info) {
				const msg = {
					"userInfo": this.userInfo,
					"info": info
				}
				if (this.socketOpen) {
					uni.sendSocketMessage({
						data: JSON.stringify(msg)
					});
				}
			},
			getsocketTask() {
				const that = this;
				uni.connectSocket({
					url: this.wsPath + '/BBS/getMsg'
				})
				uni.onSocketOpen(function(res) {
					console.log(res, '打开了');
					that.socketOpen = true;
				});
				uni.onSocketMessage(function(res) {
					console.log('收到服务器内容：' + res.data);
					let msg = JSON.parse(res.data);
					const openId = msg.userInfo.openId;
					msg.user = openId === that.userInfo.openId ? 'customer' : 'home'
					that.messages.push(msg);
					setTimeout(()=> {
						that.scrollToBottom();
					}, 30);
				});
			}
		}
	}
</script>
<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true" :style="{height:style.contentViewHeight+'px'}" :scroll-with-animation="true"
			 :scroll-top="scrollTop">
				<message-show v-for="(message,index) in messages" :key="index" v-bind:message="message" :id="index"></message-show>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot">
			<chat-input @send-message="getInputMessage"></chat-input>
		</view>
	</view>
</template>

<style>
	body {
		min-height: 100%;
		background-color: #ede8ee;
		height: 100%;
		font-size: 32upx;
		line-height: 1.6;
	}

	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex: 1;
		margin-bottom: 100upx;

	}

	.foot {
		position: fixed;
		width: 100%;
		height: 90upx;
		min-height: 90upx;
		left: 0upx;
		bottom: 0upx;
		overflow: hidden;
	}
</style>
