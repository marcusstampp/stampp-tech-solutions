import { Button, Container, TextField } from '@mui/material'
import React, {useRef} from 'react'
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser'

export default function Contact() {


  const PUBLIC_KEY = 'FeEdQzQgCe_KdDhe3'
  const SERVICE_ID = 'service_zdzxoi2'
  const TEMPLATE_ID = 'template_eumaigd'

    const { register, handleSubmit, formState: { errors } } = useForm();
    const formRef = useRef()

  // The function to handle the form data after validation
  const onSubmit = (data) => {
    // data contains all the form fields
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          alert('Message Sent Successfully!');
          console.log(result.text);
      }, (error) => {
          alert('Failed to send message: ' + error.text);
      });
  }


  return (
    <>
      
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div style={{display: 'flex', flexDirection: 'column',
      alignItems: 'center', marginTop: '20vh'
      }}>
         <p style={{color: 'white', marginLeft: '2vw'}}>
      If you would like to leave a comment or would like to reach out directly to me
      feel free to fill out the forms below.
      </p>
      {/* Name Input */}

      <TextField variant='filled'
        placeholder="Your Name"
        sx={{width: '35vw', marginLeft: '2vw',
          backgroundColor: 'white'
        }}
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}

      {/* Email Input */}
      <TextField variant='filled'
        type="email"
        placeholder="Your Email"
        sx={{width: '35vw', marginLeft: '2vw',
          backgroundColor: 'white'
        }}
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}

      <TextField variant='filled' placeholder='Please leave your comment and concerns here'
        multiline rows={4} {...register('message', {required: 'Please leave a message if you plan to contact me'})}
        sx={{width: '65vw', marginLeft: '2vw',
          backgroundColor: 'white', paddingBottom: '5vh'
        }}
      />
      {errors.message && <p style={{color: 'red'}}>{errors.message.message}</p>}

      {/* Submit Button */}
      <Button variant='contained' type="submit"
      sx={{width: '20vw', marginLeft: '2vw',
        backgroundColor: 'steelblue', marginTop: '7vh'
      }}
      >Send Message</Button>
      </div>
    </form>
    </>
  )
}
