import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const Blogs = () => {
    const style = {
        "width": "300px",
        "margin-top": "20px"
    }
    return (
        <div>
            <Grid container>
                <Grid item md={4} xs={12}>
                    <Card variant="outlined" style={style}>
                        <CardContent>Hello</CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Blogs
