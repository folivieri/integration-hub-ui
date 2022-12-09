import * as React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import DoneIcon from '@mui/icons-material/Done';
import ReportIcon from '@mui/icons-material/Report';
import { pink, green } from '@mui/material/colors';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

const FieldRenderer = ({ success }) => {

    return (
        <div className="d-flex justify-content-between align-items-center">
            {success === true ? <DoneIcon sx={{ color: green[500] }} /> : 

            <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">Error Message</Typography>
                    <u>{'400 Bad Request: "{"error":"invalid_client_id","error_description":"The passed in client_id is invalid \"null\""}".'}</u>.{' '}
                </React.Fragment>
            }
            >            
            <ReportIcon sx={{ color: pink[500] }}/>
            </HtmlTooltip>
             }
        </div>
    )
};

const columns = [
    { field: 'type', headerName: 'Integration Type', align: "left", width: "200" },
    { field: 'date', headerName: 'Timestamp', align: "left", width: "180" },
    { field: 'info', headerName: 'Info', align: "center",
    renderCell: (params) => {
        return (
            <FieldRenderer success={params.row.info} />
        );
    } },
    { field: 'external', headerName: 'External', align: "center",
    renderCell: (params) => {
        return (
            <FieldRenderer success={params.row.external} />
        );
    } },
    { field: 'internal', headerName: 'Internal', align: "center",
    renderCell: (params) => {
        return (
            <FieldRenderer success={params.row.internal} />
        );
    } },
    { field: 'transform', headerName: 'Transform', align: "center",
    renderCell: (params) => {
        return (
            <FieldRenderer success={params.row.transform} />
        );
    } },
    { field: 'reconcile', headerName: 'Reconcile', align: "center",
        renderCell: (params) => {
            return (
                <FieldRenderer success={params.row.reconcile} />
            );
        } },
    { field: 'sync', headerName: 'Sync', align: "center",
        renderCell: (params) => {
            return (
                <FieldRenderer success={params.row.sync} />
            );
        } },
    { field: 'mods', headerName: 'Modifications', align: "center" },
    { field: 'adds', headerName: 'Added', align: "center" },
    // { field: 'dels', headerName: 'Deletions', align: "center" },
];

const lmsRows = [
    { id:1234, type: 'offices.activity', date: '2022-11-01T02:00:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 2, adds: 4, dels: 0 },
    { id:4564, type: 'offices.courses', date: '2022-11-26T13:33:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 0, adds: 2, dels: 1 },
    { id:6784, type: 'offices.courses', date: '2022-11-28T13:33:00Z', info: true, external: true, internal: true, transform: true, reconcile: false },
    { id:2344, type: 'offices.activity', date: '2022-11-13T02:00:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 0, adds: 1, dels: 0 },
];

const rows = [
    { id:123, type: 'Departments', date: '2022-11-01T02:00:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 2, adds: 4, dels: 0 },
    { id:234, type: 'Departments', date: '2022-11-13T02:00:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 0, adds: 1, dels: 0 },
    { id:345, type: 'Departments', date: '2022-11-25T02:0:00Z', info: true, external: true, internal: true, transform: false },
    { id:456, type: 'Locations', date: '2022-11-26T13:33:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 0, adds: 2, dels: 1 },
    { id:567, type: 'Locations', date: '2022-11-27T13:33:00Z', info: true, external: true, internal: true, transform: true, reconcile: true, sync: true, mods: 1, adds: 1, dels: 14 },
    { id:678, type: 'Locations', date: '2022-11-28T13:33:00Z', info: true, external: true, internal: true, transform: true, reconcile: false },
];

export default function HistoryTable(props) {
    const { partner } = useParams();
    return (
        <TableContainer component={Paper}  elevation={6} >
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={ partner === 'wd' ? rows : lmsRows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
        </TableContainer>
    );
}