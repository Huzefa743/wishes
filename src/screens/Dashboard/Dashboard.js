import React, {Suspense} from 'react'
import Header from '../../components/Header/header'
import { Container, Divider } from '@mui/material'
import SocialLinks from '../SocialLinks/SocialLinks'
import YourComponent from '../SocialLinks/SocialLinks'
import SocialMediaIcons from '../SocialLinks/SocialLinks'
import GmailLinks from '../SocialLinks/GmailLinks'
// import Intro from '../Intro/Intro'
// import About from '../About/About'
// import AllureHomeProject from '../Projects/allureHomeProject'
// import TenderTrackerProject from '../Projects/tenderTrackerProject'
// import ElectroerpPorject from '../Projects/electroerpProject'
// import HighheelsProject from '../Projects/highheelsProject'
// import CarftsHomePorject from '../Projects/craftsHomeProject'

//import ContactForm from '../Contact/Contact'


const  Intro = React.lazy(()=> import('../Intro/Intro'));
const  About = React.lazy(()=> import('../About/About'));
const  AllureHomeProject = React.lazy(()=> import('../Projects/allureHomeProject'));
const  TenderTrackerProject = React.lazy(()=> import('../Projects/tenderTrackerProject'));
const  ElectroerpPorject = React.lazy(()=> import('../Projects/electroerpProject'));
const  HighheelsProject = React.lazy(()=> import('../Projects/highheelsProject'));
const  CarftsHomePorject = React.lazy(()=> import('../Projects/craftsHomeProject'));
const  ContactForm = React.lazy(()=> import('../Contact/Contact'));


function Dashboard() {
  return (
    <>
  
      <Header/>
       
       <SocialMediaIcons className=""/>
      <Container maxWidth="lg" sx={{ height:'auto', }}>
      <Suspense fallback={<div>...</div>}>
          <Intro />
          <About />
          <AllureHomeProject />
          <TenderTrackerProject />
          <ElectroerpPorject />
          <HighheelsProject />
          <CarftsHomePorject />
          <ContactForm />
        </Suspense>
      </Container>
       <GmailLinks/>
       
    </>
  )
}

export default Dashboard
