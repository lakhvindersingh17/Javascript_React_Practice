
// This is a React problem from BFE.dev

import React, { useState,useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
  const [value,setArray] = useState(initialValue)

  const push=useCallback((val:T)=>{
    setArray([...value,val])
  },[])

  const removeByIndex=useCallback((index:number)=>{
    setArray(value=>value.filter((val,ind)=>ind!==index))
  },[])

  return{
    value,
    push,
    removeByIndex
  }



}
