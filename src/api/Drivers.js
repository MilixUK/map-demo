import {axiosInstance} from "./api";


// https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375,&longitude=-0.0964509&count=1

class Drivers{
    static getDriversList(latitude, longitude, count) {
        return axiosInstance().get(`/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`);
    }
}

export default Drivers
