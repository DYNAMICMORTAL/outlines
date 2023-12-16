import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
    <div className='wrapper'>
      
    <Navbar/>
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
