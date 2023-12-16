import React, { useEffect } from "react";
//mui
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";

//mui icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


//translate
import { useTranslation } from "react-i18next";


//redux
import { useDispatch, useSelector } from "react-redux";
import { openPopUp } from "../../Store/popUpSlice";
import { headerSlice } from "../../Store/memberSlice"
import { useNavigate } from "react-router-dom";

//popUp
import DeletePopUp from "./popUp";


export default function AddMember() {
    //translate
    const { t } = useTranslation();

    //declration for variables
    const thaedNames = ["memberName", "memberEmail", 'memberAction'];

    //mui styles
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    //redux
    const dispatch = useDispatch();
    const { members } = useSelector((state) => state.members)

    //dom route
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(headerSlice('tableHeader'))
    }, [])




    console.log(members)
    return (
        <>
            <TableContainer component={Paper} className="tablde-cont">
                <Table sx={{ minWidth: 700 }} aria-label="customized table">

                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#5f9094' }}>
                            {thaedNames.map((thead) => {
                                return <TableCell key={thead}>{t(thead)}</TableCell>;
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {members.map(member => {
                            console.log(member)
                            return (
                                <StyledTableRow>
                                    <TableCell>{member.name}</TableCell>
                                    <TableCell>{member.email}</TableCell>
                                    <TableCell component="th" scope="row">
                                        <IconButton
                                            sx={{ color: '#5f9094' }}
                                            className="text-primary"
                                            aria-label="view row"
                                            component="label"
                                            onClick={() => {
                                                navigate(`viewMember/${member.id}`)

                                            }}
                                        >
                                            <RemoveRedEyeIcon />
                                        </IconButton>


                                        <IconButton
                                            sx={{ color: '#5f9094' }}

                                            aria-label="edit row"
                                            component="label"
                                            onClick={() => {
                                                navigate(`editMember/${member.id}`)

                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>


                                        <IconButton
                                            sx={{ color: '#dc3545' }}
                                            onClick={() => {
                                                dispatch(openPopUp({ targetedMember: member, allMembers: members, popUpState: true }))
                                            }}

                                            aria-label="delete row"
                                            component="label"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer >

            <DeletePopUp />
        </>

    )
}