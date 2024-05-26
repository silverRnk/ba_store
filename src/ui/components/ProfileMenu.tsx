import {useState} from 'react'
import {styled} from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';

const ProfileWrapper = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;

`

const Profile = styled.button`
  display:block;
  height:50px;
  width:50px;
  border-radius:50%;
  background-color:gray;
`

const ProfileMenu = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isShown";
  },
}) <{ isShown: boolean }>`
  display:${props => props.isShown? 'block':'none'};
  position: absolute;
  top: 100%;
  right:25%;
  margin:20px 0 0 0;
  height:200px;
  width: 300px;
  background-color:blue;
  border-radius:16px;
  box-shadow: 0 0 5px gray;
`

const AccountMenu = () => {
    const [isShown, setIsShown] = useState(false)
  return (
    <ProfileWrapper>
        <Profile onClick={() => setIsShown(!isShown)}>
            <PersonIcon/>
        </Profile>
        <ProfileMenu isShown={isShown}/>
    </ProfileWrapper>
  )
}

export default AccountMenu