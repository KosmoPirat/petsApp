class Mappers {
    static mapToStringRequestParams = data => {
        const defaultRequestParams = data.map(requestParam => requestParam.name).toString();
        const requestParams = data
            .map(requestParam => (requestParam.isChecked ? requestParam.name : ''))
            .filter(requestParam => requestParam)
            .toString();
        return requestParams || defaultRequestParams;
    };

    static mapUrlParam = url => {
        const urlParam = url.match(/.+\?page=(\d+)$/i);
        return urlParam ? +urlParam[1] : 1;
    };
}

export default Mappers;
