import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import {  IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const values = props.values;
    const handleOpen = () => setOpen(!open);
    const [fullName, setFullName] = useState(values.row.full_name);
    const [email, setEmail] = useState(values.row.email);
    const [phoneNumber, setPhoneNumber] = useState(values.row.phone_number);
    const [address, setAddress] = useState(values.row.address);
    const [role, setRole] = useState(values.row.role);

    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleRoleChange = (e) => setRole(e.target.value);
    return (
        <>
        <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
            <EditIcon/>
        </IconButton>
        <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa thông tin tài khoản</DialogHeader>
            <DialogBody style={{height:'500px',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                    <div className="mb-1 flex flex-col gap-3">
                        <p color="blue-gray">Tên người dùng</p>
                        <Input size="lg" type="text" name='username' label="Tên người dùng" value={values.row.username} disabled/>
                        <p color="blue-gray">Mật khẩu</p>
                        <Input size="lg" type="password" name='password' label="Mật khẩu" value={values.row.password} disabled/>

                        <Input size="lg" type="text" name='full_name' label="Họ và tên" value={fullName} onChange={handleFullNameChange} required/>   

                        <Input size="lg" type='email' name='email' label="Email"  value={email} onChange={handleEmailChange} required/>     

                        <Input size="lg" type="text" name='phone_number' label="Số điện thoại" value={phoneNumber} onChange={handlePhoneNumberChange} required/>     

                        <Input size="lg"  type="text" name='address' label="Địa chỉ" value={address}  onChange={handleAddressChange}/>     

                        <div class="mb-3">
                            <label
                                for="formFile"
                                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                                >Ảnh đại diện</label>
                            <input
                                type="file"
                                id="formFile" 
                                style={{cursor:'pointer'}}
                            />
                        </div>

                        <Select label="Vai trò" name="role" value={role} onChange={handleRoleChange}>
                            <Option value="user">Người dùng</Option>
                            <Option value="admin">Quản trị viên</Option>
                        </Select>
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Lưu thay đổi
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    </>
  );
}