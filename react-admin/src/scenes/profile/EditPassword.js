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
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();
  const [confirmPass, setConfirmPass] = useState();

 
  return (
    <>
      <Button onClick={handleOpen}>Thay đổi mật khẩu</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-2">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h5" color="blue-gray" className="text-center w-fit">
              Thay đổi mật khẩu
            </Typography>
            <form>
                <div className="grid grid-cols-1 gap-y-4">
                    <Input
                        type="password"
                        size="lg"
                        label="Mật khẩu"
                        name="oldPass"
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
                    />
                    <Input
                        type="password"
                        size="lg"
                        label="Mật khẩu mới"
                        name="newPass"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                    <Input
                        type="password"
                        size="lg"
                        label="Xác nhận mật khẩu mới"
                        name="confirmPass"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <Button variant="gradient" onClick={handleOpen} fullWidth>
                    Xác nhận
                    </Button>
                </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}