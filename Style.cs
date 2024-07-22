body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.game-container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
}

.cell {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    background-color: #fff;
    border: 2px solid #000;
    cursor: pointer;
}

.cell.x {
    color: #f00;
}

.cell.o {
    color: #00f;
}

#restartButton {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
}
