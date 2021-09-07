class Error {
    render() {
        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>You don't have access to this content! Contact with admin or come back later.</h3>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}


const errorPage = new Error();