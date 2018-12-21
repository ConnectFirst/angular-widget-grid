(function () {
  var DEFAULT_COLUMNS = 4,
      DEFAULT_ROWS = 4;

  /**
   * @ngdoc object
   * @name widgetGrid.widgetGrid_Grid
   *
   * @description
   * Describes a grid.
   *
   * @requires widgetGrid.CellSize
   */
  angular.module('widgetGrid').factory('widgetGrid_Grid', function (CellSize) {
    /**
     * @ngdoc method
     * @name widgetGrid_Grid
     * @methodOf widgetGrid.widgetGrid_Grid
     *
     * @description
     * Constructor.
     *
     * @param {number} rows Row count
     * @param {number} columns Column count
     */
    var widgetGrid_Grid = function widgetGrid_Grid(rows, columns) {
      this.widgets = [];
      this.rows = parseInt(rows) || DEFAULT_ROWS;
      this.columns = parseInt(columns) || DEFAULT_COLUMNS;
      this.cellSize = CellSize.create(this.rows, this.columns);
    };


    /**
     * @ngdoc method
     * @name add
     * @methodOf widgetGrid.widgetGrid_Grid
     *
     * @description
     * Adds a widget to the grid.
     *
     * @param {Widget} widget Widget
     */
    widgetGrid_Grid.prototype.add = function (widget) {
      this.widgets.push(widget);
    };


    /**
     * @ngdoc method
     * @name remove
     * @methodOf widgetGrid.widgetGrid_Grid
     *
     * @description
     * Removes a widget from the grid, if contained.
     *
     * @param {Widget} widget Widget
     */
    widgetGrid_Grid.prototype.remove = function (widget) {
      var widgetIndex = this.widgets.indexOf(widget);
      if (widgetIndex >= 0) {
        this.widgets.splice(widgetIndex, 1);
      }
    };


    /**
     * @ngdoc method
     * @name resize
     * @methodOf widgetGrid.widgetGrid_Grid
     *
     * @description
     * Changes the size of the grid.
     *
     * @param {number} rows Row count
     * @param {number} columns Column count
     */
    widgetGrid_Grid.prototype.resize = function (rows, columns) {
      columns = parseInt(columns) || 0;
      rows = parseInt(rows) || 0;

      if (columns > 0 && rows > 0 && columns !== this.columns || rows !== this.rows) {
        this.columns = columns;
        this.rows = rows;
        this.cellSize = CellSize.create(this.rows, this.columns);
      }
    };

    return widgetGrid_Grid;
  });
})();
