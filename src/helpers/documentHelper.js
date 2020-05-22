class Document {
    static setTitle = text => {
        document.title = `${text} | Приют собак`;
    };

    static setUrl = text => {
        window.location.href = `${window.location.pathname}?page=${text}`;
    };
}

export default Document;
