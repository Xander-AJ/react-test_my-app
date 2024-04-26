import React from 'react'
import { Button } from './button'
export const Ticker = () => {

    const Tickle = (number) => {
        console.log(`This has been clicked ${number} times`)
    }
  return (
    <Button text="Tickle" onClick={Tickle(3)} />
  )
}
