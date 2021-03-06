const fs= require("fs");
const path= require("path");
const entry= require("./entry");
const rimraf= require("rimraf");

//定义entryBuild
const entryBuildPath=path.resolve(__dirname,'../../entryBuild');
// delete entryBuild
rimraf.sync(entryBuildPath);
// new add entryBuild
fs.mkdirSync(entryBuildPath);
const entryContent = data =>`import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../app/component/${data.path}';
import Header from '../app/component/common/Header';
import Footer from '../app/component/common/Footer';
ReactDOM.render([<Header key="Header"/>,<Index key="Index"/>,<Footer key="Footer"/>],document.getElementById('app'));`;
// 生成webpack entry入口文件
entry.map((data)=>{
    fs.writeFile(entryBuildPath+'/'+data.name+'.js',entryContent(data),'utf-8',function(err){
        if(err){
            return console.log(err);
        }
    })
})