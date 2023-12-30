export type SearchHistoryProps = {
    name: string;
    temp: number | string;
    humidity?: number | string;
    icon?: string;
};

export type WeatherProps = {
    city: string;
    temp: number | string;
    humidity?: number | string;
    wind?: number | string;
    time?: string;
    icon?: string;
};

export interface WeatherState {
    weatherData: any;
    loading: boolean;
    error: string | null;
    history: any[];
}
