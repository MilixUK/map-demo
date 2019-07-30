import {axiosInstance} from "./api";

class Drivers{
    static getDriversList(latitude, longitude, count) {
        return axiosInstance().get(`/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`);
    }
}

export default Drivers
