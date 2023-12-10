import { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import Header from "../../components/Header";
import EditPassword from "./EditPassword";
import EditUsername from "./EditUsername";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  // const [username, setUsername] = useState("VuLee");
  // const [password, setPassword] = useState("********");

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  useEffect(() => {
    axios.post("http://localhost:3000/LTW_MANAGER/BE/index.php", {
      id: 6,
      action: "getUser",
    }).then((res) => {
      setFullname(res.data[0]["full_name"]);
      setEmail(res.data[0]["email"]);
      setPhoneNumber(res.data[0]["phone_number"]);
      setAddress(res.data[0]["address"]);
    });
  }, []);
 



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
  const handleEditInfo = async (e) => {
    e.preventDefault();
    setOnEdit(!onEdit);

    await axios
      .post("http://localhost:3000/LTW_MANAGER/BE/index.php", {
        id: 6,
        full_name: fullname,
        email: email,
        phone_number: phoneNumber,
        address: address,
        action: "updateInfo",
      })
      .then((res) => {
        if (res.data) {
          toast.success("Update Info successfully!!!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.warning("Update failed!!!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <div className="grid m-4 gap-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Header title="Thông tin người dùng" />
        <div className="grid grid-cols-2 gap-4 h-2/4">
          <EditUsername />
          <EditPassword />
        </div>
      </div>
      <form onSubmit={(e) => handleEditInfo(e)}>
        <div className="grid gap-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Input
                size="lg"
                label="Email"
                name="email"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                disabled={onEdit}
              />
            </div>
            <div>
              <Input
                size="lg"
                label="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={onEdit}
              />
            </div>
            <div>
              <Input
                size="lg"
                label="Số điện thoại"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={onEdit}
              />
            </div>
            <div>
              <Input
                size="lg"
                label="Địa chỉ"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={onEdit}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-end">
              <Button type="submit">
                {onEdit ? `Lưu thông tin` : `Chỉnh sửa thông tin`}
              </Button>
            </div>
          </div>
        </div>
      </form>
      {/* <ToastContainer/>; */}
    </div>
  );
};

export default Profile;
