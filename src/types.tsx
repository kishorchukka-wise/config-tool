export type ConfigItem = {
	key: string;
	values: string[];
  }
  
export type Config = {
	partnerId: string;
	configItems: ConfigItem[];
  }