import React, { useEffect, useState } from 'react'
import styled, {css} from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Container = styled.div`
  width: 100%;
  position: fixed;
  background-color: transparent;
  ${props => props.className === "black-nav" && css`
    background-color: #141414;   
  `}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Brand = styled.img`
  max-width: 100px;
`
const List = styled.ul`
  display: flex;
`
const ListItem = styled.li`
  list-style: none;
  margin-right: 20px;
  color: #e5e5e5;
  opacity: .7;
  cursor: pointer;
  ${props => props.className === "active" && css`
    color: white;
    font-weight: 500;
    opacity: 1;
  `}
`
const Right = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Icon = styled.span`
  margin-right: 20px;
  cursor: pointer;
`
const UserLogo = styled.img`
  max-width: 40px;
  margin-right: 20px;
  cursor: pointer;
`

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }else {
      handleShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  },[])
  return (
    <Container className={`${show && "black-nav"}`} >
      <Wrapper>
        <Left>
          <Brand src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"></Brand>
          <List>
            <ListItem className='active'>Home</ListItem>
            <ListItem>TV Shows</ListItem>
            <ListItem>Movies</ListItem>
            <ListItem>New & Popular</ListItem>
            <ListItem>My List</ListItem>
            <ListItem>Browse by Languages</ListItem>
          </List>
        </Left>
        <Right>
          <Icon><SearchIcon /></Icon>
          <Icon><NotificationsIcon /></Icon>
          <UserLogo src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"></UserLogo>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar