import React, { useEffect } from 'react'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { headerSlice } from "../../Store/memberSlice"

//mui
import { Box, Grid, Typography, Divider, Button } from '@mui/material';



//localization
import { t } from "i18next";

//dom route
import { useParams, useNavigate } from 'react-router-dom'


export default function ViewMember() {
    //dom route
    const { id } = useParams();
    const navigate = useNavigate()

    //redux
    const { members } = useSelector((state) => state.members)
    const dispatch = useDispatch()

    //state
    const currentMember = members.find((object) => object.id == id);


    useEffect(() => {
        console.log(id)
        dispatch(headerSlice(t('viewMemberHeader')))
    }, [])
    return (
        <>
            <Box sx={{ background: '#c9c9c9', paddingY: '40px', paddingX: '40px', borderRadius: "15px" }}>

                <Grid container>

                    <Grid direction="column">

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">
                                {`${t('memberName')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.name}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">

                                {`${t('memberEmail')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.email}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">
                                {`${t('memberType')}:`}

                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.memberType}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">

                                {`${t('memberSubscripe')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.subscripe}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">

                                {`${t('memberGender')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.gender}

                            </Typography>
                        </Grid>

                    </Grid>


                    <Divider mx='20px' orientation="vertical" variant="middle" flexItem />

                    <Grid direction="column">

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">

                                {`${t('memberAddress')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.address}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">
                                {`${t('memberDate')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.date}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">

                                {`${t('memberPhone')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.phoneNumber}

                            </Typography>
                        </Grid>

                        <Grid pb="22px" direction="row" sx={{ display: 'flex' }}>
                            <Typography color="#000000"
                                paddingX='15px'
                                fontSize="16px"
                                fontWeight="600">

                                {`${t('memberImage')}:`}
                            </Typography>

                            <Typography color="#121212"
                                fontSize="14px"
                                fontWeight="500">
                                {currentMember.image}

                            </Typography>
                        </Grid>



                    </Grid>

                </Grid>
            </Box>
            <Button sx={{
                marginLeft: 'auto',
                marginTop: '20px',
                display: 'flex',
                backgroundColor: "#5f9094",
                color: "#FFFFFF",
                '&:hover': {
                    backgroundColor: "#5f9094",
                    color: "#FFFFFF",
                },
            }} onClick={() => navigate(`/members/editMember/${currentMember.id}`)}>
                {t('editMemberData')}
            </Button>

        </>


    )
}