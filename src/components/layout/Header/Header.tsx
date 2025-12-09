import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	const location = useLocation()
	const isActive = (path: string) => location.pathname === path
	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '/register', label: 'Register' },
		{ path: '/login', label: 'Login' },
	]
	return (
		<header className={styles.header}>
			<div className={`__container ${styles.container}`}>
				<div className={styles.logo}>
					<Link to="/" className={styles.logoInner}>BUILDBOX</Link>
				</div>
				<nav className={styles.nav}>
					{navItems.map(item => (
						<Link
							key={item.path}
							to={item.path}
							className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}

export default Header
