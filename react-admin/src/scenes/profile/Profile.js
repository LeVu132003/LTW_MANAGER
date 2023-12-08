import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import Header from "../../components/Header";
import EditPassword from './EditPassword'
import EditUsername from './EditUsername'
import axios from "axios";
const Profile = () => {
  // const [username, setUsername] = useState("VuLee");
  // const [password, setPassword] = useState("********");
  const [fullname, setFullname] = useState("Lê Hoàng Anh Vũ");
  const [email, setEmail] = useState("levu132003@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("0935680614");
  const [address, setAddress] = useState("Bụi đời");
  const [onEdit, setOnEdit] = useState (false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // console.log("Username:", username);
    // console.log("Password:", password);
    console.log("Fullname:", fullname);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
  };
  const handleEditInfo =  (e) => {
    e.preventDefault();
    setOnEdit(!onEdit);

     axios.post("http://localhost:3000/LTW_MANAGER/BE/index.php",{
      id: 8,
      full_name: fullname,
      email: email,
      phone_number: phoneNumber,
      action: "updateInfo",
    }).then((res) => {console.log(res.data);
  })

    console.log(fullname);
    console.log(email);
    console.log(phoneNumber);
    console.log(address);
  }
  return (
    <div className="grid m-4 gap-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Header title="Thông tin người dùng" />
        <div className="grid grid-cols-2 gap-4 h-2/4">
          <EditUsername/>
          <EditPassword/>
        </div>
      </div>
      <form onSubmit={(e)=>handleEditInfo(e)}>
        <div className="grid gap-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Input
                size="lg"
                label="Email"
                name="email"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                disabled = {onEdit}
              />
            </div>
            <div>
              <Input
                size="lg"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled = {onEdit}
              />
            </div>
            <div>
              <Input
                size="lg"
                label="Số điện thoại"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled = {onEdit}
              />
            </div>
            <div>
              <Input
                size="lg"
                label="Địa chỉ"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled = {onEdit}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-end">
              <Button type="submit" >
                {onEdit ? (`Lưu thông tin`) : (`Chỉnh sửa thông tin`)}
              </Button>
            </div>
          </div>
        </div>


        
      </form>
    </div>
  );
};

export default Profile;