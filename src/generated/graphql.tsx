import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BasicMission = {
  __typename?: 'BasicMission';
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Capsule = {
  __typename?: 'Capsule';
  capsule_id?: Maybe<Scalars['String']>;
  capsule_serial?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum CapsuleRange {
  Past = 'past',
  Upcoming = 'upcoming'
}

export type Core = {
  __typename?: 'Core';
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  core_serial?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  original_launch?: Maybe<Scalars['String']>;
  original_launch_unix?: Maybe<Scalars['Float']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Dimension>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<HeatShield>;
  height_w_trunk?: Maybe<Dimension>;
  id?: Maybe<Scalars['String']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<PayloadVolume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<PressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<PayloadVolume>;
  sidewall_angle_deg?: Maybe<Scalars['Int']>;
  thrusters?: Maybe<Array<Maybe<Thruster>>>;
  trunk?: Maybe<Trunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Engines = {
  __typename?: 'Engines';
  engine_loss_max?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
  thrust_vacuum?: Maybe<Thrust>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Fairing = {
  __typename?: 'Fairing';
  diameter?: Maybe<Dimension>;
  height?: Maybe<Dimension>;
};

export type Headquarters = {
  __typename?: 'Headquarters';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type HeatShield = {
  __typename?: 'HeatShield';
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
};

export type History = {
  __typename?: 'History';
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Float']>;
  event_date_utc?: Maybe<Scalars['String']>;
  flight_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<HistoryLinks>;
  title?: Maybe<Scalars['String']>;
};

export type HistoryLinks = {
  __typename?: 'HistoryLinks';
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Headquarters>;
  launch_sites?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
};

export type LandingLegs = {
  __typename?: 'LandingLegs';
  material?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type Landingpad = {
  __typename?: 'Landingpad';
  attempted_landings?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  details?: Maybe<Scalars['String']>;
  flight_number?: Maybe<Scalars['Int']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['String']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_window?: Maybe<Scalars['Int']>;
  launch_year?: Maybe<Scalars['Int']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Scalars['String']>>>;
  static_fire_date_unix?: Maybe<Scalars['Float']>;
  static_fire_date_utc?: Maybe<Scalars['String']>;
  tbd?: Maybe<Scalars['Boolean']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  timeline?: Maybe<LaunchTimeline>;
  upcoming?: Maybe<Scalars['Boolean']>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youtube_id?: Maybe<Scalars['String']>;
};

export enum LaunchRange {
  Latest = 'latest',
  Next = 'next',
  Past = 'past',
  Upcoming = 'upcoming'
}

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  block?: Maybe<Scalars['Int']>;
  core_serial?: Maybe<Scalars['String']>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type LaunchTimeline = {
  __typename?: 'LaunchTimeline';
  beco?: Maybe<Scalars['Int']>;
  center_core_boostback?: Maybe<Scalars['Int']>;
  center_core_entry_burn?: Maybe<Scalars['Int']>;
  center_core_landing?: Maybe<Scalars['Int']>;
  center_stage_sep?: Maybe<Scalars['Int']>;
  dragon_bay_door_deploy?: Maybe<Scalars['Int']>;
  dragon_separation?: Maybe<Scalars['Int']>;
  dragon_solar_deploy?: Maybe<Scalars['Int']>;
  engine_chill?: Maybe<Scalars['Int']>;
  fairing_deploy?: Maybe<Scalars['Int']>;
  first_stage_entry_burn?: Maybe<Scalars['Int']>;
  first_stage_landing?: Maybe<Scalars['Int']>;
  first_stage_landing_burn?: Maybe<Scalars['Int']>;
  go_for_launch?: Maybe<Scalars['Int']>;
  go_for_prop_loading?: Maybe<Scalars['Int']>;
  ignition?: Maybe<Scalars['Int']>;
  liftoff?: Maybe<Scalars['Int']>;
  maxq?: Maybe<Scalars['Int']>;
  meco?: Maybe<Scalars['Int']>;
  payload_deploy?: Maybe<Scalars['Int']>;
  payload_deploy_1?: Maybe<Scalars['Int']>;
  payload_deploy_2?: Maybe<Scalars['Int']>;
  prelaunch_checks?: Maybe<Scalars['Int']>;
  propellant_pressurization?: Maybe<Scalars['Int']>;
  rp1_loading?: Maybe<Scalars['Int']>;
  seco_1?: Maybe<Scalars['Int']>;
  seco_2?: Maybe<Scalars['Int']>;
  second_stage_ignition?: Maybe<Scalars['Int']>;
  second_stage_restart?: Maybe<Scalars['Int']>;
  side_core_boostback?: Maybe<Scalars['Int']>;
  side_core_entry_burn?: Maybe<Scalars['Int']>;
  side_core_landing?: Maybe<Scalars['Int']>;
  side_core_sep?: Maybe<Scalars['Int']>;
  stage1_lox_loading?: Maybe<Scalars['Int']>;
  stage1_rp1_loading?: Maybe<Scalars['Int']>;
  stage2_lox_loading?: Maybe<Scalars['Int']>;
  stage2_rp1_loading?: Maybe<Scalars['Int']>;
  stage_sep?: Maybe<Scalars['Int']>;
  webcast_liftoff?: Maybe<Scalars['Int']>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  site_id?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Scalars['String']>>>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  __typename?: 'Mission';
  description?: Maybe<Scalars['String']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_id?: Maybe<Scalars['String']>;
  mission_name?: Maybe<Scalars['String']>;
  payload_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type Payload = {
  __typename?: 'Payload';
  cap_serial?: Maybe<Scalars['String']>;
  cargo_manifest?: Maybe<Scalars['String']>;
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  flight_time_sec?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  mass_returned_kg?: Maybe<Scalars['Float']>;
  mass_returned_lbs?: Maybe<Scalars['Float']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  orbit?: Maybe<Scalars['String']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  payload_id?: Maybe<Scalars['String']>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['String']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type PayloadVolume = {
  __typename?: 'PayloadVolume';
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
};

export type Position = {
  __typename?: 'Position';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PressurizedCapsule = {
  __typename?: 'PressurizedCapsule';
  payload_volume?: Maybe<PayloadVolume>;
};

export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  history?: Maybe<Array<Maybe<History>>>;
  info?: Maybe<Info>;
  landingpad?: Maybe<Landingpad>;
  landingpads?: Maybe<Array<Maybe<Landingpad>>>;
  launch?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  mission?: Maybe<Mission>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
};


export type QueryCapsuleArgs = {
  capsule_serial: Scalars['String'];
};


export type QueryCapsulesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  range?: InputMaybe<CapsuleRange>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  core_serial: Scalars['String'];
};


export type QueryCoresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['String'];
};


export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHistoryArgs = {
  id?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLandingpadArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryLandingpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  range?: InputMaybe<LaunchRange>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['String'];
};


export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['String'];
};


export type QueryMissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['String'];
};


export type QueryPayloadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['String'];
};


export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['String'];
};


export type QueryShipsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  sort?: InputMaybe<Scalars['String']>;
};

export type Roadster = {
  __typename?: 'Roadster';
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Float']>;
  launch_date_utc?: Maybe<Scalars['String']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['String']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Dimension>;
  engines?: Maybe<Engines>;
  first_flight?: Maybe<Scalars['String']>;
  first_stage?: Maybe<RocketFirstStage>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Dimension>;
  id?: Maybe<Scalars['Int']>;
  landing_legs?: Maybe<LandingLegs>;
  mass?: Maybe<Mass>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  rocket_id?: Maybe<Scalars['String']>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Thrust>;
  thrust_vacuum?: Maybe<Thrust>;
};

export type RocketPayload = {
  __typename?: 'RocketPayload';
  composite_fairing?: Maybe<Fairing>;
  option_1?: Maybe<Scalars['String']>;
  option_2?: Maybe<Scalars['String']>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Float']>;
  lb?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketPayload>;
  thrust?: Maybe<Thrust>;
};

export type Ship = {
  __typename?: 'Ship';
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Float']>;
  home_port?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<BasicMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  position?: Maybe<Position>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  ship_id?: Maybe<Scalars['String']>;
  ship_model?: Maybe<Scalars['String']>;
  ship_name?: Maybe<Scalars['String']>;
  ship_type?: Maybe<Scalars['String']>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Float']>;
  weight_lbs?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Int']>;
};

export type Thrust = {
  __typename?: 'Thrust';
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type Thruster = {
  __typename?: 'Thruster';
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Thrust>;
  type?: Maybe<Scalars['String']>;
};

export type Trunk = {
  __typename?: 'Trunk';
  cargo?: Maybe<TrunkCargo>;
  trunk_volume?: Maybe<PayloadVolume>;
};

export type TrunkCargo = {
  __typename?: 'TrunkCargo';
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type FooterInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterInfoQuery = { __typename?: 'Query', info?: { __typename?: 'Info', headquarters?: { __typename?: 'Headquarters', address?: string | null, city?: string | null, state?: string | null } | null } | null };

export type CompanyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyInfoQuery = { __typename?: 'Query', info?: { __typename?: 'Info', name?: string | null, founded?: number | null, founder?: string | null, ceo?: string | null, coo?: string | null, cto_propulsion?: string | null, employees?: number | null, valuation?: number | null, summary?: string | null } | null };

export type MissionItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type MissionItemsQuery = { __typename?: 'Query', missions?: Array<{ __typename?: 'Mission', mission_id?: string | null, mission_name?: string | null, manufacturers?: Array<string | null> | null, description?: string | null, wikipedia?: string | null, website?: string | null, twitter?: string | null } | null> | null };

export type RocketItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type RocketItemsQuery = { __typename?: 'Query', rockets?: Array<{ __typename?: 'Rocket', rocket_id?: string | null, rocket_name?: string | null, rocket_type?: string | null, description?: string | null, active?: boolean | null, company?: string | null, boosters?: number | null, stages?: number | null, first_flight?: string | null, country?: string | null, cost_per_launch?: number | null, success_rate_pct?: number | null, flickr_images?: Array<string | null> | null, mass?: { __typename?: 'Mass', kg?: number | null } | null, engines?: { __typename?: 'Engines', number?: number | null, type?: string | null, version?: string | null } | null } | null> | null };

export type ShipItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShipItemsQuery = { __typename?: 'Query', ships?: Array<{ __typename?: 'Ship', ship_id?: string | null, ship_name?: string | null, ship_model?: string | null, ship_type?: string | null, roles?: Array<string | null> | null, active?: boolean | null, year_built?: number | null, successful_landings?: number | null, attempted_landings?: number | null, image?: string | null } | null> | null };


export const FooterInfoDocument = gql`
    query FooterInfo {
  info {
    headquarters {
      address
      city
      state
    }
  }
}
    `;

/**
 * __useFooterInfoQuery__
 *
 * To run a query within a React component, call `useFooterInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterInfoQuery(baseOptions?: Apollo.QueryHookOptions<FooterInfoQuery, FooterInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooterInfoQuery, FooterInfoQueryVariables>(FooterInfoDocument, options);
      }
export function useFooterInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterInfoQuery, FooterInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooterInfoQuery, FooterInfoQueryVariables>(FooterInfoDocument, options);
        }
export type FooterInfoQueryHookResult = ReturnType<typeof useFooterInfoQuery>;
export type FooterInfoLazyQueryHookResult = ReturnType<typeof useFooterInfoLazyQuery>;
export type FooterInfoQueryResult = Apollo.QueryResult<FooterInfoQuery, FooterInfoQueryVariables>;
export const CompanyInfoDocument = gql`
    query CompanyInfo {
  info {
    name
    founded
    founder
    ceo
    coo
    cto_propulsion
    employees
    valuation
    summary
  }
}
    `;

/**
 * __useCompanyInfoQuery__
 *
 * To run a query within a React component, call `useCompanyInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompanyInfoQuery(baseOptions?: Apollo.QueryHookOptions<CompanyInfoQuery, CompanyInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyInfoQuery, CompanyInfoQueryVariables>(CompanyInfoDocument, options);
      }
export function useCompanyInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyInfoQuery, CompanyInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyInfoQuery, CompanyInfoQueryVariables>(CompanyInfoDocument, options);
        }
export type CompanyInfoQueryHookResult = ReturnType<typeof useCompanyInfoQuery>;
export type CompanyInfoLazyQueryHookResult = ReturnType<typeof useCompanyInfoLazyQuery>;
export type CompanyInfoQueryResult = Apollo.QueryResult<CompanyInfoQuery, CompanyInfoQueryVariables>;
export const MissionItemsDocument = gql`
    query MissionItems {
  missions {
    mission_id
    mission_name
    manufacturers
    description
    wikipedia
    website
    twitter
  }
}
    `;

/**
 * __useMissionItemsQuery__
 *
 * To run a query within a React component, call `useMissionItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMissionItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMissionItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMissionItemsQuery(baseOptions?: Apollo.QueryHookOptions<MissionItemsQuery, MissionItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MissionItemsQuery, MissionItemsQueryVariables>(MissionItemsDocument, options);
      }
export function useMissionItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MissionItemsQuery, MissionItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MissionItemsQuery, MissionItemsQueryVariables>(MissionItemsDocument, options);
        }
export type MissionItemsQueryHookResult = ReturnType<typeof useMissionItemsQuery>;
export type MissionItemsLazyQueryHookResult = ReturnType<typeof useMissionItemsLazyQuery>;
export type MissionItemsQueryResult = Apollo.QueryResult<MissionItemsQuery, MissionItemsQueryVariables>;
export const RocketItemsDocument = gql`
    query RocketItems {
  rockets {
    rocket_id
    rocket_name
    rocket_type
    description
    active
    mass {
      kg
    }
    engines {
      number
      type
      version
    }
    company
    boosters
    stages
    first_flight
    country
    cost_per_launch
    success_rate_pct
    flickr_images
  }
}
    `;

/**
 * __useRocketItemsQuery__
 *
 * To run a query within a React component, call `useRocketItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRocketItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRocketItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRocketItemsQuery(baseOptions?: Apollo.QueryHookOptions<RocketItemsQuery, RocketItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RocketItemsQuery, RocketItemsQueryVariables>(RocketItemsDocument, options);
      }
export function useRocketItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RocketItemsQuery, RocketItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RocketItemsQuery, RocketItemsQueryVariables>(RocketItemsDocument, options);
        }
export type RocketItemsQueryHookResult = ReturnType<typeof useRocketItemsQuery>;
export type RocketItemsLazyQueryHookResult = ReturnType<typeof useRocketItemsLazyQuery>;
export type RocketItemsQueryResult = Apollo.QueryResult<RocketItemsQuery, RocketItemsQueryVariables>;
export const ShipItemsDocument = gql`
    query ShipItems {
  ships {
    ship_id
    ship_name
    ship_model
    ship_type
    roles
    active
    year_built
    successful_landings
    attempted_landings
    image
  }
}
    `;

/**
 * __useShipItemsQuery__
 *
 * To run a query within a React component, call `useShipItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShipItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShipItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useShipItemsQuery(baseOptions?: Apollo.QueryHookOptions<ShipItemsQuery, ShipItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShipItemsQuery, ShipItemsQueryVariables>(ShipItemsDocument, options);
      }
export function useShipItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShipItemsQuery, ShipItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShipItemsQuery, ShipItemsQueryVariables>(ShipItemsDocument, options);
        }
export type ShipItemsQueryHookResult = ReturnType<typeof useShipItemsQuery>;
export type ShipItemsLazyQueryHookResult = ReturnType<typeof useShipItemsLazyQuery>;
export type ShipItemsQueryResult = Apollo.QueryResult<ShipItemsQuery, ShipItemsQueryVariables>;