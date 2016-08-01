export function eventHelperOnEvent (eventName, element, cb) {
    return PRV.Event.on(eventName, element, cb);
}

export function eventHelperEmitEvent (eventName, element, eventData, bubble) { 
    return PRV.Event.emit(eventName, element, eventData, bubble);
}