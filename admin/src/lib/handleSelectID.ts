import { SelectType } from '../types/selectType';
import { Config } from './Config';

export const handleSelectId = (select: string | undefined, deviceType: SelectType): void => {
    console.log(`Type: ${deviceType} ID: ${select} `);
    if (deviceType === 'lamp') {
        if (select !== undefined) {
            console.log('lamp');
            Config.OnOffSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'cieX') {
        if (select !== undefined) {
            console.log('cieX');
            Config.cieXSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'cieY') {
        if (select !== undefined) {
            console.log('cieY');
            Config.cieYSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'colorTemp') {
        if (select !== undefined) {
            console.log('colorTemp');
            Config.ColorTempSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'dimmer') {
        if (select !== undefined) {
            console.log('dimmer');
            Config.DimmerSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'hue') {
        if (select !== undefined) {
            console.log('hue');
            Config.HueSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'saturation') {
        if (select !== undefined) {
            console.log('saturation');
            Config.SaturationSelectID = select;
            console.log(Config);
        }
    }

    if (deviceType === 'sensor') {
        if (select !== undefined) {
            console.log('sensor');
            Config.sensorSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'button0') {
        if (select !== undefined) {
            console.log('button');
            Config.buttonSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'button1') {
        if (select !== undefined) {
            console.log('button1');
            Config.buttonSelectID1 = select;
            console.log(Config);
        }
    }
    if (deviceType === 'button2') {
        if (select !== undefined) {
            console.log('button2');
            Config.buttonSelectID2 = select;
            console.log(Config);
        }
    }
    if (deviceType === 'button3') {
        if (select !== undefined) {
            console.log('button3');
            Config.buttonSelectID3 = select;
            console.log(Config);
        }
    }
    if (deviceType === 'doorbell') {
        if (select !== undefined) {
            console.log('doorbell');
            Config.doorbellSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'binarySensor') {
        if (select !== undefined) {
            console.log('binarySensor');
            Config.binarySensorSelectID = select;
            console.log(Config);
        }
    }
    if (deviceType === 'awayButton') {
        if (select !== undefined) {
            console.log('awayButton');
            Config.awayButtonSelectID = select;
            console.log(Config);
        }
    }
};
