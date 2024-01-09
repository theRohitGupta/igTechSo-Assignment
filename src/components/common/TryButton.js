import React from 'react'

function TryButton({text, color="bg-lightorange text-richorange"}) {
  return (
    <button className={`bg-lightorange p-3 rounded-lg text-richorange font-bold text-base w-fit ${color}`}>
        {text}
    </button>
  )
}

export default TryButton