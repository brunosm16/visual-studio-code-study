/* eslint-disable no-debugger */
const fakeOrders = [200, 401, 703, 410, 300];

debugger;

let sumOrders = 0;

for (let i = 0; i < fakeOrders.length; i += 1) {
	sumOrders += fakeOrders[i];
}

debugger;

console.log(sumOrders);
