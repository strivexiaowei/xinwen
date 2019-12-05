<template>
	<view class="container">
		<form @submit="formSubmit" @reset="formReset">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">姓名</view>
					<input v-model="curcontactInfo['name']" placeholder-class="phcolor" class="tui-input" name="name" placeholder="请输入姓名"
					 maxlength="50" type="text" />
					<radio-group class="radio-group" name="sex">
						<label v-for="(item, index) in sexArr" :key="index" class="tui-radio">
							<radio :value="item.value" :checked="item.checked" color="#5677fc" />{{ item.label }}
						</label>
					</radio-group>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">年龄</view>
					<input v-model="curcontactInfo['age']" placeholder-class="phcolor" class="tui-input" name="age" placeholder="请输入年龄"
					 maxlength="50" type="number" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">手机号</view>
					<input v-model="curcontactInfo['mobile']" placeholder-class="phcolor" class="tui-input" name="mobile" placeholder="请输入手机号"
					 maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">邮箱</view>
					<input v-model="curcontactInfo['email']" placeholder-class="phcolor" class="tui-input" name="email" placeholder="请输入邮箱"
					 maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">身份证号码</view>
					<input v-model="curcontactInfo['idcard']" placeholder-class="phcolor" class="tui-input" name="idcard" placeholder="请输入身份证号码"
					 maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">头像</view>
					<view class="upload-wrap">
						<tui-upload :serverUrl="serverUrl" :limit="1" :value="imageData" @complete="result" @remove="remove"></tui-upload>
					</view>
				</view>
			</tui-list-cell>
			<view class="tui-btn-box">
				<button class="btn-primary" hover-class="btn-hover" formType="submit" type="primary">保存</button>
				<button class="btn-primary btn-gray" hover-class="btn-gray-hover" formType="reset">重置</button>
			</view>
		</form>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	const form = require("../../components/utils/formValidation.js")
	import tuiUpload from '@/components/tui-upload/tui-upload'
	import tuiListCell from "@/components/list-cell/list-cell"
	export default {
		components: {
			tuiListCell,
			tuiUpload
		},
		data() {
			return {
				imageData: [],
				//上传地址
				serverUrl: "/BBS/uploads",
				hasEidt: false,
				curcontactInfo: {
					name: undefined,
					sex: undefined,
					age: undefined,
					email: undefined
				},
				sexArr: [{
						label: '男',
						value: '1',
						checked: false
					},
					{
						label: '女',
						value: '2',
						checked: false
					}
				]
			}
		},
		computed: {
			...mapState(['locallPath', 'curcontact'])
		},
		created: function() {
			if (this.curcontact) {
				this.hasEidt = true;
				this.curcontactInfo = this.curcontact;
				this.imageData.push(this.curcontact.headFileId);
				this.sexArr[this.curcontact['sex'] - 1].checked = true;
			} else {
				this.hasEidt = false
			}
		},
		methods: {
			...mapMutations(['setCurcontact']),
			formSubmit: function(e) {
				//表单规则
				let rules = [{
					name: "name",
					rule: ["required", "isChinese", "minLength:2", "maxLength:6"], //可使用区间，此处主要测试功能
					msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
				}, {
					name: "sex",
					rule: ["required"],
					msg: ["请选择性别"]
				}, {
					name: "age",
					rule: ["isNum", "range:[0,150]"],
					msg: ["请输入正确的年龄", "请输入正确的年龄范围：0-150"]
				}, {
					name: "mobile",
					rule: ["required", "isMobile"],
					msg: ["请输入手机号", "请输入正确的手机号"]
				}, {
					name: "email",
					rule: ["isEmail"],
					msg: ["请输入正确的邮箱"]
				}, {
					name: "idcard",
					rule: ["isIdCard"],
					msg: ["请输入正确的身份证号码"]
				}];
				//进行表单检查
				let formData = e.detail.value;
				let checkRes = form.validation(formData, rules);
				console.log(formData);
				let headFileId = this.imageData[0];
				if (!checkRes) {
					if (!this.hasEidt) {
						uni.request({
							url: this.locallPath + '/BBS/addContact',
							data: {
								...formData,
								headFileId
							},
							method: 'POST',
							success: (res) => {
								console.log(res);
								if (res.statusCode === 200) {
									uni.navigateBack({
										delta: 1
									});
								}
							}
						})
					} else {
						uni.request({
							url: this.locallPath + '/BBS/eidtContact',
							data: {
								...formData,
								headFileId,
								_id: this.curcontact._id
							},
							method: 'POST',
							success: (res) => {
								console.log(res);
								if (res.statusCode === 200) {
									this.setCurcontact(null);
									uni.navigateBack({
										delta: 2
									});
								}
							}
						})
					}
				} else {
					uni.showToast({
						title: checkRes,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log("清空数据")
			},
			result: function(e) {
				console.log(e)
				this.imageData = e.imgArr;
			},
			remove: function(e) {
				//移除图片
				console.log(e)
				let index = e.index
			}
		}
	}
</script>

<style>
	.container {
		padding: 20rpx 0 50rpx 0;
	}

	.upload-wrap {
		padding-left: 20upx;
	}

	.tui-line-cell {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-title {
		line-height: 32rpx;
		flex-shrink: 0;
	}

	.tui-input {
		font-size: 32rpx;
		color: #333;
		padding-left: 20rpx;
		flex: 1;
	}

	.radio-group {
		margin-left: auto;
		transform: scale(0.8);
		transform-origin: 100% center;
		flex-shrink: 0;
	}

	.tui-radio {
		display: inline-block;
		padding-left: 28rpx;
		font-size: 36rpx;
		vertical-align: middle;
	}


	.tui-btn-box {
		padding: 40rpx 50rpx;
		box-sizing: border-box;
	}

	.btn-gray {
		margin-top: 30rpx;
	}

	.tui-tips {
		padding: 30rpx;
		color: #999;
		font-size: 24rpx;
	}
</style>
