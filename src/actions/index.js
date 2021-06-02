export const push_data = (login,text,rating) => {
    return {
        type: "PUSH_DATA",
        payload: {login:login, text:text, rating:rating}
    };
}

export const push_one_data = (login,text,rating) => {
    return {
        type: "PUSH_ONE_DATA",
        payload: {login:login, text:text, rating:rating}
    }

}

