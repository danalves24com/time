/*
 * Author: Daniel Rosel
 * Description: an API for getting time intel
 *
 */

class time {	
	constructor(gmt) {
		this.gmt = gmt
	}
	
	/*
	 * Returns unix epoch time
	 */
	epoch(){
		return Date.now()
	}
	/*
	 * Returns the hour since the beginging of the day
	 */
	hour(){
		return parseInt((((Date.now() % 86400000) / 3600000 ) + this.gmt))
	
	}
	/*
	 * Returns the minute of the hour
	 */
	minute() {		
		return parseInt(((((Date.now()%86400000) / 3600000 ) + this.gmt) - parseInt((((Date.now()%86400000) / 3600000 ) + this.gmt)) ) * 60)
	}
	/*
	 * Returns the second of the minute
	 */
	second() {
		return parseInt(((((((Date.now()%86400000) / 3600000 ) + this.gmt) - parseInt((((Date.now()%86400000) / 3600000 ) + this.gmt)) ) * 60) - parseInt(((((Date.now()%86400000) / 3600000 ) + this.gmt) - parseInt((((Date.now()%86400000) / 3600000 ) + this.gmt)) ) * 60)) * 60)
	}
	

	/*
	 * Starts a stopwatch
	 */
	startClock() {
		this.start = Date.now();
	}
	
	/*
	 * Ends the started stopwatch
	 */
	stopClock() {
		this.stop = Date.now()
	}

	/*
	 * Returns how long the stopwatch ran in [ms, seconds, minutes]
	 */
	clockTime(unit) {
		switch(unit) {
			case "ms":
				return this.stop - this.start;
				break;
			case "seconds":
				return (this.stop - this.start) / 1000;
				break;
			case "minutes":
				return (this.clockTime("seconds") / 60)
				break;
			default:
				return this.stop - this.start;
				break;
		}
	}

}

