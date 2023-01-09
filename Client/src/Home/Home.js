import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Home.css'
import Message from './../Message/Message'
import SendIcon from '@mui/icons-material/Send';


function Home() {

  const [messages, setMessages] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [text, setText] = useState(" ");
  const [toEmail, setToEmail] = useState(" ");



  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setCurrentUser(user)

    }
    else {
      alert('you need to first login')
      window.location = '/login'
    }




    async function fetchData() {
      const response = await axios.get('/messages');
      console.log(response.data)
      setMessages(response.data)
    }
    fetchData()
  }, [])

  async function sendMessage() {
    await axios.post('/send', {
      "to": toEmail,
      "from": currentUser.fullName,
      "text": text
    })

    window.location.reload();
    setText("")
  }

  return (

      <div className='container-fluid bgImg '>
        <div className='row d-flex justify-content-center m-0 p-0'>
          <div className='col-12 col-md-7 col-lg-7 chatContainer m-0 p-0 '>
       

              <h2 className='text-center headLine'>Hello {currentUser.fullName} 👋</h2>
              <div className='msgarea'>
                {
                  messages.map((message) => {
                    const type = currentUser.fullName === message.from ? 'outgoing' : 'incoming';
                    return (
                      <div>

                        <Message to={message.to} from={message.from} text={message.text} type={type} />

                      </div>

                    )

                  })
                }
              </div>
                       
      


              <div className=' messagearea d-flex justify-content-between align-items-center'>
                {/* <input type="email" placeholder='To Email' onChange={(e) => { setToEmail(e.target.value) }} /> */}
                {/* <input type="text" placeholder='Enter Text' onChange={(e) => { setText(e.target.value) }} /> */}
                <textarea class="form-control" id="textAreaExample" placeholder='Enter Text' onChange={(e) => { setText(e.target.value) }} rows="4"></textarea>
                <button className='sendbtn ' onClick={sendMessage}><SendIcon /></button>
              </div>

            </div>

          </div>


        </div>


  
      )
}

      export default Home