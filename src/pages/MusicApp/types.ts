export interface MusicAppResponse {
    tracks: Tracks;
    artists: Artists;
  }
  export interface Tracks {
    hits?: (HitsEntity)[];
  }
  export interface HitsEntity {
    track: Track;
  }
  export interface Track {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    share: Share;
    images: Images;
    hub: Hub;
    artists?: (ArtistsEntity)[] | null;
    url: string;
  }
  export interface Share {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar: string;
    snapchat: string;
  }
  export interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  }
  export interface Hub {
    type: string;
    image: string;
    actions?: (ActionsEntity)[] | null;
    options?: (OptionsEntity)[] | null;
    providers?: (ProvidersEntity)[] | null;
    explicit: boolean;
    displayname: string;
  }
  export interface ActionsEntity {
    name: string;
    type: string;
    id?: string | null;
    uri?: string | null;
  }
  export interface OptionsEntity {
    caption: string;
    actions?: (ActionsEntity1)[] | null;
    beacondata: Beacondata;
    image: string;
    type: string;
    listcaption: string;
    overflowimage: string;
    colouroverflowimage: boolean;
    providername: string;
  }
  export interface ActionsEntity1 {
    name?: string | null;
    type: string;
    uri: string;
  }
  export interface Beacondata {
    type: string;
    providername: string;
  }
  export interface ProvidersEntity {
    caption: string;
    images: Images1;
    actions?: (ActionsEntity2)[] | null;
    type: string;
  }
  export interface Images1 {
    overflow: string;
    default: string;
  }
  export interface ActionsEntity2 {
    name: string;
    type: string;
    uri: string;
  }
  export interface ArtistsEntity {
    id: string;
    adamid: string;
  }
  export interface Artists {
    hits?: (HitsEntity1)[] | null;
  }
  export interface HitsEntity1 {
    artist: Artist;
  }
  export interface Artist {
    avatar: string;
    name: string;
    verified: boolean;
    weburl: string;
    adamid: string;
  }
  
