export interface IMarker {
    id: string;
    childIndex: number;
    start: number;
    end: number;
    parentClassName?: string;
}
export interface Styles {
    [key: string]: any;
}
export interface WebTextMarkerOptions {
    defaultMarkers: SelectedMarkers;
    markedClassName: string;
    selectedClassName: string;
    focusMarkedClassName: string;
    btnMarkID?: string;
    btnDeleteID?: string;
    btnWrapperID?: string;
    btnArrowID?: string;
}
export interface SelectedMarkers {
    [key: string]: any;
}
export interface EventName {
    mousedown: 'mousedown' | 'touchstart';
    mouseup: 'mouseup' | 'touchend';
    mousemove: 'mousemove' | 'touchmove';
}
export interface UserAgaent {
    isAndroid: boolean;
    isiOS: boolean;
    isPC: boolean;
    eventName: EventName;
}
