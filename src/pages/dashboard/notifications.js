// @mui
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Container, Grid } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
// sections
import {
  EcommerceWelcome,
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../sections/@dashboard/general/e-commerce';

// ----------------------------------------------------------------------

GeneralEcommerce.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: E-commerce">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          direction="column"
          container
          spacing={3}
        >
          <h1 style={{ margin: '40px' }}>Flam Firebase Admin Panel</h1>
          <TextField style={{ width: '50%', margin: '20px' }} id="outlined-required" label="Title" />
          <TextField style={{ width: '50%', margin: '20px' }} id="outlined-required" label="Description" />
          <TextField style={{ width: '50%', margin: '20px' }} id="outlined-required" label="Image Url" />
          <TextField style={{ width: '50%', margin: '20px' }} id="outlined-required" label="Auth Token" />

          <TextField
            style={{ width: '50%', margin: '20px' }}
            helperText="Add this (â˜ï¸) as a uuid4 and save it in excel"
            id="outlined-required"
            label="Notification Id"
          />

          <TextField
            style={{ width: '50%', margin: '20px' }}
            helperText="Scene to load is where to redirect in the app not like redirection. Caution: if you add the redirection url it will be overridden so add a single thing"
            id="outlined-required"
            label="Scene To Load"
          />
          <TextField
            style={{ width: '50%', margin: '40px' }}
            id="outlined-multiline-flexible"
            label="Redirection"
            multiline
            maxRows={4}
          />

          <div
            style={{
              height: 250,
              width: 500,
              textAlign: 'center',
              padding: '15px',
              margin: '20px',
              border: '1px dashed grey',
              borderRadius: '10px',
            }}
          >
            <p>Drop file here or click to upload</p>
          </div>
          {/* <TextField
            style={{ width: '50%', margin: '20px' }}
            disabled
            id="outlined-disabled"
            defaultValue="Upload Csv with either only tokens or if there are multiple column then add fcm_token to the header for
            where fcm_token needed to be fetched"
          /> */}
          <TextField
            style={{ width: '50%', margin: '20px' }}
            id="standard-multiline-static"
            disabled
            multiline
            rows={2}
            InputProps={{ disableUnderline: true }}
            defaultValue="Upload Csv with either only tokens or if there are multiple column then add fcm_token to the header for
            where fcm_token needed to be fetched"
            variant="standard"
          />
        </Grid>

        {/* <Grid item xs={12} md={8}>
            <EcommerceWelcome />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceNewProducts />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Product Sold"
              percent={2.6}
              total={765}
              chartColor={theme.palette.primary.main}
              chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Total Balance"
              percent={-0.1}
              total={18765}
              chartColor={theme.palette.chart.green[0]}
              chartData={[56, 47, 40, 62, 73, 30, 23, 54, 67, 68]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Sales Profit"
              percent={0.6}
              total={4876}
              chartColor={theme.palette.chart.red[0]}
              chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender />
          </Grid> */}

        {/* <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales />
            
          </Grid> */}

        {/* <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceCurrentBalance />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceBestSalesman />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts />
          </Grid> */}
      </Container>
    </Page>
  );
}
