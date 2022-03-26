import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2 '>
			<input arial-label="Search Robots" className="pa3 ba b--green bg-lightest-blue" onChange={searchChange} type="search" placeholder="search robots" />
		</div>
		)
}

export default SearchBox; 