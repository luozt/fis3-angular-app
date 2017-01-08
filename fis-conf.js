
/**
 * 开发者配置系列
 */

// 配置路径
const CDN_PATH = {
  qa: 'http://www.example.com/qa',
  pr: 'http://www.example.com/pr'
};

// 配置通用资源文件
const REG_ALL_RESOURCES = '**.{js,jsx,es,ts,tsx,html,pug,jade,css,less,png,jpg,jpeg,gif,mp3,mp4,flv,swf,svg,eot,ttf,woff,woff2,ico}';

// 修改雪碧图放大缩小倍数，默认是1，iphone是0.5
fis.set('css-scale', 1);

/**
 * 通用配置系列
 * 开发者无需修改，特殊情况除外
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
});

fis.config.set('settings.parser.{jade, pug}', {
  pretty: true
});

fis.match("src/**.{jade, pug}", {
  parser: fis.plugin("pug"),
  rExt: ".html",
  isHtmlLike: true
});

fis.match("src/**.less", {
  parser: fis.plugin("less"),
  preprocessor: fis.plugin('cssprefixer'),
  rExt: ".css"
});

fis
  .match(REG_ALL_RESOURCES, {
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
      fis.plugin("loader")
    ]
  });

// 编译a标签href指向资源路径
fis.match('src/**.{pug,jade,html}', {
  preprocessor: fis.plugin(function(content, file) {
    var uri = fis.compile.lang.uri;

    return content.replace(/(<a[^>]*)\shref=('|")(.*?)\2([^>]*>)/ig, function(_, prefix, quote, value, affix) {
      return prefix + ' href=' + quote + uri.wrap(value) + quote + affix;
    });
  })
});

// 开发Angular2应用，使src/client下的文件直接发布到根目录下
fis.match('src/index.{html,jade,pug}', {
  release:"index.html"
});


/**
 * 打包系列配置
 * lc: 本地打包，相对路径
 * qa: 测试环境打包，绝对路径
 * pr: 正式环境打包，绝对路径
 */

// // 带_开头的文件不发布
// ['qa', 'pr'].forEach(function(media){
//   fis.media(media)
//     .match('_**', {release: false});
// });

// 本地打包，相对路径
['lc'].forEach(function(media){
  fis.media(media)
    .hook("relative")
    .match("::package", {
      postpackager: [
        fis.plugin('loader', {
          allInOne: true
        })
      ]
    })
    .match('src/(**)', {
      release: '$1'
    })
    .match("**.png", {
      optimizer: fis.plugin("png-compressor", {
        type: "pngquant"
      })
    })
    .match('**.{css,less}', {
      useSprite: true,
      optimizer: fis.plugin('clean-css')
    })
    .match('**.js',{
      optimizer: fis.plugin('uglify-js')
    })
    .match('**', {
      relative: true,
      // deploy: [fis.plugin('encoding'),fis.plugin('local-supply', {
      //   to: './dist/'+media
      // })]
    })
    // HTML模板配置
    // 模板发布到服务器后以相对服务器的路径进行配置
    .match("src/**/*.{pug, jade,html}", {
      relative: "/src"
    });
});

// 测试环境
['qa'].forEach(function(media){
  fis.media(media)
    .match("::package", {
      postpackager: [
        fis.plugin('loader', {
          allInOne: true
        })
      ]
    })
    .match(REG_ALL_RESOURCES, {
      domain: CDN_PATH[media],
      useHash: true
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
    .match("index*.{pug,jade,html}", {
      useHash: false
    })
    // .match("**", {
    //   deploy: fis.plugin('local-supply', {
    //     to: './dist/'+media
    //   })
    // });
});

// 正式环境
['pr'].forEach(function(media){
  fis.media(media)
    .match("::package", {
      postpackager: [
        fis.plugin('loader', {
          allInOne: true
        })
      ]
    })
    .match(REG_ALL_RESOURCES, {
      domain: CDN_PATH[media],
      useHash: true
    })
    .match('**.{css,less}', {
      useSprite: true,
      optimizer: fis.plugin('clean-css')
    })
    .match('**.js',{
      optimizer: fis.plugin('uglify-js')
    })
    // .match("**.{pug, jade,html}", {
    //   optimizer: fis.plugin("htmlmin", {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     minifyJS: true
    //   })
    // })
    .match("**.png", {
      optimizer: fis.plugin("png-compressor", {
        type: "pngquant"
      })
    })
    .match("index*.{pug,jade,html}", {
      useHash: false
    })
    // .match("**", {
    //   deploy: fis.plugin('local-supply', {
    //     to: './dist/'+media
    //   })
    // });
});


