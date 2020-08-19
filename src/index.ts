import {loadTest, LoadTestResult, LoadTestOptions} from 'loadtest'
import * as data from "../data.json"

const options: LoadTestOptions = {
    
    maxRequests: 500,
    url: "Your URL for Test", 
    headers: {
        'Authorization': 'Bearer JWTToken'
    },
    concurrency: 100,
    method: "POST",
    contentType:"application/json",
    body: data
};

loadTest(options, (error, result) => {
    console.log(error);
    if(error) {
        console.error(error);
    }
    console.log("---------------------------------------");
    console.info(result);
    console.log("---------------------------------------");
});