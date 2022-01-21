// https://leetcode.com/problems/surrounded-regions/

/**
 * Do not return anything, modify board in-place instead.
 */
 function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    // impossible to surround something in a 2x2 or less
    if (m <= 2 || n <= 2) {
        return;
    }
    
    // if there's an O on the edge, its region can't be surrounded
    // discover all edge regions and convert to "U" for "unflippable"

    // handle top/bottom rows
    const top = 0;
    const bottom = m - 1;
    for (let x = 0; x < n; x++) {
        if (board[top][x] === 'O') {
            exploreAndSetUnflippable(board, x, top, m, n);
        }
        
        if (board[bottom][x] === 'O') {
            exploreAndSetUnflippable(board, x, bottom, m, n);
        }
    }

    // handle first/last columns
    const left = 0;
    const right = n - 1;
    for (let y = 0; y < m; y++) {
        if (board[y][left] === 'O') {
            exploreAndSetUnflippable(board, left, y, m, n);
        }
        
        if (board[y][right] === 'O') {
            exploreAndSetUnflippable(board, right, y, m, n);
        }
    }

    // any remaining O's are flippable
    // convert U's back to O's and flip O's to X's
    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (board[y][x] === 'U') {
                board[y][x] = 'O';
            } else if (board[y][x] === 'O') {
                board[y][x] = 'X';
            }
        }
    }
};


function exploreAndSetUnflippable(board: string[][], x: number, y: number, m: number, n: number): void {
    // if out of bounds, stop exploring
    if (x < 0 || x >= n || y < 0 || y >= m) { return; }
    
    // if changed already or not part of the region, stop exploring
    if (board[y][x] !== 'O') { return; }

    // set unflippable then explore adjacent cells
    board[y][x] = 'U';
    exploreAndSetUnflippable(board, x+1, y, m, n); // right
    exploreAndSetUnflippable(board, x-1, y, m, n); // left
    exploreAndSetUnflippable(board, x, y+1, m, n); // down
    exploreAndSetUnflippable(board, x, y-1, m, n); // up
}