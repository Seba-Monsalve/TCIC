

import 'dotenv/config';
import joi from 'joi';

const envSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().uri().required(),
}).unknown(true);

const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const envs = {
    PORT: envVars.PORT,
    DATABASE_URL: envVars.DAsTABASE_URL,
};

