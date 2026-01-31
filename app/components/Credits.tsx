import React from 'react'

const Credits = () => {
  return (
    <div className='flex flex-col gap-2'>
      <p className="text-sm text-muted-foreground">
          Solutions and Explanations from
          <a target="_blank" href="https://github.com/usc-cisco/philnits-vault" className="underline ml-1 text-primary hover:text-primary/90">philnits-vault</a>
      </p>
      <p className='text-sm text-muted-foreground'>
        If you notice any errors, feel free to send a PR: <a target="_blank" href="https://github.com/elderfieldzeus/philnits" className="underline ml-1 text-primary hover:text-primary/90">PhilNITS Mock</a>
      </p>
    </div>
  )
}

export default Credits
