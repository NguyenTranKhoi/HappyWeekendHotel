import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useProducts from '../../hook/use-product';
import ActionAreaCard from '../Card';
import { IconButton, Skeleton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DialogSearch(props: any, ref: any) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const room = useProducts('')

    React.useImperativeHandle(ref, () => ({
        openSearchResult: (prop: any) => {
            setLoading(true)
            const searchRooms = async () => {
                await fetch(`http://localhost:4000/api/rooms?dateFrom=${prop[0]}&dateTo=${prop[1]}`)
                    .then((res) => res.json())
                    .then((result) => {
                        setData(result)
                        setLoading(false)
                    })
            }
            searchRooms()
            setOpen(true)
        }
    }))

    const skeletonLoadingRoom = () => {
        return (
            <div className='flex justify-between'>
                <div className="">
                    <Skeleton variant="rounded" width={350} height={100} />
                    <Skeleton variant="text" width={350} height={30} />
                    <Skeleton variant="text" width={350} height={30} />
                    <Skeleton variant="text" width={350} height={30} />
                </div>
                <div className="">
                    <Skeleton variant="rounded" width={350} height={100} />
                    <Skeleton variant="text" width={350} height={30} />
                    <Skeleton variant="text" width={350} height={30} />
                    <Skeleton variant="text" width={350} height={30} />
                </div>
                <div className="">
                    <Skeleton variant="rounded" width={350} height={100} />
                    <Skeleton variant="text" width={350} height={30} />
                    <Skeleton variant="text" width={350} height={30} />
                    <Skeleton variant="text" width={350} height={30} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth="xl"
                open={open}
                onClose={() => { setOpen(false) }}
            >
                <DialogTitle sx={{display: 'flex', justifyContent: "space-between"}}>
                    Kết quả tìm kiếm nhà nghỉ. 
                    <IconButton onClick={() => { setOpen(false) }}><CloseIcon/></IconButton>
                </DialogTitle>
                <DialogContent>
                    {loading ? skeletonLoadingRoom() : <ActionAreaCard newsList={data} />}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default React.forwardRef(DialogSearch);