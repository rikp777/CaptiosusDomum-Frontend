<template>
    <ul :class="className">
        <li v-for="(item,index) in items" :key="index" :class="item.is_heading ? 'iq-menu-title' :activeLink(item) && item.children ? 'active menu-open' : activeLink(item) ? 'active' : ''">
          <i v-if="item.is_heading" class="ri-subtract-line" />
            <span v-if="item.is_heading">{{ item.title }}</span>
            <router-link :to="item.link" v-if="!item.is_heading" class="iq-waves-effect pr-4">
              <i :class="item.icon" v-if="item.is_icon_class"/>
              <template v-else v-html="item.icon">
              </template>
              <span>{{ item.title }}</span>
              <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
              <small v-html="item.append" :class="item.append_class" />
            </router-link>
            <List v-if="item.children" :items="item.children" :className="activeLink(item) ? 'iq-submenu menu-open' : 'iq-submenu'" />
        </li>
    </ul>
</template>
<script>
import List from './ListStyle1'
import { vito } from '../../config/init'
export default {
  name: 'List',
  props: {
    items: Array,
    className: { type: String, default: 'iq-menu' },
    horizontal: Boolean
  },
  components: {
    List
  },
  mounted () {
  },
  methods: {
    activeLink (item) {
      return vito.getActiveLink(item, this.$route.name)
    }
  }
}
</script>
