<template>
  <div class="pay">
    <div class="pay-header">
      <img src="@/assets/logo_slices/logo.png" alt="" />

      <div class="seach-box">
        <div class="input">
          <input placeholder="get your web3 name" type="text" />
          <div class="size">.web3</div>
          <img src="@/assets/logo_slices/search.png" />
        </div>
        <div class="btn">Search</div>
      </div>
      <a-dropdown>
        <div class="user-info" @click.prevent>
          <div class="user"></div>
          <span>06FB..XKW9</span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>

    <div class="pay-centent">
      <a-steps :current="1">
        <!-- <template #progressDot="{ index, status, prefixCls }">
            <a-popover>
              <template #content>
                <span>step {{ index }} status: {{ status }}</span>
              </template>
              <span :class="`${prefixCls}-icon-dot`" />
            </a-popover>
          </template> -->
        <a-step title="Step 1" description="Request to Register" />
        <a-step title="Step 2" description="Confirm Registration" />
        <a-step title="Step 3" description="Complete Registration" />
      </a-steps>

      <div class="eth-web">rudilus.eth</div>

      <div class="eth-info">
        <div class="item">
          <div>Registration Year</div>
          <div class="flex">
            <a-button class="btn">-</a-button>
            <a-input class="input" v-model="numYear"></a-input>
            <a-button class="btn">+</a-button>
          </div>
        </div>
        <div class="item">
          <div>Registration Fee</div>
          <div>0.45ETH</div>
        </div>
        <div class="item">
          <div>Estimated Gas Fee</div>
          <div>0.000445ETH</div>
        </div>
        <hr class="hr" />
        <div class="item">
          <div>Total</div>
          <div>0.000445ETH ≈ $585.57</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DownOutlined } from "@ant-design/icons-vue";

export default Vue.extend({
  name: "pay",
  data() {
    return {
      // 年限
      numYear: 1,
    };
  },
  mounted() {},
  methods: {},
});
</script>

<style lang="less" scoped>
.hr {
  border: 0.5px solid #e5e5e5;
}
.input {
  border: 0;
  text-align: center;
}
.pay-centent {
  min-width: 1000px;
  max-width: 1210px;
  margin: 0 auto;
  margin-top: 40px;
  .eth-info {
    width: 60%;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    font-size: 20px;
    padding: 30px 40px;
    margin-top: 20px;
    line-height: 50px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .flex {
        width: 130px;
        display: flex;
      }
    }
  }
  .eth-web {
    margin: 0 auto;
    background-color: #e5e5e5;
    text-align: center;
    width: 60%;
    padding: 10px 0;
    font-size: 28px;
    font-weight: bold;
    margin-top: 40px;
  }
}
.pay-header {
  min-width: 1000px;
  max-width: 1210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 65px 0;
  .user-info {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .btn {
      background: #e5e5e5;
    }
    .ant-btn:hover,
    .ant-btn:focus {
      color: #000;
      border: 1px solid #e5e5e5;
    }
    .user {
      width: 15px;
      height: 15px;
      background: #000;
      border-radius: 20px;
      margin-right: 10px;
    }
  }
  .seach-box {
    width: 45%;
    display: flex;
    align-items: center;
    .input {
      position: relative;
      .size {
        position: absolute;
        right: 15px;
        top: 8px;
        font-size: 18px;
      }
      img {
        width: 23px;
        position: absolute;
        top: 10px;
        left: 20px;
        z-index: 1;
      }
      background: #e5e5e5;
      width: 80%;
      input {
        width: 100%;
        background: #e5e5e5;
        border: 0;
        padding: 10px 80px 10px 20px;
        text-indent: 40px;
        font-size: 16px;
      }
    }
    .btn {
      width: 20%;
      background: #000;
      color: #fff;
      padding: 11.5px 10px;
      text-align: center;
    }
  }
  img {
    width: 100px;
  }
}
.ant-steps-item-description {
  width: auto !important;
}
</style>
