interface Config {
  env: string;
  port: number;
  logger: {
    level: string;
  };
}

export default Config;
