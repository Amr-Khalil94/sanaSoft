import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

//mui
import { Box, Button, Grid, Typography, Toolbar, ToggleButton } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import LogoutIcon from "@mui/icons-material/Logout";

//redux
import { useSelector, useDispatch } from "react-redux";
import { handleLanguageChanged, resetUpdatesSlice } from "../../Store/memberSlice";
import { logOutSlice } from "../../Store/loginSlice";

//dom routes
import { useNavigate } from "react-router-dom";

//assets
import UKFlag from "../../assets/Flag_of_United_Kingdom.svg"
import SpaingFlag from "../../assets/Flag_of_Spain.svg"

import { useTranslation } from "react-i18next";



export default function Members() {
    //dom route
    const navigate = useNavigate()

    //translate
    const { t, i18n } = useTranslation();

    //state
    const [languageStateChanged, setLanguageChanged] = React.useState(false);

    //redux
    const dispatch = useDispatch()
    const { pageHeader, currentLang, isMembersUpdated, members } = useSelector((state) => state.members)
    const loginState = useSelector((state) => state.login);

    //listen to languageChaged and send dispatch with language
    useEffect(() => {
        if (languageStateChanged) {
            i18n.changeLanguage(i18n.languages[0] === "en" ? "ar" : "en");
            dispatch(
                handleLanguageChanged({
                    currentLang: i18n.language,
                    languageChaged: true,
                })
            );
            setLanguageChanged(false);
        }
    }, [languageStateChanged]);

    useEffect(() => {
        if (isMembersUpdated) {
            localStorage.setItem('members', JSON.stringify(members))
        }
        dispatch(resetUpdatesSlice())
    }, [isMembersUpdated, members,])

    //if loged out navigate to login
    useEffect(() => {
        if (loginState.logedIn === false && localStorage.getItem('useAuth') === null) {
            return navigate('/login')
        }

    }, [loginState.logedIn, localStorage.getItem('useAuth')])


    return (
        <>
            <AppBar sx={{ backgroundColor: "#5f9094" }} position="static" >
                <Toolbar sx={{ paddingX: '30px !important' }} variant="dense" backgroundColor="#5f9094">
                    <ToggleButton
                        sx={{ border: 'unset' }}
                        value="check"
                        selected={currentLang === "en"}
                        onChange={() => {
                            setLanguageChanged(true);
                        }}>
                        <img
                            width="70"
                            height="37"
                            alt="labguage"
                            className="lang-icon"
                            src={i18n.languages[0] !== "ar" ? SpaingFlag : UKFlag}
                        />
                    </ToggleButton>

                    <Button
                        sx={{
                            color: '#dc3545',
                            display: 'flex',
                            marginLeft: 'auto'
                        }}
                        onClick={() => dispatch(logOutSlice())}
                        startIcon={<LogoutIcon />}
                    >
                        {t('logOut')}
                    </Button>
                </Toolbar >
            </AppBar >

            <Box padding="40px" className="membersParent">
                <Grid marginBottom="20px" justifyContent="space-between" display="flex">
                    <Typography variant="h3" className="mainHeader">
                        {t(pageHeader)}
                    </Typography>

                    <Button sx={{
                        backgroundColor: "#5f9094",
                        color: "#FFFFFF",
                        '&:hover': {
                            backgroundColor: "#5f9094",
                            color: "#FFFFFF",
                        },

                    }} onClick={() => navigate('addMember')}>
                        {t('addMemberBtt')}
                    </Button>
                </Grid >
                <Outlet />
            </Box>
        </>

    )
}