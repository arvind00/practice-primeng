## Learning Objective
- [x] Learn how to handle the onChange event in a checkbox

## Module to import

```ts
import { CheckboxModule } from 'primeng/checkbox';
```

## HTML and TS 
```html
<p-checkbox label="Some Checkbox" (onChange)="checkboxStateChanged($event)"></p-checkbox>
<hr>
<span> Current State: {{currentCheckboxState}}</span>
```

```ts
  currentCheckboxState = false;
  checkboxStateChanged(e: any){
    this.currentCheckboxState = e.checked;
    console.log(e);//
  }
```

