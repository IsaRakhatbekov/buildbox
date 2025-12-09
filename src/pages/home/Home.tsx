import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={`__container ${styles.container}`}>
				<h1>Home page</h1>
			</div>
		</div>
	)
}

export default Home
