// Image object
export interface PlantImage {
  image_id: number;
  license: number;
  license_name: string;
  license_url: string;
  original_url: string;
  regular_url: string;
  medium_url: string;
  small_url: string;
  thumbnail: string;
}

// Individual plant
export interface Plant {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[] | null;
  family: string | null;
  hybrid: string | null;
  authority: string | null;
  subspecies: string | null;
  cultivar: string | null;
  variety: string | null;
  species_epithet: string;
  genus: string;
  default_image: PlantImage | null;
}

// Individual Plant with more details
export interface PlantDetails {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  family: string;
  origin: string[];
  type: string;

  dimensions: {
    type: string | null;
    min_value: number;
    max_value: number;
    unit: string;
  };

  cycle: string;
  watering: string;

  watering_general_benchmark?: {
    min: number;
    max: number;
    unit: string;
  };

  plant_anatomy: {
    part: string;
    color: string[];
  }[];

  sunlight: string[];

  pruning_month: string[];

  pruning_count: {
    amount: number;
    interval: string;
  };

  seeds: number;

  attracts: string[];
  propagation: string[];

  hardiness: {
    min: string;
    max: string;
  };

  hardiness_location: {
    full_url: string;
    full_iframe: string;
  };

  flowers: boolean;
  flowering_season: string;

  soil?: string[];

  pest_susceptibility?: string[];

  cones: boolean;
  fruits: boolean;
  edible_fruit: boolean;

  fruiting_season: string;
  harvest_season: string;
  harvest_method: string;

  leaf: boolean;
  edible_leaf: boolean;

  growth_rate: string;
  maintenance: string;
  medicinal: boolean;

  poisonous_to_humans: boolean;
  poisonous_to_pets: boolean;

  drought_tolerant: boolean;
  salt_tolerant: boolean;

  thorny: boolean;
  invasive: boolean;
  rare: boolean;
  tropical: boolean;
  cuisine: boolean;
  indoor: boolean;

  care_level: string;
  description: string;

  default_image?: PlantImage;

  other_images?: PlantImage[];

  xWateringQuality: string[];

  xWateringPeriod: string[];

  xWateringAvgVolumeRequirement: {
    unit: string;
    value: string;
  };

  xWateringDepthRequirement: {
    unit: string;
    value: number;
  };

  xWateringBasedTemperature: {
    unit: string;
    min: number;
    max: number;
  };

  xWateringPhLevel: {
    min: number;
    max: number;
  };

  xSunlightDuration: {
    min: string;
    max: string;
    unit: string;
  };
}
