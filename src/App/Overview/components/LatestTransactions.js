import React from "react";
import {
  Box,
  Grid,
  Table,
  Paper,
  TableCell,
  TableBody,
  TableRow,
  Typography,
} from "@material-ui/core";
import Padding from "../../hoc/Padding";
import TextCenter from "../../hoc/TextCenter";
import Inbox from "./Inbox";
import ButtonCapitalize from "../../hoc/ButtonCapitalize";

const LatestTransactions = () => {
  return (
    <Grid container spacing={3} justify="space-between">
      <Grid item xs={12} md={7}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <Box>
              <Typography variant="h6">Latest Transactions</Typography>
            </Box>
          </Padding>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell width={100}>
                  <TextCenter>
                    <Typography variant="h6" color="textSecondary">
                      Mar
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      8
                    </Typography>
                  </TextCenter>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Devias IO</Typography>
                  <Typography variant="body2">Payment received</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography style={{ color: "green" }} variant="body2">
                    + $25,000.00
                  </Typography>
                  <Typography variant="body2">USD</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={100}>
                  <TextCenter>
                    <Typography variant="h6" color="textSecondary">
                      Mar
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      23
                    </Typography>
                  </TextCenter>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Zimbru</Typography>
                  <Typography variant="body2">Payment sent</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography style={{ color: "red" }} variant="body2">
                    + $25,000.00
                  </Typography>
                  <Typography variant="body2">USD</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={100}>
                  <TextCenter>
                    <Typography variant="h6" color="textSecondary">
                      Mar
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      31
                    </Typography>
                  </TextCenter>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Zimbru</Typography>
                  <Typography variant="body2">Payment sent</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography style={{ color: "red" }} variant="body2">
                    - $2,000.00
                  </Typography>
                  <Typography variant="body2">USD</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={100}>
                  <TextCenter>
                    <Typography variant="h6" color="textSecondary">
                      Mar
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      18
                    </Typography>
                  </TextCenter>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Zimbru</Typography>
                  <Typography variant="body2">Payment received</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography style={{ color: "green" }} variant="body2">
                    + $25,000.00
                  </Typography>
                  <Typography variant="body2">USD</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper elevation={0} variant="outlined">
          <Padding>
            <Box>
              <Typography variant="h6">Inbox</Typography>
            </Box>
          </Padding>
          <Inbox />
          <Padding>
            <ButtonCapitalize color="primary">Go to inbox</ButtonCapitalize>
          </Padding>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LatestTransactions;
