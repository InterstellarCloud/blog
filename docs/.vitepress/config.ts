import {defineConfig} from 'vitepress'

export default defineConfig({
	themeConfig: {
		siteTitle: '黑洞',
		logo: '../images/logo.png',
		// 导航
		nav: [
			{
				text: '基础',
				items: [
					{text: 'Html', items: []},
					{text: 'Css', items: []},
					{text: 'JavaSrcipt', items: []},
					{text: 'TypeSrcipt', items: []}
				]
			},
			{
				text: 'Vue',
				items: [
					{text: 'Vue2', items: []},
					{text: 'Vue3', items: []}
				]
			},
			{
				text: 'React',
				items: []
			},
			{
				text: '小程序',
				items: [
					{text: '原生小程序', items: []},
					{text: 'uniApp', items: []},
					{text: 'Taro', items: []}
				]
			},
			{
				text: 'NodeJs',
				items: [
					{text: 'koaJs', items: []},
					{text: 'expressJs', items: []},
					{text: 'nestJs', items: []}
				]
			},
			{
				text: '算法',
				link: '../Algorithm/index.md'
			}
		],
		// // 侧边栏
		// sidebar: {
		// 	'/guide/': [
		// 		{
		// 			text: 'Guide',
		// 			collapsible: true,
		// 			collapsed: true,
		// 			items: [
		// 				// This shows `/guide/index.md` page.
		// 				{text: 'Index', link: '/guide/'}, // /guide/index.md
		// 				{text: 'One', link: '/guide/one'}, // /guide/one.md
		// 				{text: 'Two', link: '/guide/two'} // /guide/two.md
		// 			]
		// 		}
		// 	],

		// 	// under `config` directory.
		// 	'/config/': [
		// 		{
		// 			text: 'Config',
		// 			collapsible: true,
		// 			collapsed: true,
		// 			items: [
		// 				// This shows `/config/index.md` page.
		// 				{text: 'Index', link: '/config/'}, // /config/index.md
		// 				{text: 'Three', link: '/config/three'}, // /config/three.md
		// 				{text: 'Four', link: '/config/four'} // /config/four.md
		// 			]
		// 		}
		// 	]
		// },
		// 友情链接
		socialLinks: [
			{icon: 'github', link: 'https://github.com/InterstellarCloud/blog.git'},
			{
				icon: {
					svg: '<svg role="img"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2065" width="300" height="300"><path d="M849.066667 644.778667l64.32 35.754666-397.482667 226.794667L111.530667 680.533333l64.789333-35.754666 339.562667 188.672L849.066667 644.778667z m0-170.666667l64.32 35.754667-397.482667 226.794666L111.530667 509.866667l64.789333-35.754667 339.562667 188.672L849.066667 474.112zM515.904 110.506667L922.517333 339.2l-406.613333 228.714667L109.290667 339.2l406.613333-228.714667z m0 73.429333L239.829333 339.2l276.074667 155.264 276.053333-155.264-276.053333-155.285333z" fill="#3c3c3cb3" p-id="2066"></path></svg>'
				},
				link: 'https://juejin.cn/user/3623605329994279/posts'
			}
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present Evan You'
		},
		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
		}
	},

	lang: 'en-US',
	// 标题
	title: '黑洞',
	// 网站描述
	description: '',
	markdown: {
		theme: 'material-palenight',
		lineNumbers: true
	}
})
