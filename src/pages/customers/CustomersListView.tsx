import React, { useCallback, useEffect, useState } from 'react'
import { Translate } from '@iteria-app/component-templates'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowParams,
  GridSortModel,
  GridToolbarContainer,
  MuiEvent,
} from '@mui/x-data-grid'
import { Button, Grid, LinearProgress } from '@mui/material'
import {
  TablePagination,
  SelectPerPage,
  controlNextButton,
  controlSiblings,
  filterDataGrid,
  sortQueryFromGridData,
  IFilterState,
} from '@iteria-app/component-templates'
import { Add } from '@mui/icons-material'
export interface IFilterQuery {
  limit: number
  offset: number
  order_by: GridSortModel
}
export interface ICustomersTableProps {
  onClickRow?: (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
    details?: any
  ) => void
  onChangeFilter?: (state: Partial<IFilterState>) => void
  data: any
  filter?: IFilterQuery
  onChangePage: (state: number) => void
  onPageSize: (state: number) => void
  onSort: (state: object) => void
  onFilter: (state: object | undefined) => void
  offset: number
  page: number
  pageSize: number
  countRows: number
  setCountToRows: (state: number) => void
  onDeleteRow?: (value: any) => void
  onClickCreate?: () => void
  loading: boolean
  error: any
}
const CustomersListView: React.FC<ICustomersTableProps> = (
  props: ICustomersTableProps
) => {
  const intl = useIntl()
  const navigate = useNavigate()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  const {
    onChangePage,
    onPageSize,
    setCountToRows,
    countRows,
    pageSize,
    page,
    onFilter,
    onSort,
    loading,
    error,
  } = props
  useEffect(() => {
    if (!props?.data?.fetching) {
      controlNextButton({
        data: props?.data?.customers ?? [],
        countRows: countRows,
        hideNextButton: hideNextButton,
        setCountToRows: setCountToRows,
        setHideNextButton: setHideNextButton,
        page: page,
        pageSize: pageSize,
      })
      controlSiblings(
        props?.data?.customers ?? [],
        pageSize,
        page,
        setSiblingCount
      )
    }
  }, [props?.data?.customers])
  const columns: GridColDef[] = [
    {
      field: 'customers.name',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="name"
          defaultMessage="Name"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => params.row.name,
    },
    {
      field: 'customers.address',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="address"
          defaultMessage="Address"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => params.row.address,
    },
    {
      field: 'customers.email',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="email"
          defaultMessage="Email"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => params.row.email,
    },
    {
      field: 'customers.firstName',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="firstName"
          defaultMessage="FirstName"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => params.row.firstName,
    },
    {
      field: 'customers.lastName',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="lastName"
          defaultMessage="LastName"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => params.row.lastName,
    },
    {
      field: 'customers.phone',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="phone"
          defaultMessage="Phone"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => params.row.phone,
    },
    {
      field: 'customers.createdAt',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="createdAt"
          defaultMessage="CreatedAt"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) =>
        `${intl.formatDate(params.row.createdAt)}, ${intl.formatTime(
          params.row.createdAt
        )}`,
    },
    {
      field: 'customers.updatedAt',
      renderHeader: () => (
        <Translate
          entityName="customers"
          fieldName="updatedAt"
          defaultMessage="UpdatedAt"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) =>
        `${intl.formatDate(params.row.updatedAt)}, ${intl.formatTime(
          params.row.updatedAt
        )}`,
    },
  ]
  const handlePage = (event: any, newPage: number) => {
    onChangePage(newPage)
  }
  const handlePageSize = (event: any) => {
    onPageSize(event.target.value)
    onChangePage(1)
  }
  const handleFilter = useCallback(
    (filter) => {
      onFilter(filterDataGrid(filter, columns))
      onChangePage(1)
    },
    [onFilter, handlePage]
  )
  const handleSort = (sort: GridSortModel) => {
    const tmp = sort.map((item) => {
      const splitted = item.field.split('.')
      splitted.shift()
      return {
        field: splitted.join('.'),
        sort: item.sort,
      }
    })
    onSort(sortQueryFromGridData(tmp))
  }
  return (
    <DataGrid
      rows={props?.data?.customers ?? []}
      columns={columns}
      loading={loading}
      hideFooterPagination
      autoHeight={true}
      error={error}
      sortingMode="server"
      filterMode="server"
      onSortModelChange={handleSort}
      onFilterModelChange={handleFilter}
      onRowClick={(props) => {
        return navigate(props.id.toString())
      }}
      components={{
        LoadingOverlay: LinearProgress,
        Toolbar: () => {
          return (
            <GridToolbarContainer>
              <Button
                startIcon={<Add />}
                color="primary"
                variant="contained"
                onClick={() => navigate('create')}
              >
                <Translate entityName="Create" />
              </Button>
            </GridToolbarContainer>
          )
        },
        Footer: () => (
          <Grid container>
            <TablePagination
              countRows={countRows}
              page={page}
              handlePage={handlePage}
              siblingCount={siblingCount}
              hideNextButton={hideNextButton}
            />
            <SelectPerPage
              pageSize={pageSize}
              handlePageSize={handlePageSize}
            />
          </Grid>
        ),
      }}
    />
  )
}
export default CustomersListView
