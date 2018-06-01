import {parse} from '/lib/cron';
import {toStr} from '/lib/enonic/util';


export function get() {
    log.info(toStr({cron: parse('1 2 3 4 5')}));
    return {
        body: '<html><head></head><body><h1>Cron admin!</h1></body></html>',
        contentType: 'text/html; charset=utf-8'
    };
}
