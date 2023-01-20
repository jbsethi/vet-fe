import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { Box, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@mui/material';

const EntityList = ({ list, columns, isLoading, ...rest }) => {
  const [selectedListItemIds, setSelectedListItemIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedListItemIds;

    if (event.target.checked) {
      newSelectedListItemIds = list.map((item) => item.id);
    } else {
      newSelectedListItemIds = [];
    }

    setSelectedListItemIds(newSelectedListItemIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedListItemIds.indexOf(id);
    let newSelectedListItemIds = [];

    if (selectedIndex === -1) {
      newSelectedListItemIds = newSelectedListItemIds.concat(selectedListItemIds, id);
    } else if (selectedIndex === 0) {
      newSelectedListItemIds = newSelectedListItemIds.concat(selectedListItemIds.slice(1));
    } else if (selectedIndex === selectedListItemIds.length - 1) {
      newSelectedListItemIds = newSelectedListItemIds.concat(selectedListItemIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedListItemIds = newSelectedListItemIds.concat(
        selectedListItemIds.slice(0, selectedIndex),
        selectedListItemIds.slice(selectedIndex + 1)
      );
    }

    setSelectedListItemIds(newSelectedListItemIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  if (!(columns && columns.length > 0)) {
    return (
      <Box>
        <Typography>Error in Table columns</Typography>
      </Box>
    );
  }

  const tableHeaderCheckbox = (
    <TableCell key={'checkbox-cell'} padding="checkbox">
      <Checkbox
        checked={selectedListItemIds.length === list.length}
        color="primary"
        indeterminate={selectedListItemIds.length > 0 && selectedListItemIds.length < list.length}
        onChange={handleSelectAll}
      />
    </TableCell>
  );

  const tableHeaderColumns = [tableHeaderCheckbox].concat(
    columns.map((col, idx) => {
      return <TableCell key={`tablecell-${idx}-${idx * Math.random()}`}>{col.title}</TableCell>;
    })
  );

  const tableBodyContentData = list.slice(0, limit).map((item, rowIdx) => (
    <TableRow hover key={`row-${rowIdx}--id-${item.id}`} selected={selectedListItemIds.indexOf(item.id) !== -1}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectedListItemIds.indexOf(list.id) !== -1}
          onChange={(event) => handleSelectOne(event, list.id)}
          value="true"
        />
      </TableCell>
      {columns.map((col, colIdx) => (
        <TableCell key={`row-${rowIdx}--col-${colIdx}`}>{item[col.id]}</TableCell>
      ))}
    </TableRow>
  ));

  const tableDataEmpty = !isLoading && list.length === 0 && (
    <Box sx={{ textAlign: 'center', py: 3 }}>
      <Typography>No Data found !</Typography>
    </Box>
  );

  const tableDataLoading = isLoading && (
    <Box sx={{ textAlign: 'center' }}>
      <Typography>Loading please wait !</Typography>
    </Box>
  );

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>{tableHeaderColumns}</TableRow>
            </TableHead>
            <TableBody>{tableBodyContentData}</TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {tableDataEmpty}
      {tableDataLoading}
      <TablePagination
        component="div"
        count={list.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

EntityList.propTypes = {
  list: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default EntityList;
