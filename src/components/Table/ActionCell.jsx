import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import tableStyle from './tableStyle';

const ActionCell = ({ actionColumns, classes, rowData }) => {
  let cell = null;
  if (actionColumns.length > 0) {
    cell = (
      <TableCell className={classNames(classes.tableCell, classes.alignCenter)}>
        {actionColumns.map((obj, key) => (
          <Tooltip placement="top" key={key} title={obj.Tooltip}>
            <IconButton onClick={() => obj.Callback(rowData)}>
              <obj.Icon
                className={classNames(
                  classes[`${obj.Color}TableHeader`],
                  classes.tableActionButtonIcon
                )}
              />
            </IconButton>
          </Tooltip>
        ))}
      </TableCell>
    );
  }
  return cell;
};
ActionCell.defaultProps = {
  actionColumns: []
};
ActionCell.propTypes = {
  actionColumns: PropTypes.arrayOf(
    PropTypes.shape({
      Callback: PropTypes.func,
      Icon: PropTypes.any.isRequired,
      Tooltip: PropTypes.string,
      Color: PropTypes.oneOf([
        'warning',
        'primary',
        'danger',
        'success',
        'info',
        'rose',
        'gray'
      ])
    })
  )
};
export default withStyles(tableStyle)(ActionCell);
