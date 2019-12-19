import {Action} from '@ngrx/store';

export enum CustomerActionTypes {
    addhistory = 'Add History Operations',
    clearhistory = 'Clear History Operations'
  }

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class AddHistory implements ActionEx {
    readonly type = CustomerActionTypes.addhistory;
    constructor(public payload: any){}
}

export class ClearHistory implements ActionEx {
    readonly type= CustomerActionTypes.clearhistory;
    constructor(public payload: any){}
}