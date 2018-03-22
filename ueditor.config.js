/**
 * ueditor完整配置项
 */

(function() {

  var URL = window.UEDITOR_HOME_URL || getUEBasePath();

  window.UEDITOR_CONFIG = {
    //为编辑器实例添加一个路径，这个不能被注释
    UEDITOR_HOME_URL: URL,

    // 服务器统一请求接口路径
    serverUrl: URL + "php/controller.php",

    //工具栏
    toolbars: [
      [
        'fullscreen', 'source', '|', 'undo', 'redo', '|',
        'fontsize', 'fontfamily', '|', 
        'blockquote',"horizontal", 'removeformat', 'formatmatch', 'link', 'unlink', '|',
        'simpleupload', 'insertimage', 'insertvideo', 'attachment', 'insertcode', '|', 
        'map', 'gmap'
      ],
      [
        'bold', 'italic', 'underline', 'strikethrough', 'forecolor', 'backcolor', '|', 
        'indent', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
        'lineheight', 'paragraph', '|',
        'insertorderedlist', 'insertunorderedlist', '|',
        'pagebreak', 'inserttable', '|',
        'imagenone', 'imageleft', 'imageright', 'imagecenter'
      ]
    ]

    //启用自动保存
    ,enableAutoSave: false

    //是否启用元素路径，默认是显示
    ,elementPathEnabled : false

    //wordCount
    ,wordCount:false          //是否开启字数统计
  };

  function getUEBasePath(docUrl, confUrl) {
    return getBasePath(
      docUrl || self.document.URL || self.location.href,
      confUrl || getConfigFilePath()
    );
  }

  function getConfigFilePath() {
    var configPath = document.getElementsByTagName("script");

    return configPath[configPath.length - 1].src;
  }

  function getBasePath(docUrl, confUrl) {
    var basePath = confUrl;

    if (/^(\/|\\\\)/.test(confUrl)) {
      basePath =
        /^.+?\w(\/|\\\\)/.exec(docUrl)[0] + confUrl.replace(/^(\/|\\\\)/, "");
    } else if (!/^[a-z]+:/i.test(confUrl)) {
      docUrl = docUrl.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, "");

      basePath = docUrl + "" + confUrl;
    }

    return optimizationPath(basePath);
  }

  function optimizationPath(path) {
    var protocol = /^[a-z]+:\/\//.exec(path)[0],
      tmp = null,
      res = [];

    path = path.replace(protocol, "").split("?")[0].split("#")[0];

    path = path.replace(/\\/g, "/").split(/\//);

    path[path.length - 1] = "";

    while (path.length) {
      if ((tmp = path.shift()) === "..") {
        res.pop();
      } else if (tmp !== ".") {
        res.push(tmp);
      }
    }

    return protocol + res.join("/");
  }

  window.UE = {
    getUEBasePath: getUEBasePath
  };
})();
