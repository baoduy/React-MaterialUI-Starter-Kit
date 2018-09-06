import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import Grid from "@material-ui/core/Grid";
import GridItem from "../Grid/GridItem";
import Avatar from "@material-ui/core/Avatar";
import {getAvatar} from "../../commons/commonFuncs";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function UserView({user, onEditClick, onDeleteClick}) {
    return (
        <Grid
            style={{
            paddingTop: "15px",
            paddingBottom: "15px"
        }}>
            <GridItem>
                <Card>
                    <CardContent>
                        <Grid container>
                            <GridItem xs={12} sm={12} md={12}>
                                <Grid container justify="center">
                                    <GridItem container justify="center">
                                        <Avatar
                                            style={{
                                            width: '100px',
                                            height: '100px'
                                        }}
                                            src={getAvatar(user.avatar)}/>
                                    </GridItem>
                                    <GridItem>
                                        <h4>{`${user.firstName} ${user.lastName}`}</h4>
                                    </GridItem>

                                </Grid>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <Grid container>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            inputProps={{
                                            value: user.username,
                                            readOnly: true
                                        }}
                                            labelText="Username"
                                            formControlProps={{
                                            fullWidth: true
                                        }}/>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            inputProps={{
                                            value: user.email,
                                            readOnly: true
                                        }}
                                            labelText="Email address"
                                            formControlProps={{
                                            fullWidth: true
                                        }}/>
                                    </GridItem>
                                </Grid>

                            </GridItem>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justify="flex-end">
                            <GridItem>
                                {onEditClick !== undefined
                                    ? (
                                        <Tooltip placement="top" title="Edit">
                                            <IconButton
                                                color="primary"
                                                onClick={() => {
                                                onEditClick(user)
                                            }}>
                                                <Edit/>
                                            </IconButton>
                                        </Tooltip>
                                    )
                                    : ("")}

                            </GridItem>
                            <GridItem>
                                {onDeleteClick !== undefined
                                    ? (
                                        <Tooltip placement="top" title="Delete">
                                            <IconButton color="secondary" onClick={() => onDeleteClick(user)}>
                                                <Delete/>
                                            </IconButton>
                                        </Tooltip>
                                    )
                                    : ("")}
                            </GridItem>
                        </Grid>

                    </CardActions>
                </Card>
            </GridItem>
        </Grid>

    );
}

export default UserView;