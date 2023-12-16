//react
import React from "react";

//mui
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"

import { useTranslation } from "react-i18next";


//redux
import { useDispatch, useSelector } from "react-redux";
import { closePopUp } from "../../Store/popUpSlice";
import { deleteMemberSlice } from "../../Store/memberSlice";

export default function DeletePopUp() {
    //translate
    const { t } = useTranslation();

    ///redux
    const dispatch = useDispatch()
    const { isOpen, targetedMember } = useSelector((state) => state.popUp)
    const { members } = useSelector((state) => state.members)

    console.log(isOpen)
    console.log(members)
    console.log(targetedMember)

    const handleDeletMember = () => {
        dispatch(deleteMemberSlice(members.filter(member => member !== targetedMember)));
        dispatch(closePopUp(false));
    }

    return (
        <Dialog
            className="popUp-parent"
            open={isOpen}
            onClose={() => {
                dispatch(closePopUp(false));
            }}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title" className="p-0">
                {t('popUp_title')}
            </DialogTitle>

            <DialogActions className="delete-btt-container">
                <Button
                    sx={{
                        color: 'red',
                        border: '1px solid red',
                        '&:hover': {
                            color: 'red',
                            border: '1px solid red',
                        },
                    }}
                    className="cancel"
                    onClick={() => {
                        dispatch(closePopUp(false));
                    }}>
                    {t('popUp_cancel_btt')}
                </Button>
                <Button sx={{
                    textDecoration: 'unset',
                    backgroundColor: 'red',
                    color: 'white',
                    border: '1px solid white',
                    '&:hover': {
                        backgroundColor: 'red',
                        color: 'white',
                        border: '1px solid white',
                    },
                }} onClick={() => { handleDeletMember() }}>
                    {t('popUp_delete_btt')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}