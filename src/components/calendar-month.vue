<!--

	Note on Internationalization:

	Intl is not supported for Safari 9.1, iOS 9.3, and Opera Mini. For these browsers, the month
	names and weekday names will be blank and the calendar will have a `nointl` class. Use CSS
	content to provide the appropriate month and weekday names for the languages you support.

	E.g.:
		.calendar.nointl.locale-en.m01 .monthName::after { content: 'January' }


-->
<template>
	<div class="calendar-month" :class="[
			'locale-' + languageCode(displayLocale),
			'locale-' + displayLocale,
			'y' + displayDate.getFullYear(),
			'm' + paddedMonth(displayDate),
			{
				past:		isPastMonth(displayDate),
				future:		isFutureMonth(displayDate),
				noIntl:		!supportsIntl,
			}]">
		<div class="header">
			<!--<div class="previousYear"><button @click="onClickPreviousYear" :disabled="!allowLastYearClick"></button></div>-->
			<div class="previousMonth"><button @click="onClickPreviousMonth" :disabled="!allowLastMonthClick"></button></div>
			<div class="thisMonth">
				<div class="monthLabel">
					<span class="monthName">{{ monthNames[displayDate.getMonth()] }}</span>
					<span class="yearNumber">{{ displayDate.getFullYear() }}</span>
				</div>
				<transition name="slide-fade">
					<div v-if="!isSameMonth(today, displayDate)" transition="fade" class="currentMonth">
						<button @click="onClickCurrentMonth" v-text="isToday"></button>									
					</div>
				</transition>
			</div>
			<div class="nextMonth"><button @click="onClickNextMonth" :disabled="!allowNextMonthClick"></button></div>
			<!--<div class="nextYear"><button @click="onClickNextYear" :disabled="!allowNextYearClick"></button></div>-->
		</div>
		<div class="dayList">
			<div v-for="(w, index) in weekdayNames" class="day" :key="index" :class="'dow'+index">{{ w.substring(1) }}</div>
		</div>
		<div class="month">
			<div v-for="(weekStart, weekIndex) in weeksOfMonth(displayDate)"
				class="week"
				:key="weekIndex"
				:class="['week' + (weekIndex+1), 'ws' + isoYearMonthDay(weekStart)]">
				<div v-for="(day, dayIndex) in daysOfWeek(weekStart)" class="day" 
					:key="dayIndex"
					:class="[
						{courseOn:over(day),courseOff:off(day),hide:showMonth(day)},
						'dow' + day.getDay(),
						'd' + isoYearMonthDay(day),
						'd' + isoMonthDay(day),
						'd' + paddedDay(day),
						'instance' + instanceOfMonth(day),						
						{
							outsideOfMonth	: day.getMonth() != displayDate.getMonth(),
							today			: isSameDate(day, today),
							past			: isInPast(day),
							future			: isInFuture(day),
							last			: isLastDayOfMonth(day),
							lastInstance	: isLastInstanceOfMonth(day),
						}
					]"
					@click="onClickDay(day)"
					@drop.prevent="onDrop(day, $event)"
					@dragover.prevent="onDragOver(day, $event)"
					@dragenter.prevent="onDragEnter(day, $event)"
					@dragleave.prevent="onDragLeave(day, $event)">
					<div class="content">						 
						<div :class="{today:isSameDate(day,today)}"  class="date">
							<span>{{ day.getDate() }}</span>
							<span v-text = "textCon(day,today)"></span>
						</div>
						
					</div>
				</div>
				<div v-for="e in getWeekEvents(weekStart)"
					class="event"
					:key="e.id"
					:draggable="enableDragDrop"
					:class="e.classes"
					:title="e.details.title"
					@dragstart="onDragStart(e, $event)"
					@click.stop="onClickEvent(e)"
					v-html="e.details.title">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import mixinCalendarMath from '../../static/js/mixin-calendarMath';

export default {

	name: 'calendar-month',
	
	data() {
		return {
			isToday:"今"
		}
		
	},
	
	mixins: [mixinCalendarMath],

	props: {
		dateCourse:			{ type:Object },
		showDate:			{ type: Date },
		locale:				{ type: String },
		monthNameFormat:	{ type: String, default() { return 'long'; } },
		weekdayNameFormat:	{ type: String, default() { return 'short'; } },

		disablePast:		{ default() { return false; } },
		disableFuture:		{ default() { return false; } },
		enableDragDrop:		{ default() { return false; } },

		events: {
			type: Array,
			default() { return []; },
		},
		

	},
	computed: {

		/* Props cannot default to computed/method returns, so create defaulted versions of the properties that need specific defaults (Vue Issue #6013) */
		displayLocale()			{ return this.locale || this.getDefaultBrowserLocale(); },
		displayDate()			{ return this.showDate || this.today; },

		/* Cache the names based on current locale and format settings */
		monthNames()			{ return this.getFormattedMonthNames(this.displayLocale, this.monthNameFormat); },
		weekdayNames()			{ return this.getFormattedWeekdayNames(this.displayLocale, this.weekdayNameFormat); },

		allowLastYearClick()	{ return !this.disablePast || (this.aYearBefore(this.displayDate) >= this.today); },
		allowNextYearClick()	{ return !this.disableFuture || (this.aYearAfter(this.displayDate) <= this.today); },
		allowLastMonthClick()	{ return !this.disablePast || (this.beginningOfMonth(this.displayDate) > this.today); },
		allowNextMonthClick()	{ return !this.disableFuture || (this.displayDate < this.beginningOfMonth(this.today)); },

	},
	methods: {
//		隐藏其他月份的日期
		showMonth(day){
			var month = this.displayDate.getMonth()+1;
			if(!(this.isoMonth(day)==month)) return true;
		},
		textCon(day,today){
			if(this.over(day))return "(已上)";
			else if(this.off(day))return "(未上)";
			else if(this.isSameDate(day,today))return "(今天)";
			
		},
//		已上课程
		over(day){
			var day = day.getTime();
			var data = this.dateCourse.over;
			for(var i in data){	
				if(day===data[i]){
					return true;
				}
			}
			return false;
		},
//		未上课程
		off(day){
			var day = day.getTime();
			var data = this.dateCourse.weiShang;
			for(var i in data){
				if(day===data[i]){
					return true;
				}
			}
			return false;
		},

		// ******************************
		// UI Events
		// ******************************
		
		onClickDay(day) {
			if (this.disablePast && this.isInPast(day)) return;
			this.$emit('clickDay', day);
		},

		onClickEvent(e, day) {
			this.$emit('clickEvent', e.details, day);
		},

//		onClickPreviousYear() { this.$emit('setShowDate', this.aYearBefore(this.displayDate)); },
		onClickPreviousMonth() { this.$emit('setShowDate', this.monthBefore(this.displayDate)); },
		onClickNextMonth() { this.$emit('setShowDate', this.monthAfter(this.displayDate)); },
//		onClickNextYear() { this.$emit('setShowDate', this.aYearAfter(this.displayDate)); },
		onClickCurrentMonth() { this.$emit('setShowDate', this.beginningOfMonth(this.today)); },

		onDragStart(calendarEvent, windowEvent) {
			if (!this.enableDragDrop) return false;
			// Reason for using "Text":
			// eslint-disable-next-line
			// http://stackoverflow.com/questions/26213011/html5-dragdrop-issue-in-internet-explorer-datatransfer-property-access-not-pos
			windowEvent.dataTransfer.setData('Text', calendarEvent.details.id);
			this.$emit('dragEventStart', calendarEvent.details.id, calendarEvent);
			return true;
		},

		handleEvent(windowEvent, bubbleEventName, bubbleParam) {
			if (!this.enableDragDrop) return false;
			const calendarEventId = windowEvent.dataTransfer.getData('Text');
			this.$emit(bubbleEventName, calendarEventId, bubbleParam);
			return true;
		},

		onDragOver(day, windowEvent) {
			this.handleEvent(windowEvent, 'dragEventDragOverDate', day);
		},

		onDragEnter(day, windowEvent) {
			if (!this.handleEvent(windowEvent, 'dragEventEnterDate', day)) return;
			windowEvent.target.classList.add('draghover');
		},

		onDragLeave(day, windowEvent) {
			if (!this.handleEvent(windowEvent, 'dragEventLeaveDate', day)) return;
			windowEvent.target.classList.remove('draghover');
		},

		onDrop(day, windowEvent) {
			if (!this.handleEvent(windowEvent, 'dropEventOnDate', day)) return;
			windowEvent.target.classList.remove('draghover');
		},
		// ******************************
		// Calendar Events
		// ******************************

		findAndSortEventsInWeek(weekStart) {
			// Return a list of events that CONTAIN the week starting on a day.
			// Sorted so the events that start earlier are always shown first.
			const events = this.events.filter(event =>
				event.startDate < this.addDays(weekStart, 7)
				&& (!event.endDate || event.endDate >= weekStart)
				, this).sort((a, b) => {
				if (a.startDate < b.startDate) return -1;
				if (b.startDate < a.startDate) return 1;
				if (a.endDate > b.endDate) return -1;
				if (b.endDate > a.endDate) return 1;
				return a.id < b.id ? -1 : 1;
			});
			return events;
		},

		getWeekEvents(weekStart) {
			// Return a list of events that CONTAIN the week starting on a day.
			// Sorted so the events that start earlier are always shown first.
			const events = this.findAndSortEventsInWeek(weekStart);
			const results = [];
			const slots = [[], [], [], [], [], [], [], [], [], []];
			for (let i = 0; i < events.length; i++) {
				const e = {
					startDate:	events[i].startDate,
					endDate:	events[i].endDate	|| events[i].startDate,
					title:		events[i].title		|| 'Untitled',
					id:			events[i].id		|| ('e' + Math.random().toString(36).substr(2, 10)),
					url:		events[i].url,
					classes:	events[i].classes,
				};
				const ep = { details: e, slot: 0 };
				const continued = e.startDate < weekStart;
				const startOffset = continued ? 0 : this.dayDiff(weekStart, e.startDate);
				const toBeContinued = this.dayDiff(weekStart, e.endDate) > 6;
				const span = Math.min(
					7 - startOffset,
					this.dayDiff(this.addDays(weekStart, startOffset), e.endDate) + 1);
				for (let d = 0; d < 7; d++) {
					if (d === startOffset) {
						for (let s = 0; s < 10; s++) {
							if (!slots[d][s]) {
								ep.slot = s;
								slots[d][s] = true;
								break;
							}
						}
					} else if (d < startOffset + span) {
						slots[d][ep.slot] = true;
					}
				}
				ep.classes = [
					`offset${startOffset}`,
					`span${span}`,
					`slot${ep.slot + 1}`,
					{
						continued,
						toBeContinued,
						hasUrl: ep.details.url,
					},
				];
				if (e.classes) ep.classes = ep.classes.concat(e.classes);
				results.push(ep);
			}
			return results;
		},

	},

};

</script>
<!--

The CSS below represents only the CSS required for propert rendering (positioning, etc.
All CSS related to colors, border radius, etc. should be part of a theme.

-->
<style lang = "less">

	/* transition */
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
	    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-active {
	 	 opacity: 0;
	}
	/* Make the calendar flex vertically */
	.calendar-month {
		font-family: "微软雅黑";
		height: auto;
		display: flex;
		flex-direction: column;
		/* Set flex-grow and flex-shrink to 0 for header and dayList so they remain static */
		.header, .dayList {
			flex: 0 0 auto;
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: flex-start;
			align-items: stretch;
			align-content: flex-start;
		}
		/* The calendar grid should take up the remaining vertical space */
		.month {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			font-size:14px;
			font-weight:bold;
			.week {
				flex: 1 1 0;
				display: flex;
				flex-direction: row;
				min-height: 55px;
				position: relative;
				width: 100%;
				.day {
					width:14.28570%;
					margin:1px;
					border-radius: 3px;
					overflow: hidden;
					.content {
						width:100%;
						height:100%;
						box-sizing: border-box;
						display:flex;
						flex-flow: wrap;
						justify-content: center;
						align-items: center;	
						.date {
							display:inline-flex;
							width:100%;
							height:100%;
							flex-wrap: wrap;
							justify-content: center;
							align-items:center;
							&.today{								
								height:100%;
								background:#94c7fe;
								color:#fff;		
							}
							span{
									text-align: center;
									display:block;
									width:100%;
								}
						}
					}
					&.courseOn{
						background:#e8a2f8;
						color:#fff;
					}
					&.courseOff{
						background:#ff7f66;
						color:#fff;
					}
					&.hide{
						visibility:hidden;
					}
				}
				
			}
		}
		/* Use flex basis of 0 on week row so all weeks will be same height regardless of content */
		
		.dayList{
			height:30px;
			.day {
				text-align: center;
				flex: 1 1 0;
			}
		}
		.header {
			justify-content: space-between;
			padding-top:15px;
			position:relative;
			height:50px;
			.thisMonth {
				display: flex;
				flex-direction: row;
				.currentMonth{
					button{
						width:30px;
						height:30px;
						border-radius: 50%;
						border:0;
						background:rgba(255,124,130,.7);					
						position:absolute;
						right:10px;
						top:10px;
						outline: none;
						color:#fff;
					}					
				}
			}
			.previousMonth, .nextMonth{
				button{
					background:#fff;
					border:0;
					width: 0;
				    height: 0;
				    margin:0;
				    padding:0;
				}
			}
			.previousMonth{
				margin-left:100px;
				button{					
				    border-top: 9px solid transparent;
				    border-right: 11px solid #666;
				    border-bottom: 9px solid transparent;
				}
				
			}
			.nextMonth{
				margin-right:100px;
				button{
				    border-top: 9px solid transparent;
				    border-left: 11px solid #666;
				    border-bottom: 9px solid transparent;
				}	
			}
			.thisMonth{
				padding-top:2px;
				color:#dadada;
				font-size:16px;
			}
		}

		.event {
			position: absolute;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		/* Internal Metrics */
		div, button {
			box-sizing:border-box;
			outline: none;
		}
		/* Use z-index to ensure events too tall for the view are clipped vertically */

		.week1 { 
			z-index: 2;
			.event {z-index: 3; }
			}
		.week2 { 
			z-index: 4; 
			.event { z-index: 5; }
		}
		.week3 {
			z-index: 6; 
			.event { z-index: 7; }
		}
		.week4 {
			z-index: 8;
			.event { z-index: 9; }
		}
		.week5 { 
			z-index: 10; 
			.event { z-index: 11; }
		}
		.week6 { 
			z-index: 12;
			.event { z-index: 13; } 
		}

	}

	/* Positioning for event slots */

	.calendar-month .event.slot1 { top: 1.4em; }
	.calendar-month .event.slot2 { top: calc(2 * 1.4em + 0.1em); }
	.calendar-month .event.slot3 { top: calc(3 * 1.4em + 0.1em); }
	.calendar-month .event.slot4 { top: calc(4 * 1.4em + 0.1em); }
	.calendar-month .event.slot5 { top: calc(5 * 1.4em + 0.1em); }
	.calendar-month .event.slot6 { top: calc(6 * 1.4em + 0.1em); }
	.calendar-month .event.slot7 { top: calc(7 * 1.4em + 0.1em); }
	.calendar-month .event.slot8 { top: calc(8 * 1.4em + 0.1em); }
	.calendar-month .event.slot9 { top: calc(9 * 1.4em + 0.1em); }
	.calendar-month .event.slot10 { top: calc(10 * 1.4em + 0.1em); }
	.calendar-month .event.slot0 { display: none; } /* More than 10 slots not currently supported */

	.calendar-month .event.offset0 { left: calc(.05em); }
	.calendar-month .event.offset1 { left: calc((100% / 7) + .05em); }
	.calendar-month .event.offset2 { left: calc((200% / 7) + .05em); }
	.calendar-month .event.offset3 { left: calc((300% / 7) + .05em); }
	.calendar-month .event.offset4 { left: calc((400% / 7) + .05em); }
	.calendar-month .event.offset5 { left: calc((500% / 7) + .05em); }
	.calendar-month .event.offset6 { left: calc((600% / 7) + .05em); }

	/* Metrics for events spanning dates */

	.calendar-month .event.span1 { width: calc((100% / 7) - .05em); }
	.calendar-month .event.span2 { width: calc((200% / 7) - .05em); }
	.calendar-month .event.span3 { width: calc((300% / 7) - .05em); text-align: center;}
	.calendar-month .event.span4 { width: calc((400% / 7) - .05em); text-align: center;}
	.calendar-month .event.span5 { width: calc((500% / 7) - .05em); text-align: center;}
	.calendar-month .event.span6 { width: calc((600% / 7) - .05em); text-align: center;}
	.calendar-month .event.span7 { width: calc((700% / 7) - .05em); text-align: center;}

	/* Misc */





</style>
