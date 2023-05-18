// ví dụ về overloading
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    //ở đây có hoặc không có cũng được
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}
let counter111 = new Counter();
console.log(counter111.count()); // return a number
console.log(counter111.count(20)); // return an array
