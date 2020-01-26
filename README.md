1. 在这里安装 webpack 的时候，先要安装全局的 webpack 命令行：cnpm i webpack@3.10.0 -g,这样安装可以检测到 webpack 的版本号
2. webpack 的局部安装：cnpm i webpack@3.10.0 ,如果不安装全局的 webpack 是不会检测到 webpack 的版本号
3. 最基本的打包方式：webpak .\src\文件 .\dist\打包好的文件
4. 直接使用 webpack 命令进行打包，则要新建一个 webpack.config.js 配置文件，里面主要存放自己写的配置
5. 将打包的文件配置和打包好的文件配置写在 webpack.config.js 中，语法如下：
6. 		
 		const path = require("path")
 		module.exports = {
			entry: path.join(__direname,'./src/xx.js'),
			output:{
				path: path.join(__dirname,'./dist'),
				filename:'xxx.js'
			}
		}
8. 书写上面的配置，运行命令   webpack 则会打包，即不在使用 webpack .\xx\xx.js .\xxx\xxx.js
9. 它会先找 webpack .\xx\xx.js .\xxx\xxx.js 的命令形式，如果没有，则会去寻找 webpack.config.js 的配置文件指定的入口和出口配置，找到之后，进行解析，然后导出
10. 更简便的自动打包编译工具，安装：cnpm i webpack-dev-server -D 安装到项目的本地开发依赖
11. 只有安装到全局 -g 的工具，才能被 CMD 命令行工具所识别，所以安装了 webpack-dev-server 不能被 CMD 所识别
	所以在这里需要在 package.json 中的 "scripts" 中的对象后面添加一个节点 "dev":"webpack-dev-server"
	但是在这里，如果安装 webpack 为3的版本，即 webpack-dev-server 应该为2的版本
	这里推荐 webpack@3.12.0 对应的 webpack-dev-server 的版本号为 2.11.5,否则存在兼容的问题2.11.2
12. "dev": "webpack-dev-server --open --contentBase src --hot" 这里的 --hot 是热更新，即只需要跟新局部代码，在这之前，webpack 是重新打包了一份
13. 相比较上面的 dev 在 package.json 中的配置，还可以在 webpack.config.js 中进行配置
14. 在 webpack.config.js 中新增一个节点为：devServer:{},plugins:[] //注意这里的 plugins 是数组形式的	
15.	
		const webpack = require('webpack')
		devServer:{
				open: true, //打开浏览器
				port: 3000, //启动自定义的端口号
				contentBase: "src", //指定托管的根目录
				hot: true //启动热更新
			},
			plugins:[//配置插件的节点，这是一个数组形式的
				new webpack.HotModuleReplacementPlugin() //这是启动热更新的模块对象，因为这是一个构造函数
			]
16.	配置好	devServer 和 plugins 在 package 中的 dev 中添加 "dev": "webpack-dev-server"
17.	在内存中生成 HTML 页面，需要安装：cnpm i html-webpack-plugin -D
18.	在 webpack.config.js 中导入在内存中生成 HTML 页面：const htmlWeb = require('html-webpack-plugin')
19.	注意：只要是插件，都一定要放到 plugins 数组节点中
20.	当使用 html-webpack-plugin 之后，我们不在手动处理 budlie.js 的引用路径了，因为这个插件，已经帮我们自动车创建好 script 标签了，并且已经引用路径 budlie.js 了
21.	由于 webpack 只能处理相关的 JS 文件，想要处理 CSS less sacc 等文件，就必须要安装相关的第三方加载器（ loader ）
21.	处理 CSS 样式文件，安装：cnpm i style-loader css-loader -D
22.	处理 less 文件，安装: cnpm i less-style -D 和 cnpm i less -D
23.	处理 URL（图片路径等） 安装：cnpm i url-loader file-loader -D 
23. 处理 css 和 less 文件的时候，需要在 webpack.config.js 中配置，需要在 plugins 后新增一个节点 module:{}
24. 	module:{
			rules:[
				{test:/\.css$/,use:['style-loader','css-loader']},
				{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
				{test:/\.(jpg|png|gif)$/,use:'url-loader'},
			]
		}
25. 处理 ES6 语法的规则，由于 webpack 无法处理 ES6 高级的语法,  .babel 文件可以将高级语法转换成低级语法 
26. 安装：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D 和 cnpm i babel-preset-env babel-preset-stage-0 -D
27. 这里的有可能会报错，这是由于版本的兼容性问题，重新安装: cnpm i babel-loader@7.1.2 -D
28. webpack 使用 vue 默认无法打包，需要安装相关的 loader
29. 安装 vue 的 loader ：cnpm i vue-loader vue-template-compiler -D 然后在在新增配置项
30. 由于 vue-loader 的版本是 @15.* 以上，所以必须带上有 VueLoaderPlugin 并且在 main.js 的头部引入 ：
31. 	const VueLoaderPlugin = require('vue-loader/lib/plugin')
32. 	在 plugins [ new VueLoaderPlugin() ]
33. 导入路由：cnpm i vue-router -S
34. 安装 MINT-UI: cnpm i mint-ui -S
35. 获取数据用 vue-resource 安装包：cnpm i vue-resource -S
