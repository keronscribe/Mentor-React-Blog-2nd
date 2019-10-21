import React from 'react';
import ListItem from './listItem'
import './list.css';

function List(){
	return(
		<>
		<h2>所有故事</h2>
<div className='list'>
		<ListItem />				
		<ListItem />				
		<ListItem />				
		<ListItem />				
		<ListItem />				
		<ListItem />				
		<ListItem />				
</div>
</>
	)
}


export default List;
