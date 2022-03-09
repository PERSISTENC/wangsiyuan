const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
    title: '王思渊的 blog',
    description: '每天进步一点点.......',
    base: '/wangsiyuan/', // 部署到github会用到的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig:{
      displayAllHeaders: true, //展开侧边栏所有的小标题
      sidebarDepth: 1, //提取markdown中h2标题，作为小标题显示在侧边栏上。
      lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
      nav, //导航
      sidebar, //侧边栏
    }
}