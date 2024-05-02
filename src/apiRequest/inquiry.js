export const createInquiry = async (data) => {
    try{
        const response = await fetch ("http://127.0.0.1:3005/myinquiry", {
            method : "POST",
            headers: {
                'Content-Type': 'application/json,'
            },
            body: JSON.stringify(data),
        });
        return response.json();

    } catch(error){
        console.log(error);
    }

}