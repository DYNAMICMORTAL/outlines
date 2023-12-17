import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className='wrapper'>
      <div className='navbar'>
        <img src='/home.png' alt='home'/>
        <img src='/graph.png' alt='graph'/>
        <img src="/grid.png" alt='grid'/>
      </div>
      
      <div className='main'>
        <h1>Outlines</h1>
        <div className='agentArea'>
          <div className='agentContainer'>
            <div>
              <p>Agent ID<sup>*</sup></p>
              <input/>
            </div>
            <div>
              <p>Agent Name</p>
              <input/>
            </div>
            <div className="audioContainer">
              <input type="file"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
