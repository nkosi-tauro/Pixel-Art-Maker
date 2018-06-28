
(function(document){


    // the DOM Selectors.
    const elements = {
        colorPicker: document.getElementById('colorPicker'),
        gridCanvas: document.getElementById('pixel_canvas'),
        widthInput: document.getElementById('input_width'),
        heightInput: document.getElementById('input_height')
    };


    /**
     * ///////THIS BLOCK OF CODE DOES THIS/////
        Initialize by binding the event handlers.
     */


    const init = function() {

        //  the grid event listener.
        document.getElementById('sizePicker').addEventListener('submit', makeGrid, false);

        // Set the grids color listener.
        elements.gridCanvas.addEventListener('click', setGridColor);
    };


    /*EVENT HANDLERS */ 

    function makeGrid(event) {

        //prevents the form from submitting to nothing(no back-end)
        event.preventDefault();

        const gridSize = getGridSize();

        // Clears the HTML to reset the canvas.
        clearCanvas();

        // Building up the rows (1 .
        for (let row = 0; row < gridSize.numberOfRows; row++) {
            let tr = elements.gridCanvas.insertRow(row);

            // For this row, insert each table data.
            for (let col = 0; col < gridSize.numberOfColumns; col++) {
                tr.insertCell(col);
            }
        }
    }


    /**
     *  ///////THIS BLOCK OF CODE DOES THIS/////
     * Set the selected grid's background color.
    
     */


    function setGridColor(event) {
        let color = elements.colorPicker.value;

        event.target.setAttribute('style', 'background-color: ' + color);
    }


    /**
     * ///////THIS BLOCK OF CODE DOES THIS/////
     *  Clears the grid canvas' HTML.
     */



    function clearCanvas() {
        elements.gridCanvas.innerHTML = '';
    }

    /**
     * 
     * ///////THIS BLOCK OF CODE DOES THIS/////
     * Gets the selected grid size.
     *
     * Returns an object
     */


    function getGridSize() {
        let numberOfRows = elements.heightInput.value;
        let numberOfColumns = elements.widthInput.value;

        return {
            numberOfColumns: parseInt(numberOfColumns),
            numberOfRows: parseInt(numberOfRows)
        }
    }

    init();

}(document));
