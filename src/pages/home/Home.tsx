import Button from '@/components/common/Button/Button'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.main}>
			<div className={`__container ${styles.container}`}>
				<Button label="Glass Button" />
			</div>
		</div>
	)
}

export default Home
