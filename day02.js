// part 1
$0.innerText.trim().split("\n").map(l => l.split('').reduce((acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), {})).map(m => Object.keys(m).reduce((acc, k) => (acc[m[k]] = [k], acc), {})).reduce((acc, cnt) => (acc.twice += (cnt[2] || []).length, acc.thrice += (cnt[3] || []).length, acc), {twice: 0, thrice: 0})

// part 2