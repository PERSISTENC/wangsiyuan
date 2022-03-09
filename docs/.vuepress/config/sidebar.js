

const sidebar = [
    {
        title: 'Javascript',
        collapsable: false, //false可以使侧边栏分组强制打开
        children: [
            {
                title: '防抖和节流?',
                path:'/javascript/防抖和节流.md'
            },
            {
                title: '闭包是什么?它的应用场景有哪些?',
                path: '/javascript/闭包.md'
            },
            {
                title: '浏览器的几种缓存方式',
                path: '/javascript/浏览器缓存.md'
            },
            {
                title: 'Promise 的特性、优缺点，内部是如何实现的，动手实现 Promise'
            },
            {
                title: 'Es6常用的几种方法'
            },
            {
                title: '事件循环机制 event loop'
            },
            {
                title: 'JS中几种继承方式'
            },
           
        ]
    },
    {
        title: 'Vue',
        children: [
            {
                title: '观察者模式'
            },
        ]
    },
    {
        title: 'Vue3',
        children: [
           
        ]
    },
    {
        title: 'Webpack'
    },
    {
        title: '性能优化'
    }
  
]

module.exports = sidebar
