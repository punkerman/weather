import { createAction, props } from '@ngrx/store';

export const addCity = createAction('[Search Component] Update', props<{ cityWeather: any; }>());
export const removeCity = createAction('[Pagination Component] Page', props<{ city: any; }>());