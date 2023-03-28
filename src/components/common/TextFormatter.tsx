import React, { FC } from 'react'

type Props = {
  text: string
  word: string
  color: string
}

const TextFormatter: FC<Props> = ({ text, word, color }): JSX.Element => {
  const colorWordCreator = (WordToColorize: string, color: string) => (
    <span key={word} className={color}>
      {WordToColorize}
    </span>
  )

  const formatter = (): (JSX.Element | string)[] => {
    const name: (string | JSX.Element)[] = text.split(' ').map((item) => item + ' ') // string into array
    const spaceHandler = word + ' '
    const index: number = name.indexOf(spaceHandler)
    if (index > 0) {
      name[index] = colorWordCreator(spaceHandler, color)
    }
    return name
  }
  return <p>{formatter()}</p>
}

export { TextFormatter }
