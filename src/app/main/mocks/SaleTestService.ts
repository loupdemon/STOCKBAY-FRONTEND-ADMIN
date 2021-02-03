import { Injectable } from "@angular/core";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class SaleTestService implements Service {

    _buy = []
    static id = 0

    public getAll() {
        return this._buy;
    }

    public get(id) {
        return this._buy.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = SaleTestService.id
        this._buy.push(data);
        SaleTestService.id++
        console.log(data)
    };

    public update(old, data) {

        var foundIndex = this._buy.findIndex(item => item === old);
        this._buy[foundIndex] = data;
    };

    public remove(id) {
        this._buy.splice(id, 1);
    };


}