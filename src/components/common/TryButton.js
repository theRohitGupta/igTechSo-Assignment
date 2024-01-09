import React from 'react'

function TryButton({text, color="bg-lightorange text-richorange", children}) {
  return (
    <button className={`bg-lightorange p-3 rounded-lg text-richorange font-bold text-base w-fit ${color} flex gap-2 items-center justify-center`}>
        {children}{text}
    </button>
  )
}

export default TryButton