

const sidebar = [
    {
        title: 'Javascript',
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
                title:'回流和重绘',
                path:'/javascript/回流和重绘.md'
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
            {
                title: 'script 标签加载的三种模式'
            },
            {
                title: '模块化'
            }
        ]
    },
    {
        title: 'Vue',
        children: [
            {
                title: '观察者模式'
            },
            {
                title:'父子组件创建流程',
                path:'/vue/父子组件创建流程.md'
            },
            {
                title: 'Vue2 Vue3是如何依赖收集的'
            },
            {
                title: 'Vue和React的区别'
            },
            {
                title: 'nexttick的背后的原理是什么'
            },
            {
                title:'Vue3整体架构和设计思路',
                path:'/vue/Vue3整体架构和设计思路.md'
            },
        ]
    },
    {
        title: 'Webpack',
        children: [
            {
                title: 'Loader'
            },
            {
                title: 'Plugin'
            },
            {
                title: '库模式和普通项目打包区别在哪里?',
                path:'/webpack/库模式和普通项目打包区别.md'
            }
        ]
    },
    {
        title: '性能优化'
    },
    {
        title: '脚手架'
    },
    {
        title: '基建库',
        children: [
            {
                title: '基建库的作用'
            },
            {
                title: '库模式的打包方式',
                path:'/webpack/库模式和普通项目打包区别.md'
            }
        ]
    },
    {
        title: '框架基座'
    },
    {
        title: '算法题',
        children: [
            {
                title: '字符串中最大连续数',
                path: '/算法/字符串中最大连续数'
            }
        ]
    },
    {
        title: '工具对比',
        children: [
            {
                title: 'Pinia和Vuex又啥区别',
                path: '/工具对比/Pinia和Vuex又啥区别'
            }
        ]
    },
  
]

module.exports = sidebar
