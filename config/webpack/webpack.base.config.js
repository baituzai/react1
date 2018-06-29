const entry=require("./webpack.entry.config");

const newEntry={};

for(let name in entry){
    newEntry[name]=entry[name][0]
};


// 基础配置
let config = {
    // entry:{
    //     'index':'./entryBuild/index.js',
    //     'shop':'./entryBuild/shop.js'
    // },
    entry:newEntry,
    resolve:{
        extensions:[".js",".json",".jsx",".css",".pcss"],
    }
};

module.exports = config;