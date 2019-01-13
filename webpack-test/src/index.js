
// style
// import hello from './style_test/cmp/deep_index.vue'
// import hello from './style_test/cmp/cmp_index.vue'
// import hello from './style_test/cmp/richtext_index_blank.vue'
// import hello from './style_test/cmp/blank_sub_index.vue'
// import hello from './style_test/v_if_update.vue'

// events
// import hello from './events/bubble.vue'
// import hello from './events/richtext.vue'

// v-model
// import hello from './v-model/base.vue'

// class
// import hello from './class/base.vue'
// import hello from './class/v_if.vue'
// import hello from './class/staticClass.vue'
// import hello from './class/dyncClass.vue'
// import hello from './class/mixClass.vue'
import hello from './class/inlineAndClass.vue'


// list
// import hello from './list/refreshAndFooter.vue'

new Vue({
  el: '#app',
  components: { hello },
  render: (h) => h(hello)
})