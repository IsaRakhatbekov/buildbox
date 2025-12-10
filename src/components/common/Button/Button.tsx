import type { ButtonProps } from '@/types/common'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ label }) => {
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
