<template>
  <div>
    <div @click="sameLength"></div>
    <div @click="diffLength"></div>
    <div @click="sameValue"></div>
    <richtext style="color: red;">
      <template v-for="(t, i) in list">
        <span :key="i" @click.stop="handleClick(t)">{{ t }}</span>
      </template>
    </richtext>
  </div>
</template>

<script>

// import T from './Test.js'
// let t = new T()
export default {
  data () {
    return {
      list: [
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3',
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3',
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3'
      ]
    }
  },
  methods: {
    handleClick (text) {
      console.log(text)
    },
    // 更新相同长度的文本
    sameLength () {
      this.list = [
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text5',
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3',
                    'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3'
      ]
    },
    diffLength () {
      this.list = [
        'text1',
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
      ]
    },
    sameValue () {
      this.list = [
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3',
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3',
        'every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。',
        'Forking Workflow这种工作流主要好处就是每个开发者都拥有自己的远程仓库，可以将提交的commits推送到自己的远程仓库，但只有工程维护者才有权限push提交的commits到官方的仓库，其他开发者在没有授权的情况下不能push。Github很多开源项目都是采用Forking Workflow工作流',
        'text3'
      ]
    }
  },
}
</script>