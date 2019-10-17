
export class CustomFetchError extends Error {
    constructor(message: any, code: any) {
      super(`FetchError: ${code} ${message}`);
      this.name = 'FetchError';
      this.code = code;
    }
}

export const handledResponse = (response: any) => {
    switch (response.status) {
        case 400: throw new CustomFetchError ('Bad request'   , response.status);
        case 404: throw new CustomFetchError ('Url not found' , response.status);
        case 401: throw new CustomFetchError (response.message, response.status);
    }
    return response.json();
};
