import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={`__container ${styles.container}`}>
				<span>Copy</span>
				<a href="#">Privacy</a>
			</div>
		</div>
	)
}

export default Footer
