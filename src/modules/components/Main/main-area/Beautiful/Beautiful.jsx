

const Beautiful = () => {
    let canva = <canvas ></canvas >


    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
    var ctx = canva.getContext('2d');


    function clear() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillRect(0, 0, canva.width, canva.height);
    }
    let figure = [[0, 1], [1, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 0], [0, 1]]

    function PrintFigure(x, y, size, style) {
        var sizeElem = Math.floor(size / N);
        for (var i = 0; i < N; i++)
            for (var k = 0; k < N; k++)
                if (figure[i][k] == 1) {
                    ctx.fillStyle = style;
                    ctx.fillRect(x + i * sizeElem, y + k * sizeElem, sizeElem, sizeElem);
                }
    }

    var MAX_X = canva.widt;
    var MAX_Y = canva.height;
    var N = 10
    function CreateTFractal() {
        clear();
        var size = N;
        var countByX = Math.floor(MAX_X / size);
        var  countByY = Math.floor(MAX_Y / size);

        while ((countByX > 0) && (countByY > 0)) { // пока рисунок помещается в область
            for (var i = 0; i <= countByX; i++) {
                for (var k = 0; k <= countByY; k++) {
                    PrintFigure(i * size, k * size, size, 'rgba(255, 255, 255, 0.3)');
                } // k
            } // i

            size *= 2; // новый размер для следующей итерации
            countByX = Math.floor(MAX_X / size);
                countByY = Math.floor(MAX_Y / size);
        }
    }
    CreateTFractal()

    return (
        <>{canva}</>
    )
}

export default Beautiful