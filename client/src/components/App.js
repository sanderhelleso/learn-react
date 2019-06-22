import React, { useState, useEffect } from 'react';

import PersonsList from './personsList/PersonsList';

const App = () => {
	return (
		<div>
			<PersonsList listType="Favorites" />
			<PersonsList listType="Commons" />
		</div>
	);
};

export default App;
