<template>
  <div @click="testCTX">
    <!-- <text class="hello">
      xixi {{ what }}
    </text> -->
    <!-- <richtext @click="handler">
      <span> xixi {{ what }} </span>
      <span @click="spanHandler">are you doing?</span>
    </richtext> -->
    <scroller @click.stop="clear">
      <todo-item
          v-for="(content, index) in list"
          :key="content"
          :content="content"
          :index="index"
          @reverse="reverse"
      >
      </todo-item>
      <text @click="add" id="footer">
        footer
      </text>
    </scroller>
  </div>
  <!-- <div @click="showBatch">
    
    <div @click="add" @hh="changeType" @reverse="reverse">
        <refresh> wo de tian a </refresh>



        <text
          class="todo_item"
          v-for="(item) in list"
          :key="item"
          @click="reverse"
          >
          {{ item }}
        </text>
    </div> -->
    <!-- <div @click="add" @hh="changeType" @reverse="reverse">
        <text
          class="todo_item"
          v-for="(todo, index) in todos"
          :key="index"
          @click="toggle(todo)"
          :class="{complete:todo.done}"
          >
          {{ todo.text }}
        </text>
    </div> -->
    <!-- <text>
      <span>hhh</span>
      <span>hhh</span>
      <span>hhh</span>
    </text> -->
    <!-- <batch v-if="show" :type="batch_type" :count="Math.ceil(todos.length / 4)">
      <div @click="add" @hh="changeType">
        <text
          class="todo_item"
          v-for="(todo, index) in todos"
          :key="index"
          @click="toggle(todo)"
          :class="{complete:todo.done}"
          >
          {{ todo.text }}
        </text>
      </div>
    </batch>
    <div v-if="!show">
      <text> hahaha </text>
    </div> -->
  <!-- </div> -->

  <!-- <div class="app" @click="add" @hh="changeType">
    <text class="title">Todos:</text>
    <batch :type="batch_type" count="5">
      <div>
        <text
          class="todo_item"
          v-for="(todo, index) in todos"
          :key="index"
          @click="toggle(todo)"
          :class="{complete:todo.done}"
          >
          {{ todo.text }}
        </text>
      </div>
    </batch>
  </div> -->
</template>

<script>
// import batch from './batch.vue'
import todoItem from './todo_item.vue'

let list = []
for (var i = 1; i < 10; i++) {
  list.push('test ' + i)
}

export default {
  data () {
    return {
      what: 'what',
      list: list,
      show: false,
      batch_type: 'tree',
      title: 'hhh',
      todos: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn Vue", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    }
  },
  pageAppear (freshData) {
    
    console.log('come on yep', this)
  },
  pageDisappear (freshData) {
    viola.requireAPI('navigation').setTitle('wo gua le')
    this.list = []
    console.log('fuck out yep', this)
  },
  updated () {
    console.log('xixi')
  },
  destroyed() {
    console.log('in todo.vue out out out')
  },
  methods: {
    spanHandler (e) {
      console.log('span handler', e)
    },
    handler (e) {
      this.what = 'what fucking'
      console.log('handler', e)
    },
    clear () {
      this.list = []
    },
    testCTX () {
      this.what = 'what fucking'
      console.log('testCTX', this)
    },
    reverse (index) {
      console.log(' got from sub cmp ', index)
      this.list.reverse()
      // this.todos = this.todos.reverse()
    },
    showBatch () {
      console.log('show')
      this.show = !this.show
    },
  	toggle: function(todo){
    	todo.done = !todo.done
    },
    add (e) {
      console.log('add')
      let temp = []
      let listTemp = []
      for (let i = 0; i < 10; i++) {
        let id = Math.random() * 100
        temp.push({
          text: 'todo ' + id,
          done: id > 50 ? false : true
        })
        listTemp.push('test_add ' + i)
      }
      this.list = this.list.concat(listTemp)
      this.todos = this.todos.concat(temp)
      e.stopPropagation()
    },
    changeType () {
      this.batch_type = this.batch_type === 'tree' ? 'stage' : 'tree'
    }
  },
  components: {
    'todo-item': todoItem
    // [batch.name]: batch
  }
}
</script>

<style scoped>
  .hello {
    color: white;
  }
  .app {
    background-color: #ffffff;
    border-radius: 4px;
    padding: 20px;
  }

  .title {
    text-align: center;
    font-size: 50;
    margin-bottom: 20px;
  }

  .todo_item {
    font-size: 30;
  }

  .complete {
    color:#3d7038;
    text-decoration: line-through;
  }
</style>
