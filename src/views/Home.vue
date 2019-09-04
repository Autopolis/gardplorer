<template>
  <div class="home-container">
    <div class="panels">
      <div class="home-panel">
        <p>Block Height</p>
        <!-- <span>{{get(blocksLastList, `0.header.height`)}}</span> -->
        <span>{{lastHeight}}</span>
      </div>
      <div class="home-panel">
        <p>Avg Block Time</p>
        <span>{{blockTime}}</span> S
      </div>
      <div class="home-panel">
        <p>Bonded Tokens</p>
        <span>{{bonded}}</span> M
      </div>
      <div class="home-panel">
        <p>Bonded Ratio</p>
        <span>{{bondedRatio}}</span> %
      </div>
      <div class="home-panel">
        <p>
          <router-link to="/validator">Active Validators</router-link>
        </p>
        <span>{{validatorList.length}}</span>
      </div>
    </div>

    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="12"
      >
        <Card
          title="blocks"
          link="/block"
        >
          <ul>
            <li
              v-for="(item, index) in blocksLastList"
              :key="index"
              class="item block"
            >
              <p class="height">
                <RouterLink
                  :to="`/block/${item.header.height}`"
                  class="link"
                >{{ item.header.height }}</RouterLink>
              </p>
              <p class="time">{{ item.header.time | formatTime }}</p>
              <p class="txn">Txn: {{ item.header.num_txs }}</p>
            </li>
          </ul>
        </Card>
      </el-col>
      <el-col
        :xs="24"
        :sm="12"
      >
        <Card
          title="transactions"
          link="/txs/transfers"
        >
          <ul>
            <li
              v-for="(item, index) in txLastList"
              :key="index"
              class="item transactions"
            >
              <p class="hash">
                <span>TX:</span>
                <hg-link
                  type="tx"
                  :content="item.txhash"
                />
              </p>
              <p class="block">Block:
                <hg-link
                  type="block"
                  :content="item.height"
                />
              </p>
              <p class="gas">Gas Used: {{ item.gas_used }}</p>
            </li>
          </ul>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import moment from "dayjs";
import { get, isEmpty } from "lodash";

export default {
  name: "Home",
  interval: null,
  computed: {
    ...mapState("basic", ["pool"]),
    ...mapState("blocks", { blockList: "list", lastHeight: "lastHeight" }),
    ...mapState("validators", { validatorList: "list" }),
    ...mapGetters("blocks", { blocksLastList: "lastList" }),
    ...mapGetters("transactions", { txLastList: "lastList" }),
    blockTime() {
      if (!this.blockList.length) return 0;
      const first = moment(this.blockList[0].header.time).unix();
      const last = moment(
        this.blockList[this.blockList.length - 1].header.time
      ).unix();
      return ((first - last) / this.blockList.length).toFixed(2);
    },
    bonded() {
      return (this.pool.bonded_tokens / Math.pow(10, 24)).toFixed(2);
    },
    bondedRatio() {
      if (isEmpty(this.pool)) {
        return 0;
      }
      const bondedStr = this.pool.bonded_tokens + "";
      const unbondedStr = this.pool.not_bonded_tokens + "";
      const bonded = bondedStr.slice(0, bondedStr.length - 18) - 0;
      const unbonded = unbondedStr.slice(0, unbondedStr.length - 18) - 0;
      return ((bonded * 100) / (bonded + unbonded)).toFixed(2);
    }
  },
  methods: {
    get,
    fetchData: function() {
      this.$store.dispatch("blocks/fetchList");
    },
    fetchLatestBlock() {
      this.$store.dispatch("blocks/fetchLatest");
    }
  },
  mounted: async function() {
    await this.$store.dispatch("basic/fetchPool");
    await this.$store.dispatch("transactions/fetchTotalCount");
    await this.$store.dispatch("validators/fetchAll", "bonded");
    await this.$store.dispatch("transactions/fetchLastList");
    this.fetchLatestBlock();
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
      this.fetchLatestBlock();
    }, 5 * 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
    this.interval = null;
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .panels {
    display: flex;
    margin: 0 -1%;
  }

  .home-panel {
    flex-basis: 18%;
    margin: 24px 1% 0;
    text-align: center;
    padding: 24px 0;
    height: 146px;
    overflow: hidden;
    background: white;
    border-radius: 8px;
    box-shadow: $shadow;
    font-size: 1.2em;

    p {
      margin-bottom: 16px;
    }
    span {
      font-size: 36px;
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 16px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;

    > p {
      margin-bottom: 10px;
    }
    > p:last-child {
      margin-bottom: 0;
    }
  }
}

.block > .height {
  flex: 1;
  color: $blue;
}

.block > .txn {
  flex-basis: 100%;
}

.block > .time {
  color: rgba(0, 0, 0, 0.65);
}

.transactions > .gas {
  flex-basis: 100%;
}

@include responsive($sm) {
  .home-container {
    .panels {
      flex-wrap: wrap;
    }
    .home-panel {
      flex-basis: 98%;
    }
  }
}
</style>

