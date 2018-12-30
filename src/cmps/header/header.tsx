import { Link } from 'react-router-dom';
import React from 'react';
import SearchStories from './search-stories/search-stories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';

type State = {
	showUserMenu: boolean
};
class Header extends React.Component<{}, State> {
	constructor(props) {
		super(props);

		this.state = {
			showUserMenu: false
		};

		this.toggleUserMenu = this.toggleUserMenu.bind(this);
	}

	toggleUserMenu() {
		this.setState(prevState => (
			{showUserMenu: !prevState.showUserMenu}
		));
	}

	render() {
		return <div style={{height: '80px'}}> {/** exact header height, one-time setting so later on I don't need to set padding-tops */}
			<nav className="navbar navbar-expand fixed-top navbar-light bg-light">
				<Link to="/" className="navbar-brand">Dotlog</Link>
				<div className="navbar-nav mr-auto">
					<Link to="/" className="nav-item nav-link active">Home</Link>
					<Link to="/" className="nav-item nav-link">Blogs</Link>
					<Link to="/" className="nav-item nav-link">Vlogs</Link>
					<Link to="/about" className="nav-item nav-link">About</Link>
				</div>
				<SearchStories />
				<div className="ml-3" onClick={this.toggleUserMenu}>
					<FontAwesomeIcon icon={['fas', 'user-circle']} size="2x" />
					{this.state.showUserMenu ? <div className="user-menu">
						login
					</div> : null}
				</div>
			</nav>
		</div>;
	}
}

export default Header;
