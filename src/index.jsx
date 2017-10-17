import React from 'react';
import ReactDOM from 'react-dom';
import { Comp } from './component';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);
};

render(Comp);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./component', () => { render(Comp); });
}