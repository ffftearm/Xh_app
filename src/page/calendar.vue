<template>
	<div class="calendar">
		<m-header title="我的课程"></m-header>
		<m-table :tableHeader ="tableHeader" :tableStr = "tableStr"></m-table>
		<calendar-month
			class="holiday-us-traditional holiday-us-official"
			:show-date="showDate"
			@clickDay="onClickDay"
			@clickEvent="onClickEvent"
			@setShowDate="setShowDate"
			enable-drag-drop=true
			@dropEventOnDate="onDrop"
			:dateCourse = "dateCourse"
			></calendar-month>
	</div>	
</template>

<script>
  	import mHeader from '../components/header';
  	import mTable from '../components/table/table'
  	import calendarMonth from '../components/calendar-month'
	import mixinCalendarMath from '../../static/js/mixin-calendarMath';

	export default {
		name: 'home',
		data(){
		  	return {
	//	  		table数据
	  			tableHeader: ['课节数','已上','待上','完成数'],
				tableStr:[
					{name:'20',id:8,dateTime:12,room:"40%"},
				],
//				日历
				showDate: this.thisMonth(1),
				dateCourse:{
					over:{0:1511884800000,1:1511971200000,2:1512144000000},
					weiShang:{0:1510329600000,1:1510243200000,2:1510156800000,3:1511280000000}
				}
		  	}
		},
	  	components: {
			mHeader,
			mTable,
			calendarMonth
		},
		methods:{
			thisMonth: (d) => { const t = new Date();
				return new Date(t.getFullYear(), t.getMonth(), d); },
			onClickDay(d) { this.message = `You clicked: ${d.toLocaleDateString()}`;},
			onClickEvent(e) { this.message = `You clicked: ${e.title}`; },
			setShowDate(d) {
				this.message = `Changing calendar view to ${d.toLocaleDateString()}`;
				this.showDate = d;
			},
			onDrop(event, date) {
				this.message = `You dropped ${event} on ${date.toLocaleDateString()}`;
				const e = this.events.filter(ev => ev.id === event)[0];
				const eLength = CalendarMath.methods.dayDiff(e.startDate, e.endDate);
				e.startDate = date;
				e.endDate = CalendarMath.methods.addDays(date, eLength);
			},
			clickTestAddEvent() {
				if (this.alreadyAdded) return;
				this.alreadyAdded = true;
				this.events.push({ id: 'e12', startDate: this.thisMonth(22), endDate: this.thisMonth(23), title: 'New Event' });
			},
		}
	}
</script>

<style lang="less">
	@import "../assets/less/var.less";
	.calendar{
		position:absolute;
		top:@headerTop;
		bottom:@headerBot;
		width:100%;
	}
</style>