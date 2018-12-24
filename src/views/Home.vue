<template>
  <div class="home-container">
    <Card
      title="blocks"
      link="/blocks"
      class="card"
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
    <Card
      title="transactions"
      link="/transactions"
      class="card"
    >
      <ul>
        <li
          v-for="(item, index) in transactionsLastList"
          :key="index"
          class="item transactions"
        >
          <p class="hash">TX:
            <link
              type="tx"
              :content="item.hash"
            />
          </p>
          <p class="block">Block:
            <link
              type="block"
              :content="item.height"
            />
          </p>
          <p class="gas">Gas Used: {{ item.result.gasUsed }}</p>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { get } from 'lodash';

export default {
  name: 'Home',
  interval: null,
  computed: {
    ...mapGetters('blocks', { blocksLastList: 'lastList' }),
    ...mapGetters('transactions', { transactionsLastList: 'lastList' }),
  },
  methods: {
    fetchData: function () {
      this.$store.dispatch('blocks/fetchList');
      this.$store.dispatch('transactions/fetchList');
    }
  },
  mounted: function () {
    this.fetchData();
    this.interval = setInterval(() => { this.fetchData() }, 5 * 1000);
  },
  beforeDestroy: function () {
    clearInterval(this.interval);
    this.interval = null;
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.home-container > .card:nth-child(1) {
  margin-right: $basic-margin;
}

.home-container .item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;

  > p {
    margin-bottom: 10px;
  }
  > p:last-child {
    margin-bottom: 0;
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
</style>

