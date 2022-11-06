export type ConfigItem = {
	key: string;
	values: string[];
  }
  
export type Config = {
	partnerId: string;
	configItems: ConfigItem[];
  }

export type  ConfigBlock = {
	type: string;
	items: ConfigItem[];
	policies: string[];
}