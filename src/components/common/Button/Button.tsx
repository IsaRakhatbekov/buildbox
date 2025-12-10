import styles from './Button.module.scss'

const Button = ({ label }) => {
  return (
    <div className={styles.buttonWrap}>
      <button type="button" className={styles.button}>
        <span>{label}</span>
      </button>
      <div className={styles.buttonShadow}></div>
    </div>
  )
}

export default Button