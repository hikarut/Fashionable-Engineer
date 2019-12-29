<template>
  <div>
    <div class="count">
      {{ start }}件 〜 {{ end }}件 / {{ total }}件
    </div>
    <div class="paging">
      <nuxt-link :to="`/coordinate/page/${page - 1}`" :class="[page - 1 < 1 ? 'disabled' : '']">
        <i :class="[page - 1 < 1 ? 'angle_disabled' : 'angle_normal']" class="angle fas fa-angle-left"/>
      </nuxt-link>
      <template v-for="n of length">
        <nuxt-link
          :key="n"
          :class="[page === n + add ? 'checked' : 'other']"
          :to="`/coordinate/page/${n + add}`"
          class="number" >
          {{ n + add }}
        </nuxt-link>
      </template>
      <nuxt-link :to="`/coordinate/page/${page + 1}`" :class="[page + 1 > totalPage ? 'disabled' : '']">
        <i :class="[page + 1 > totalPage ? 'angle_disabled' : 'angle_normal']" class="angle fas fa-angle-right"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
const constant = require('~/config/constant.json')
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    POST_PER_PAGE: constant.POST_PER_PAGE
  }),
  computed: {
    length() {
      const maxLength = 3
      const totalPage = Math.ceil(this.total / constant.POST_PER_PAGE)
      if (totalPage < maxLength) {
        return totalPage
      } else {
        return maxLength
      }
    },
    totalPage() {
      return Math.ceil(this.total / constant.POST_PER_PAGE)
    },
    add() {
      if (this.page <= 2) {
        return 0
      } else if (this.page === this.totalPage) {
        return this.page - this.length
      } else {
        return this.page - this.length + 1
      }
    },
    start() {
      return this.page === 1
        ? this.page
        : (this.page - 1) * constant.POST_PER_PAGE + 1
    },
    end() {
      return this.page * constant.POST_PER_PAGE >= this.total
        ? this.total
        : this.page * constant.POST_PER_PAGE
    }
  }
}
</script>

<style lang="scss" scoped>
.paging {
  height: 40px;
  line-height: 40px;
  margin-bottom: 30px;
  text-align: center;
}
.count {
  margin-bottom: 15px;
  text-align: center;
}
.angle {
  display: inline-flex;
  height: 15px;
  margin-left: 20px;
}
.angle_normal {
  color: #55acee;
}
.angle_disabled {
  color: #bbb;
}
.number {
  font-size: 15px;
  height: 40px;
  width: 40px;
  margin-left: 30px;
  display: inline-flex;
  justify-content: center;
  border-radius: 50%;
}
.checked {
  background-color: #bbb;
  color: #fff;
  pointer-events: none;
}
.disabled {
  pointer-events: none;
}
.other {
  color: black;
}
</style>
