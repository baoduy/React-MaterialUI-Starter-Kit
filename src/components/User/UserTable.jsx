import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import CardBody from '../Card/CardBody.jsx';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import userStyles from './userFormStyles.js';
import LinearProgress from '@material-ui/core/LinearProgress';

function defaultTableComponent({
  data,
  columns,
  defaultPageSize,
  loading,
  onEditClick,
  onDeleteClick
  ...rest
}) {
  return (
    <ReactTable
      SubComponent={row => {
      return <UserView
        user={row.original}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}/>
    }}
      data={data}
      columns={columns}
      defaultPageSize={defaultPageSize}
      loading={loading}
      {...rest}/>
  );
}
function UserTable({
  TableComponent,
  data,
  onEditClick,
  onAddClick,
  onDeleteClick,
  columns,
  defaultPageSize,
  loading,
  classes,
  ...rest
}) {
  const renderActionColumn = cellInfo => {
    return (
      <div>
        {onEditClick !== undefined ? (
          <Tooltip placement="top" title="Edit">
            <IconButton onClick={() => onEditClick(cellInfo)}>
              <Edit />
            </IconButton>
          </Tooltip>
        ) : (
          ''
        )}
        {onDeleteClick !== undefined ? (
          <Tooltip placement="top" title="Delete">
            <IconButton onClick={() => onDeleteClick(cellInfo)}>
              <Delete />
            </IconButton>
          </Tooltip>
        ) : (
          ''
        )}
      </div>
    );
  };
  if (onEditClick !== undefined || onDeleteClick !== undefined) {
    columns.push({
      Header: 'Action',
      Cell: renderActionColumn
    });
  }
  return (
    <Grid>
      <GridItem>
        <Grid container justify="flex-end">
          {onAddClick !== undefined ? (
            <Button
              color="secondary"
              variant="fab"
              onClick={onAddClick}
              aria-label="Add"
            >
              <AddIcon />
            </Button>
          ) : (
            ''
          )}
        </Grid>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader color="primary">
            <Grid container justify="space-between" alignItems="center">
              <GridItem>
                <h4 className={classes.cardTitleWhite}>Users</h4>
              </GridItem>
              <GridItem>
                <Grid container>
                  <GridItem>
                    {onAddClick !== undefined
                      ? (
                        <Tooltip placement="top" title="Add">
                          <Button
                            mini={true}
                            color="secondary"
                            variant="fab"
                            onClick={onAddClick}
                            aria-label="Add">
                            <AddIcon/>
                          </Button>
                        </Tooltip>
                      )
                      : ("")}
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
            {loading && <LinearProgress color="secondary"/>}
          </CardHeader>
          <CardBody>
            <TableComponent
              loading={loading}
              data={data}
              columns={columns}
              defaultPageSize={defaultPageSize}
              onDeleteClick={onDeleteClick}
              onEditClick={onEditClick}
              {...rest}/>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}
UserTable.defaultProps = {
  TableComponent: defaultTableComponent,
  data: [],
  defaultPageSize: 10,
  columns: []
};

UserTable.propTypes = {
  TableComponent: PropTypes.func,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  defaultPageSize: PropTypes.number,
  onEditClick: PropTypes.func,
  onAddClick: PropTypes.func,
  onDeleteClick: PropTypes.func
};
export default withStyles(userStyles)(UserTable);
