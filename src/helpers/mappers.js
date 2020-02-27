const mapToSizeRequestParams = data => {
    const defaultRequestParams = data.map(requestParam => requestParam.name).toString();
    const requestParams = data
        .map(requestParam => (requestParam.isChecked ? requestParam.name : ''))
        .filter(requestParam => requestParam)
        .toString();
    return requestParams || defaultRequestParams;
};

export default mapToSizeRequestParams;
