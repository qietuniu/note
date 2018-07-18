import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom'
import './App.css';

class App extends Component {
	render() {
			return(
				<div className="App">
					<h1 className="top">猫网</h1>
					<ul className="header">
						<li>
							<NavLink to='/' exact activeClassName="active">美短猫 </NavLink>
						</li>
						<li>
							<NavLink to='/bo' activeClassName="active">布偶猫 </NavLink>
						</li>
						<li>
							<NavLink to='/bs' activeClassName="active">波斯猫 </NavLink>
						</li>
					</ul>
					<div className="content">		
						<Route path="/" exact  component = {md} />
						<Route path="/bo" component = {bo} />
						<Route path="/bs" component = {bs} />
					</div>
				</div>
			)
	}
}

class md extends Component {
	render() {
		return(
			<div>
				<p>美国短毛猫（American Shorthair）是原产美国的一种猫，其祖先为欧洲早期移民带到北美的猫种，与英国短毛猫和欧洲短毛猫同类。据记载，五月花号上携带了数只猫以帮助除鼠。该品种的猫是在街头巷尾收集来的猫当中选种、并和进口品种如英国短毛猫、缅甸猫和波斯猫杂交培育而成。美国短毛猫素以体格魁伟，骨胳粗壮，肌肉发达，生性聪明，性格温顺而著称，是短毛猫类中大型品种。被毛厚密，毛色多达30余种，其中银色条纹品种尤为名贵。</p>
			</div>
		)
	}
}

class bo extends Component {
	render() {
		return(
			<div>
				<p>布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫。是现存体型最大、体重最重的猫之一。头呈楔形，眼大而圆，被毛丰厚，四肢较长且富有肉感，尾长，身体柔软，毛色有重点色、手套色或双色等等。布偶猫较为温顺好静，对人友善。其美丽优雅又非常类似于狗的性格（Puppy cat）而又被称为"仙女猫"，"小狗猫"。特殊的外貌和温和的性格是布偶猫最大的特点之一。</p>
			</div>
		)
	}
}

class bs extends Component {
	render() {
		return(
			<div>
				<p>波斯猫（Persian cat）是以阿富汗的土种长毛猫和土耳其的安哥拉长毛猫为基础，在英国经过100多年的选种繁殖，于1860年诞生的一个品种。波斯猫是最常见的长毛猫，波斯猫有一张讨人喜爱的面庞，长而华丽的背毛，优雅的举止，故有“猫中王子”、“王妃”之称，是世界上爱猫者最喜欢的纯种猫之一，占有极其重要的地位。</p>
			</div>
		)
	}
}

export default App;