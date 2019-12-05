import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		forcedLogin: false,
		hasLogin: false,
		userInfo: {
			nickName: '匿名',
			avatarUrl: '../../static/customerHL.png'
		},
		openid: null,
		testvuex: false,
		locallPath: 'http://10.222.10.51',
		// locallPath: 'http://122.51.171.90',
		wsPath: 'ws://10.222.10.51',
		// wsPath: 'ws://122.51.171.90',
		user: {
			home: {
				id: 1,
				name: 'tax',
				img: 'static/homeHL.png'
			},
			customer: {
				id: 2,
				name: 'customer',
				img: 'static/customerHL.png'
			}
		},
		updated:function(){
			console.log('message update:'+ this.scrollTop);
		},
		curcontact: null
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state){
			state.testvuex = true
		},
		setTestFalse(state){
			state.testvuex = false
		},
		setCurcontact(state, curcontact ) {
			state.curcontact = curcontact;
		}
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store