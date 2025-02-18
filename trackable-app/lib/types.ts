export enum TrackingModeName {
    Sum = 'sum',
    Latest = 'latest',
};

export type SumTracking = {
    name: TrackingModeName.Sum;
    allow_decimals?: boolean;
    allow_decrements?: boolean;
};

export type LatestTracking = {
    name: 'latest';
};

export type TrackingMode = SumTracking | LatestTracking;

export type Tracker = {
    id: number;
    name: string;
    color: string;
    tracking_mode: TrackingMode;
};

export type TrackerLog = {
    id: number;
    tracker_id: number;
    value: string;
    timestamp: string;
};
