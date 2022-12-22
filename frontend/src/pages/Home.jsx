import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'



function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you nedd help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link tp ='/new-ticket' className='btn btn-reverse btn-block'>
 <FaQuestionCircle /> Create New Ticket
        </Link>
      <Link tp ='/tickets' className='btn btn-block'>
 <FaTicketAlt /> View My Tickets
        </Link>
    </>
  )
}

export default Home