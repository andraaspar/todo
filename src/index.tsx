import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { AppComp } from './comp/AppComp'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<AppComp />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()