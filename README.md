# UEditor

## 安装
```
git clone https://github.com/maxcareer/ueditor.git
```

## 编译
- Run `npm install`
- Run `grunt`

## 使用

```html
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>ueditor demo</title>
</head>
<body>
	<!-- 加载编辑器的容器 -->
	<script id="container" name="content" type="text/plain">这里写你的初始化内容</script>
	<!-- 配置文件 -->
	<script type="text/javascript" src="ueditor.config.js"></script>
	<!-- 编辑器源码文件 -->
	<script type="text/javascript" src="ueditor.all.js"></script>
	<!-- 编辑器字体图标 -->
	<link rel="stylesheet" href="图标字体路径">
	<!-- 编辑器样式文件 -->
	<link rel="stylesheet" href="ueditor.css">
	<!-- 实例化编辑器 -->
	<script type="text/javascript">
	    var ue = UE.getEditor('container');
	</script>
</body>
</html>
```