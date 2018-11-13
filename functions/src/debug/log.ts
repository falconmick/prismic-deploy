import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const handle: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
    console.log('event: ', JSON.stringify(event));
    console.log('context: ', JSON.stringify(context));
    cb(null, '');
};
