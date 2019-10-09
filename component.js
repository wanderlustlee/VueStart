Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
})

new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})

//
Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
            Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            {id: 1, title: 'My journey with Vue'},
            {id: 2, title: 'Blogging with Vue'},
            {id: 3, title: 'Why Vue is so fun'}
        ],
        postFontSize: 1
    }
})



// todo-list
Vue.component('todo-item', {
    props: ['item'],
    template: `
    <li>
​      <input type="checkbox">
​      <span>{{item}}</span>
​      <button v-on:click="handleClick"> 删除 </button>
​    </li>`,
    methods: {
        // 子组件：通过$emit调用
        handleClick() {
            this.$emit('delete', this.item)
        }
    }
});

new Vue({
    el: '#app',
    data() {
        return {
            list: ['学习 Vue 属性', '学习 Vue 事件', '学习 Vue 插槽']
        }
    },
    methods: {
        handleDelete: function(item) {
            console.log("delete");
            const index = this.list.findIndex(text=>text === item);
            this.list.splice(index, 1);
        }
    }
});

// 学习了一段时间Vue之后，逐渐了解了Vue的一些思想。Vue参考了MVVM的思想，提供双向的数据绑定，不用再去操作DOM,只需要操作数据。
// 当数据发生修改时，会通过相应的指令，更新DOM，当Vue监听到视图发生变化时，也会更新相应的数据。这样通过数据的绑定将View和Model层链接起来。
// 了解了Vue的思想后，再去看一些API和组件就容易理解一些了。
