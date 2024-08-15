import Link from 'next/link'

export default function Error(){
    return(
      <div className='Error-page'>
        <div className='loader'></div>
        <h1>PAGE IS UNDER MAINTAINCES</h1>
        <h2>Try again later!!!</h2>
        <Link href="/" className='link-button'>Go Back Home</Link>
      </div>
    )
  }