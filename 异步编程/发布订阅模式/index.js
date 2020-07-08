// 事件中心
const pubSub = {
    // 订阅的所有事件
    eventList:{}, 
    // 订阅
    subscribe(key,fuc){
        if(!this.eventList[key]){
            this.eventList[key] = [];
            this.eventList[key].push(fuc);
        }else{
            this.eventList[key].push(fuc);
        }
    },
    // 发布
    publish(key,...args){
        let events = this.eventList[key];
        if(!events) return;
        events.forEach(ev => {
            ev(...args);
        });
    },
    //取消订阅
    unSubscribe(key,fuc){
        // 如果不传入fuc  就把eventList中key下所有的事件清空
        let events = this.eventList[key];
        if(!events) return;
        if(!fuc){
            console.log(`${key}下的事件全部取消啦`)
            this.eventList[key] = [];
        }
        events.forEach((ev,i) => {
            if(ev === fuc){
                events.splice(i,1);
            }
        })
    }
}

pubSub.subscribe('goWork',() => {
    console.log(`去上班了`)
});

pubSub.subscribe('goWork',() => {
    console.log(`乘地铁去上班`)
});

pubSub.subscribe('outWork',() => {
    console.log(`下班啦`)
});

pubSub.subscribe('outWork',() => {
    console.log(`乘公交车下班`)
});

pubSub.publish('goWork');
pubSub.publish('outWork');


pubSub.unSubscribe('outWork');

pubSub.publish('outWork');