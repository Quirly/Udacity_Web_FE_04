

const getAPIKEY = async () => {

    try {
        const res = await fetch('http://localhost:8080/apikey')
            .then(res => {
                return res.text()
                console.log("APIKEY request successful.")
            })
        return res;
    }
    catch (error) {
        return "not available"
        console.log("APIKEY request failed.")
    }
}

export { getAPIKEY }