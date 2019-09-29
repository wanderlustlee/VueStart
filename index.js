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
        items: ['a', 'b', 'c']
    }
});


Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props: ['title']
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


//vue不能检测普通方法对数组数据项和数组的长度的修改、对象属性的添加或删除，可以修改成功，但是DOM不会重新渲染。





let t = new Array(1030);
console.time('time1');
for(let i=0; i<1030; i++){
    t.push(1);
}
console.timeEnd('time1');
VM281:6 time1: 0.04296875ms
undefined
let t2 = new Array();
console.time('time2');
for(let i=0; i<1030; i++){
    t2.push(1);
}
console.timeEnd('time2');
VM317:6 time2: 0.04296875ms
undefined
let t3 = [];
console.time('time3');
for(let i=0; i<1030; i++){
    t3.push(1);
}
console.timeEnd('time3');
VM338:6 time3: 0.041748046875ms