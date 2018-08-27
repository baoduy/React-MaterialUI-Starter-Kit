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

function defaultTableComponent({ data, columns, defaultPageSize, rest }) {
  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={defaultPageSize}
      {...rest}
    />
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
  rest
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
        <Card>
          <CardHeader color="primary">
            <h4>Users</h4>
          </CardHeader>
          <CardBody>
            <TableComponent
              data={data}
              columns={columns}
              defaultPageSize={defaultPageSize}
              {...rest}
            />
          </CardBody>
        </Card>
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
export default UserTable;
