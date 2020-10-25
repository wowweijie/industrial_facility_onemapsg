var colors = []
for (var c = 0; c < 51; c++) {
    colors.push('#' + (function co(lor) {
        return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) &&
            (lor.length == 6) ? lor : co(lor);
    })(''));
}

console.log(colors);

colors = [
    '#cc3275', '#2d0e95', '#91d1c4', '#baf3df',
    '#a1222e', '#f36586', '#3b793e', '#853067',
    '#506070', '#55bd6e', '#5062c1', '#ac8642',
    '#b15553', '#0b866c', '#88dc0b', '#faf810',
    '#2734ae', '#e0695a', '#5fd567', '#8001a0',
    '#5a0a3c', '#40f599', '#3fc9ff', '#498927',
    '#0b04b4', '#3c4126', '#1739e7', '#082541',
    '#678fc8', '#5fe1a6', '#a95486', '#9aa34b',
    '#099dcf', '#5f1624', '#7b29e2', '#f7376d',
    '#3669fd', '#4b9b47', '#dfc3ca', '#f15e9e',
    '#1aff46', '#dd6399', '#4a4a7a', '#88fc46',
    '#c450da', '#db7d41', '#41cede', '#12f341',
    '#2bfeb8', '#8927d0', '#58f21e'
]