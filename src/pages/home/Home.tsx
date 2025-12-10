import Button from '@/components/common/Button/Button'
import Input from '@/components/common/Input/Input'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.main}>
			<div className={`__container ${styles.container}`}>
				<Button label="Glass Button" />
				<Input placeholder="Email" />
			</div>
		</div>
	)
}

export default Home
