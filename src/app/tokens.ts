import { InjectionToken, Type } from "@angular/core";

export const THING = new InjectionToken<string>('THING');
export const MODULE_PROVIDED_ITEM = new InjectionToken<Type<any>>('MODULE_PROVIDED_ITEM');
