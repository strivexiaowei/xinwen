<template>
	<view>
		<view class="banner-head">
			<view @tap="back()" class="head-icon tui-icon tui-icon-arrowleft"></view>
			<image class="head-pic" :src="locallPath + '/uploads/images/' + curcontactInfo.headFileId + '/view'" mode=""></image>
		</view>
		<view class="item-name">{{ curcontactInfo.name}}</view>
		<view class="item-tel">{{ curcontactInfo.mobile }}</view>
		<view class="icon-wrap">
			<view class="item-icon">
				<view @tap="editContact" class="tui-icon tui-icon-edit"></view>
			</view>
			<view class="item-icon">
				<view @tap="makePhoneCall" class="tui-icon tui-icon-voipphone mahe-phone"></view>
			</view>
			<view class="item-icon">
				<view @tap="deleteContact" class="tui-icon tui-icon-delete"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
	       curcontactInfo: {
					name: undefined,
					sex: undefined,
					age: undefined,
					email: undefined,
					headFileId: undefined
				}
			}
		},
		computed: {
			...mapState(['curcontact', 'locallPath'])
		},
		created:function() {
			if (this.curcontact) {
				this.curcontactInfo = this.curcontact;
			}
		},
		methods: {
			...mapMutations(['setCurcontact']),
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: this.curcontact._id.mobile
				});
			},
			back() {
				this.setCurcontact(null);
				uni.navigateBack({
				    delta: 1
				});
			},
			deleteContact() {
				uni.request({
					url: this.locallPath + '/BBS/deleteContact',
					method: 'POST',
					data: {
						_id: this.curcontact._id
					},
					success: (res) => {
						console.log(res);
						this.setCurcontact(null);
						uni.navigateBack({
						    delta: 1,
								success: function(e) {
									var page = getCurrentPages().pop();
									if (page == undefined || page == null) return;
									page.onLoad();
								}
						});
					}
				})
			},
			editContact() {
				uni.navigateTo({
					url: '../add-friend/add-friend'
				});
			}
		}
	}
</script>

<style>
	.head-icon {
		width: 60upx;
		height: 60upx;
		color: #fff;
	}
	.banner-head {
		position: relative;
		height: 640upx;
		background: linear-gradient(to bottom, #608db7, #7D89BB);
	}

	.banner-head::after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100upx;
		border-radius: 100% 100% 0 0;
		content: '';
		background-color: #fff;
	}

	.head-pic {
		position: absolute;
		width: 200upx;
		height: 200upx;
		left: 50%;
		top: 40%;
		transform: translate(-50%, -50%);
		background-color: #344684;
		border-radius: 50%;
	}

	.item-name {
		font-size: 38upx;
		text-align: center;
	}

	.item-tel {
		position: relative;
		padding: 20upx 0;
		font-size: 48upx;
		text-align: center;
	}

	.item-tel::after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 80upx;
		height: 2px;
		background-color: #DADADA;
		content: '';
	}

	.address {
		padding: 30upx;
		text-align: center;
		color: #B4B4B4;
		font-size: 28upx;
	}

	.icon-wrap {
		display: flex;
	}
  .icon-wrap {
		padding-top: 30upx;
	}
	.icon-wrap .item-icon {
		flex: 1;
		text-align: center;
	}
	
	.item-icon .tui-icon {
		width: 160upx;
		height: 160upx;
		text-align: center;
		line-height: 160upx;
		border-radius: 50%;
		color: #3F536E;
	}
	
	.item-icon .tui-icon:active {
		background-color: #BBBBBB;
	}
	
	.mahe-phone {
		background: radial-gradient(#78D2F4, #A5B7E9);
	}
	.mahe-phone.tui-icon {
		font-size: 80upx;
		color: #fff;
	}
</style>
