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

// 计算属性computed和方法methods都可以实现对属性进行操作，不同的是计算属性是基于它们的响应式依赖进行缓存的。只有依赖的属性发生改变时才会重新计算。这样可以节省计算时带来的性能开销