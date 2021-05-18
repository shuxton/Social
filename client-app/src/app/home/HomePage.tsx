import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import LoginForm from '../../features/users/LoginForm'
import RegisterForm from '../../features/users/RegisterForm'
import { useStore } from '../stores/store'

export default observer(function HomePage(){
    const {userStore,modalStore} = useStore();
return(
   <Segment inverted textAlign='center' vertical className='masthead'>
       <Container text>
           <Header as='h1' inverted>
               <Image size='massive' src='assets/logo.png' alt='logo' style={{marginBotton:12}}/>
                Social
           </Header>
           {userStore.isLoggedIn ? (
               <>
           <Header as='h2' inverted content='Welcome to Social'/>
           <Button as={Link} to='/activities' size='huge' inverted>
               Go to Activities!
           </Button>
               </>
           ):(
               <>
            <Button onClick={()=>modalStore.openModal(<LoginForm/>)} size='huge' inverted>
            Login!
        </Button>
        <Button onClick={()=>modalStore.openModal(<RegisterForm/>)} size='huge' inverted>
        Register!
    </Button>
    </>
           )}
           
       </Container>
   </Segment>
)
})