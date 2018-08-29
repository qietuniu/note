import styled from 'styled-components';

export const HomeWrapper = styled.div `
	width:960px;
	margin:0 auto;
	overflow:hidden;
`

export const HomeLeft = styled.div `
	float:left;
	width:635px;
	margin:0 0 0 15px;
	padding:30px 0 0 0;
	.banner-img{
		width:625px;
		height:270px;
		
	}
`
export const HomeRight = styled.div `
	float:right;
	width:280px;
`
//topic
export const TopicWrapper = styled.div `
	padding:20px 0 10px;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;
	margin-right:-18px;
`
export const TopicItem = styled.div `
	float:left;
	background:#f7f7f7;
	height:32px;
	line-height:32px;
	padding-right: 10px;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	margin-bottom:18px;
	margin-right:18px;
	cursor:pointer;
	.topic-pic{
		float:left;
		display:block;
		height:32px;
		width:32px;
		margin-right:10px;
	}
`
export const MoreTopic = styled.a `
	display: inline-block;
    margin-top: 9px;
    font-size: 14px;
    color: #787878;
    
`

export const ListWrapper = styled.div `
	.load-more{
		display:block;
		box-sizing:border-box;
		width: 100%;
	    border-radius: 20px;
	    background-color: #a5a5a5;
	    height: 40px;
	    margin: 30px auto 60px;
	    padding: 10px 15px;
	    text-align: center;
	    font-size: 15px;
	    color: #fff;
	    line-height:20px;
	    cursor:pointer;
	}
`

export const ListItem = styled.div `
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	overflow:hidden;
	.pic{
		display:block;
		float:right;
		width:125px;
		height:100px;
		border-radius:10px;
	}
`
export const ListInfo = styled.div `
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		line-height:24px;
		font-size:13px;
		color:#999;
	}
`
export const RecommendWrapper = styled.div `
	margin-top:26px;
	width:280px;
	overflow:hidden;

`

export const RecommendItem = styled.div `
	float:left;
	margin-bottom:10px;
	width:280px;
	height:50px;
	.pic{
		width:280px;
		height:50px;
	}
`

export const DownLoad = styled.div `
	margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    .qrCode{
    	width: 60px;
	    height: 60px;
	    opacity: .85;
	    vertical-align: middle;
    }
    .info{
    	display: inline-block;
	    vertical-align: middle;
	    margin-left: 7px;
	    .title{
	    	font-size: 15px;
    		color: #333;
	    }
	    .subTitle{
	    	margin-top: 4px;
		    font-size: 13px;
		    color: #999;
	    }
    }
`

export const WriterWrapper = styled.div `
    position: relative;
	.writeHeader{
		span{
			font-size: 14px;
    		color: #969696;
		}
		.writerSwitch{
			float: right;
		    display: inline-block;
		    font-size: 14px;
		    color: #969696;
			.spin{
				display: inline-block;
			    line-height: 1;
			    transition: .5s ease;
			}
		}
	}
	.moreWriter{
		position: absolute;
		box-sizing:border-box;
	    padding: 7px 7px 7px 12px;
	    margin-top:20px;
	    left: 0;
	    width: 100%;
	    font-size: 13px;
	    color: #787878;
	    background-color: #f7f7f7;
	    border: 1px solid #dcdcdc;
	    border-radius: 4px;
	    line-height: 20px;
    	text-align: center;
	}

`

export const WriterItem = styled.div `
	margin-top: 15px;
	line-height: 20px;
	box-sizing: border-box;
	.avatar{
		float: left;
	    width: 48px;
	    height: 48px;
	    margin-right: 10px;
        display: block;
    	cursor: pointer;
    	img{
    		width: 100%;
		    height: 100%;
		    border: 1px solid #ddd;
		    border-radius: 50%;
    	}
	}
	.follow{
		float: right;
	    margin-top: 5px;
	    padding: 0;
	    font-size: 13px;
	    color: #42c02e;
	}
	.name{
		padding-top: 5px;
	    margin-right: 60px;
	    font-size: 14px;
	    display: block;
	}
	p{
		margin-top: 2px;
	    font-size: 12px;
	    color: #969696;
	}

`
export const BackTop = styled.div `
	position:fixed;
	right:30px;
	bottom:30px;
	width:60px;
	height:60px;
	line-height:60px;
	text-align:center;
	font-size:12px;
	color:#999;
	border:1px solid #ccc;
	border-radius:2px;
	cursor:pointer;
`