import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  money: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  phone?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "customers" */
  deleteCustomer?: Maybe<Customers>;
  /** delete data from the table: "customers" */
  deleteCustomers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "orders" */
  deleteOrder?: Maybe<Orders>;
  /** delete single row from the table: "order_items" */
  deleteOrderItem?: Maybe<OrderItems>;
  /** delete data from the table: "order_items" */
  deleteOrderItems?: Maybe<OrderItems_Mutation_Response>;
  /** delete data from the table: "orders" */
  deleteOrders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "products" */
  deleteProduct?: Maybe<Products>;
  /** delete data from the table: "products" */
  deleteProducts?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insertCustomer?: Maybe<Customers>;
  /** insert data into the table: "customers" */
  insertCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insertOrder?: Maybe<Orders>;
  /** insert a single row into the table: "order_items" */
  insertOrderItem?: Maybe<OrderItems>;
  /** insert data into the table: "order_items" */
  insertOrderItems?: Maybe<OrderItems_Mutation_Response>;
  /** insert data into the table: "orders" */
  insertOrders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insertProduct?: Maybe<Products>;
  /** insert data into the table: "products" */
  insertProducts?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "customers" */
  updateCustomer?: Maybe<Customers>;
  /** update data of the table: "customers" */
  updateCustomers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "orders" */
  updateOrder?: Maybe<Orders>;
  /** update single row of the table: "order_items" */
  updateOrderItem?: Maybe<OrderItems>;
  /** update data of the table: "order_items" */
  updateOrderItems?: Maybe<OrderItems_Mutation_Response>;
  /** update data of the table: "orders" */
  updateOrders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "products" */
  updateProduct?: Maybe<Products>;
  /** update data of the table: "products" */
  updateProducts?: Maybe<Products_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDeleteCustomerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrderItemArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrderItemsArgs = {
  where: OrderItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteProductArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsertCustomerArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderItemArgs = {
  object: OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderItemsArgs = {
  objects: Array<OrderItems_Insert_Input>;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertProductArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateCustomerArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrderArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrderItemArgs = {
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  _set?: InputMaybe<OrderItems_Set_Input>;
  pk_columns: OrderItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrderItemsArgs = {
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  _set?: InputMaybe<OrderItems_Set_Input>;
  where: OrderItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateProductArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};

/** columns and relationships of "order_items" */
export type OrderItems = {
  __typename?: 'orderItems';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  order: Orders;
  ordersId: Scalars['uuid'];
  price: Scalars['money'];
  /** An object relationship */
  product: Products;
  productId: Scalars['uuid'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "order_items" */
export type OrderItems_Aggregate = {
  __typename?: 'orderItems_aggregate';
  aggregate?: Maybe<OrderItems_Aggregate_Fields>;
  nodes: Array<OrderItems>;
};

/** aggregate fields of "order_items" */
export type OrderItems_Aggregate_Fields = {
  __typename?: 'orderItems_aggregate_fields';
  avg?: Maybe<OrderItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<OrderItems_Max_Fields>;
  min?: Maybe<OrderItems_Min_Fields>;
  stddev?: Maybe<OrderItems_Stddev_Fields>;
  stddev_pop?: Maybe<OrderItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<OrderItems_Stddev_Samp_Fields>;
  sum?: Maybe<OrderItems_Sum_Fields>;
  var_pop?: Maybe<OrderItems_Var_Pop_Fields>;
  var_samp?: Maybe<OrderItems_Var_Samp_Fields>;
  variance?: Maybe<OrderItems_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type OrderItems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrderItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_items" */
export type OrderItems_Aggregate_Order_By = {
  avg?: InputMaybe<OrderItems_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<OrderItems_Max_Order_By>;
  min?: InputMaybe<OrderItems_Min_Order_By>;
  stddev?: InputMaybe<OrderItems_Stddev_Order_By>;
  stddev_pop?: InputMaybe<OrderItems_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<OrderItems_Stddev_Samp_Order_By>;
  sum?: InputMaybe<OrderItems_Sum_Order_By>;
  var_pop?: InputMaybe<OrderItems_Var_Pop_Order_By>;
  var_samp?: InputMaybe<OrderItems_Var_Samp_Order_By>;
  variance?: InputMaybe<OrderItems_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type OrderItems_Arr_Rel_Insert_Input = {
  data: Array<OrderItems_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};

/** aggregate avg on columns */
export type OrderItems_Avg_Fields = {
  __typename?: 'orderItems_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_items" */
export type OrderItems_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type OrderItems_Bool_Exp = {
  _and?: InputMaybe<Array<OrderItems_Bool_Exp>>;
  _not?: InputMaybe<OrderItems_Bool_Exp>;
  _or?: InputMaybe<Array<OrderItems_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  ordersId?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  productId?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum OrderItems_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type OrderItems_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_items" */
export type OrderItems_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  ordersId?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  productId?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OrderItems_Max_Fields = {
  __typename?: 'orderItems_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ordersId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  productId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_items" */
export type OrderItems_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ordersId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type OrderItems_Min_Fields = {
  __typename?: 'orderItems_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ordersId?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  productId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_items" */
export type OrderItems_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ordersId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type OrderItems_Mutation_Response = {
  __typename?: 'orderItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderItems>;
};

/** on_conflict condition type for table "order_items" */
export type OrderItems_On_Conflict = {
  constraint: OrderItems_Constraint;
  update_columns?: Array<OrderItems_Update_Column>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type OrderItems_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  ordersId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orderItems */
export type OrderItems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_items" */
export enum OrderItems_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrdersId = 'ordersId',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "order_items" */
export type OrderItems_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  ordersId?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  productId?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type OrderItems_Stddev_Fields = {
  __typename?: 'orderItems_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_items" */
export type OrderItems_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type OrderItems_Stddev_Pop_Fields = {
  __typename?: 'orderItems_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type OrderItems_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type OrderItems_Stddev_Samp_Fields = {
  __typename?: 'orderItems_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type OrderItems_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type OrderItems_Sum_Fields = {
  __typename?: 'orderItems_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_items" */
export type OrderItems_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_items" */
export enum OrderItems_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrdersId = 'ordersId',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type OrderItems_Var_Pop_Fields = {
  __typename?: 'orderItems_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_items" */
export type OrderItems_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type OrderItems_Var_Samp_Fields = {
  __typename?: 'orderItems_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_items" */
export type OrderItems_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type OrderItems_Variance_Fields = {
  __typename?: 'orderItems_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_items" */
export type OrderItems_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customers;
  customerId: Scalars['uuid'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  orderDate: Scalars['date'];
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** An aggregate relationship */
  orderItems_aggregate: OrderItems_Aggregate;
  orderStatus: Scalars['String'];
  shippedDate: Scalars['date'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "orders" */
export type OrdersOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customerId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderDate?: InputMaybe<Date_Comparison_Exp>;
  orderItems?: InputMaybe<OrderItems_Bool_Exp>;
  orderStatus?: InputMaybe<String_Comparison_Exp>;
  shippedDate?: InputMaybe<Date_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customerId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['date']>;
  orderItems?: InputMaybe<OrderItems_Arr_Rel_Insert_Input>;
  orderStatus?: InputMaybe<Scalars['String']>;
  shippedDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  customerId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['date']>;
  orderStatus?: Maybe<Scalars['String']>;
  shippedDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  customerId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['date']>;
  orderStatus?: Maybe<Scalars['String']>;
  shippedDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customers_Order_By>;
  customerId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderDate?: InputMaybe<Order_By>;
  orderItems_aggregate?: InputMaybe<OrderItems_Aggregate_Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  shippedDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderDate = 'orderDate',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  ShippedDate = 'shippedDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customerId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderDate?: InputMaybe<Scalars['date']>;
  orderStatus?: InputMaybe<Scalars['String']>;
  shippedDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderDate = 'orderDate',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  ShippedDate = 'shippedDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** An aggregate relationship */
  orderItems_aggregate: OrderItems_Aggregate;
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "products" */
export type ProductsOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrderItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderItems?: InputMaybe<OrderItems_Bool_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderItems?: InputMaybe<OrderItems_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderItems_aggregate?: InputMaybe<OrderItems_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  order?: Maybe<Orders>;
  /** fetch data from the table: "order_items" using primary key columns */
  orderItem?: Maybe<OrderItems>;
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** fetch aggregated fields from the table: "order_items" */
  orderItemsAggregate: OrderItems_Aggregate;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  ordersAggregate: Orders_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  product?: Maybe<Products>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  productsAggregate: Products_Aggregate;
};


export type Query_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootOrderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrderItemArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Query_RootOrderItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrdersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootProductArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProductsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  order?: Maybe<Orders>;
  /** fetch data from the table: "order_items" using primary key columns */
  orderItem?: Maybe<OrderItems>;
  /** An array relationship */
  orderItems: Array<OrderItems>;
  /** fetch aggregated fields from the table: "order_items" */
  orderItemsAggregate: OrderItems_Aggregate;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  ordersAggregate: Orders_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  product?: Maybe<Products>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  productsAggregate: Products_Aggregate;
};


export type Subscription_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrderItemArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Subscription_RootOrderItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrdersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProductsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type OrderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type OrderQuery = { __typename?: 'query_root', order?: { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any } | null };

export type OrdersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any }> };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteOrderMutation = { __typename?: 'mutation_root', deleteOrder?: { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any } | null };

export type DeleteOrdersMutationVariables = Exact<{
  where: Orders_Bool_Exp;
}>;


export type DeleteOrdersMutation = { __typename?: 'mutation_root', deleteOrders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', createdAt: any, customerId: any, id: any, isDeleted: boolean, name: string, orderDate: any, orderStatus: string, shippedDate: any, updatedAt: any }> } | null };

export type InsertOrderMutationVariables = Exact<{
  orders: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type InsertOrderMutation = { __typename?: 'mutation_root', insertOrder?: { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any } | null };

export type InsertOrdersMutationVariables = Exact<{
  orders: Array<Orders_Insert_Input> | Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type InsertOrdersMutation = { __typename?: 'mutation_root', insertOrders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', createdAt: any, customerId: any, id: any, isDeleted: boolean, name: string, orderDate: any, orderStatus: string, shippedDate: any, updatedAt: any }> } | null };

export type UpdateOrderMutationVariables = Exact<{
  orders?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
}>;


export type UpdateOrderMutation = { __typename?: 'mutation_root', updateOrder?: { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any } | null };

export type UpdateOrdersMutationVariables = Exact<{
  orders?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
}>;


export type UpdateOrdersMutation = { __typename?: 'mutation_root', updateOrders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', createdAt: any, customerId: any, id: any, isDeleted: boolean, name: string, orderDate: any, orderStatus: string, shippedDate: any, updatedAt: any }> } | null };

export type Order_OrdersFragment = { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any };

export type Orders_OrdersFragment = { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any };

export type DeleteOrder_OrdersFragment = { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any };

export type DeleteOrders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', createdAt: any, customerId: any, id: any, isDeleted: boolean, name: string, orderDate: any, orderStatus: string, shippedDate: any, updatedAt: any }> };

export type InsertOrder_OrdersFragment = { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any };

export type InsertOrders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', createdAt: any, customerId: any, id: any, isDeleted: boolean, name: string, orderDate: any, orderStatus: string, shippedDate: any, updatedAt: any }> };

export type UpdateOrder_OrdersFragment = { __typename?: 'orders', id: any, name: string, orderStatus: string, createdAt: any, orderDate: any, shippedDate: any, updatedAt: any };

export type UpdateOrders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', createdAt: any, customerId: any, id: any, isDeleted: boolean, name: string, orderDate: any, orderStatus: string, shippedDate: any, updatedAt: any }> };

export type ProductQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProductQuery = { __typename?: 'query_root', product?: { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type ProductsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Products_Select_Column> | Products_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
  where?: InputMaybe<Products_Bool_Exp>;
}>;


export type ProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any, price: number, quantity: number }> };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProductMutation = { __typename?: 'mutation_root', deleteProduct?: { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type DeleteProductsMutationVariables = Exact<{
  where: Products_Bool_Exp;
}>;


export type DeleteProductsMutation = { __typename?: 'mutation_root', deleteProducts?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', createdAt: any, id: any, isDeleted: boolean, name: string, price: number, quantity: number, updatedAt: any }> } | null };

export type InsertProductMutationVariables = Exact<{
  products: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
}>;


export type InsertProductMutation = { __typename?: 'mutation_root', insertProduct?: { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type InsertProductsMutationVariables = Exact<{
  products: Array<Products_Insert_Input> | Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
}>;


export type InsertProductsMutation = { __typename?: 'mutation_root', insertProducts?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', createdAt: any, id: any, isDeleted: boolean, name: string, price: number, quantity: number, updatedAt: any }> } | null };

export type UpdateProductMutationVariables = Exact<{
  _inc?: InputMaybe<Products_Inc_Input>;
  products?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
}>;


export type UpdateProductMutation = { __typename?: 'mutation_root', updateProduct?: { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type UpdateProductsMutationVariables = Exact<{
  _inc?: InputMaybe<Products_Inc_Input>;
  products?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
}>;


export type UpdateProductsMutation = { __typename?: 'mutation_root', updateProducts?: { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', createdAt: any, id: any, isDeleted: boolean, name: string, price: number, quantity: number, updatedAt: any }> } | null };

export type Product_ProductsFragment = { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any };

export type Products_ProductsFragment = { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any, price: number, quantity: number };

export type DeleteProduct_ProductsFragment = { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any };

export type DeleteProducts_Products_Mutation_ResponseFragment = { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', createdAt: any, id: any, isDeleted: boolean, name: string, price: number, quantity: number, updatedAt: any }> };

export type InsertProduct_ProductsFragment = { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any };

export type InsertProducts_Products_Mutation_ResponseFragment = { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', createdAt: any, id: any, isDeleted: boolean, name: string, price: number, quantity: number, updatedAt: any }> };

export type UpdateProduct_ProductsFragment = { __typename?: 'products', id: any, name: string, createdAt: any, updatedAt: any };

export type UpdateProducts_Products_Mutation_ResponseFragment = { __typename?: 'products_mutation_response', returning: Array<{ __typename?: 'products', createdAt: any, id: any, isDeleted: boolean, name: string, price: number, quantity: number, updatedAt: any }> };

export type OrderItemQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type OrderItemQuery = { __typename?: 'query_root', orderItem?: { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any, quantity: number, price: any } | null };

export type OrderItemsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column> | OrderItems_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By> | OrderItems_Order_By>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
}>;


export type OrderItemsQuery = { __typename?: 'query_root', orderItems: Array<{ __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any, quantity: number, price: any }> };

export type DeleteOrderItemMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteOrderItemMutation = { __typename?: 'mutation_root', deleteOrderItem?: { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type DeleteOrderItemsMutationVariables = Exact<{
  where: OrderItems_Bool_Exp;
}>;


export type DeleteOrderItemsMutation = { __typename?: 'mutation_root', deleteOrderItems?: { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', createdAt: any, id: any, isDeleted: boolean, name: string, ordersId: any, price: any, productId: any, quantity: number, updatedAt: any }> } | null };

export type InsertOrderItemMutationVariables = Exact<{
  orderItems: OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
}>;


export type InsertOrderItemMutation = { __typename?: 'mutation_root', insertOrderItem?: { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type InsertOrderItemsMutationVariables = Exact<{
  orderItems: Array<OrderItems_Insert_Input> | OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
}>;


export type InsertOrderItemsMutation = { __typename?: 'mutation_root', insertOrderItems?: { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', createdAt: any, id: any, isDeleted: boolean, name: string, ordersId: any, price: any, productId: any, quantity: number, updatedAt: any }> } | null };

export type UpdateOrderItemMutationVariables = Exact<{
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  orderItems?: InputMaybe<OrderItems_Set_Input>;
  pk_columns: OrderItems_Pk_Columns_Input;
}>;


export type UpdateOrderItemMutation = { __typename?: 'mutation_root', updateOrderItem?: { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any } | null };

export type UpdateOrderItemsMutationVariables = Exact<{
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  orderItems?: InputMaybe<OrderItems_Set_Input>;
  where: OrderItems_Bool_Exp;
}>;


export type UpdateOrderItemsMutation = { __typename?: 'mutation_root', updateOrderItems?: { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', createdAt: any, id: any, isDeleted: boolean, name: string, ordersId: any, price: any, productId: any, quantity: number, updatedAt: any }> } | null };

export type OrderItem_OrderItemsFragment = { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any, quantity: number, price: any };

export type OrderItems_OrderItemsFragment = { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any, quantity: number, price: any };

export type DeleteOrderItem_OrderItemsFragment = { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any };

export type DeleteOrderItems_OrderItems_Mutation_ResponseFragment = { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', createdAt: any, id: any, isDeleted: boolean, name: string, ordersId: any, price: any, productId: any, quantity: number, updatedAt: any }> };

export type InsertOrderItem_OrderItemsFragment = { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any };

export type InsertOrderItems_OrderItems_Mutation_ResponseFragment = { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', createdAt: any, id: any, isDeleted: boolean, name: string, ordersId: any, price: any, productId: any, quantity: number, updatedAt: any }> };

export type UpdateOrderItem_OrderItemsFragment = { __typename?: 'orderItems', id: any, name: string, createdAt: any, updatedAt: any };

export type UpdateOrderItems_OrderItems_Mutation_ResponseFragment = { __typename?: 'orderItems_mutation_response', returning: Array<{ __typename?: 'orderItems', createdAt: any, id: any, isDeleted: boolean, name: string, ordersId: any, price: any, productId: any, quantity: number, updatedAt: any }> };

export type CustomerQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type CustomerQuery = { __typename?: 'query_root', customer?: { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any, orders: Array<{ __typename?: 'orders', orderDate: any, id: any, orderStatus: string, shippedDate: any }> } | null };

export type CustomersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any }> };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCustomerMutation = { __typename?: 'mutation_root', deleteCustomer?: { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any } | null };

export type DeleteCustomersMutationVariables = Exact<{
  where: Customers_Bool_Exp;
}>;


export type DeleteCustomersMutation = { __typename?: 'mutation_root', deleteCustomers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, createdAt: any, email?: string | null, firstName?: string | null, id: any, isDeleted: boolean, lastName?: string | null, name: string, phone?: string | null, updatedAt: any }> } | null };

export type InsertCustomerMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type InsertCustomerMutation = { __typename?: 'mutation_root', insertCustomer?: { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any } | null };

export type InsertCustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type InsertCustomersMutation = { __typename?: 'mutation_root', insertCustomers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, createdAt: any, email?: string | null, firstName?: string | null, id: any, isDeleted: boolean, lastName?: string | null, name: string, phone?: string | null, updatedAt: any }> } | null };

export type UpdateCustomerMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type UpdateCustomerMutation = { __typename?: 'mutation_root', updateCustomer?: { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any } | null };

export type UpdateCustomersMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type UpdateCustomersMutation = { __typename?: 'mutation_root', updateCustomers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, createdAt: any, email?: string | null, firstName?: string | null, id: any, isDeleted: boolean, lastName?: string | null, name: string, phone?: string | null, updatedAt: any }> } | null };

export type Customer_CustomersFragment = { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any };

export type Customers_CustomersFragment = { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any };

export type DeleteCustomer_CustomersFragment = { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any };

export type DeleteCustomers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, createdAt: any, email?: string | null, firstName?: string | null, id: any, isDeleted: boolean, lastName?: string | null, name: string, phone?: string | null, updatedAt: any }> };

export type InsertCustomer_CustomersFragment = { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any };

export type InsertCustomers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, createdAt: any, email?: string | null, firstName?: string | null, id: any, isDeleted: boolean, lastName?: string | null, name: string, phone?: string | null, updatedAt: any }> };

export type UpdateCustomer_CustomersFragment = { __typename?: 'customers', id: any, name: string, address?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, createdAt: any, updatedAt: any };

export type UpdateCustomers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', address?: string | null, createdAt: any, email?: string | null, firstName?: string | null, id: any, isDeleted: boolean, lastName?: string | null, name: string, phone?: string | null, updatedAt: any }> };

export type Customer_OrdersFragment = { __typename?: 'orders', orderDate: any, id: any, orderStatus: string, shippedDate: any };

export const Order_OrdersFragmentDoc = gql`
    fragment order_orders on orders {
  id
  name
  orderStatus
  createdAt
  orderDate
  shippedDate
  updatedAt
}
    `;
export const Orders_OrdersFragmentDoc = gql`
    fragment orders_orders on orders {
  id
  name
  orderStatus
  createdAt
  orderDate
  shippedDate
  updatedAt
}
    `;
export const DeleteOrder_OrdersFragmentDoc = gql`
    fragment deleteOrder_orders on orders {
  id
  name
  orderStatus
  createdAt
  orderDate
  shippedDate
  updatedAt
}
    `;
export const DeleteOrders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment deleteOrders_orders_mutation_response on orders_mutation_response {
  returning {
    createdAt
    customerId
    id
    isDeleted
    name
    orderDate
    orderStatus
    shippedDate
    updatedAt
  }
}
    `;
export const InsertOrder_OrdersFragmentDoc = gql`
    fragment insertOrder_orders on orders {
  id
  name
  orderStatus
  createdAt
  orderDate
  shippedDate
  updatedAt
}
    `;
export const InsertOrders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment insertOrders_orders_mutation_response on orders_mutation_response {
  returning {
    createdAt
    customerId
    id
    isDeleted
    name
    orderDate
    orderStatus
    shippedDate
    updatedAt
  }
}
    `;
export const UpdateOrder_OrdersFragmentDoc = gql`
    fragment updateOrder_orders on orders {
  id
  name
  orderStatus
  createdAt
  orderDate
  shippedDate
  updatedAt
}
    `;
export const UpdateOrders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment updateOrders_orders_mutation_response on orders_mutation_response {
  returning {
    createdAt
    customerId
    id
    isDeleted
    name
    orderDate
    orderStatus
    shippedDate
    updatedAt
  }
}
    `;
export const Product_ProductsFragmentDoc = gql`
    fragment product_products on products {
  id
  name
  createdAt
  updatedAt
}
    `;
export const Products_ProductsFragmentDoc = gql`
    fragment products_products on products {
  id
  name
  createdAt
  updatedAt
  price
  quantity
}
    `;
export const DeleteProduct_ProductsFragmentDoc = gql`
    fragment deleteProduct_products on products {
  id
  name
  createdAt
  updatedAt
}
    `;
export const DeleteProducts_Products_Mutation_ResponseFragmentDoc = gql`
    fragment deleteProducts_products_mutation_response on products_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    price
    quantity
    updatedAt
  }
}
    `;
export const InsertProduct_ProductsFragmentDoc = gql`
    fragment insertProduct_products on products {
  id
  name
  createdAt
  updatedAt
}
    `;
export const InsertProducts_Products_Mutation_ResponseFragmentDoc = gql`
    fragment insertProducts_products_mutation_response on products_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    price
    quantity
    updatedAt
  }
}
    `;
export const UpdateProduct_ProductsFragmentDoc = gql`
    fragment updateProduct_products on products {
  id
  name
  createdAt
  updatedAt
}
    `;
export const UpdateProducts_Products_Mutation_ResponseFragmentDoc = gql`
    fragment updateProducts_products_mutation_response on products_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    price
    quantity
    updatedAt
  }
}
    `;
export const OrderItem_OrderItemsFragmentDoc = gql`
    fragment orderItem_orderItems on orderItems {
  id
  name
  createdAt
  updatedAt
  quantity
  price
}
    `;
export const OrderItems_OrderItemsFragmentDoc = gql`
    fragment orderItems_orderItems on orderItems {
  id
  name
  createdAt
  updatedAt
  quantity
  price
}
    `;
export const DeleteOrderItem_OrderItemsFragmentDoc = gql`
    fragment deleteOrderItem_orderItems on orderItems {
  id
  name
  createdAt
  updatedAt
}
    `;
export const DeleteOrderItems_OrderItems_Mutation_ResponseFragmentDoc = gql`
    fragment deleteOrderItems_orderItems_mutation_response on orderItems_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    ordersId
    price
    productId
    quantity
    updatedAt
  }
}
    `;
export const InsertOrderItem_OrderItemsFragmentDoc = gql`
    fragment insertOrderItem_orderItems on orderItems {
  id
  name
  createdAt
  updatedAt
}
    `;
export const InsertOrderItems_OrderItems_Mutation_ResponseFragmentDoc = gql`
    fragment insertOrderItems_orderItems_mutation_response on orderItems_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    ordersId
    price
    productId
    quantity
    updatedAt
  }
}
    `;
export const UpdateOrderItem_OrderItemsFragmentDoc = gql`
    fragment updateOrderItem_orderItems on orderItems {
  id
  name
  createdAt
  updatedAt
}
    `;
export const UpdateOrderItems_OrderItems_Mutation_ResponseFragmentDoc = gql`
    fragment updateOrderItems_orderItems_mutation_response on orderItems_mutation_response {
  returning {
    createdAt
    id
    isDeleted
    name
    ordersId
    price
    productId
    quantity
    updatedAt
  }
}
    `;
export const Customer_CustomersFragmentDoc = gql`
    fragment customer_customers on customers {
  id
  name
  address
  email
  firstName
  lastName
  phone
  createdAt
  updatedAt
}
    `;
export const Customers_CustomersFragmentDoc = gql`
    fragment customers_customers on customers {
  id
  name
  address
  email
  firstName
  lastName
  phone
  createdAt
  updatedAt
}
    `;
export const DeleteCustomer_CustomersFragmentDoc = gql`
    fragment deleteCustomer_customers on customers {
  id
  name
  address
  email
  firstName
  lastName
  phone
  createdAt
  updatedAt
}
    `;
export const DeleteCustomers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment deleteCustomers_customers_mutation_response on customers_mutation_response {
  returning {
    address
    createdAt
    email
    firstName
    id
    isDeleted
    lastName
    name
    phone
    updatedAt
  }
}
    `;
export const InsertCustomer_CustomersFragmentDoc = gql`
    fragment insertCustomer_customers on customers {
  id
  name
  address
  email
  firstName
  lastName
  phone
  createdAt
  updatedAt
}
    `;
export const InsertCustomers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment insertCustomers_customers_mutation_response on customers_mutation_response {
  returning {
    address
    createdAt
    email
    firstName
    id
    isDeleted
    lastName
    name
    phone
    updatedAt
  }
}
    `;
export const UpdateCustomer_CustomersFragmentDoc = gql`
    fragment updateCustomer_customers on customers {
  id
  name
  address
  email
  firstName
  lastName
  phone
  createdAt
  updatedAt
}
    `;
export const UpdateCustomers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment updateCustomers_customers_mutation_response on customers_mutation_response {
  returning {
    address
    createdAt
    email
    firstName
    id
    isDeleted
    lastName
    name
    phone
    updatedAt
  }
}
    `;
export const Customer_OrdersFragmentDoc = gql`
    fragment customer_orders on orders {
  orderDate
  id
  orderStatus
  shippedDate
}
    `;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};
export const OrderDocument = gql`
    query order($id: uuid!) {
  order(id: $id) {
    ...order_orders
  }
}
    ${Order_OrdersFragmentDoc}`;

export function useOrderQuery(options: Omit<Urql.UseQueryArgs<OrderQueryVariables>, 'query'>) {
  return Urql.useQuery<OrderQuery>({ query: OrderDocument, ...options });
};
export const OrdersDocument = gql`
    query orders($distinct_on: [orders_select_column!], $limit: Int, $offset: Int, $order_by: [orders_order_by!], $where: orders_bool_exp) {
  orders(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orders_orders
  }
}
    ${Orders_OrdersFragmentDoc}`;

export function useOrdersQuery(options?: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const DeleteOrderDocument = gql`
    mutation deleteOrder($id: uuid!) {
  deleteOrder(id: $id) {
    ...deleteOrder_orders
  }
}
    ${DeleteOrder_OrdersFragmentDoc}`;

export function useDeleteOrderMutation() {
  return Urql.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument);
};
export const DeleteOrdersDocument = gql`
    mutation deleteOrders($where: orders_bool_exp!) {
  deleteOrders(where: $where) {
    ...deleteOrders_orders_mutation_response
  }
}
    ${DeleteOrders_Orders_Mutation_ResponseFragmentDoc}`;

export function useDeleteOrdersMutation() {
  return Urql.useMutation<DeleteOrdersMutation, DeleteOrdersMutationVariables>(DeleteOrdersDocument);
};
export const InsertOrderDocument = gql`
    mutation insertOrder($orders: orders_insert_input!, $on_conflict: orders_on_conflict) {
  insertOrder(object: $orders, on_conflict: $on_conflict) {
    ...insertOrder_orders
  }
}
    ${InsertOrder_OrdersFragmentDoc}`;

export function useInsertOrderMutation() {
  return Urql.useMutation<InsertOrderMutation, InsertOrderMutationVariables>(InsertOrderDocument);
};
export const InsertOrdersDocument = gql`
    mutation insertOrders($orders: [orders_insert_input!]!, $on_conflict: orders_on_conflict) {
  insertOrders(objects: $orders, on_conflict: $on_conflict) {
    ...insertOrders_orders_mutation_response
  }
}
    ${InsertOrders_Orders_Mutation_ResponseFragmentDoc}`;

export function useInsertOrdersMutation() {
  return Urql.useMutation<InsertOrdersMutation, InsertOrdersMutationVariables>(InsertOrdersDocument);
};
export const UpdateOrderDocument = gql`
    mutation updateOrder($orders: orders_set_input, $pk_columns: orders_pk_columns_input!) {
  updateOrder(_set: $orders, pk_columns: $pk_columns) {
    ...updateOrder_orders
  }
}
    ${UpdateOrder_OrdersFragmentDoc}`;

export function useUpdateOrderMutation() {
  return Urql.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument);
};
export const UpdateOrdersDocument = gql`
    mutation updateOrders($orders: orders_set_input, $where: orders_bool_exp!) {
  updateOrders(_set: $orders, where: $where) {
    ...updateOrders_orders_mutation_response
  }
}
    ${UpdateOrders_Orders_Mutation_ResponseFragmentDoc}`;

export function useUpdateOrdersMutation() {
  return Urql.useMutation<UpdateOrdersMutation, UpdateOrdersMutationVariables>(UpdateOrdersDocument);
};
export const ProductDocument = gql`
    query product($id: uuid!) {
  product(id: $id) {
    ...product_products
  }
}
    ${Product_ProductsFragmentDoc}`;

export function useProductQuery(options: Omit<Urql.UseQueryArgs<ProductQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductQuery>({ query: ProductDocument, ...options });
};
export const ProductsDocument = gql`
    query products($distinct_on: [products_select_column!], $limit: Int, $offset: Int, $order_by: [products_order_by!], $where: products_bool_exp) {
  products(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...products_products
  }
}
    ${Products_ProductsFragmentDoc}`;

export function useProductsQuery(options?: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: uuid!) {
  deleteProduct(id: $id) {
    ...deleteProduct_products
  }
}
    ${DeleteProduct_ProductsFragmentDoc}`;

export function useDeleteProductMutation() {
  return Urql.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument);
};
export const DeleteProductsDocument = gql`
    mutation deleteProducts($where: products_bool_exp!) {
  deleteProducts(where: $where) {
    ...deleteProducts_products_mutation_response
  }
}
    ${DeleteProducts_Products_Mutation_ResponseFragmentDoc}`;

export function useDeleteProductsMutation() {
  return Urql.useMutation<DeleteProductsMutation, DeleteProductsMutationVariables>(DeleteProductsDocument);
};
export const InsertProductDocument = gql`
    mutation insertProduct($products: products_insert_input!, $on_conflict: products_on_conflict) {
  insertProduct(object: $products, on_conflict: $on_conflict) {
    ...insertProduct_products
  }
}
    ${InsertProduct_ProductsFragmentDoc}`;

export function useInsertProductMutation() {
  return Urql.useMutation<InsertProductMutation, InsertProductMutationVariables>(InsertProductDocument);
};
export const InsertProductsDocument = gql`
    mutation insertProducts($products: [products_insert_input!]!, $on_conflict: products_on_conflict) {
  insertProducts(objects: $products, on_conflict: $on_conflict) {
    ...insertProducts_products_mutation_response
  }
}
    ${InsertProducts_Products_Mutation_ResponseFragmentDoc}`;

export function useInsertProductsMutation() {
  return Urql.useMutation<InsertProductsMutation, InsertProductsMutationVariables>(InsertProductsDocument);
};
export const UpdateProductDocument = gql`
    mutation updateProduct($_inc: products_inc_input, $products: products_set_input, $pk_columns: products_pk_columns_input!) {
  updateProduct(_inc: $_inc, _set: $products, pk_columns: $pk_columns) {
    ...updateProduct_products
  }
}
    ${UpdateProduct_ProductsFragmentDoc}`;

export function useUpdateProductMutation() {
  return Urql.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument);
};
export const UpdateProductsDocument = gql`
    mutation updateProducts($_inc: products_inc_input, $products: products_set_input, $where: products_bool_exp!) {
  updateProducts(_inc: $_inc, _set: $products, where: $where) {
    ...updateProducts_products_mutation_response
  }
}
    ${UpdateProducts_Products_Mutation_ResponseFragmentDoc}`;

export function useUpdateProductsMutation() {
  return Urql.useMutation<UpdateProductsMutation, UpdateProductsMutationVariables>(UpdateProductsDocument);
};
export const OrderItemDocument = gql`
    query orderItem($id: uuid!) {
  orderItem(id: $id) {
    ...orderItem_orderItems
  }
}
    ${OrderItem_OrderItemsFragmentDoc}`;

export function useOrderItemQuery(options: Omit<Urql.UseQueryArgs<OrderItemQueryVariables>, 'query'>) {
  return Urql.useQuery<OrderItemQuery>({ query: OrderItemDocument, ...options });
};
export const OrderItemsDocument = gql`
    query orderItems($distinct_on: [orderItems_select_column!], $limit: Int, $offset: Int, $order_by: [orderItems_order_by!], $where: orderItems_bool_exp) {
  orderItems(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orderItems_orderItems
  }
}
    ${OrderItems_OrderItemsFragmentDoc}`;

export function useOrderItemsQuery(options?: Omit<Urql.UseQueryArgs<OrderItemsQueryVariables>, 'query'>) {
  return Urql.useQuery<OrderItemsQuery>({ query: OrderItemsDocument, ...options });
};
export const DeleteOrderItemDocument = gql`
    mutation deleteOrderItem($id: uuid!) {
  deleteOrderItem(id: $id) {
    ...deleteOrderItem_orderItems
  }
}
    ${DeleteOrderItem_OrderItemsFragmentDoc}`;

export function useDeleteOrderItemMutation() {
  return Urql.useMutation<DeleteOrderItemMutation, DeleteOrderItemMutationVariables>(DeleteOrderItemDocument);
};
export const DeleteOrderItemsDocument = gql`
    mutation deleteOrderItems($where: orderItems_bool_exp!) {
  deleteOrderItems(where: $where) {
    ...deleteOrderItems_orderItems_mutation_response
  }
}
    ${DeleteOrderItems_OrderItems_Mutation_ResponseFragmentDoc}`;

export function useDeleteOrderItemsMutation() {
  return Urql.useMutation<DeleteOrderItemsMutation, DeleteOrderItemsMutationVariables>(DeleteOrderItemsDocument);
};
export const InsertOrderItemDocument = gql`
    mutation insertOrderItem($orderItems: orderItems_insert_input!, $on_conflict: orderItems_on_conflict) {
  insertOrderItem(object: $orderItems, on_conflict: $on_conflict) {
    ...insertOrderItem_orderItems
  }
}
    ${InsertOrderItem_OrderItemsFragmentDoc}`;

export function useInsertOrderItemMutation() {
  return Urql.useMutation<InsertOrderItemMutation, InsertOrderItemMutationVariables>(InsertOrderItemDocument);
};
export const InsertOrderItemsDocument = gql`
    mutation insertOrderItems($orderItems: [orderItems_insert_input!]!, $on_conflict: orderItems_on_conflict) {
  insertOrderItems(objects: $orderItems, on_conflict: $on_conflict) {
    ...insertOrderItems_orderItems_mutation_response
  }
}
    ${InsertOrderItems_OrderItems_Mutation_ResponseFragmentDoc}`;

export function useInsertOrderItemsMutation() {
  return Urql.useMutation<InsertOrderItemsMutation, InsertOrderItemsMutationVariables>(InsertOrderItemsDocument);
};
export const UpdateOrderItemDocument = gql`
    mutation updateOrderItem($_inc: orderItems_inc_input, $orderItems: orderItems_set_input, $pk_columns: orderItems_pk_columns_input!) {
  updateOrderItem(_inc: $_inc, _set: $orderItems, pk_columns: $pk_columns) {
    ...updateOrderItem_orderItems
  }
}
    ${UpdateOrderItem_OrderItemsFragmentDoc}`;

export function useUpdateOrderItemMutation() {
  return Urql.useMutation<UpdateOrderItemMutation, UpdateOrderItemMutationVariables>(UpdateOrderItemDocument);
};
export const UpdateOrderItemsDocument = gql`
    mutation updateOrderItems($_inc: orderItems_inc_input, $orderItems: orderItems_set_input, $where: orderItems_bool_exp!) {
  updateOrderItems(_inc: $_inc, _set: $orderItems, where: $where) {
    ...updateOrderItems_orderItems_mutation_response
  }
}
    ${UpdateOrderItems_OrderItems_Mutation_ResponseFragmentDoc}`;

export function useUpdateOrderItemsMutation() {
  return Urql.useMutation<UpdateOrderItemsMutation, UpdateOrderItemsMutationVariables>(UpdateOrderItemsDocument);
};
export const CustomerDocument = gql`
    query customer($id: uuid!) {
  customer(id: $id) {
    ...customer_customers
    orders {
      ...customer_orders
    }
  }
}
    ${Customer_CustomersFragmentDoc}
${Customer_OrdersFragmentDoc}`;

export function useCustomerQuery(options: Omit<Urql.UseQueryArgs<CustomerQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomerQuery>({ query: CustomerDocument, ...options });
};
export const CustomersDocument = gql`
    query customers($distinct_on: [customers_select_column!], $limit: Int, $offset: Int, $order_by: [customers_order_by!], $where: customers_bool_exp) {
  customers(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...customers_customers
  }
}
    ${Customers_CustomersFragmentDoc}`;

export function useCustomersQuery(options?: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const DeleteCustomerDocument = gql`
    mutation deleteCustomer($id: uuid!) {
  deleteCustomer(id: $id) {
    ...deleteCustomer_customers
  }
}
    ${DeleteCustomer_CustomersFragmentDoc}`;

export function useDeleteCustomerMutation() {
  return Urql.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument);
};
export const DeleteCustomersDocument = gql`
    mutation deleteCustomers($where: customers_bool_exp!) {
  deleteCustomers(where: $where) {
    ...deleteCustomers_customers_mutation_response
  }
}
    ${DeleteCustomers_Customers_Mutation_ResponseFragmentDoc}`;

export function useDeleteCustomersMutation() {
  return Urql.useMutation<DeleteCustomersMutation, DeleteCustomersMutationVariables>(DeleteCustomersDocument);
};
export const InsertCustomerDocument = gql`
    mutation insertCustomer($customers: customers_insert_input!, $on_conflict: customers_on_conflict) {
  insertCustomer(object: $customers, on_conflict: $on_conflict) {
    ...insertCustomer_customers
  }
}
    ${InsertCustomer_CustomersFragmentDoc}`;

export function useInsertCustomerMutation() {
  return Urql.useMutation<InsertCustomerMutation, InsertCustomerMutationVariables>(InsertCustomerDocument);
};
export const InsertCustomersDocument = gql`
    mutation insertCustomers($customers: [customers_insert_input!]!, $on_conflict: customers_on_conflict) {
  insertCustomers(objects: $customers, on_conflict: $on_conflict) {
    ...insertCustomers_customers_mutation_response
  }
}
    ${InsertCustomers_Customers_Mutation_ResponseFragmentDoc}`;

export function useInsertCustomersMutation() {
  return Urql.useMutation<InsertCustomersMutation, InsertCustomersMutationVariables>(InsertCustomersDocument);
};
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($customers: customers_set_input, $pk_columns: customers_pk_columns_input!) {
  updateCustomer(_set: $customers, pk_columns: $pk_columns) {
    ...updateCustomer_customers
  }
}
    ${UpdateCustomer_CustomersFragmentDoc}`;

export function useUpdateCustomerMutation() {
  return Urql.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument);
};
export const UpdateCustomersDocument = gql`
    mutation updateCustomers($customers: customers_set_input, $where: customers_bool_exp!) {
  updateCustomers(_set: $customers, where: $where) {
    ...updateCustomers_customers_mutation_response
  }
}
    ${UpdateCustomers_Customers_Mutation_ResponseFragmentDoc}`;

export function useUpdateCustomersMutation() {
  return Urql.useMutation<UpdateCustomersMutation, UpdateCustomersMutationVariables>(UpdateCustomersDocument);
};