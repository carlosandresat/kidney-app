"use client"
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

const toggleGroupItemClasses =
  'hover:bg-blue-300 data-[state=on]:bg-blue-600 flex h-auto w-full px-4 py-2 items-center justify-center text-base first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-white border';


const SelectGroup = ({orientation, options}) => {

  const [answer, setAnswer] = useState('')

  const handleAnswer = (value) => {
    setAnswer(value)
  }

  let groupClass:string

  if(orientation === "row") groupClass = "flex flex-row"
  else groupClass = "flex flex-col"

  return(
  <ToggleGroup.Root
    type="single"
    value={answer}
    onValueChange={handleAnswer}
    aria-label="Text alignment"
  >
    <div className={groupClass}>
    {
        options.map((option)=> <ToggleGroup.Item className={toggleGroupItemClasses} key={option} value={option} aria-label="Left aligned">
        <h1>{option.charAt(0).toUpperCase() + option.slice(1)}</h1>
        </ToggleGroup.Item>
      )
    }
    </div>
  </ToggleGroup.Root>
)};

export default SelectGroup;