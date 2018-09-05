import React from "react";
import Grid from "@material-ui/core/Grid";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/core/styles/withStyles";
import userStyles from "./userFormStyles.js";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserView from './UserView';

function defaultTableComponent({
  data,
  columns,
  defaultPageSize,
  loading,
  rest,
  onEditClick,
  onDeleteClick
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
  rest,
  loading,
  classes
}) {

  return (
    <Grid>
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
                          <Button color="secondary" variant="fab" onClick={onAddClick} aria-label="Add">
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
