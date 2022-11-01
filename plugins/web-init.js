import Vue from 'vue'

import web from 'web3'

// 全局注册 web3钱包 初始化对象
let asyncWebOption = {
    install(Vue) {
        Vue.prototype.$asyncWebOption = {
            // 原始 web3 方法对象
            web: web,
            // RPC结点实例对象
            rpcWeb: null
        }
    }
}

Vue.use(asyncWebOption)
