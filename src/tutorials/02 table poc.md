## Learning Objective
- [x] learn to create a basic table using primeng p-table
- [x] learn how to configure and control the width of the table cols

## Module to import
```ts
import { TableModule } from 'primeng/table';
```

**Make sure you install `@angular/cdk` before you start with table**

## Step 1 - Create a component
```sh
ng g c table-poc
```

## Step 2 - update the app route
```ts
  { path: '', component: TablePocComponent, pathMatch: 'full' },
```

## Step 3 - Create a table with dynamic columns
- Dynamic columns here, I mean we will define the col headers in component class