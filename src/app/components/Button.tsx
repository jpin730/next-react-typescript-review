type BackgroundColor = 'blue' | 'red' | 'green'

interface ButtonProps {
  text?: string
  children?: React.ReactNode
  backgroundColor?: BackgroundColor
  style?: React.CSSProperties
  onClick: () => void
}

export const Button = ({
  text,
  children,
  backgroundColor = 'blue',
  style,
  onClick,
}: ButtonProps) => {
  const bgColorMap: Record<BackgroundColor, string> = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
  }

  const bgColorClass = bgColorMap[backgroundColor]

  return (
    <button
      className={`rounded px-4 py-2 font-bold text-white hover:opacity-75 ${bgColorClass}`}
      style={style}
      onClick={onClick}
    >
      {children ?? text}
    </button>
  )
}
