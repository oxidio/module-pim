/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

import React from "react";
import {render} from "react-dom";
import Container from "react-bootstrap/Container";
import "@devexpress/dx-react-grid";
import {
    Grid,
    Table,
    TableHeaderRow
} from "@devexpress/dx-react-grid-bootstrap4";

import "./styles.scss";

const node = document.getElementById("app");
render(
    <Container>
        <Grid
            columns={[{name: "id", title: "ID"}, {name: "url", title: "Url"}]}
            rows={JSON.parse(node.dataset.categories)}
        >
            <Table />
            <TableHeaderRow />
        </Grid>
    </Container>,
    node
);
