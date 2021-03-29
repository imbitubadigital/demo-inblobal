import { forwardRef } from 'react'

interface InputProps {
  value: Date | string
  onClick?: () => void
}

function DisplayDate({ value, onClick }: InputProps, ref) {
  return (
    <button type="button" onClick={onClick} ref={ref}>
      {value}
    </button>
  )
}
export default forwardRef(DisplayDate)
