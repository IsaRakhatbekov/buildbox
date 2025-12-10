import type { InputProps } from '@/types/common'
import styles from './Input.module.scss'

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} className={styles.input} />
  )
}

export default Input