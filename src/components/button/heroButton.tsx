import { FC } from "react"

interface HeroButtonProps{
    text: string
}
export const HeroButton: FC<HeroButtonProps> = ({text}) => {
  return (
    <button className="btn">{text}</button>
  )
}


