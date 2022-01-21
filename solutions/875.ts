// https://leetcode.com/problems/koko-eating-bananas/

/* 
 * Runtime - O(N*log(M))
 *    N is number of piles calculated in timeToEat * 
 *    log(M) for binary search where M is max number of bananas in a pile 
 * Space - O(1)
 */
function minEatingSpeed(piles: number[], h: number): number {
    // num piles == hours, must eat max banana pile to get through all piles in time
    if (piles.length == h) {
        return Math.max(...piles);
    }
    
    const timeToEat = (speed) => {
        // it takes (pile / speed) rounded up hours to finish a pile
        return piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);
    }
    
    // use a binary search to find k
    let min = 1;
    let max = Math.max(...piles); // at most, will have to finish a pile per hour
    let bestK = max; // decrease bestK until can't finish bananas anymore
    
    while (min <= max) {
        const k = Math.floor((max + min) / 2);
        const hours = timeToEat(k);
        
        if (hours <= h) { 
            bestK = k
            max = k-1; // valid speed, but can eat slower
        } else {
            min = k+1; // can't finish bananas, need to eat faster
        }
    }
    
    return bestK;
};