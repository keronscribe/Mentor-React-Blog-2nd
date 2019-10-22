import React from 'react';
import './listItem.css';

function ListItem({title,author,body}){
	let shortenBody = body.substring(0,15);
	return(
	<div className="list-item">
		<div className='list-item-title'>{title}</div>
		<div className='list-item-body'>「{shortenBody}」</div>
		<div className="list-item-more">Read More</div>
		</div>)
}

export default ListItem