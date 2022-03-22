

const getAPIKEY = async () => {

    try {
        const res = await fetch('http://localhost:3000/apikey')
            .then(res => {
                return res.string()
                console.log("APIKEY request successful.")
            })
    }
    catch (error) {
        return "not available"
        console.log("APIKEY request failed.")
    }
}

export { getAPIKEY }