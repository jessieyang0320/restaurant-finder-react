
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router';
import './category.css';


class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 3000,
            callback: function (index) {
                // update index of pic
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian">Travel</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">Shopping</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">Live</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">Gym</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">Hair</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">Family</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">Food</li></Link>
                            <Link to="/search/zizhucan"><li className="float-left zizhucan">Buffet</li></Link>
                            <Link to="/search/jiuba"><li className="float-left jiuba">Pubs</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/meishi"><li className="float-left meishi">Food</li></Link>
                            <Link to="/search/dianying"><li className="float-left dianying">Movie</li></Link>
                            <Link to="/search/jiudian"><li className="float-left jiudian">Hotel</li></Link>
                            <Link to="/search/xuixianyule"><li className="float-left xuixianyule">Entertain</li></Link>
                            <Link to="/search/waimai"><li className="float-left waimai">Deliver</li></Link>
                            <Link to="/search/huoguo"><li className="float-left huoguo">HotPot</li></Link>
                            <Link to="/search/liren"><li className="float-left liren">Women</li></Link>
                            <Link to="/search/dujiachuxing"><li className="float-left dujiachuxing">Holidy</li></Link>
                            <Link to="/search/zuliaoanmo"><li className="float-left zuliaoanmo">Message</li></Link>
                            <Link to="/search/zhoubianyou"><li className="float-left zhoubianyou">Travel</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="float-left ribencai">Sushi</li></Link>
                            <Link to="/search/spa"><li className="float-left SPA">SPA</li></Link>
                            <Link to="/search/jiehun"><li className="float-left jiehun">Wedding</li></Link>
                            <Link to="/search/xuexipeixun"><li className="float-left xuexipeixun">Education</li></Link>
                            <Link to="/search/xican"><li className="float-left xican">Stake</li></Link>
                            <Link to="/search/huochejipiao"><li className="float-left huochejipiao">Tickets</li></Link>
                            <Link to="/search/shaokao"><li className="float-left shaokao">BBQ</li></Link>
                            <Link to="/search/jiazhuang"><li className="float-left jiazhuang">Furniture</li></Link>
                            <Link to="/search/chongwu"><li className="float-left chongwu">Pet</li></Link>
                            <Link to="/search/all"><li className="float-left quanbufenlei">All</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category