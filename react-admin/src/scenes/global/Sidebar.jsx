import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar
} from "@material-tailwind/react";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';


export default function Sidebar() {
  return (
    <Card className=" w-full max-w-[20rem] p-4 shadow-xl bg-black shadow-black rounded-none" style={{ minHeight: '100vh' }}>
      <div className="mb-2 p-4">
        <Avatar src="https://i.pinimg.com/736x/26/fc/02/26fc02d99371bd107494db6d281efd26.jpg" className="mb-3" alt="avatar" size="xl" />
        <Typography variant="h4" color="white">
          Admin01
        </Typography>
      </div>
      <List>
        <Link to="/profile" className="text-white">
        <ListItem>
          <ListItemPrefix>
            <InfoRoundedIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Thông tin cá nhân
        </ListItem>
        </Link>
        <Link to="/products" className="text-white">
        <ListItem>
          <ListItemPrefix>
            <SmartphoneIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Quản lí sản phẩm
        </ListItem>
        </Link>
        <Link to="/users" className="text-white">
        <ListItem>
          <ListItemPrefix>
            <ManageAccountsIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Quản lí người dùng
        </ListItem>
        </Link>
        <span className="text-white">
        <ListItem>
          <ListItemPrefix>
            <PowerSettingsNewRoundedIcon className="h-5 w-5 text-white" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        </span>
      </List>
    </Card>
  );
}