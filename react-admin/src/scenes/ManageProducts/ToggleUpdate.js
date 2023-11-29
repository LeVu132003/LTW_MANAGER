import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Textarea
} from "@material-tailwind/react";
 import './ToggleUpdate.css'
import EditIcon from '@mui/icons-material/Edit';
import {  IconButton } from "@mui/material";
export default function DialogDefault(props) {
  const [open, setOpen] = React.useState(false);
    const values = props.values;
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
        <EditIcon/>
      </IconButton>
      <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa sản phẩm</DialogHeader>
            <DialogBody style={{height:'500px',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='title' label="Tên sản phẩm" value={values.row.title} required/>
                                                   
                        <Input size="lg" type="text" name='color' label="Màu sắc" value={values.row.color} required/>
                    
                        <Input size="lg" type="text" name='rom' label="Dung lượng" value={values.row.rom} required/>
                                
                        <Input size="lg" type="text" name='price' label="Giá thành" value={values.row.price} required/>

                        <Input size="lg" type="text" name='remain_amount' label="Số lượng" value={values.row.remain_amount} required/>

                    
                        <div class="mb-3">
                            <label
                                for="formFile"
                                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                                >Hình ảnh</label>
                            <input
                                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="formFile" 
                                style={{cursor:'pointer'}}
                            />
                        </div>

                        <Textarea id="message" rows="4" label="Mô tả" name="description" value={values.row.description} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></Textarea>                    
                    
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Lưu thông tin
                    </Button>

                </form>
            </DialogBody>
      </Dialog>
    </>
  );
}