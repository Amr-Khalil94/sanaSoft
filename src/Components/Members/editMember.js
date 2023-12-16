import React, { useEffect, useState } from 'react'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { headerSlice, memberSubmitData } from "../../Store/memberSlice"

//formik
import { useFormik } from "formik";

//validation
import Schema from "./Validation/memberSchema"

//domrout
import { useNavigate } from 'react-router-dom';



//mui
import {
    Grid, Button, TextField, MenuItem, FormControlLabel, Checkbox, RadioGroup, Radio, FormControl, FormLabel, FormHelperText
} from '@mui/material';



//mui datePicker
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



//localization
import { t } from "i18next";

//dom route
import { useParams } from 'react-router-dom'

export default function EditMember() {
    const memberTypes = [
        {
            value: 0,
            label: 'Basic',
        },
        {
            value: 1,
            label: 'Premium',
        },
        {
            value: 2,
            label: 'VIP',
        },

    ];

    //dom route
    const { id } = useParams();
    const navigate = useNavigate();

    //redux
    const { members, pageHeader } = useSelector((state) => state.members)
    const dispatch = useDispatch()


    // const currentMember = members.find((object) => object.id == id);
    const [currentMember, setCurrentMember] = useState(members.find((object) => object.id == id))


    //formik
    const formik = useFormik({
        initialValues: {
            name: id && currentMember ? currentMember.name : '',
            email: id && currentMember ? currentMember.email : '',
            type: id && currentMember ? currentMember.memberType : '',
            subscripe: id && currentMember ? currentMember.subscripe : false,
            id: id && currentMember ? currentMember.id : Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join(''),
            gender: id && currentMember ? currentMember.gender : '',
            address: id && currentMember ? currentMember.address : '',
            date: id && currentMember ? currentMember.date : null,
            phoneNumber: id && currentMember ? currentMember.phoneNumber : "",
            image: id && currentMember ? currentMember.image : null,
        },
        validationSchema: Schema,
        onSubmit: (values) => {
            console.log(values)
            //submit edit
            if (id && currentMember) {
                //member id
                const memberid = currentMember.id

                const updatedMembers = members.map(member => {
                    if (member.id === memberid) {
                        // Update the properties of the specific member
                        return {
                            ...member,
                            name: values.name,
                            email: values.email,
                            memberType: values.type,
                            phoneNumber: values.phoneNumber,
                            subscripe: values.subscripe,
                            id: values.id,
                            gender: values.gender,
                            address: values.address,
                        };
                    }
                    return member;
                });
                dispatch(memberSubmitData(updatedMembers));
            } else {
                //submit add
                const newMember = { name: values.name, email: values.email, memberType: values.type, subscripe: values.subscripe, id: values.id, gender: values.gender, address: values.address, date: values.date, phoneNumber: values, image: '' }
                dispatch(memberSubmitData([...members, newMember]))
            }
            navigate('/members')
        }
    })





    useEffect(() => {
        if (id && currentMember) {
            dispatch(headerSlice('editMember'))
        } else {
            dispatch(headerSlice('addMember'))
        }
    }, [id, pageHeader, dispatch])


    console.log(formik.errors)

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid fullWidth container
                justifyContent="center"
                alignItems="center">



                <Grid mb="10px" xs={12} md={6} px='15px'>

                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label={t('memberName')}
                        variant="filled"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        helperText={
                            formik.touched.name && formik.errors.name
                                ? formik.errors.name
                                : null
                        }
                    />
                </Grid>

                <Grid mb="10px" xs={12} md={6} px='15px'>
                    <TextField
                        fullWidth
                        id="email"
                        email="email"
                        label={t('memberEmail')}

                        variant="filled"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={
                            formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : null
                        }
                    />
                </Grid>

                <Grid mb="10px" xs={12} md={6} px='15px'>
                    <TextField
                        fullWidth
                        select
                        id="type"
                        name="type"
                        label={t('memberType')}
                        variant="filled"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        helperText={
                            formik.touched.type && formik.errors.type
                                ? formik.errors.type
                                : null
                        }
                    >
                        {
                            memberTypes.map((memberType) => {
                                return (
                                    <MenuItem key={memberType} value={memberType.value}>
                                        {memberType.label}
                                    </MenuItem>
                                );
                            })}
                    </TextField>

                </Grid>




                <Grid mb="10px" xs={12} md={6} px='15px'>
                    <TextField
                        fullWidth
                        id="address"
                        address="address"

                        label={t('memberAddress')}
                        variant="filled"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        helperText={
                            formik.touched.address && formik.errors.address
                                ? formik.errors.address
                                : null
                        }
                    />
                </Grid>

                <Grid mb="10px" xs={12} md={6} px='15px'>
                    <TextField
                        fullWidth
                        id="phoneNumber"
                        phoneNumber="phoneNumber"
                        label={t('memberPhone')}
                        variant="filled"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        helperText={
                            formik.touched.phoneNumber && formik.errors.phoneNumber
                                ? formik.errors.phoneNumber
                                : null
                        }
                    />
                </Grid>


                <Grid mb="10px" xs={12} md={6} px='15px'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker onChange={(newValue) => formik.setFieldValue('date', newValue)} value={formik.values.date} label={t('memberDate')} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>


                <Grid mb="10px" xs={12} md={6} px='15px'>
                    <FormControlLabel name="subscripe" onChange={(e) => formik.setFieldValue('subscripe', e.target.checked)} checked={formik.values.subscripe} control={<Checkbox />} label={t('memberSubscripe')} />
                </Grid>

                <Grid mb="10px" xs={12} md={6} px='15px'>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">{t('memberGender')}</FormLabel>
                        <RadioGroup

                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="gender"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        <FormHelperText>{formik.touched.gender && formik.errors.gender
                            ? formik.errors.gender
                            : null}</FormHelperText>
                    </FormControl>
                </Grid>




            </Grid>

            <Button sx={{
                display: 'flex',
                marginLeft: 'auto',
                backgroundColor: "#5f9094",
                color: "#FFFFFF",
                '&:hover': {
                    backgroundColor: "#5f9094",
                    color: "#FFFFFF",
                },

            }} type='submit'>
                {t('submit')}
            </Button>
        </form >

    )
}