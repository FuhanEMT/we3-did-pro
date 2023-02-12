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

    <div class="content content_back">
      <div class="center">
        <div class="left">
          <div>
            <div class="left_title">Build Your</div>
            <div class="left_content">
              <span>Web3</span>
              <span>Profile</span>
            </div>
          </div>
          <div>
            Just connect wallet to automatically generate your decentralized
            profile. Let us know moreabout you and go social on web3
          </div>
          <button class="btn">Build now</button>
        </div>
        <div
          class="right"
          @mousemove="getMousemoveEnv($event)"
          @mouseleave="getMouseleaveEnv($event)"
        >
          <img id="select" src="@/assets/img/select.png" alt="" />
          <img id="user" src="@/assets/img/user.png" alt="" />
          <img id="back" src="@/assets/img/back.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template> 

<script lang="js">
import Vue from "vue";
import '../assets/font/fonts.css'
export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      // web授权虚拟化对象
      webProvider: null,
      // 钱包地址
      metamask: null,
      // 动画类名名称
      animaClassName: [
        {name: 'user' , translIndex: 30},
        {name: 'select' , translIndex: 60},
        {name: 'back' , translIndex: -10}
      ],
      // 动画倍数
      multiple: 20
    };
  },
  mounted() {
  },
  methods: {
    // 批量选择类名
    getElementByIdContoirer(className){
      return document.getElementById(className);
    },
    getMousemoveEnv(e){
      let _this = this
      // 优化windows动画帧数
        window.requestAnimationFrame(function(){
          // 传递坐标对象
          _this.transformElement(e.clientX, e.clientY);
        });
    },
    transformElement(x , y){
      for (let index = 0; index < this.animaClassName.length; index++) {
          let calcY = ( x - this.getElementByIdContoirer(this.animaClassName[index].name).getBoundingClientRect().x - (this.getElementByIdContoirer(this.animaClassName[index].name).getBoundingClientRect().width / 2) ) / this.multiple

          let calcX = ( y - this.getElementByIdContoirer(this.animaClassName[index].name).getBoundingClientRect().y - (this.getElementByIdContoirer(this.animaClassName[index].name).getBoundingClientRect().height / 2) ) / this.multiple * 1

          this.getElementByIdContoirer(this.animaClassName[index].name).style.transform  = "rotateX("+ calcX +"deg) "
                        + "rotateY("+ calcY +"deg)" + "translateZ(" + this.animaClassName[index].translIndex + "px" + ")";
        }
    },
    // 移出
    getMouseleaveEnv(e){
      window.requestAnimationFrame(function(){
        for (let index = 0; index < this.animaClassName.length; index++) {
          this.getElementByIdContoirer(this.animaClassName[index].name).style.transform  = "rotateX(0deg) " + "rotateY(0deg)";
        }
      });
    },
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
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1;
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
  padding: 65px 60px;
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
    width: 100px;
    background: #000;
    color: #fff;
    // padding: 21.5px 10px;
    text-align: center;
  }
}
.content_back {
  background: linear-gradient(360deg, #fff3eb 0%, #e0efe2 100%, #e0efe2 100%);
}
.content {
  position: absolute;
  right: 0;
  left: 0;
  width: 100% !important;
  height: 100%;
  width: 1210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  .center {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 60px;
    .left {
      width: 75%;
      font-family: FranklinGothic-Heavy;
      .left_title {
        font-size: 95px;
        font-weight: bold;
        color: #000;
      }
      .left_content {
        font-size: 95px;
        font-weight: bold;
        position: relative;
        top: -30px;
        span:nth-child(1) {
          color: #057b65;
        }
        span:nth-child(2) {
          color: #000;
        }
      }
      .btn {
        background: #000;
        color: #fff;
        font-size: 22px;
        padding: 10px 70px;
        border: 0;
        // width:150px;
        border-radius: 5px;
        margin-top: 100px;
      }
    }
    .right {
      width: 55%;
      text-align: center;
      position: relative;
      // animation: reverseRotate 5s linear infinite;
      // transform-style: preserve-3d;
      // perspective: 100px;
      transform-style: preserve-3d;
      perspective: 500px;
      .route {
        // animation: rotate 5s linear infinite;
        // transform-style: preserve-3d;
        // perspective: 100px;
      }
      #user {
        position: absolute;
        width: 60%;
        left: 20%;
        bottom: 0;
        z-index: 1;
        transition: all 0.1s;
        // transform: rotateX(15deg) rotateY(30deg) translateZ(50px);
        // transform-style: preserve-3d;
      }
      #select {
        position: absolute;
        width: 40%;
        right: -80px;
        bottom: 20px;
        z-index: 2;
        transition: all 0.1s;
        // transform: rotateX(15deg) rotateY(30deg);
        // transform-style: preserve-3d;
      }
      #back {
        width: 100%;
        transition: all 0.1s;
        z-index: 0;
        // transform: rotateX(15deg) rotateY(30deg);
        // transform-style: preserve-3d;
      }
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
  .box {
    width: 1200px;
    margin: 0 auto;
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

// @keyframes rotate {
//   100% {
//     transform: rotate(360deg);
//   }
// }
// @keyframes reverseRotate {
//   100% {
//     transform: rotate(-360deg);
//   }
// }
</style>
