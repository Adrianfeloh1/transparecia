import { atom } from 'nanostores';

export type ViewType = 'dashboard' | 'analysis' | 'politicas' | 'flujos' | 'configuracion';

export const $currentView = atom<ViewType>('analysis');

export function setView(view: ViewType) {
  $currentView.set(view);
}
