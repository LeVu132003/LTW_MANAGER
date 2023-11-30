import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import DeleteIcon from '@mui/icons-material/Delete';
import {  IconButton } from "@mui/material";
export default function DialogDelete(props) {
  const [open, setOpen] = React.useState(false);
  const values = props.values;
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
        <DeleteIcon/>
      </IconButton>
      <Dialog open={open} handler={handleOpen} >
        <DialogHeader>Xóa sản phẩm</DialogHeader>
        <DialogBody>
          Bạn có chắc chắn muốn xóa sản phẩm {values.row.title} {values.row.color} {values.row.rom} không? 
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Không</span>
          </Button>
          <Button variant="gradient"  onClick={handleOpen}>
            <span>Có</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}