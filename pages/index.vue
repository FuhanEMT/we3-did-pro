<template>
  <div class="header">
    <div @click="getMetamask()">连接MaterMasker</div>
    <div>钱包地址: {{metamask}}</div>
  </div>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      // web授权虚拟化对象
      webProvider: null,
      // 钱包地址
      metamask: null
    };
  },
  mounted() {},
  methods: {
    // 连接 Metamask 钱包
    getMetamask() {
      if (window.ethereum) {
        this.webProvider = window.ethereum;
        try {
          window.ethereum.enable();
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        web3Provider = window.web3.currentProvider;
      } else {
        this.webProvider = new this.$asyncWebOption.web.providers.HttpProvider(
          "http://localhost:3000"
        );
      }
      // 结合rpc节点实例化虚拟web对象
      this.$asyncWebOption.rpcWeb = new this.$asyncWebOption.web(
        this.webProvider
      );
      console.log(this.$asyncWebOption)
      this.getMetamaskWallet()
    },
    // 获取 Metamask 钱包地址
    getMetamaskWallet(){
      if (window.ethereum) {
        window.ethereum.enable().then((res) => {
          this.metamask = res[0]
        })
      }else{
        alert("请安装MetaMask钱包")
      }
    }
  },
});
</script>

<style>
.header {
  padding: 20px;
}
.header div {
  cursor: pointer;
}
</style>
