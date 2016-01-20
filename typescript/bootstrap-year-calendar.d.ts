// Type definitions for bootstrap-year-calendar v1.0.1
// Project: https://github.com/Paul-DS/bootstrap-year-calendar
// Definitions by: Paul David-Sivelle
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

/**
 * Represent a context menu item for the calendar.
 */
interface CalendarContextMenuItem<T>
{
    /**
     * The text of the menu item.
     */
    text: string;

    /**
     * A function to be called when the item is clicked.
     */
    click?: (event: T) => void;

    /**
     * The list of sub menu items.
     */
    submenu?: CalendarContextMenuItem<T>[];
}

/**
 * Represent an element to display in the calendar.
 */
interface CalendarDataSourceElement
{
    /**
     * The date of the beginning of the element range.
     */
    startDate: Date;

    /**
     * The date of the end of the element range.
     */
    endDate: Date;

    /**
     * The name of the element. Used for context menu or specific events.
     */
    name?: string;

    /**
     * The color of the element. This property will be computed automatically if not defined.
     */
    color?: string;
}

/**
 * Options used for calendar customization.
 */
interface CalendarOptions<T extends CalendarDataSourceElement> {

    /**
     * Specifies whether the user can select a range which overlapping an other element present in the datasource.
     */
    allowOverlap?: boolean;

    /**
     * Specifies the items of the default context menu.
     */
    contextMenuItems?: CalendarContextMenuItem<T>[];

    /**
     * The elements that must be displayed on the calendar.
     */
    dataSource?: T[];

    /**
     * The days that must be displayed as disabled.
     */
    disableDays?: Date[];

    /**
     * Specifies whether the weeks number are displayed.
     */
    displayWeekNumber?: boolean;

    /**
     * Specifies whether the default context menu must be displayed when right clicking on a day.
     */
    enableContextMenu?: boolean;

    /**
     * Specifies whether the range selection is enabled.
     */
    enableRangeSelection?: boolean;

    /**
     * The language/culture used for calendar rendering.
     */
    language?: string;

    /**
     * The date until which days are enabled.
     */
    maxDate?: Date;

    /**
     * The date from which days are enabled.
     */
    minDate?: Date;

    /**
     * The year on which the calendar should be opened.
     */
    startYear?: number;

    /**
     * Specifies the style used for displaying datasource.
     */
    style?: string;
	
    /**
     * Function fired when a day is clicked.
     */
    clickDay?: (e: CalendarClickEventObject<T>) => void;

    /**
     * Function fired when a day is right clicked.
     */
    dayContextMenu?: (e: CalendarDayElementEventObject<T>) => void;

    /**
     * Function fired when the mouse enter on a day.
     */
    mouseOnDay?: (e: CalendarDayElementEventObject<T>) => void;

    /**
     * Function fired when the mouse leaves a day.
     */
    mouseOutDay?: (e: CalendarDayElementEventObject<T>) => void;

    /**
     * Function fired when rendering a day.
     */
    renderDay?: (e: CalendarDayEventObject) => void;

    /**
     * Function fired when the calendar rendering is ended.
     */
    renderEnd?: (e: CalendarRenderEndEventObject) => void;

    /**
     * Function fired when a date range is selected.
     */
	selectRange?: (e: CalendarRangeEventObject) => void;
}

interface CalendarDayEventObject {
    /**
     * The element that contain the fired day.
     */
    element: JQuery;

    /**
     * The fired date.
     */
    date: Date;
}

interface CalendarDayElementEventObject<T extends CalendarDataSourceElement> extends CalendarDayEventObject {
    /**
     * The data source elements present on the fired day.
     */
    events: T[];
}

interface CalendarClickEventObject<T extends CalendarDataSourceElement> extends CalendarDayElementEventObject<T> {
    /**
     * The clicked button.
     */
    which: number;
}

interface CalendarRenderEndEventObject {
    /**
     * The rendered year.
     */
    currentYear: number;
}

interface CalendarRangeEventObject {
    /**
     * The beginning of the selected range.
     */
    startDate: Date;

    /**
     * The end of the selected range.
     */
	endDate: Date;
}

/**
 * Calendar instance.
 */
interface Calendar<T extends CalendarDataSourceElement> {
    /**
     * Add a new element to the data source. This method causes a refresh of the calendar.
     * 
     * @param element The element to add.
     */
    addEvent(element: T): void;

    /**
     * Gets a value indicating whether the user can select a range which overlapping an other element present in the datasource.
     */
    getAllowOverlap(): boolean;

    /**
     * Gets the context menu items.
     */
    getContextMenuItems(): CalendarContextMenuItem<T>[];

    /**
     * Gets the current data source.
     */
    getDataSource(): T[];

    /**
     * Gets the disabled days.
     */
    getDisableDays(): Date[];

    /**
     * Gets a value indicating whether the weeks number are displayed.
     */
    getDisplayWeekNumber(): boolean;

    /**
     * Gets a value indicating whether the default context menu must be displayed when right clicking on a day.
     */
    getEnableContextMenu(): boolean;

    /**
     * Gets a value indicating whether the user can make range selection.
     */
    getEnableRangeSelection(): boolean;

    /**
     * Gets the data source elements for a specified day.
     *
     * @param date The specified day.
     */
    getEvents(Date: Date): T[];

    /**
     * Gets the language used for calendar rendering.
     */
    getLanguage(): string;

    /**
     * Gets the maximum date of the calendar.
     */
    getMaxDate(): Date;

    /**
     * Gets the minimum date of the calendar.
     */
    getMinDate(): Date;

    /**
     * Gets the current style used for displaying data source.
     */
    getStyle(): string;

    /**
     * Gets the week number for a specified date.
     *
     * @param date The specified date.
     */
    getWeekNumber(Date: Date): number;

    /**
     * Gets the year displayed on the calendar.
     */
	getYear(): number;
	
    /**
     * Sets a value indicating whether the user can select a range which overlapping an other element present in the datasource.
     *
     * @param allowOverlap Indicates whether the user can select a range which overlapping an other element present in the datasource.
     */
    setAllowOverlap(allowOverlap: boolean): void;

    /**
     * Sets new context menu items. This method causes a refresh of the calendar.
     *
     * @param contextMenuItems The new context menu items.
     */
    setContextMenuItems(contextMenuItems: CalendarContextMenuItem<T>[]): void;

    /**
     * Sets a new data source. This method causes a refresh of the calendar.
     *
     * @param dataSource The new data source.
     */
    setDataSource(dataSource: T[]): void;

    /**
     * Sets the disabled days. This method causes a refresh of the calendar.
     *
     * @param disableDays The disabled days to set.
     */
    setDisableDays(disableDays: Date[]): void;

    /**
     * Sets a value indicating whether the weeks number are displayed. This method causes a refresh of the calendar.
     *
     * @param  displayWeekNumber Indicates whether the weeks number are displayed.
     */
    setDisplayWeekNumber(displayWeekNumber: boolean): void;

    /**
     * Sets a value indicating whether the default context menu must be displayed when right clicking on a day. 
     * This method causes a refresh of the calendar.
     * 
     * @param enableContextMenu Indicates whether the default context menu must be displayed when right clicking on a day.
     */
    setEnableContextMenu(enableContextMenu: boolean): void;

    /**
     * Sets a value indicating whether the user can make range selection. This method causes a refresh of the calendar.
     *
     * @param enableRangeSelection Indicates whether the user can make range selection.
     */
    setEnableRangeSelection(enableRangeSelection: boolean): void;

    /**
     * Sets the language used for calendar rendering. This method causes a refresh of the calendar.
     *
     * @param language The language to use for calendar redering.
     */
    setLanguage(language: string): void;

    /**
     * Sets the maximum date of the calendar. This method causes a refresh of the calendar.
     *
     * @param maxDate The maximum date to set.
     */
    setMaxDate(maxDate: Date): void;

    /**
     * Sets the minimum date of the calendar. This method causes a refresh of the calendar.
     *
     * @param minDate The minimum date to set.
     */
    setMinDate(minDate: Date): void;

    /**
     * Sets the style to use for displaying data source. This method causes a refresh of the calendar.
     *
     * @param style The style to use for displaying data source.
     */
    setStyle(style: string): void;

    /**
     * Sets the year displayed on the calendar.
     *
     * @param year The year to displayed on the calendar.
     */
	setYear(year: number): void;
}

/**
 * Basic calendar instance.
 */
interface BaseCalendar extends Calendar<CalendarDataSourceElement> {

}

interface JQuery {

    /**
     * Create a new calendar.
     */
    calendar(): BaseCalendar;

    /**
     * Create a new calendar.
     *
     * @param options The customization options.
     */
    calendar(options: CalendarOptions<CalendarDataSourceElement>): BaseCalendar;

    /**
     * Create a new calendar.
     *
     * @param options The customization options.
     */
    calendar<T extends CalendarDataSourceElement>(options: CalendarOptions<T>): Calendar<T>;
	

    /**
     * Function fired when a day is clicked (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    clickDay(handler: (e: CalendarClickEventObject<CalendarDataSourceElement>) => void): JQuery;

    /**
     * Function fired when a day is clicked (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    clickDay<T extends CalendarDataSourceElement>(handler: (e: CalendarClickEventObject<T>) => void): JQuery;

    /**
     * Function fired when a day is right clicked (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    dayContextMenu(handler: (e: CalendarDayElementEventObject<CalendarDataSourceElement>) => void): JQuery;

    /**
     * Function fired when a day is right clicked (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    dayContextMenu<T extends CalendarDataSourceElement>(handler: (e: CalendarDayElementEventObject<T>) => void): JQuery;

    /**
     * Function fired when the mouse enter on a day (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    mouseOnDay(handler: (e: CalendarDayElementEventObject<CalendarDataSourceElement>) => void): JQuery;

    /**
     * Function fired when the mouse enter on a day (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    mouseOnDay<T extends CalendarDataSourceElement>(handler: (e: CalendarDayElementEventObject<T>) => void): JQuery;

    /**
     * Function fired when the mouse leaves a day (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    mouseOutDay(handler: (e: CalendarDayElementEventObject<CalendarDataSourceElement>) => void): JQuery;

    /**
     * Function fired when the mouse leaves a day (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    mouseOutDay<T extends CalendarDataSourceElement>(handler: (e: CalendarDayElementEventObject<T>) => void): JQuery;

    /**
     * Function fired when rendering a day (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    renderDay(handler: (e: CalendarDayEventObject) => void): JQuery;

    /**
     * Function fired when the calendar rendering is ended (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
    renderEnd(handler: (e: CalendarRenderEndEventObject) => void): JQuery;

    /**
     * Function fired when a date range is selected (for bootstrap-year-calendar only).
     *
     * @param handler A function to execute each time the event is triggered.
     */
	selectRange(handler: (e: CalendarRangeEventObject) => void): JQuery;
}