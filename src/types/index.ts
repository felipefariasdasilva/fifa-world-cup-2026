export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ConvocacaoInfo {
  date: Date;
  displayDate: string;
  displayTime: string;
  location: string;
  channels: Channel[];
}

export interface Channel {
  name: string;
  url?: string;
}
