import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	overflow:hidden;
`

export const HomeLeft = styled.div`
	float:left;
	width:635px;
	margin:0 0 0 15px;
	padding:30px 0 0 0;
	.banner-img{
		width:625px;
		height:270px;
		
	}
`
export const HomeRight = styled.div`
	float:right;
	width:240px;
`
//topic
export const TopicWrapper = styled.div`
	padding:20px 0 10px;
	overflow:hidden;
`
export const TopicItem = styled.div`
	float:left;
	background:#f7f7f7;
	height:32px;
	line-height:32px;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	.topic-pic{
		display:block;
		height:32px;
		width:32px;
		margin-right:10px;
	}
`