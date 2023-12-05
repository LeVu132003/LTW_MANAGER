import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
 
export default function EditPassword() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [pass, setPass] = useState();
  const [username, setUsername] = useState();
  const [checkPass, setCheckPass] = useState(false);
const password = '123456789';
 function  handleCheckPass (e) {
    setPass(e.target.value)
    if (pass === password) {
        setCheckPass(true);
    }
 }
  return (
    <>
      <Button onClick={handleOpen}>Thay đổi tên người dùng</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-2">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray" className="text-center">
              Chỉnh sửa mật khẩu
            </Typography>
            <Input
                type="password"
                size="lg"
                label="Mật khẩu"
                name="pass"
                value={pass}
                onChange={(e) => handleCheckPass(e)}
            />
            <Input
                type="text"
                size="lg"
                label="Tên người dùng"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled = {!checkPass}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Xác nhận
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}