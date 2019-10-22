import React,{useEffect,useState}  from 'react';
import ListItem from './listItem'
import './list.css';
import axios from 'axios';

function List(){

	const [posts,setPosts] = useState([]);
	const url = `https://qootest.com/posts`;
	
  useEffect(()=>{
    axios.get(url)
    .then(response=>{
			const {data} = response;
			setPosts(data);
    })
	},[])
	console.log(posts);

	return(
		<>
			<h2>所有故事</h2>
			<div className='list'>
				{posts.map(({title,author,body},i) =>{
					return (<ListItem title={title} author={author} body={body} key={i} />)	
				})}
			</div>
		</>
	)
}


export default List;
