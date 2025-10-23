import React from 'react'
import Me from '../../assets/Me.png'
import { Container } from '@mui/material'

export default function About() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={Me} alt="" style={{height: '35vh'}} />
      </div>

      <Container>

    <div style={{border: '2px solid steelblue', marginTop: '5vh',
      backgroundColor: 'white', borderRadius: '5px'
    }}>
      <p style={{textAlign: 'center', fontSize: 'larger'}}
      >The person you see above is the owner of this company, Marcus Stampp,
      I help businesses grow their bottom line by eliminating technical friction and cutting unnecessary payment processing costs. You shouldn't have to be a tech expert to run your company, and you certainly shouldn't be overpaying just because you have outdated equipment.

My entire career is built around helping people like you stop stressing over confusing technology and focus on what you do best. My turning point came from seeing countless businesses with outdated Point-of-Sale (POS) equipment and complex technical needs, and realizing they didn't have a trustworthy, patient partner to guide them. I love helping people understand their technology—or simply taking the heavy lifting off their plate.

<p>
  I help businesses win by

 deep technical expertise with a commitment to your company's efficiency,


I analyze your current network setup and payment processing setup to identify hidden fees and inefficiencies, helping you save real money instantly.
I provide the technical knowledge and experience necessary to modernize your systems, ensuring your company can scale without disruption.

I once resolved a company's complicated imaging issues using MDT and network knowledge, eliminating their need for an expensive third-party contractor. I also helped design a specialized scheduling software for school staff managing IEPs and other critical tasks.
</p>

Patience is My Superpower
I am as patient as they come. I will work with you one-on-one until the solution is fully implemented, the issue is completely resolved, and you feel comfortable and in control of your technology. My goal isn't just to fix the problem; it's to empower you.

Ready for Simpler Tech and Bigger Savings?
If your tech stack feels stuck in the past or you suspect you're overpaying, let's talk.

      </p>
    </div>
      
      <h1>
       <a href="/Contact">Contact Me!</a>
      </h1>
      </Container>

    </>
  )
}
