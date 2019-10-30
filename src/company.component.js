import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CompanyComponent = (props) => {
  const {
    company,
    classes,
  } = props;
  return (
    <Paper className={classes.card}>
      <img src={company.image} alt={company.name} className={classes.circle} />
      <Typography variant="h4" className={classes.content}>{company.name}</Typography>
      <Typography className={classes.content}>{company.position} {company.timeline}</Typography>
      <Typography className={classes.content}>{company.technology}</Typography>
      <Typography className={classes.content}>{company.description}</Typography>
    </Paper>
  );
};

const styles = {
    circle: {
        width: '400px',
        height: '200px',
        borderRadius: '25px',
        objectFit: 'contain',
        backgroundColor: '#FFFFFF'
    },
    content: {
        whiteSpace: 'pre-wrap',
        textAlign: 'initial'
    },
    card: {
        margin: '20px',
        padding: '20px',
        width: '600px'
    }
}

export const Company = withStyles(styles)(CompanyComponent);