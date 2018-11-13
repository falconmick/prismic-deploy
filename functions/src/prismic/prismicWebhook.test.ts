import {masterUpdateHook, newReleaseHook, updateStagingHook} from "./prismicWebhook.testdata";
import {extractDeploymentsFromHook} from "./prismicWebhook";


describe('Modifying existing Releases', () => {
    test('From the master release', () => {
        const requestData = masterUpdateHook;
        const deployments = extractDeploymentsFromHook(requestData);
        expect(deployments).toEqual([{label: 'master', ref: 'W-qJMhEAABgUzGh5'}, {label: 'Staging', ref: 'W9rCHhIAADgAbWQD~W-qJMhEAABgUzGh5'}])
    });
    test('From the staging release', () => {
        const requestData = updateStagingHook;
        const deployments = extractDeploymentsFromHook(requestData);
        expect(deployments).toEqual([{label: 'Staging', ref: 'W-qL7REAADwAzHSA~W-qJMhEAABgUzGh5'}])
    });
});


test('Created new release', () => {
    const requestData = newReleaseHook;
    const deployments = extractDeploymentsFromHook(requestData);
    expect(deployments).toEqual([{label: 'New Release', ref: 'W-qMZxEAADYAzHah~W-qJMhEAABgUzGh5'}])
});
