export function Spy(obj, method) {
    let spy = {
        args: []
    };
 
    let original = obj[method];
    try {
        obj[method] = function() {
            let args = [].slice.apply(arguments);
            spy.count++;
            spy.args.push(args);
            return original.call(obj, args);
        };
        return Object.freeze(spy);
    } catch(e) {
        console.warn(e);
    }
 
}