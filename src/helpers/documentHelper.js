class Document {
    static setTitle = text => {
        document.title = `${text} | Приют собак`;
    };

    static setUrl = text => {
        window.location.pathname = `${window.location.pathname}${text}`;
    };
}

export default Document;
