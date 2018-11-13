import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import {PrismicHook, Release, Releases} from '../types/PrismicHook';

export const handle: Handler = (event: PrismicHook, context: Context, cb: Callback) => {
    console.log('event keys: ', Object.keys(event));

    const deployments = extractDeploymentsFromHook(event);

    cb(null, deployments);
};

export const extractDeploymentsFromHook = (prismicHook: PrismicHook): Release[] => {
    const deployments: Release[] = [];

    if (prismicHook.masterRef) {
        deployments.push({
            label: 'master',
            ref: prismicHook.masterRef,
        });
    }

    const { releases = {} } = prismicHook;
    const { update = [], addition = []} = releases || {};


    deployments.push(
        ...[...update, ...addition].map(item => ({label: item.label, ref: item.ref}))
    );

    return deployments;
};
