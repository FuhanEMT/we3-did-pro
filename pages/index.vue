<template>
  <div class="box">
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo_slices/logo.png" alt="" />
      </div>

      <div class="center-assgin">
        <div>Home</div>
        <div>Twitter</div>
        <div>Docs</div>
        <div>Stake(soon)</div>
      </div>

      <div class="right-secretKey">
        <div class="i18-logo">
          <img src="@/assets/logo_slices/i18.png" alt="" />
        </div>
        <div>EN</div>
        <div class="i18-bottom">
          <img src="@/assets/logo_slices/bottom.png" />
        </div>
      </div>

      <div class="right-connect">
        <div class="icon">
          <img src="@/assets/logo_slices/mony.png" />
        </div>
        <span>Connect</span>
      </div>
    </div>

    <div class="content">
      <div class="left">
        <div class="banner">
          <img src="@/assets/logo_slices/banner.png" />
        </div>
        <div class="size">
          Get your web3 domain, replace your complex address
        </div>
        <div class="item-ilb">
          <div class="item">Decentralized</div>
          <div class="item">Cross-chain</div>
          <div class="item">Open source</div>
          <div class="item">community-driven</div>
        </div>

        <div class="seach-box">
          <div class="input">
            <input placeholder="get your web3 name" type="text" />
            <div class="size">.web3</div>
            <img src="@/assets/logo_slices/search.png" />
          </div>
          <div class="btn">Search</div>
        </div>

        <div class="nav_size">.web3 = .ape / .bean / .cat / .bird...</div>
      </div>
      <div class="right">
        <img src="@/assets/logo_slices/show.png" alt="" />
        <img src="@/assets/logo_slices/antins.png" alt="" />
      </div>
    </div>

    <div class="footer">
      <div class="box">
        <div class="left">
          <div>
            <img src="@/assets/logo_slices/footer.png" />
            <div>
              .web3 is a decentralized digital identity system that is building
              a trust,transparency and interoperable chain for users and dApps
            </div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div>Resources</div>
            <div>Whitebook</div>
            <div>Brand Kit</div>
          </div>
          <div class="item">
            <div>Developer</div>
            <div>Github</div>
            <div>Integration</div>
          </div>
          <div class="item">
            <div>Community</div>
            <div>Twitter</div>
            <div>Discord</div>
            <div>Medium</div>
          </div>
        </div>
      </div>
    </div>
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

<style lang="less" scoped>
.box {
  width: 100%;
}
.header {
  .right-secretKey {
    display: flex;
    align-items: center;
    font-weight: bold;
    .i18-logo {
      width: 23px;
      img {
        width: 100%;
      }
      margin-right: 5px;
    }
    .i18-bottom {
      margin-left: 5px;
      width: 15px;
      img {
        width: 100%;
      }
      margin-right: 5px;
    }
  }
  .center-assgin {
    display: flex;
    align-items: center;
    div {
      color: #000;
      font-size: 16px;
      margin-right: 60px;
      font-weight: bold;
    }
  }
  .right-connect {
    display: flex;
    background: #000;
    font-size: 14px;
    color: #fff;
    padding: 5px 10px;
    align-items: center;
    border-radius: 5px;
    .icon {
      width: 20px;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
  }
  max-width: 1210px;
  min-width: 1000px;
  padding: 65px 0px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 100px;
    img {
      width: 100%;
    }
  }
}
.nav_size {
  margin: 25px 0;
}
.seach-box {
  width: 100%;
  display: flex;
  align-items: center;
  .input {
    position: relative;
    .size {
      position: absolute;
      right: 20px;
      top: -4px;
      font-size: 10px;
    }
    img {
      width: 23px;
      position: absolute;
      top: 21px;
      left: 20px;
      z-index: 1;
    }
    background: #e5e5e5;
    width: 80%;
    input {
      width: 100%;
      background: #e5e5e5;
      border: 0;
      padding: 20px 80px 20px 20px;
      text-indent: 40px;
      font-size: 16px;
    }
  }
  .btn {
    width: 20%;
    background: #000;
    color: #fff;
    padding: 21.5px 10px;
    text-align: center;
  }
}
.content {
  width: 1210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  .left {
    width: 50%;
    .banner {
      width: 600px;
      img {
        width: 100%;
      }
    }
    .size {
      font-size: 20px;
      margin-top: 20px;
    }
    .item-ilb {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 40px 0;
      .item {
        width: 23.5%;
        text-align: center;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        padding: 5px 10px;
      }
    }
  }
  .right {
    width: 50%;
    text-align: right;
    position: relative;
    img:nth-child(1) {
      width: 550px;
      position: relative;
      z-index: 1;
    }
    img:nth-child(2) {
      width: 550px;
      position: absolute;
      left: -20px;
      top: -65px;
    }
  }
}
.footer {
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 40px 0 70px 0;
  z-index: 2;
  .box{
    width: 1200px; margin:0 auto;
    display: flex;
    justify-content: space-between;
  }
  div {
    width: 40%;
    text-align: center;
  }
  .left {
    div {
      img {
        width: 150px;
        margin-bottom: 20px;
      }
      text-align: left;
      font-size: 10px;
      color: #fff;
      width: 500px;
      margin: 0 auto;
    }
  }
  .right {
    display: flex;
    .item {
      div:nth-child(1) {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 10px;
        color: #fff;
      }
      div {
        color: #c4c4c4;
        font-size: 16px;
      }
    }
  }
}
</style>
