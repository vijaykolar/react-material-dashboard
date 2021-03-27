import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

import Padding from "../../hoc/Padding";
import { MdArrowForward } from "react-icons/all";

const Country = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 35px;
    width: 35px;
    margin-right: 8px;
  }
`;

const CountryTable = () => {
  return (
    <Paper elevation={0} variant="outlined">
      <Padding>
        <Typography variant="h6">Keywords by country</Typography>
      </Padding>

      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>Visits</TableCell>
              <TableCell>SEO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Country>
                  <img
                    src="https://www.countryflags.io/US/shiny/64.png"
                    alt="USA"
                  />
                  United States
                </Country>
              </TableCell>
              <TableCell>31,200</TableCell>
              <TableCell>40%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Country>
                  <img
                    src="https://www.countryflags.io/IN/shiny/64.png"
                    alt="India"
                  />
                  India
                </Country>
              </TableCell>
              <TableCell>3,200</TableCell>
              <TableCell>10%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Country>
                  <img
                    src="https://www.countryflags.io/FR/shiny/64.png"
                    alt="France"
                  />
                  France
                </Country>
              </TableCell>
              <TableCell>14,742</TableCell>
              <TableCell>29%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Country>
                  <img
                    src="https://www.countryflags.io/DE/shiny/64.png"
                    alt="Germany"
                  />
                  Germany
                </Country>
              </TableCell>
              <TableCell>54,200</TableCell>
              <TableCell>50%</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Country>
                  <img
                    src="https://www.countryflags.io/IE/shiny/64.png"
                    alt="Ireland"
                  />
                  Ireland
                </Country>
              </TableCell>
              <TableCell>14,742</TableCell>
              <TableCell>29%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Padding>
        <Button
          style={{ textTransform: "initial" }}
          endIcon={<MdArrowForward />}
          color={"primary"}
        >
          See all
        </Button>
      </Padding>
    </Paper>
  );
};

export default CountryTable;
