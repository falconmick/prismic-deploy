import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { PrismicHook, Release } from './PrismicHook';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const prismicHook = JSON.parse(event.body) as PrismicHook;

  const deployments = [];

  if (prismicHook.masterRef) {
    deployments.push({
      label: 'master',
      ref: prismicHook.masterRef,
    });
  }

  console.log(JSON.stringify(prismicHook))

  const { releases = {} } = prismicHook
  const { update = [], addition = []} = releases || {};

  
  deployments.push(
    ...[...update, ...addition].map(item => ({label: item.label, ref: item.ref}))
  );

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      deployments,
    }),
  };

  cb(null, response);
}
