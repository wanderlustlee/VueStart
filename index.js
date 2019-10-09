var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos:[
            {text:'1'},
            {text:'2'},
            {text:'3'}
        ]
    }
});

new Vue({
    el: '#v-for-object',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});

var app8 = new Vue({
    el:"#app-8",
    data:{
        rawHtml : '<span v-html="rawHtml"></span>',
        isButtonDisabled:false,
        seen:true
    }
});


var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    methods: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    }
});

var vm2 = new Vue({
    el: "#vm2",
    data: {
        items: ['a', 'b', 'c'],
        message: ""
    }
});


//
Vue.component('todo-item', {
    props: ['title'],
    template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">Remove</button>
    </li>
  `
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
});

