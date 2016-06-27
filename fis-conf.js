/**
 * 配置选项
 */
// 测试域名
fis.set("cdn-path", "http://10.0.0.26:8087/example-managementsite");

// 正式环境域名
fis.set("cdn-path-release", "http://www.example.com");

// 推送到远端的域名
fis.set("cdn-path-push", "http://10.0.0.26/res");
fis.set("http-push-receiver", "http://10.0.0.26/receiver.php");
fis.set("http-push-to", "/usr/share/nginx/html/res");

// 修改雪碧图放大缩小倍数，默认是1，iphone是0.5
fis.set('css-scale', 1);

/**
 * 统一配置
 * (开发者无需修改，特殊情况除外)
 */
fis.set("project.files", ["src/**"]);
fis.set("project.ignore", [".git/**", "dist/**", "node_modules/**", "README.md"]);
fis.set('charset', 'utf-8');
fis.set('project.charset', 'utf-8');

/**
 * npm module require setup
 */
// used to resolve dependencies and wrap your code with `define`. 
fis.hook("commonjs", {
  baseUrl: "./src",
  extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

// DO NOT DO THIS! DO NOT EVER EXPLICITLY MENTION /node_modules
// fis.match('/node_modules/(**).js', {
//   id: '$1'
// });
// 禁用fis3默认的fis-hook-components
fis.unhook('components');
fis.hook('node_modules', {
  useDev: true
  // , ignoreDevDependencies: true
});

// our module loader 
fis.match('/node_modules/fis-mod/mod.js', {
  wrap: false
});
// !!REQUIRED
fis.match('/{node_modules, src}/**.js', {
  isMod: true,
  useSameNameRequire: true
});

fis.match('src/(**).{js,es6,jsx,ts,tsx}', {
  isMod: true,
  id: '$1'
});

fis.match(/^src\/([^\/]+)\/\1\.(es6|js|jsx|ts|tsx)$/i, {
  id: '$1'
});

// 以unmod.开头的js标识为不是模块
fis.match('unmod.(**).{js,es6,jsx,ts,tsx}', {
  isMod: false
});

// compile options
const es6Parser = function (content, file, options) {
  var result = require('babel-core').transform(content, {
    'presets': ['react', "es2015","stage-0"]
  });
  return result.code;
};

fis.match('src/**.{es6,jsx}', {
  parser: es6Parser,
  rExt: '.js'
});

fis.match('/node_modules/react-disqus-thread/**.js', {
  parser: es6Parser
});

fis.match('map.json', {
  release: '$&'
});

// 添加css和image加载支持
fis.match('*.{js,jsx,ts,tsx,es}', {
  preprocessor: [
    fis.plugin('js-require-css'),
    fis.plugin('js-require-file', {
      useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
    })
  ]
});

// typescript support
fis.set('project.fileType.text', 'ts,tsx');
fis.match("src/**.ts", {
  parser: fis.plugin("typescript"),
  preprocessor: fis.plugin('ng2-inline'), // ts里以相对路径引入模块
  rExt: ".js"
})

/**
 * Jade/less support
 */
fis.config.set('settings.parser.jade', {
  pretty: true
});

fis.match("src/**.jade", {
  parser: fis.plugin("jade"),
  rExt: ".html",
  isHtmlLike: true
});

fis.match("src/**.less", {
  parser: fis.plugin("less"),
  rExt: ".css"
});

/**
 * 开发通用设置
 */
fis
  .match('**.{js,jsx,es,ts,tsx,html,jade,css,less,png,jpg,jpeg,gif,mp3,mp4,flv,swf,svg,eot,ttf,woff,woff2}', {
    useHash: false
  })
  .match('**.{css,less}', {
    useSprite: false
  })
  .match('**', {
    charset: fis.get("charset")
  })
  .match("::package", {
    spriter: fis.plugin("csssprites", {
      layout: "matrix",
      margin: 1
    }),
    postpackager: [
      fis.plugin("loader"),
      fis.plugin('replace', {
        '/src/index.html': {
          '__NODE_ENV': "\"dev\""
        }
      })
    ]
  });

// 编译a标签href指向资源路径
fis.match('src/**.{jade,html}', {
  preprocessor: fis.plugin(function(content, file) {
    var uri = fis.compile.lang.uri;

    return content.replace(/(<a[^>]*)\shref=('|")(.*?)\2([^>]*>)/ig, function(_, prefix, quote, value, affix) {
      return prefix + ' href=' + quote + uri.wrap(value) + quote + affix;
    });
  })
});

// 开发Angular2应用，使src/client下的文件直接发布到根目录下
fis.match('src/index.{html,jade}',{
  release:"index.html"
});

// 带_开头的文件不发布
fis.match("_**", {
  release: false
});

/**
 * 本地打包（相对路径）lc
 * 测试环境打包（绝对路径）qa
 * 正式环境打包（绝对路径）pr
 * 远程发布环境（绝对路径）pu
 */
// 本地打包，相对路径
fis.media('lc')
  .hook("relative")
  .match("::package", {
    postpackager: [
      fis.plugin('loader', {
        allInOne: true
      }),
      fis.plugin("replace", {
        "/src/index.html": {
          "__NODE_ENV": "\"lc\""
        }
      })
    ]
  })
  .match('**.{css,less}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
  })
  .match('**.js',{
    optimizer: fis.plugin('uglify-js')
  })
  .match("**.png", {
    optimizer: fis.plugin("png-compressor", {
      type: "pngquant"
    })
  })
  .match('**', {
    relative: true,
    deploy: [fis.plugin('encoding'),fis.plugin('local-supply', {
      to: './dist/lc'
    })]
  })
  // HTML模板配置
  // 模板发布到服务器后以相对服务器的路径进行配置
  .match("src/**/*.{jade,html}", {
    relative: "/src"
  });

// 测试环境
fis.media("qa")
  .match("::package", {
    postpackager: [
      fis.plugin('loader', {
        allInOne: true
      }),
      fis.plugin("replace", {
        "/src/index.html": {
          "__NODE_ENV": "\"qa\""
        }
      })
    ]
  })
  .match('**.{js,jsx,es,ts,tsx,html,jade,css,less,png,jpg,jpeg,gif,mp3,mp4,flv,swf,svg,eot,ttf,woff,woff2}', {
    domain: fis.get("cdn-path"),
    useHash: true
  })
  .match('**.{css,less}', {
    useSprite: true
  })
  .match("**.png", {
    optimizer: fis.plugin("png-compressor", {
      type: "pngquant"
    })
  })
  .match("index*.{jade,html}", {
    useHash: false
  })
  .match("tpls/**.{jade,html}", {
    useHash: true
  })
  .match("**", {
    deploy: fis.plugin('local-supply', {
      to: './dist/qa'
    })
  });

// 正式环境
fis.media("pr")
  .match("::package", {
    postpackager: [
      fis.plugin('loader', {
        allInOne: true
      }),
      fis.plugin("replace", {
        "/src/index.html": {
          "__NODE_ENV": "\"pr\""
        }
      })
    ]
  })
  .match('**.{js,jsx,es,ts,tsx,html,jade,css,less,png,jpg,jpeg,gif,mp3,mp4,flv,swf,svg,eot,ttf,woff,woff2}', {
    domain: fis.get("cdn-path-release"),
    useHash: true
  })
  .match('**.{css,less}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
  })
  .match('**.js',{
    optimizer: fis.plugin('uglify-js')
  })
  .match("**.{jade,html}", {
    optimizer: fis.plugin("htmlmin", {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    })
  })
  .match("**.png", {
    optimizer: fis.plugin("png-compressor", {
      type: "pngquant"
    })
  })
  .match("index*.{jade,html}", {
    useHash: false
  })
  .match("tpls/**.{jade,html}", {
    useHash: true
  })
  .match("**", {
    deploy: fis.plugin('local-supply', {
      to: './dist/pr'
    })
  });

// 直接发布文件到远端
fis.media("pu")
  .match('**.{js,jsx,es,ts,tsx,html,jade,css,less,png,jpg,jpeg,gif,mp3,mp4,flv,swf,svg,eot,ttf,woff,woff2}', {
    domain: fis.get("cdn-path-push"),
    useHash: true
  })
  .match("index*.{jade,html}", {
    useHash: false
  })
  .match("tpls/**.{jade,html}", {
    useHash: true
  })
  .match("**", {
    deploy: fis.plugin("http-push", {
      receiver: fis.get("http-push-receiver"),
      to: fis.get("http-push-to")
    })
  });
