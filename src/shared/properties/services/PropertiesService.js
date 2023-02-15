import noMutate from 'utils/functions/noMutate';
import propertiesMocks from 'utils/mocks/propertiesMocks';

class PropertiesService {
    api = '';
    payloadName = 'Properties';

    constructor(api = '', payloadName = 'Properties') {
        this.api = api;
        this.payloadName = payloadName;
    }

    async getProperties() {
        return await fetch(this.api).then((res) => res.json());
    }

    async getPropertiesMock() {
        return await noMutate(propertiesMocks);
    }
}

export default PropertiesService;
