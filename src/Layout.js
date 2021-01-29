import React from 'react'

const Layout = (props) => {
	return <React.Fragment>
    <div>
			<main>
				<div>
					{ props.children }
				</div>
			</main>
		</div>
	</React.Fragment>
}

export default Layout