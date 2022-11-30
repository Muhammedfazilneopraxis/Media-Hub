import { useNavigate } from "react-router-dom";
import { logout } from "../../Firebase";
import Button from "../Common/Button";
import Center from "../Common/Center";
import s from "../Uploads/Uploads.module.css";


import { GoogleLogout } from 'react-google-login';
import GoogleLogoutButton from "../SocialLogin/Logout";
import {useLocation} from 'react-router-dom';

const Apps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <Center className="h-28">
        <Button
          label="Create New Page"
          onClick={() => {
            alert("you just clicked this button");
            {console.log('previous page',location.state.name)}
          }}
        />
      </Center>
      <div className={s.uploadcontainer}>
        <h1 className={s.uploadtitle}>PAGES</h1>
        <ul className={s.list}>
          <li>American Video Hub</li>
          <li>Chines Press Hub</li>
          <li>Indian Press Page</li>
          <li>Product Image Gallery</li>
        </ul>
       <GoogleLogoutButton />
      </div>
    </div>
  );
};

export default Apps;
