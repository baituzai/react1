// index.jsx
import React from 'react';
import'../../public/css/common.pcss';
import'../../public/css/index.pcss';
class Index extends React.Component{
    render() {
        return (
            <div className="cont">
                <div className="top">
                    <div>这是头部</div>
                    <div>
                        <i className="logo"/>
                    </div>
                    <div className="nav">
                        <a href="index.html">headerpager</a>
                        <a href="shop.html">shop</a>
                    </div>
                </div>

                
                <div className="index">this is headerpage</div>    
              
                <div className="buttom"></div>
                <div>这是底部</div>
            </div>
        );
    }

}


export default Index;
