import React from "react";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { HiExternalLink } from "react-icons/all";

import Padding from "../../hoc/Padding";

const MostVisited = () => {
  return (
    <Paper elevation={0} variant={"outlined"}>
      <Padding>
        <Typography variant={"h6"}>Most Visited Pages</Typography>
      </Padding>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Page Name</TableCell>
              <TableCell>Visitors</TableCell>
              <TableCell>Unique page visits</TableCell>
              <TableCell>Bounce rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <IconButton>
                  <HiExternalLink />
                </IconButton>
                /
              </TableCell>
              <TableCell>95,847</TableCell>
              <TableCell>8,584</TableCell>
              <TableCell>19%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <IconButton>
                  <HiExternalLink />
                </IconButton>
                /authentication/login
              </TableCell>
              <TableCell>12,233</TableCell>
              <TableCell>8,214</TableCell>
              <TableCell>22%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <IconButton>
                  <HiExternalLink />
                </IconButton>
                /dashboard
              </TableCell>
              <TableCell>4,233</TableCell>
              <TableCell>9,325</TableCell>
              <TableCell>48%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <IconButton>
                  <HiExternalLink />
                </IconButton>
                /blog/top-5-react-frameworks
              </TableCell>
              <TableCell>1,93,233</TableCell>
              <TableCell>3,314</TableCell>
              <TableCell>94%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <IconButton>
                  <HiExternalLink />
                </IconButton>
                /blog/understand-programming-principles
              </TableCell>
              <TableCell>12,233</TableCell>
              <TableCell>12,314</TableCell>
              <TableCell>54%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default MostVisited;
