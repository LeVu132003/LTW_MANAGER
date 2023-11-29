import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Select,
  Option

} from "@material-tailwind/react";
 import './ToggleCreate.css'
import { Padding, SelfImprovementTwoTone } from "@mui/icons-material";
export default function ToggleCreate() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
        <Button onClick={handleOpen} variant="gradient" style={{padding:'10px',height:'fit-content',alignSelf:'center'}}>
            Thêm tài khoản
        </Button>
        <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Thêm tài khoản</DialogHeader>
            <DialogBody style={{height:'500px',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='username' label="Tên người dùng" required/>
                    
                        <Input size="lg" type="password" name='password' label="Mật khẩu " required/>

                        <Input size="lg" type="text" name='full_name' label="Họ và tên" required/>   

                        <Input size="lg" type='email' name='email' label="Email" required/>     

                        <Input size="lg" type="text" name='phone_number' label="Số điện thoại" required/>     

                        <Input size="lg"  type="text" name='address' label="Địa chỉ" />     

                        <div class="mb-3">
                            <label
                                for="formFile"
                                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                                >Ảnh đại diện</label>
                            <input
                                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="formFile" 
                                style={{cursor:'pointer'}}/>
                        </div>

                        <Select label="Vai trò" name="role">
                            <Option value="user">Người dùng</Option>
                            <Option value="admin">Quản trị viên</Option>
                        </Select>
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Tạo tài khoản
                    </Button>
                </form>
            </DialogBody>
        </Dialog>
    </>
  );
}