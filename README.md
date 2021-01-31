# JS time API


###Import:
	

    <script src="time.js"></script>
###Init:
	 
	 var t = new time(1) // 1 = gmt
###Current time:
	
	t.hour() // get hour of the day
	t.minute() // get minute of the hour
	t.second() // get second of the minute

### Stopwatch:
	
	t.startClock() // starts the clock
	t.stopClock() // stops the clock
	var unit = ["ms", "seconds", "minutes"]
	t.clockTime(unit[0]) // returns how long the clock ran in desired units

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```
