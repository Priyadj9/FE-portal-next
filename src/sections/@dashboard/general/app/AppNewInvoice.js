import React, { useState, useEffect, useMemo } from 'react';
import { sentenceCase } from 'change-case';
import { Container, Pagination, TablePagination } from '@mui/material';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, Switch } from '@mui/material';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  IconButton,
  TableContainer,
} from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// _mock_
import { _appInvoices } from '../../../../_mock';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
import MenuPopover from '../../../../components/MenuPopover';
// import Pagination from '../../../../Pagination';
import styles from '../../../../pages/pagination.module.scss';
// C:\Users\hp world\Documents\Portal\FE-portal-next\src\Pagination.js
//src\Pagination.js

// ----------------------------------------------------------------------
let PageSize = 10;

export default function AppNewInvoice(props) {
  const [arr, setArr] = useState(_appInvoices);
  const term = props.searchTerm;

  useEffect(() => setArr(_appInvoices.filter((inv) => inv.promocodes.includes(term) === true)), [term]);
  // console.log(arr);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return arr.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const theme = useTheme();

  return (
    <Card>
      <CardHeader sx={{ mb: 3 }} />

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S No</TableCell>
                <TableCell>Promo Code</TableCell>
                <TableCell>Count</TableCell>
                <TableCell>Count Per User</TableCell>
                <TableCell>Promo Code Id</TableCell>
                <TableCell>Discount Type</TableCell>
                <TableCell>Discount</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {arr.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{<Checkbox />}</TableCell>
                  <TableCell>
                    {`New `}
                    {row.promocodes}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>{<Switch defaultChecked />}</TableCell>
                  {/* <TableCell>{fCurrency(row.price)}</TableCell> */}
                  {/* <TableCell>
                    <Label
                      variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                      color={
                        (row.status === 'in_progress' && 'warning') ||
                        (row.status === 'out_of_date' && 'error') ||
                        'success'
                      }
                    >
                      {sentenceCase(row.status)}
                    </Label>
                  </TableCell> */}
                  {/* <TableCell align="right">
                    <MoreMenuButton />
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        {/* <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View All
        </Button> */}
      </Box>
      {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={arr.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
      <Pagination size="large" count={5} />
    </Card>
  );
}

// ----------------------------------------------------------------------

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

function MoreMenuButton() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:download-fill'} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:printer-fill'} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:share-fill'} sx={{ ...ICON }} />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
